import { getContent } from "@/lib/content-store";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import PageHead from "@/components/PageHead";


export const metadata = { title: "Research" };

export default async function ResearchPage() {
  const { researchDetails } = await getContent();
  return (
    <section className="section">
      <div className="container">
        <div className="research-page-top">
          <PageHead no="02" title="Research" tag="Research" />
          <div className="research-document-actions">
            <Link href="/research/document" className="btn btn-solid">
              View research PDF <ArrowUpRight size={17} />
            </Link>
            <a href="/research.pdf?download=1" download="Nahin_Intesher_Research.pdf" className="btn btn-ghost">
              <Download size={17} /> Download PDF
            </a>
          </div>
        </div>
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
