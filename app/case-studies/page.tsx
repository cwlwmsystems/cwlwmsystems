import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTA } from "@/components/CTA";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Representative Cwlwm Systems case studies for field operations, AI quality assurance, performance intelligence, geospatial data, and digital visibility.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Case studies</p>
          <h1>Reusable system patterns, shown at the business level.</h1>
          <p>Each case study focuses on the operating problem, system design, workflow, safeguards, and value so you can see how the same architecture could apply inside your business.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="case-grid full-case-grid">
            {caseStudies.map((study) => <CaseStudyCard key={study.slug} study={study} />)}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
