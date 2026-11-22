import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export const metadata = { title: "Research document" };

export default function ResearchDocumentPage() {
  return (
    <section className="section">
      <div className="container">
        <Link href="/research" className="back-link">
          <ArrowLeft size={17} /> Back to research
        </Link>
        <header className="detail-heading research-document-heading">
          <h1>Research document</h1>
          <div className="detail-actions">
            <a className="btn btn-solid" href="/research.pdf?download=1" download="Nahin_Intesher_Research.pdf">
              <Download size={17} /> Download PDF
            </a>
            <a className="btn btn-ghost" href="/research.pdf" target="_blank" rel="noopener noreferrer">
              Open PDF <ExternalLink size={17} />
            </a>
          </div>
        </header>
        <object data="/research.pdf" type="application/pdf" aria-label="Nahin Intesher research document preview" className="research-document-preview">
          <div className="cv-preview-fallback">
            <p>Your browser could not show the PDF preview.</p>
            <a href="/research.pdf" target="_blank" rel="noopener noreferrer">Open the research PDF</a>
          </div>
        </object>
      </div>
    </section>
  );
}
