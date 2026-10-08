import PageHead from "@/components/PageHead";
import { Code2, BrainCircuit, Globe, Database, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
export const metadata = { title: "Technical Skills" };
const icons = [Code2,BrainCircuit,Globe,Database,Wrench];
export default function SkillsPage() {
 return <section className="section"><div className="container"><PageHead no="07" title="Technical Skills" tag="Skills"/><dl className="skill-panels">{skills.map((s,i) => {const Icon=icons[i];return <div className="skill-panel" key={s.category}><dt><Icon size={24} strokeWidth={1.5}/>{s.category}</dt><dd>{s.items.map(t => <span key={t}>{t}</span>)}</dd></div>;})}</dl></div></section>;
}
