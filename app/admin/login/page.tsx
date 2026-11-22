import Link from "next/link";
import { redirect } from "next/navigation";
import { LockKeyhole, ArrowLeft, CheckCircle2, Circle, BookOpen, FolderKanban, Image as ImageIcon, ArrowUpRight } from "lucide-react";
import { configured, isAdmin } from "@/lib/admin-auth";
import { storageReady } from "@/lib/content-store";
import LoginForm from "@/components/admin/LoginForm";
import ThemeToggle from "@/components/ThemeToggle";
export const metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};
export default async function AdminLogin() {
  if (await isAdmin()) redirect("/admin");
  const ready = configured();
  const checks = [
    ["Owner credentials", ready],
    ["Content storage", storageReady()],
    [
      "File uploads",
      !process.env.VERCEL || !!process.env.BLOB_READ_WRITE_TOKEN,
    ],
  ] as const;
  return (
    <section className="admin-workspace admin-login">
      <aside className="studio-login-aside">
        <Link href="/" className="studio-login-brand"><span><BookOpen size={21}/></span>Nahin<small>PORTFOLIO</small></Link>
        <div className="studio-login-intro"><span className="studio-login-eyebrow">ADMIN WORKSPACE</span><h2>Portfolio<br/>administration.</h2><div className="studio-login-demo" aria-hidden="true"><div className="studio-demo-top"><span/><span/><span/><strong>Portfolio</strong></div><div className="studio-demo-body"><div className="studio-demo-sidebar"><i/><i/><i/><i/></div><div className="studio-demo-content"><div className="studio-demo-heading"/><div className="studio-demo-stats"><span/><span/><span/></div><div className="studio-demo-row"><FolderKanban size={18}/><span>Projects</span><CheckCircle2 size={15}/></div><div className="studio-demo-row"><BookOpen size={18}/><span>Research</span><CheckCircle2 size={15}/></div><div className="studio-demo-row"><ImageIcon size={18}/><span>Media library</span><CheckCircle2 size={15}/></div></div></div></div></div>
        <div className="studio-login-aside-footer"><span>Content · Research · Media</span><a href="/">View portfolio <ArrowUpRight size={14}/></a></div>
      </aside>
      <div className="studio-login-main"><div className="admin-login-top"><Link href="/"><ArrowLeft size={15}/> Back to portfolio</Link><ThemeToggle/></div>
      <div className="admin-login-card"><span className="admin-emblem"><LockKeyhole size={23}/></span><h1>Sign in</h1><p>Access your portfolio workspace.</p><LoginForm ready={ready}/>
        {!ready && (
          <aside className="admin-setup">
            <h2>Finish setup</h2>
            <p>
              Set your owner credentials in <code>.env.local</code> locally, or
              the Vercel environment settings. Follow{" "}
              <code>ADMIN-SETUP.md</code> in this project.
            </p>
            <ul>
              {checks.map(([label, ok]) => (
                <li key={label}>
                  {ok ? <CheckCircle2 size={16} /> : <Circle size={16} />}{" "}
                  {label}: {ok ? "ready" : "required"}
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div><footer className="studio-login-footer">Nahin · Portfolio administration</footer></div>
    </section>
  );
}
