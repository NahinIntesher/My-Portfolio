import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Layers } from "lucide-react";
import { projectDetails } from "@/lib/details";
export const dynamicParams = false;
export const generateStaticParams = () => projectDetails.map(p => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) { const p = projectDetails.find(p => p.slug === params.slug); return { title: p?.name || "Project", description: p?.subtitle }; }
export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = projectDetails.find(p => p.slug === params.slug); if (!p) notFound();
  return <section className="section"><div className="container detail-shell"><Link href="/projects" className="back-link"><ArrowLeft size={17}/> All projects</Link><header className="detail-heading"><p className="eyebrow">{p.category} / {p.date}</p><h1>{p.name}</h1></header>
    <figure className="detail-cover"><img src={p.cover} alt={`${p.name} UI concept illustration`} width={1000} height={600}/><figcaption>UI concept illustration</figcaption></figure>
    <div className="detail-grid"><article className="detail-prose"><h2>About the project</h2><p>{p.description}</p><div className="detail-actions"><a className="btn btn-solid" href={p.githubLink} target="_blank" rel="noopener noreferrer"><Github size={18}/> Repository <ArrowUpRight size={17}/></a>{p.demo && <a className="btn btn-ghost" href={p.demo} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={17}/></a>}</div></article><aside className="detail-aside"><h2><Layers size={20}/> Technologies</h2><ul className="tech-tags">{p.technologies.map(t => <li key={t}>{t}</li>)}</ul><dl className="detail-facts"><dt>Category</dt><dd>{p.category}</dd><dt>Period</dt><dd>{p.date}</dd></dl></aside></div>
    <nav className="detail-next" aria-label="Other projects">{projectDetails.filter(a => a.slug !== p.slug && a.category === p.category).slice(0,2).map(a => <Link key={a.slug} href={`/projects/${a.slug}`}>{a.name}<span>→</span></Link>)}</nav>
  </div></section>;
}
