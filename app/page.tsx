import Link from "next/link";
import { CTA } from "@/components/CTA";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionIntro } from "@/components/SectionIntro";
import { SystemMap } from "@/components/SystemMap";
import { caseStudies } from "@/lib/case-studies";
import { faqs, industries, processSteps, solutions } from "@/lib/site";

const friction = [
  "Critical workflows live in spreadsheets, inboxes, and tribal knowledge.",
  "Your tools work individually, but the handoffs between them do not.",
  "Teams repeat the same data entry, reconciliation, and status chasing every day.",
  "Leadership has dashboards, but not a reliable operating view or next action.",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">Custom operational software · Integrations · Automation · AI</p>
            <h1>Make your business systems <span>work together.</span></h1>
            <p className="hero-lede">Cwlwm Systems builds the operating layer between your people, processes, data, and software — so work moves cleanly from one step to the next.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/contact">Tell me what is not working <span>↗</span></Link>
              <Link className="button button-ghost-light" href="/solutions">See what I build</Link>
            </div>
            <div className="hero-proof">
              <span>Built around your existing stack</span>
              <span>Practical before flashy</span>
              <span>Measurable outcomes</span>
            </div>
          </div>
          <div className="hero-visual">
            <SystemMap />
          </div>
        </div>
      </section>

      <section className="problem-strip">
        <div className="container problem-grid">
          <div>
            <p className="eyebrow">The problem I solve</p>
            <h2>Your business may not need another app. It may need the apps you already have to behave like one system.</h2>
          </div>
          <div className="friction-list">
            {friction.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="What I build"
            title="Systems for the work that does not fit neatly inside one product."
            copy="Cwlwm Systems combines software engineering, systems thinking, automation, data, and growth operations to solve cross-functional business problems end to end."
            action={<Link className="text-link" href="/solutions">All solutions →</Link>}
          />
          <div className="solution-grid">
            {solutions.map((solution) => (
              <Link href={`/solutions#${solution.slug}`} className="solution-card" key={solution.slug}>
                <span>{solution.number}</span>
                <h3>{solution.title}</h3>
                <p>{solution.short}</p>
                <b>Explore →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionIntro
            eyebrow="Representative systems"
            title="See how the same system patterns can solve problems across different businesses."
            copy="These case studies are presented at the business-system level: the challenge, operating model, workflow, safeguards, and value — without tying the idea to one company's internal terminology."
            action={<Link className="text-link" href="/case-studies">View all case studies →</Link>}
          />
          <div className="case-grid home-case-grid">
            {caseStudies.slice(0, 3).map((study) => <CaseStudyCard key={study.slug} study={study} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container industries-preview">
          <SectionIntro
            eyebrow="Where it applies"
            title="Built around workflows, not industry labels."
            copy="The same operating problem appears in different industries under different names. I look for the underlying pattern and build around your actual process."
          />
          <div className="industry-list">
            {industries.map((industry) => (
              <article key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.intro}</p>
                <div>{industry.needs.slice(0, 3).map((need) => <span key={need}>{need}</span>)}</div>
              </article>
            ))}
          </div>
          <Link className="button secondary" href="/industries">Explore industries</Link>
        </div>
      </section>

      <section className="section process-home">
        <div className="container">
          <SectionIntro
            eyebrow="My approach"
            title="Start with the operating problem. Build only what the business needs."
            copy="A clear workflow and source of truth matter more than a long feature list."
            action={<Link className="text-link light-link" href="/approach">See the approach →</Link>}
          />
          <div className="process-line">
            {processSteps.map((step) => (
              <article key={step.title}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div className="faq-sticky">
            <p className="eyebrow">Common questions</p>
            <h2>Custom software should remove uncertainty, not create more of it.</h2>
            <p>Projects begin by determining whether custom work is actually the right answer.</p>
            <Link className="text-link" href="/contact">Ask about your workflow →</Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 5).map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}<span>+</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
