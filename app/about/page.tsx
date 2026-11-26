import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { fitReasons, notFitReasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Cwlwm Systems, an independent systems studio for custom business systems, integrations, implementation, training, and ongoing systems partnership.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Connect before replacing", "Most businesses already own useful software. I look for the missing connections and operating layer before recommending a rebuild."],
  ["Build for the real user", "A system has to fit the people doing the work — including the rushed user, the field user, the manager, and the person handling an exception."],
  ["Make logic explainable", "Scoring, automation, and AI should have clear rules, evidence, and control points so the business can understand why the system acted."],
  ["Treat edge cases as operations", "Retries, duplicate protection, permissions, audit trails, validation, and recovery are part of how the business works, not engineering trivia."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="container about-hero-grid">
          <div>
            <p className="eyebrow light">About Cwlwm Systems</p>
            <h1>I build the systems between the systems.</h1>
            <p>Cwlwm Systems is an independent, one-person systems studio. I work directly with each client to solve the operational gaps that appear when people, software, data, and business rules have to work together.</p>
          </div>
          <div className="about-knot"><Image src="/cwlwm-knot.png" alt="Cwlwm Systems knot mark" width={514} height={505} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container brand-story-grid">
          <div><p className="eyebrow">Why “Cwlwm”</p><h2>A knot is only useful because of what it connects.</h2></div>
          <div>
            <p><strong>Cwlwm</strong> is a Welsh word for a knot, tie, or bond. It fits the work: connecting the pieces of a business so information, decisions, and work can move reliably between them.</p>
            <p>The goal is not software for software&apos;s sake. It is a business that is easier to operate because the system underneath it is clearer.</p>
          </div>
        </div>
      </section>

      <section className="section founder-detail-section">
        <div className="container founder-detail-grid">
          <div>
            <p className="eyebrow">Founder-led delivery</p>
            <h2>The person selling the work is the person doing the work.</h2>
          </div>
          <div>
            <p>I keep Cwlwm Systems deliberately direct. I am responsible for discovery, workflow mapping, architecture, development, integration, testing, documentation, and client communication.</p>
            <p>That means the business context does not have to be translated through a sales team, account manager, project manager, and separate development group before it reaches the person making technical decisions.</p>
            <div className="founder-detail-points">
              <span>Direct access</span><span>Clear accountability</span><span>Business context stays intact</span><span>Fewer handoffs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-intro"><div><p className="eyebrow">Operating values</p><h2>Practical systems thinking.</h2></div></div>
          <div className="value-card-grid">{values.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container fit-grid">
          <div className="fit-column fit-good">
            <p className="eyebrow">A strong fit</p>
            <h2>I work best with businesses that have a real operating problem to solve.</h2>
            <ul>{fitReasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
          </div>
          <div className="fit-column fit-not">
            <p className="eyebrow">Probably not the right fit</p>
            <h2>Not every development request should become a Cwlwm project.</h2>
            <ul>{notFitReasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section continuity-section">
        <div className="container founder-detail-grid">
          <div><p className="eyebrow">Continuity after launch</p><h2>I can build the system and stay responsible for helping it evolve.</h2></div>
          <div>
            <p>Some clients need a clean project handoff. Others need someone who already understands the architecture, workflows, integrations, and business rules to remain involved as new employees, phases, locations, and requirements appear.</p>
            <p>Cwlwm Systems can continue through a monthly retainer for maintenance, training, onboarding, future development, system improvements, and fractional systems ownership — without pretending that ongoing means unlimited work.</p>
            <Link className="text-link" href="/ongoing-partnership">How ongoing partnership works →</Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container about-positioning">
          <div>
            <p className="eyebrow">What makes Cwlwm different</p>
            <h2>Business, operations, growth, data, and engineering in the same conversation.</h2>
          </div>
          <div>
            <p>Many operational problems are not purely technical. They sit at the intersection of a business rule, a customer journey, a data model, a frontline workflow, and several existing tools.</p>
            <p>I approach the whole system: what the business is trying to accomplish, where the process breaks, what data is trustworthy, what should be automated, what requires a person, and how the result will be measured.</p>
            <div className="about-actions"><Link className="text-link" href="/case-studies">See representative systems →</Link><Link className="text-link" href="/pricing">See engagements & pricing →</Link></div>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container portfolio-founder">
          <p className="eyebrow">Founder · Cwlwm Systems</p>
          <h2>Kasey Pelchy</h2>
          <p>Cwlwm Systems was founded in August 2026 as an independent software and business systems studio. My background spans marketing operations, full-stack applications, relational databases, integrations, technical troubleshooting, analytics, and HubSpot/RevOps.</p>
          <p>My independent product, Cwlwm Field Operations, is company-agnostic software I developed under Cwlwm Systems. It is separate from FieldOS, the system I built for and which was used by Zito Media. Work performed for employers is not represented as Cwlwm client work.</p>
          <p>I hold ten HubSpot Academy certifications across Marketing, Sales, Service, Reporting, Revenue Operations, CRM Data Migration, Data Integrations, Salesforce Integration, Implementation for Partners, and Inbound, plus a separate PSO qualification.</p>
          <div className="about-actions"><Link className="text-link" href="/expertise">Technical expertise →</Link><Link className="text-link" href="/work">Real projects →</Link></div>
        </div>
      </section>
      <CTA />
    </>
  );
}
