import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { phaseModel, processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description: "The Cwlwm Systems approach to diagnosing, mapping, designing, building, implementing, training, maintaining, and improving custom operational systems.",
  alternates: { canonical: "/approach" },
};

const engagementTypes = [
  { title: "Systems & Workflow Review", copy: "A fixed-price $750 review of one defined workflow, its tools, data, handoffs, risks, and options. Useful when you know the pain but not yet the right solution." },
  { title: "Focused Build", copy: "A clearly scoped operational application, portal, decision tool, or workflow designed around one high-value business problem." },
  { title: "Integration & Automation", copy: "Connect existing systems, remove repetitive work, automate handoffs, add validation, and create reliable event-driven or scheduled workflows." },
  { title: "Phased Development", copy: "Break a larger roadmap into useful releases so the business can adopt the system, learn from production, and prioritize the next phase with better information." },
  { title: "Implementation & Training", copy: "Launch support can include data migration, admin setup, onboarding, user training, documentation, SOPs, and post-launch refinement." },
  { title: "Ongoing Systems Partnership", copy: "Keep me involved through a monthly retainer for maintenance, troubleshooting, training, new users, future phases, integrations, and ongoing systems ownership." },
];

const principles = [
  ["Business problem first", "A feature request is not automatically the real problem. I clarify what outcome needs to change before choosing the build."],
  ["Existing stack first", "If the tools you already have can be connected or extended cleanly, that is usually better than replacing everything."],
  ["Smallest useful system", "Start with the workflow that creates real value. Complexity should earn its way into the project."],
  ["Operational safeguards", "Permissions, validation, retries, auditability, reconciliation, and failure handling are part of the system — not polish for later."],
  ["Adoption is part of delivery", "Deployment, onboarding, training, documentation, and operating ownership matter because unused software creates no business value."],
  ["Measure and improve", "A project is not done when the interface works. It should improve an operating outcome and make that improvement visible over time."],
];

export default function ApproachPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">My approach</p>
          <h1>Clarity before code. Adoption after launch.</h1>
          <p>Good custom software starts by understanding the work, the people doing it, the systems around it, and what failure looks like today. It becomes valuable when the team can actually use, maintain, and improve it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container process-detail-list">
          {processSteps.map((step) => (
            <article key={step.title}>
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-intro"><div><p className="eyebrow">Ways to engage</p><h2>Start at the level the problem actually needs.</h2></div></div>
          <div className="engagement-grid">{engagementTypes.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro"><div><p className="eyebrow">Phased delivery</p><h2>Get to a useful operating system before trying to build the entire roadmap.</h2><p>A larger system can be delivered in stages so each phase earns the next one.</p></div></div>
          <div className="phase-grid compact-phase-grid">
            {phaseModel.map((phase) => <article key={phase.number}><span>{phase.number}</span><h3>{phase.title}</h3><p>{phase.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container adoption-grid">
          <div><p className="eyebrow">Implementation</p><h2>Launch is an operating change, not just a deployment event.</h2></div>
          <div>
            <p>Depending on the project, I can help migrate data, configure users and permissions, train administrators, onboard the team, document the workflow, support the launch, and refine the system after real usage begins.</p>
            <div className="adoption-list"><span>Data migration</span><span>Administrator setup</span><span>User onboarding</span><span>Team training</span><span>Documentation & SOPs</span><span>Post-launch refinement</span></div>
            <Link className="text-link" href="/ongoing-partnership">See ongoing implementation & support →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro"><div><p className="eyebrow">Principles</p><h2>How decisions get made.</h2></div></div>
          <div className="principle-rows">
            {principles.map(([title, copy], index) => <div key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="inline-cta"><p>Not sure whether the next step is a systems review, integration, custom build, or ongoing systems partnership?</p><div className="inline-cta-links"><Link className="text-link" href="/book">Book a 30-minute fit call →</Link><Link className="text-link" href="/pricing">See engagement pricing →</Link></div></div>
        </div>
      </section>
      <CTA />
    </>
  );
}
