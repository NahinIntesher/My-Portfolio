import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import PublicationCard from "@/components/PublicationCard";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications and research output of Nahin Intesher — ongoing thesis and manuscript.",
};

export default function PublicationsPage() {
  return (
    <section className="section">
      <div className="container">
        <PageHead
          no="03"
          title="Publications & Research Output"
          tag="Output & Status"
        />
        <Reveal>
          <div className="pub-list mt-12">
            {publications.map((p) => (
              <PublicationCard key={p.id} pub={p} />
            ))}
          </div>
          <div className="pub-foot">
            <p className="fineprint">
              Full publication record and supporting documents are available in
              my CV.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
