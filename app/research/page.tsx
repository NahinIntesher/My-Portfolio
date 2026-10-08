import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHead from "@/components/PageHead";
import { researchDetails } from "@/lib/details";

export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead no="02" title="Research" tag="Research" />
        <div className="research-cards">
          {researchDetails.map((research) => (
            <Link
              className={`research-card${research.slug === "ai-awareness" ? " research-card-featured" : ""}`}
              key={research.slug}
              href={`/research/${research.slug}`}
            >
              <span className="eyebrow">{research.index}</span>
              <h2>{research.title}</h2>
              <p>{research.short}</p>
              <span className="card-detail-link">
                Read research <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
