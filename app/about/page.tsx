import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import SideBox from "@/components/SideBox";
import { about, researchInterests } from "@/lib/data";

export const metadata: Metadata = { title: "About", description: "Academic biography, motivation, and long-term direction of Nahin Intesher." };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead no="01" title="About Me" tag="Profile" />
        <Reveal>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-14">
            <div className="about-prose">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i > 0 ? "mt-5" : ""}>{p}</p>
              ))}
              <p className="about-quote">“{about.goal}”</p>
            </div>
            <SideBox title="Research Interests" items={researchInterests} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
