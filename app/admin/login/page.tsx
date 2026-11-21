import Link from 'next/link';
import { redirect } from 'next/navigation';
import { LockKeyhole, ArrowLeft, CheckCircle2, Circle } from 'lucide-react';
import { configured,isAdmin } from '@/lib/admin-auth';
import { storageReady } from '@/lib/content-store';
import LoginForm from '@/components/admin/LoginForm';
import ThemeToggle from '@/components/ThemeToggle';
export const metadata={title:'Admin sign in',robots:{index:false,follow:false}};
export default async function AdminLogin(){
  if(await isAdmin())redirect('/admin');
  const ready=configured();
  const checks=[['Owner credentials',ready],['Content storage',storageReady()],['File uploads',!process.env.VERCEL||!!process.env.BLOB_READ_WRITE_TOKEN]] as const;
  return <section className="admin-workspace admin-login"><div className="admin-login-top"><Link href="/"><ArrowLeft size={16}/> Portfolio</Link><ThemeToggle/></div><div className="admin-login-card"><span className="admin-emblem"><LockKeyhole size={26}/></span><h1>Portfolio admin</h1><p>Sign in to manage your content and files.</p><LoginForm ready={ready}/>{!ready&&<aside className="admin-setup"><h2>Finish setup</h2><p>Set your owner credentials in <code>.env.local</code> locally, or the Vercel environment settings. Follow <code>ADMIN-SETUP.md</code> in this project.</p><ul>{checks.map(([label,ok])=><li key={label}>{ok?<CheckCircle2 size={16}/>:<Circle size={16}/>} {label}: {ok?'ready':'required'}</li>)}</ul></aside>}</div></section>;
}
