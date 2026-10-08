import Link from "next/link";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import { profile, routes } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-invite">
          <p className="eyebrow">TEACHING / RESEARCH / COLLABORATION</p>
          <div>
            <h2>
              Let’s start a<br />
              <em>conversation.</em>
            </h2>
            <a
              className="footer-contact"
              href={`mailto:${profile.email}`}
              aria-label="Email Nahin Intesher"
            >
              <ArrowUpRight size={42} />
            </a>
          </div>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <Mail size={16} />
          </a>
        </div>
        <div className="footer-grid">
          <div>
            <Link href="/" className="f-name">
              Nahin Intesher<span className="dot">.</span>
            </Link>
            <p className="f-role">
              Computer Science & Engineering
              <br />
              {profile.location}
            </p>
          </div>
          <nav aria-label="Footer navigation">
            {routes.map((r) => (
              <Link key={r.href} href={r.href}>
                {r.short}
              </Link>
            ))}
          </nav>
          <div className="f-ext">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight />
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer">
              Curriculum Vitae <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="f-bottom">
          <span>© 2026 {profile.name}</span>
          <a href="#main">
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
