import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { engagementOptions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engagements & Pricing",
  description: "Typical engagement models and starting prices for systems reviews, workflow automation, integrations, internal tools, and custom operational platforms from Cwlwm Systems.",
  alternates: { canonical: "/pricing" },
};

const pricingNotes = [
  ["Scope comes before a fixed build price", "Custom work is quoted after the workflow, integrations, users, data, risks, and deliverables are understood well enough to write a responsible scope."],
  ["Starting prices are not estimates for every project", "They show the level at which an engagement typically begins. Complexity, data quality, third-party APIs, migration, security, and change management can materially change the final scope."],
  ["Third-party costs stay visible", "Hosting, paid APIs, software licenses, messaging, email, maps, AI usage, or other vendor charges are identified separately when they apply."],
  ["Support is optional", "A project can end with documentation and handoff, or continue with an agreed support or improvement plan. Ongoing service is not automatically bundled into every build."],
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero pricing-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Engagements & pricing</p>
          <h1>Custom systems need clear pricing, not fake packages.</h1>
          <p>Every business has a different workflow, stack, data model, and operating constraint. I price the work around the problem being solved, while publishing starting points so you can decide whether Cwlwm Systems is in the right range before contacting me.</p>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-intro">
            <div>
              <p className="eyebrow">Typical engagements</p>
              <h2>A practical way to start.</h2>
            </div>
            <div>
              <p>Most custom development engagements begin at <strong>$2,500</strong>. If the problem is not yet clear enough to scope responsibly, the fixed-price Systems &amp; Workflow Review is designed to create that clarity first.</p>
              <p>You will receive a written proposal before paid development begins. The proposal and statement of work define the final deliverables, timeline, price, payment schedule, and responsibilities for your project.</p>
            </div>
          </div>

          <div className="pricing-grid">
            {engagementOptions.map((item) => (
              <article className="pricing-card" key={item.title}>
                <div className="pricing-card-head">
                  <h3>{item.title}</h3>
                  <strong>{item.price}</strong>
                </div>
                <p>{item.fit}</p>
                <ul>
                  {item.includes.map((include) => <li key={include}>{include}</li>)}
                </ul>
                <Link className="text-link" href={item.href}>Explore this engagement →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container pricing-notes-layout">
          <div>
            <p className="eyebrow">How pricing works</p>
            <h2>You should know what you are paying for before the build starts.</h2>
          </div>
          <div className="pricing-note-list">
            {pricingNotes.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section fit-budget-section">
        <div className="container fit-budget-grid">
          <div>
            <p className="eyebrow">Not sure what category fits?</p>
            <h2>Describe the operating problem instead.</h2>
            <p>I do not expect a client to arrive with a technical specification. If you can explain what is slow, manual, disconnected, hard to measure, or unnecessarily complicated, that is enough to start a useful conversation.</p>
          </div>
          <div className="fit-budget-actions">
            <Link className="button primary" href="/book">Request a 20-minute fit call</Link>
            <Link className="button secondary" href="/systems-review">See the Systems Review</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
