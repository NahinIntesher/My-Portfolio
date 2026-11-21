import { NextRequest, NextResponse } from 'next/server';
import { checkOrigin, isAdmin } from '@/lib/admin-auth';
import { readSnapshot, saveSnapshot } from '@/lib/content-store';
import { contentSchema } from '@/lib/content-validation';
import type { PortfolioContent } from '@/lib/content-defaults';
export const dynamic='force-dynamic';
export async function GET() {
  if (!await isAdmin()) return NextResponse.json({error:'Sign in to continue.'},{status:401});
  try { return NextResponse.json(await readSnapshot(),{headers:{'Cache-Control':'no-store'}}); }
  catch { return NextResponse.json({error:'Storage is unavailable. Check the database configuration.'},{status:503}); }
}
export async function PUT(req:NextRequest) {
  if (!checkOrigin(req)) return NextResponse.json({error:'Invalid request origin.'},{status:403});
  if (!await isAdmin()) return NextResponse.json({error:'Your session expired. Sign in again.'},{status:401});
  if (Number(req.headers.get('content-length')||0)>1000000) return NextResponse.json({error:'Content exceeds 1 MB.'},{status:413});
  try {
    const body=await req.json();
    if (JSON.stringify(body).length > 1000000 || !Number.isSafeInteger(body.revision) || body.revision < 0) return NextResponse.json({error:'Invalid content revision or size.'},{status:400});
    const parsed=contentSchema.safeParse(body.content);
    if (!parsed.success) return NextResponse.json({error:parsed.error.issues.map(i=>`${i.path.join(' / ')}: ${i.message}`).slice(0,5).join('\n')},{status:400});
    const revision=await saveSnapshot(parsed.data as PortfolioContent,body.revision);
    return NextResponse.json({revision},{headers:{'Cache-Control':'no-store'}});
  } catch(e) { return NextResponse.json({error:(e as Error).message==='CONFLICT'?'This content changed in another tab. Export your draft, then reload before saving.':'Could not save. Your draft is still available on this page.'},{status:(e as Error).message==='CONFLICT'?409:503}); }
}
