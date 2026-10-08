import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ResearchLens from "@/components/ResearchLens";
import { heroBio, routes, profile } from "@/lib/data";
export default function HomePage() {
  return (
    <>
      <section className="studio-hero container" aria-label="Introduction">
        <div className="hero-composition">
          <div className="hero-manifesto">
            <h1 className="studio-name">
              Nahin <em>Intesher</em>
              <span className="name-period">.</span>
            </h1>
            <span className="hero-role">
              COMPUTER SCIENCE &amp; ENGINEERING STUDENT
            </span>

            <h2 className="hero-interest">
              <em>Interested in</em>{" "}
              <strong>Human-Computer Interaction, Computer Vision</strong>{" "}
              <em>and</em> <strong>Quantum Machine Learning</strong>.
            </h2>
            <p>{heroBio}</p>
            <div className="hero-actions">
              <Link href="/research" className="btn btn-solid">
                Explore research <ArrowUpRight size={17} />
              </Link>
              <a
                href={profile.cv}
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV <FileText size={15} />
              </a>
            </div>
            <div className="hero-socials">
              <span>FIND ME ONLINE</span>
              <div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>
          <figure className="studio-portrait">
            <img
              src="/cvimage.jpg"
              alt="Nahin Intesher"
              width={400}
              height={600}
              fetchPriority="high"
            />
            <div className="portrait-corner" aria-hidden="true">
              N / I
            </div>
          </figure>
        </div>
      </section>
      <section className="lens-section" id="work">
        <div className="container">
          <Reveal>
            <div className="section-intro">
              <div>
                <p className="eyebrow">01 / CONNECTING PERSPECTIVES</p>
                <h2>
                  At the intersection
                  <br />
                  of <em>people & technology.</em>
                </h2>
              </div>
            </div>
            <ResearchLens />
          </Reveal>
        </div>
      </section>
      <section className="section container index-section">
        <Reveal>
          <div className="section-intro">
            <div>
              <p className="eyebrow">THE COMPLETE PICTURE</p>
              <h2>
                Explore <em>the portfolio.</em>
              </h2>
            </div>
          </div>
          <nav className="toc" aria-label="All portfolio sections">
            {routes.map((r) => (
              <Link className="toc-row" key={r.href} href={r.href}>
                <span className="toc-no">{r.no}</span>
                <div>
                  <span className="toc-title">{r.label}</span>
                  <span className="toc-desc">
                    {r.href === "/education"
                      ? "United International University and academic record."
                      : r.desc}
                  </span>
                </div>
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </nav>
        </Reveal>
      </section>
    </>
  );
}
