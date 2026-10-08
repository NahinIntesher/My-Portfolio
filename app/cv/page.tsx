import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export const metadata = { title: "Curriculum Vitae" };

export default function CVPage() {
  return (
    <section className="section">
      <div className="container">
        <Link href="/" className="back-link">
          <ArrowLeft size={17} /> Back to portfolio
        </Link>
        <header className="detail-heading" style={{ marginTop: 24 }}>
          <h1 style={{ marginTop: 0 }}>Curriculum Vitae</h1>
          <div className="detail-actions">
            <a className="btn btn-solid" href="/cv.pdf" download="Nahin_Intesher_CV.pdf">
              <Download size={17} /> Download CV
            </a>
            <a className="btn btn-ghost" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Open PDF <ExternalLink size={17} />
            </a>
          </div>
        </header>
        <object
          data="/cv.pdf"
          type="application/pdf"
          aria-label="Nahin Intesher curriculum vitae preview"
          style={{ display: "block", width: "100%", height: "80vh", minHeight: 560, marginTop: 32, border: "1px solid var(--line)", background: "var(--surface)" }}
        >
          <div className="cv-preview-fallback">
            <p>Your browser could not show the CV preview.</p>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Open the CV PDF
            </a>
          </div>
        </object>
      </div>
    </section>
  );
}
