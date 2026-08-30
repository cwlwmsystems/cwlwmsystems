import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { ongoingEngagementOptions, partnershipCapabilities, phaseModel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ongoing Systems Partnership",
  description: "Monthly systems retainers, maintenance, phased development, onboarding, training, launch support, and fractional systems partnership from Cwlwm Systems.",
  alternates: { canonical: "/ongoing-partnership" },
};

const operatingModel = [
  ["A defined monthly priority list", "Retainer work is planned against an agreed backlog or monthly priority list so the highest-value maintenance, support, and development work gets handled first."],
  ["Reserved capacity, not unlimited work", "A retainer reserves a defined level of recurring availability and delivery capacity. The agreement states what is included, how additional work is handled, and any response expectations."],
  ["Continuity across phases", "Because I already understand the system, future work can begin from the real architecture and business context instead of paying someone new to rediscover it every time."],
  ["Clear client ownership", "An ongoing relationship is available because it is useful, not because the software is designed to trap you. Documentation, access, and project-specific ownership still follow the agreed handoff terms."],
];

export default function OngoingPartnershipPage() {
  return (
    <>
      <section className="page-hero partnership-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Ongoing systems partnership</p>
          <h1>Your system does not stop evolving after launch.</h1>
          <p>I can stay involved after implementation to maintain the system, support users, handle onboarding and training, develop future phases, improve workflows, coordinate integrations, and help the platform evolve with the business.</p>
          <div className="hero-actions">
            <Link className="button button-light" href="/contact?interest=ongoing-partnership">Discuss an ongoing partnership</Link>
            <Link className="button button-ghost-light" href="/pricing">See all engagement pricing</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container partnership-intro-grid">
          <div>
            <p className="eyebrow">Fractional systems ownership</p>
            <h2>Ongoing technical and operational support without adding a full-time systems role.</h2>
          </div>
          <div>
            <p>Some businesses need more than a one-time build, but do not need a full internal software team. In that situation, I can remain familiar with your workflows, integrations, data, infrastructure, users, and roadmap so the system has continuity after launch.</p>
            <p>The relationship can be narrow — maintenance and small improvements — or broader, including active development, implementation planning, team training, new-user onboarding, vendor coordination, and systems roadmap ownership.</p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-intro"><div><p className="eyebrow">What ongoing work can include</p><h2>More than bug fixes.</h2></div></div>
          <div className="partnership-capability-grid">
            {partnershipCapabilities.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-intro">
            <div><p className="eyebrow">Retainer starting points</p><h2>Choose the level of continuity the business actually needs.</h2></div>
            <div>
              <p>These are common starting points, not unlimited service packages. Every retainer is scoped around system complexity, planned development, expected availability, support needs, and how much recurring capacity should be reserved.</p>
              <p>The exact work, cadence, response expectations, included capacity, additional-work rates, and any rollover terms are documented in the engagement agreement.</p>
            </div>
          </div>
          <div className="pricing-grid retainer-grid">
            {ongoingEngagementOptions.map((item) => (
              <article className="pricing-card" id={item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} key={item.title}>
                <div className="pricing-card-head"><h3>{item.title}</h3><strong>{item.price}</strong></div>
                <p>{item.fit}</p>
                <ul>{item.includes.map((include) => <li key={include}>{include}</li>)}</ul>
                <Link className="text-link" href="/contact?interest=ongoing-partnership">Discuss this level of support →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section phase-section">
        <div className="container">
          <div className="section-intro"><div><p className="eyebrow">Phased development</p><h2>Large systems can grow in deliberate, useful stages.</h2><p>A larger roadmap does not have to become one oversized project. Phased delivery lets the business start using the highest-value pieces, learn from production, and fund later work against better information.</p></div></div>
          <div className="phase-grid">
            {phaseModel.map((phase) => <article key={phase.number}><span>{phase.number}</span><h3>{phase.title}</h3><p>{phase.copy}</p></article>)}
          </div>
          <p className="phase-note">These are example phase patterns, not a required template. A real project is phased around the business dependency chain, risk, budget, and the earliest point at which the system can create useful value.</p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container adoption-grid">
          <div>
            <p className="eyebrow">Implementation, onboarding & training</p>
            <h2>A system is not finished just because the code is deployed.</h2>
          </div>
          <div>
            <p>Depending on the engagement, implementation can include data migration, administrator setup, permissions, launch planning, user onboarding, team training, written procedures, recorded training materials, post-launch office hours, and refinement based on how the system behaves in real use.</p>
            <div className="adoption-list">
              <span>Administrator training</span>
              <span>Team and end-user training</span>
              <span>Written SOPs and system documentation</span>
              <span>New-employee onboarding materials</span>
              <span>Launch support and post-launch refinement</span>
              <span>Future phase planning</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container partnership-operating-grid">
          <div><p className="eyebrow">How the retainer works</p><h2>Continuity should be structured, not vague.</h2></div>
          <div className="pricing-note-list">
            {operatingModel.map(([title, copy], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-band ongoing-cta-band">
        <div className="container review-band-grid">
          <div>
            <p className="eyebrow light">Build. Launch. Improve.</p>
            <h2>I can build the system, help your team adopt it, and stay involved as the business and platform evolve.</h2>
            <p>You do not have to decide on an ongoing retainer before the first project begins. The right support model can be defined once the system, users, roadmap, and operational needs are clear.</p>
          </div>
          <div className="review-band-price partnership-actions">
            <Link className="button button-light" href="/contact?interest=ongoing-partnership">Discuss a retainer</Link>
            <Link className="text-link light-link" href="/book">Book a 30-minute fit call →</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
