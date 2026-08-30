import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "Cwlwm Systems applies reusable operational software, automation, AI, and data patterns across field services, multi-location operations, customer operations, professional services, utilities, and growth teams.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Industries</p>
          <h1>The workflow matters more than the industry label.</h1>
          <p>Scheduling, handoffs, quality, prioritization, data fragmentation, field work, and customer lifecycle problems repeat across industries. Cwlwm Systems looks for the operating pattern underneath them.</p>
        </div>
      </section>

      <section className="section">
        <div className="container industry-detail-grid">
          {industries.map((industry, index) => (
            <article key={industry.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{industry.title}</h2>
              <p>{industry.intro}</p>
              <div className="industry-needs">{industry.needs.map((need) => <b key={need}>{need}</b>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container principle-grid">
          <div><p className="eyebrow">Not seeing your industry?</p><h2>Describe the workflow instead.</h2></div>
          <div className="principle-copy">
            <p>If your problem sounds like “this gets copied by hand,” “these systems do not talk,” “no one can tell what needs attention,” “this process lives in a spreadsheet,” or “this needs a reliable automation layer,” the underlying system pattern may already be familiar.</p>
            <Link className="text-link" href="/contact">Tell me about it →</Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
