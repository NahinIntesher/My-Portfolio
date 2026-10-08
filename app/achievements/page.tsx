import PageHead from "@/components/PageHead";
import { Trophy, GraduationCap, Medal, Code2, ArrowUpRight } from "lucide-react";
import { achievements, competitiveProgramming } from "@/lib/data";
export const metadata = { title: "Achievements" };
export default function AchievementsPage() {
 const scholarship=achievements.find(a=>a.tag === "Scholarship")!;
 const projectAwards=achievements.filter(a=>a.title.includes("Project Show"));
 const programming=achievements.filter(a=>a.title.includes("Programming Contest"));
 return <section className="section"><div className="container"><PageHead no="08" title="Achievements" tag="Awards & Scholarships"/>
 <section className="scholarship-highlight"><div className="award-symbol"><GraduationCap size={36} strokeWidth={1.4}/></div><div><p className="eyebrow">Scholarship / United International University</p><h2>Academic Scholarship</h2><p>{scholarship.detail}</p></div><div className="scholarship-stats"><span><strong>100%</strong><small>9 trimesters</small></span><span><strong>50%</strong><small>3 trimesters</small></span></div></section>
 <div className="achievement-section-title"><Trophy size={25}/><h2>UIU CSE Project Show</h2></div><div className="award-grid">{projectAwards.map((a,i)=><article className={`award-entry ${a.tag === "Champion" ? "champion" : "runner"}`} key={a.title+a.detail}><div className="award-entry-top"><span className="award-rank">{a.tag === "Champion" ? <Trophy size={20}/> : <Medal size={20}/>} {a.title.split(" — ")[0]}</span><span className="award-date">{a.year}</span></div><h3>{a.detail.split("track")[0].replace(/\.$/,"")}</h3><p>{a.detail}</p>{a.link && <a className="text-link" href={a.link.href} target="_blank" rel="noopener noreferrer">{a.link.label}<ArrowUpRight size={17}/></a>}</article>)}</div>
 <div className="achievement-section-title"><Medal size={25}/><h2>Programming Contest</h2></div>{programming.map(a=><article className="programming-award" key={a.title}><span className="award-rank">1st Runner-up</span><div><h3>UIU Juniors Programming Contest</h3><p>{a.detail}</p></div><span className="award-date">{a.year}</span></article>)}
 <div className="achievement-section-title"><Code2 size={25}/><h2>Competitive Programming</h2></div><div className="cp-panels">{competitiveProgramming.map(c=><a key={c.platform} className="cp-panel" href={c.url} target="_blank" rel="noopener noreferrer"><div><h3>{c.platform}</h3><p>{c.handle}</p></div><span>{c.detail}<ArrowUpRight size={19}/></span></a>)}</div></div></section>;
}
