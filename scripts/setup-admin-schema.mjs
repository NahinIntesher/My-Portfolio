import nextEnv from '@next/env';
import { neon } from '@neondatabase/serverless';
import { readFile } from 'node:fs/promises';

nextEnv.loadEnvConfig(process.cwd());
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing. Connect the portfolio database first.');
}
const sql = neon(process.env.DATABASE_URL);
const schema = await readFile(new URL('./admin-schema.sql', import.meta.url), 'utf8');
const statements = schema.split(';').map(statement => statement.trim()).filter(Boolean);
await sql.transaction(statements.map(statement => sql.query(statement)));
const [tables] = await sql`SELECT to_regclass('public.portfolio_content') IS NOT NULL AS content_ready,
  to_regclass('public.portfolio_login_limits') IS NOT NULL AS login_limits_ready`;
if (!tables.content_ready || !tables.login_limits_ready) {
  throw new Error('Portfolio schema verification failed.');
}
console.log('Portfolio content and login-limit tables are ready. Existing data was preserved.');
