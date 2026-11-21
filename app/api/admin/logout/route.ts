import { NextRequest, NextResponse } from 'next/server';
import { checkOrigin, cookieName, sessionCookie } from '@/lib/admin-auth';
export async function POST(req:NextRequest) {
  if (!checkOrigin(req)) return NextResponse.json({error:'Invalid request origin.'},{status:403});
  const r=NextResponse.json({ok:true}); r.cookies.set(cookieName,'',{...sessionCookie,maxAge:0}); return r;
}
