import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Custom operational platforms, integrations, workflow automation, AI-assisted operations, data intelligence, field systems, and growth systems from Cwlwm Systems.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Solutions</p>
          <h1>Build the missing layer in your business.</h1>
          <p>Cwlwm Systems creates custom software and integrations for workflows that cross teams, data, and tools — especially where off-the-shelf software stops short.</p>
        </div>
      </section>

      <section className="section">
        <div className="container solution-detail-list">
          {solutions.map((solution) => (
            <article className="solution-detail" id={solution.slug} key={solution.slug}>
              <div className="solution-detail-heading">
                <span>{solution.number}</span>
                <div>
                  <h2>{solution.title}</h2>
                  <p className="lead-small">{solution.description}</p>
                </div>
              </div>
              <div className="solution-detail-columns">
                <div>
                  <h3>Often a fit when</h3>
                  <ul className="check-list">{solution.signs.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <h3>What I can build</h3>
                  <div className="pill-cloud">{solution.examples.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </div>
              <Link className="text-link" href="/contact">Discuss this kind of system →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container principle-grid">
          <div>
            <p className="eyebrow">Integration before replacement</p>
            <h2>Keep what already works.</h2>
          </div>
          <div className="principle-copy">
            <p>The first assumption is not that your current tools are wrong. Often the real problem is the space between them: missing context, duplicated data, unowned handoffs, inconsistent rules, or no common operating view.</p>
            <p>A focused integration or operational layer can create more value than replacing an entire stack. When an existing product clearly solves the problem better, I will say so.</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
