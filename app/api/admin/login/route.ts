import { NextRequest, NextResponse } from 'next/server';
import { configured, checkOrigin, loginAllowed, passwordMatches, createSession, cookieName, sessionCookie } from '@/lib/admin-auth';
export const runtime = 'nodejs';
export async function POST(req: NextRequest) {
  if (!checkOrigin(req)) return NextResponse.json({error:'Invalid request origin.'},{status:403});
  if (!configured()) return NextResponse.json({error:'Complete the admin setup before signing in.'},{status:503});
  if (Number(req.headers.get('content-length') || 0) > 8192) return NextResponse.json({error:'Request too large.'},{status:413});
  try {
    if (!await loginAllowed()) return NextResponse.json({error:'Too many sign-in attempts. Try again in 15 minutes.'},{status:429});
    const {username,password} = await req.json();
    if (typeof username !== 'string' || typeof password !== 'string' || username.length > 200 || password.length > 1000 || !passwordMatches(username,password)) return NextResponse.json({error:'Incorrect username or password.'},{status:401});
    const response=NextResponse.json({ok:true});
    response.cookies.set(cookieName,await createSession(),sessionCookie);
    response.headers.set('Cache-Control','no-store');
    return response;
  } catch { return NextResponse.json({error:'Sign-in is temporarily unavailable. Check the storage setup.'},{status:503}); }
}
