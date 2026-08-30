import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { engagementOptions, ongoingEngagementOptions, phaseModel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engagements & Pricing",
  description: "Typical project and monthly retainer starting prices for systems reviews, automation, integrations, internal tools, operational platforms, maintenance, training, and fractional systems partnership from Cwlwm Systems.",
  alternates: { canonical: "/pricing" },
};

const pricingNotes = [
  ["Scope comes before a fixed build price", "Custom work is quoted after the workflow, integrations, users, data, risks, and deliverables are understood well enough to write a responsible scope."],
  ["Starting prices are not estimates for every project", "They show the level at which an engagement typically begins. Complexity, data quality, third-party APIs, migration, security, training, and change management can materially change the final scope."],
  ["Third-party costs stay visible", "Hosting, paid APIs, software licenses, messaging, email, maps, AI usage, or other vendor charges are identified separately when they apply."],
  ["Retainers reserve defined capacity", "Monthly partnerships are not unlimited work plans. The agreement defines the expected availability, recurring capacity, response expectations, what is included, and how additional work is handled."],
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
              <p className="eyebrow">Project engagements</p>
              <h2>A practical way to start.</h2>
            </div>
            <div>
              <p>Most custom development engagements begin at <strong>$2,500</strong>. If the problem is not yet clear enough to scope responsibly, the fixed-price Systems &amp; Workflow Review is designed to create that clarity first.</p>
              <p>You receive a written proposal before paid development begins. The proposal and statement of work define final deliverables, phases, timeline, price, payment schedule, responsibilities, and any implementation or training work.</p>
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

      <section className="section section-tint retainer-pricing-section">
        <div className="container">
          <div className="pricing-intro">
            <div>
              <p className="eyebrow">Ongoing systems partnership</p>
              <h2>Stay supported after launch without hiring a full-time systems role.</h2>
            </div>
            <div>
              <p>I can remain involved after a build to maintain the system, troubleshoot problems, onboard users, train teams, manage future phases, improve workflows, coordinate integrations, and keep the system aligned with the way the business is changing.</p>
              <p>These are common retainer starting points rather than fixed service bundles. The actual agreement is based on system complexity, planned development, required availability, and how much recurring capacity should be reserved.</p>
              <Link className="text-link" href="/ongoing-partnership">How ongoing partnership works →</Link>
            </div>
          </div>

          <div className="pricing-grid">
            {ongoingEngagementOptions.map((item) => (
              <article className="pricing-card" key={item.title}>
                <div className="pricing-card-head">
                  <h3>{item.title}</h3>
                  <strong>{item.price}</strong>
                </div>
                <p>{item.fit}</p>
                <ul>
                  {item.includes.map((include) => <li key={include}>{include}</li>)}
                </ul>
                <Link className="text-link" href={item.href}>Explore this partnership →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section phase-pricing-section">
        <div className="container">
          <div className="pricing-intro">
            <div><p className="eyebrow">Phased builds</p><h2>A larger system does not have to be one oversized commitment.</h2></div>
            <div>
              <p>Larger platforms can be divided into useful phases so the business gets value earlier, validates the workflow in production, and makes later investment decisions with better information.</p>
              <p>The exact phases depend on the dependency chain and business priorities, but a common pattern is foundation first, operating workflow next, intelligence after the data is trustworthy, and expansion after real use.</p>
            </div>
          </div>
          <div className="phase-grid compact-phase-grid">
            {phaseModel.map((phase) => <article key={phase.number}><span>{phase.number}</span><h3>{phase.title}</h3><p>{phase.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container pricing-notes-layout">
          <div>
            <p className="eyebrow">How pricing works</p>
            <h2>You should know what you are paying for before the work starts.</h2>
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
            <p>I do not expect a client to arrive with a technical specification. If you can explain what is slow, manual, disconnected, hard to measure, or unnecessarily complicated — or what needs ongoing ownership after launch — that is enough to start a useful conversation.</p>
          </div>
          <div className="fit-budget-actions">
            <Link className="button primary" href="/book">Book a 30-minute fit call</Link>
            <Link className="button secondary" href="/ongoing-partnership">Explore ongoing partnership</Link>
            <Link className="button secondary" href="/systems-review">See the Systems Review</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
