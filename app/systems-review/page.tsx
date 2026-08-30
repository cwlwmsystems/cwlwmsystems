import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Systems & Workflow Review",
  description: "A fixed-price review of a business workflow, systems, data handoffs, bottlenecks, and automation opportunities, with a prioritized roadmap.",
  alternates: { canonical: "/systems-review" },
};

const deliverables = [
  ["Current-state workflow map", "A clear view of how work moves today: people, systems, decisions, handoffs, and exceptions."],
  ["Systems & data inventory", "The applications, spreadsheets, databases, forms, APIs, and sources of truth involved in the workflow."],
  ["Bottlenecks & risk points", "Where time is lost, data diverges, ownership is unclear, work waits, or errors are likely to appear."],
  ["Automation opportunities", "Specific places where integration, automation, validation, or a purpose-built tool could reduce friction."],
  ["Recommended roadmap", "A prioritized set of next steps, including where not to build custom software if a simpler answer is available."],
];

const bestFor = [
  "You know a workflow is inefficient but are not sure what the technical solution should be.",
  "Several systems are involved and nobody has mapped the end-to-end process clearly.",
  "You are considering custom software and want to reduce the risk of scoping the wrong thing.",
  "You want an independent technical and operational view before committing to a larger project.",
];

export default function SystemsReviewPage() {
  return (
    <>
      <section className="page-hero review-hero">
        <div className="container review-hero-grid">
          <div>
            <p className="eyebrow light">Systems &amp; Workflow Review</p>
            <h1>Understand the problem before paying to build the solution.</h1>
            <p>A focused review of one important workflow, the systems around it, and the friction inside it — with a practical roadmap for what to change next.</p>
          </div>
          <aside className="review-price-card">
            <span>Fixed engagement</span>
            <strong>$750</strong>
            <p>Designed for one defined workflow or operating problem.</p>
            <Link className="button button-light" href="/contact?interest=systems-review">Request a Systems Review</Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container review-layout">
          <div>
            <p className="eyebrow">What you receive</p>
            <h2>Clarity you can use even if I never build the project.</h2>
            <p className="section-copy">The review is a standalone deliverable. The goal is to make the operating problem understandable enough to decide whether the next step should be a process change, product configuration, integration, automation, internal tool, or larger custom platform.</p>
          </div>
          <div className="review-deliverables">
            {deliverables.map(([title, copy], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container review-fit-grid">
          <div><p className="eyebrow">A good fit when</p><h2>You can describe the pain, but not yet the architecture.</h2></div>
          <div className="check-panel">{bestFor.map((item) => <p key={item}>{item}</p>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container review-process-grid">
          <div><p className="eyebrow">How it works</p><h2>Focused, documented, useful.</h2></div>
          <ol>
            <li><strong>Pre-work</strong><span>You provide a short description of the workflow, people involved, and current tools.</span></li>
            <li><strong>Working session</strong><span>I walk through the process with you and identify business rules, handoffs, systems, data, and exceptions.</span></li>
            <li><strong>Analysis</strong><span>I organize the current state, identify friction and risk, and compare practical solution paths.</span></li>
            <li><strong>Readout</strong><span>You receive the documented findings and a prioritized recommendation for what to do next.</span></li>
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
