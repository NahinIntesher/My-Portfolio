import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/admin-auth';
import { readSnapshot } from '@/lib/content-store';
import AdminEditor from '@/components/admin/AdminEditor';
export const metadata={title:'Portfolio admin',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function AdminPage(){
  if(!await isAdmin())redirect('/admin/login');
  try{const snapshot=await readSnapshot();return <AdminEditor initial={snapshot}/>;}
  catch{return <section className="admin-workspace admin-storage-error"><h1>Storage is unavailable</h1><p>Check the database connection and run the SQL in scripts/admin-schema.sql. Your published portfolio continues to use its bundled content.</p><a href="/admin">Try again</a></section>;}
}
