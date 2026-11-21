import 'server-only';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import { createHash, timingSafeEqual } from 'node:crypto';
import type { NextRequest } from 'next/server';
import { database } from './content-store';
export const cookieName = 'portfolio_admin';
export const configured = () => !!process.env.ADMIN_USERNAME && (process.env.ADMIN_PASSWORD?.length || 0) >= 20 && (process.env.ADMIN_SESSION_SECRET?.length || 0) >= 32 && (!process.env.VERCEL || !!process.env.APP_ORIGIN);
const secret = () => new TextEncoder().encode(process.env.ADMIN_SESSION_SECRET);
const fingerprint = () => createHash('sha256').update(`${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}`).digest('hex');
export function passwordMatches(username: string, password: string) {
  const hash = (s: string) => createHash('sha256').update(s).digest();
  return timingSafeEqual(hash(username), hash(process.env.ADMIN_USERNAME || '')) && timingSafeEqual(hash(password), hash(process.env.ADMIN_PASSWORD || ''));
}
export async function createSession() { return new SignJWT({ version: fingerprint() }).setProtectedHeader({ alg: 'HS256' }).setSubject('portfolio-owner').setIssuer('nahin-portfolio').setAudience('portfolio-admin').setIssuedAt().setExpirationTime('8h').sign(secret()); }
export async function isAdmin() {
  if (!configured()) return false;
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return false;
  try { const {payload} = await jwtVerify(token, secret(), { algorithms: ['HS256'], issuer: 'nahin-portfolio', audience: 'portfolio-admin' }); return payload.sub === 'portfolio-owner' && payload.version === fingerprint(); } catch { return false; }
}
export function checkOrigin(req: NextRequest) {
  const expected = process.env.APP_ORIGIN || req.nextUrl.origin;
  return req.headers.get('origin') === expected && req.headers.get('sec-fetch-site') !== 'cross-site';
}
let localAttempts = { count: 0, until: 0 };
export async function loginAllowed() {
  if (process.env.DATABASE_URL) {
    const rows = await database()`INSERT INTO portfolio_login_limits (id, attempts, window_start) VALUES (1,1,now()) ON CONFLICT (id) DO UPDATE SET attempts=CASE WHEN portfolio_login_limits.window_start < now()-interval '15 minutes' THEN 1 ELSE portfolio_login_limits.attempts+1 END, window_start=CASE WHEN portfolio_login_limits.window_start < now()-interval '15 minutes' THEN now() ELSE portfolio_login_limits.window_start END RETURNING attempts`;
    return Number(rows[0].attempts) <= 10;
  }
  if (process.env.VERCEL) return false;
  if (Date.now() > localAttempts.until) localAttempts = { count: 0, until: Date.now() + 900000 };
  return ++localAttempts.count <= 10;
}
export const sessionCookie = { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' as const, path: '/', maxAge: 8 * 60 * 60 };
