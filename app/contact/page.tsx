import type { Metadata } from "next";
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Github,
  GraduationCap,
  Fingerprint,
  ArrowUpRight,
} from "lucide-react";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import CopyButton from "@/components/CopyButton";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — teaching, research, higher studies, and collaboration.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead no="09" title="Let’s Connect" tag="Get in Touch" />
        <Reveal>
          <div className="mt-12 grid items-start gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div>
              <p className="contact-quote">
                I am open to opportunities in teaching, research, higher
                studies, and academic collaboration.
              </p>
              <p className="contact-note">
                If you are a faculty member, a prospective supervisor, or a
                potential collaborator, I would be genuinely happy to hear from
                you. I usually respond within 48 hours.
              </p>

              <div className="c-rows">
                <div className="c-row"><span className="c-icon"><Phone size={19}/></span><span className="c-label">Phone</span><a className="c-value" href={profile.phoneHref}>{profile.phone}</a></div>
                <div className="c-row"><span className="c-icon"><Globe size={19}/></span><span className="c-label">Website</span><a className="c-value" href={profile.website} target="_blank" rel="noopener noreferrer">Website <ArrowUpRight size={15}/></a></div>
                <div className="c-row">
                  <span className="c-icon">
                    <Mail strokeWidth={1.75} />
                  </span>
                  <span className="c-label">Email</span>
                  <a className="c-value" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  <CopyButton
                    value={profile.email}
                    label="Copy email address"
                  />
                </div>
                <div className="c-row">
                  <span className="c-icon">
                    <Linkedin strokeWidth={1.75} />
                  </span>
                  <span className="c-label">LinkedIn</span>
                  <a
                    className="c-value"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener"
                  >
                    nahinintesher <ArrowUpRight />
                  </a>
                </div>
                <div className="c-row">
                  <span className="c-icon">
                    <Github strokeWidth={1.75} />
                  </span>
                  <span className="c-label">GitHub</span>
                  <a
                    className="c-value"
                    href={profile.github}
                    target="_blank"
                    rel="noopener"
                  >
                    nahinintesher <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
