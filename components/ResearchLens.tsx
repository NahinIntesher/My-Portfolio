"use client";
import { useContent } from "@/components/ContentProvider";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";


const codes = ["HCI", "CV", "QML"];
export default function ResearchLens() {
  const { researchDetails: research, researchInterests } = useContent();
  const [active, setActive] = useState(0);
  const works = research.filter((r) =>
    r.areas.includes(researchInterests[active]),
  );
  return (
    <div className="research-lens">
      <div className="lens-top">
        <span className="eyebrow">RESEARCH LENS</span>
        <span className="lens-instruction">Choose a perspective</span>
      </div>
      <div className="lens-body">
        <div className="lens-work">
          <p className="eyebrow">
            {String(active + 1).padStart(2, "0")} / RESEARCH INTEREST
          </p>
          <h3>{researchInterests[active]}</h3>
          <div aria-live="polite">
            {works.length ? (
              <>
                <span className="lens-related">Related work</span>
                {works.slice(0, 2).map((r) => (
                  <Link href={`/research/${r.slug}`} key={r.index}>
                    {r.title}
                    <ArrowUpRight size={15} />
                  </Link>
                ))}
              </>
            ) : (
              <p className="lens-empty">
                Listed as a research interest. See the research profile for
                current work.
              </p>
            )}
          </div>
          <Link className="text-link" href="/research">
            Research profile <ArrowRight size={15} />
          </Link>
        </div>
      </div>
      <div
        className="lens-tabs"
        role="group"
        aria-label="Explore research interests"
      >
        {researchInterests.map((name, i) => (
          <button
            key={name}
            aria-label={`Explore ${name}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <span>{codes[i]}</span>
            <span className="lens-tab-name">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
