import Pipeline from "@/components/Pipeline";
import { getContent } from "@/lib/content-store";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cpu, BookOpen } from "lucide-react";

export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const {slug} = await params; const { researchDetails } = await getContent(); const r = researchDetails.find(r => r.slug === slug); return { title: r?.title || "Research", description: r?.short }; }
export default async function ResearchDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { researchDetails } = await getContent();
  const {slug} = await params;
  const r = researchDetails.find(r => r.slug === slug); if (!r) notFound();
  return <section className="section"><div className="container detail-shell"><Link href="/research" className="back-link"><ArrowLeft size={17}/> All research</Link>
    <header className="detail-heading"><p className="eyebrow">{r.status}</p><h1>{r.title}</h1></header>
    <Pipeline image={r.pipelineImage} caption={r.pipelineCaption} gallery={r.gallery}/>
    <div className="detail-grid"><article className="detail-prose"><h2>Overview</h2><p>{r.desc}</p><h2><BookOpen size={21}/> Methods</h2><ul className="detail-list">{r.methods.map(m => <li key={m}>{m}</li>)}</ul></article>
      <aside className="detail-aside"><h2>Research areas</h2><ul className="tech-tags">{r.areas.map(a => <li key={a}>{a}</li>)}</ul>{!!r.tools.length && <><h2><Cpu size={20}/> Technologies &amp; frameworks</h2><ul className="detail-list">{r.tools.map(t => <li key={t}>{t}</li>)}</ul></>}</aside></div>
    <nav className="detail-next" aria-label="Other research">{researchDetails.filter(a => a.slug !== r.slug).slice(0,2).map(a => <Link key={a.slug} href={`/research/${a.slug}`}>{a.title}<span>→</span></Link>)}</nav>
  </div></section>;
}
