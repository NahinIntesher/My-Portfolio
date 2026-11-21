'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, LockKeyhole } from 'lucide-react';
export default function LoginForm({ready}:{ready:boolean}) {
  const router=useRouter();const [visible,setVisible]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState('');
  async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setError('');const f=new FormData(e.currentTarget);try{const r=await fetch('/api/admin/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:f.get('username'),password:f.get('password')})});const data=await r.json();if(!r.ok)throw new Error(data.error);router.replace('/admin');router.refresh();}catch(e){setError((e as Error).message);}finally{setBusy(false);}}
  return <form onSubmit={submit} className="admin-login-form"><label>Username<input name="username" autoComplete="username" required disabled={!ready}/></label><div><label htmlFor="owner-password">Password</label><div className="admin-password"><input id="owner-password" name="password" type={visible?'text':'password'} autoComplete="current-password" required disabled={!ready}/><button type="button" onClick={()=>setVisible(!visible)} aria-label={visible?'Hide password':'Show password'}>{visible?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></div>{error&&<p role="alert" className="admin-error">{error}</p>}<button className="admin-primary" disabled={busy||!ready}><LockKeyhole size={17}/>{busy?'Signing in…':'Sign in'}</button></form>;
}
