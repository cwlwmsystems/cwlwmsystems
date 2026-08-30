import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "About Cwlwm Systems, an independent systems studio focused on connecting business workflows, data, software, automation, and AI.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Connect before replacing", "Most businesses already own useful software. We look for the missing connections and operating layer before recommending a rebuild."],
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
            <h1>We build the systems between the systems.</h1>
            <p>Cwlwm Systems is an independent systems studio focused on the operational gaps that appear when people, software, data, and business rules have to work together.</p>
          </div>
          <div className="about-knot"><Image src="/cwlwm-knot.png" alt="Cwlwm Systems knot mark" width={514} height={505} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container brand-story-grid">
          <div><p className="eyebrow">Why “Cwlwm”</p><h2>A knot is only useful because of what it connects.</h2></div>
          <div>
            <p><strong>Cwlwm</strong> is a Welsh word for a knot, tie, or bond. It fits the work: connecting the pieces of a business so information, decisions, and work can move reliably between them.</p>
            <p>The goal is not software for software's sake. It is a business that is easier to operate because the system underneath it is clearer.</p>
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
        <div className="container about-positioning">
          <div>
            <p className="eyebrow">What makes Cwlwm different</p>
            <h2>Business, operations, growth, data, and engineering in the same conversation.</h2>
          </div>
          <div>
            <p>Many operational problems are not purely technical. They sit at the intersection of a business rule, a customer journey, a data model, a frontline workflow, and several existing tools.</p>
            <p>Cwlwm Systems approaches the whole system: what the business is trying to accomplish, where the process breaks, what data is trustworthy, what should be automated, what requires a person, and how the result will be measured.</p>
            <Link className="text-link" href="/case-studies">See representative systems →</Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
