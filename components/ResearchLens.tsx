"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { researchSlug } from "@/lib/details";
import { research, researchInterests } from "@/lib/data";
const codes = ["HCI", "CV", "QML"];
export default function ResearchLens() {
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
        <div className="lens-orbit" aria-hidden="true">
          <svg viewBox="0 0 360 300" className="orbital-svg">
            <g className="orbit-lines">
              <ellipse
                cx="180"
                cy="150"
                rx="147"
                ry="67"
                transform="rotate(-32 180 150)"
              />
              <ellipse
                cx="180"
                cy="150"
                rx="147"
                ry="67"
                transform="rotate(32 180 150)"
              />
              <ellipse
                cx="180"
                cy="150"
                rx="147"
                ry="67"
                transform="rotate(90 180 150)"
              />
            </g>
            <circle cx="180" cy="150" r="92" className="orbit-faint" />
            <g className="orbit-satellite">
              <circle cx="180" cy="58" r="5" />
            </g>
            <circle cx="180" cy="150" r="40" className="orbit-core" />
            <text x="180" y="155" textAnchor="middle">
              {codes[active]}
            </text>
            <path
              d="M17 150h30m266 0h30M180 2v20m0 255v21"
              className="orbit-ticks"
            />
          </svg>
        </div>
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
                  <Link href={`/research/${researchSlug(r)}`} key={r.index}>
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
