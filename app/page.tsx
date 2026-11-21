import { getContent } from "@/lib/content-store";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ResearchLens from "@/components/ResearchLens";

export default async function HomePage() {
  const { heroBio, profile, researchInterests } = await getContent();
  return (
    <>
      <section className="studio-hero container" aria-label="Introduction">
        <div className="hero-composition">
          <div className="hero-manifesto">
            <h1 className="studio-name">
              {profile.name}
              <span className="name-period">.</span>
            </h1>
            <span className="hero-role">
              {profile.role}
            </span>

            <h2 className="hero-interest">{researchInterests.join(", ")}</h2>
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
                View CV
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
          {profile.image && <figure className="studio-portrait">
            <img
              src={profile.image}
              alt={profile.name}
              width={400}
              height={600}
              fetchPriority="high"
            />

          </figure>}
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

    </>
  );
}
