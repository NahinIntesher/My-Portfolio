import { getContent } from "@/lib/content-store";
import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";


export const metadata: Metadata = {
  title: "Education",
  description: "Academic record of Nahin Intesher.",
};

export default async function EducationPage() {
  const { education } = await getContent();
  return (
    <section className="section">
      <div className="container">
        <PageHead no="04" title="Education" tag="Academic Record" />
        <Reveal>
          <ol className="timeline mt-12">
            {education.map((e) => (
              <li key={e.degree}>
                <h3 className="t-degree">{e.degree}</h3>
                <p className="t-inst">
                  {e.school} <span>· {e.place}</span>
                </p>
                <p className="t-years">
                  {e.result ? `${e.years} · ${e.result}` : e.years}
                </p>
                {e.notes.map((n) => (
                  <p className="t-note" key={n.label}>
                    <span className="t-label">{n.label}</span>
                    {n.text}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
