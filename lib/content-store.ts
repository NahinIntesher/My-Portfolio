import 'server-only';
import { neon } from '@neondatabase/serverless';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { defaultContent, type PortfolioContent } from './content-defaults';
import { validateContent } from './content-validation';

type Snapshot = { revision: number; content: PortfolioContent };
const localPath = () => path.join(process.env.PORTFOLIO_LOCAL_DATA_DIR || path.join(process.cwd(), '.portfolio'), 'content.json');
export function database() { if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured.'); return neon(process.env.DATABASE_URL); }
export const storageReady = () => !process.env.VERCEL || !!process.env.DATABASE_URL;
let pending: Promise<unknown> = Promise.resolve();
export async function readSnapshot(): Promise<Snapshot> {
  if (process.env.DATABASE_URL) {
    const rows = await database()`SELECT revision, content FROM portfolio_content WHERE id = 1`;
    if (!rows.length) return { revision: 0, content: defaultContent };
    return { revision: Number(rows[0].revision), content: validateContent(rows[0].content) };
  }
  if (process.env.VERCEL) return { revision: 0, content: defaultContent };
  try { const saved = JSON.parse(await fs.readFile(localPath(), 'utf8')); return { revision: saved.revision, content: validateContent(saved.content) }; } catch (e) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') return { revision: 0, content: defaultContent };
    throw e;
  }
}
export async function saveSnapshot(content: PortfolioContent, revision: number) {
  if (!storageReady()) throw new Error('Connect a database before saving on Vercel.');
  if (process.env.DATABASE_URL) {
    const sql = database();
    await sql`INSERT INTO portfolio_content (id, revision, content) VALUES (1, 0, ${JSON.stringify(defaultContent)}::jsonb) ON CONFLICT (id) DO NOTHING`;
    const rows = await sql`UPDATE portfolio_content SET content=${JSON.stringify(content)}::jsonb, revision=revision+1, updated_at=now() WHERE id=1 AND revision=${revision} RETURNING revision`;
    if (!rows.length) throw new Error('CONFLICT');
    return Number(rows[0].revision);
  }
  const operation = pending.then(async () => {
    const current = await readSnapshot();
    if (current.revision !== revision) throw new Error('CONFLICT');
    await fs.mkdir(path.dirname(localPath()), { recursive: true });
    const next = { revision: revision + 1, content };
    await fs.writeFile(localPath() + '.tmp', JSON.stringify(next));
    await fs.rename(localPath() + '.tmp', localPath());
    return next.revision;
  });
  pending = operation.catch(() => {});
  return operation;
}
export async function getContent() {
  try { return (await readSnapshot()).content; }
  catch { console.error('Portfolio content storage unavailable; serving bundled content.'); return defaultContent; }
}
