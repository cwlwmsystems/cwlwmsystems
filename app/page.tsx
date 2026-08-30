import Link from "next/link";
import { CTA } from "@/components/CTA";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionIntro } from "@/components/SectionIntro";
import { SystemMap } from "@/components/SystemMap";
import { Testimonials } from "@/components/Testimonials";
import { caseStudies } from "@/lib/case-studies";
import { insights } from "@/lib/insights";
import { engagementOptions, faqs, industries, nextSteps, ongoingEngagementOptions, problemSignals, solutions, trustPoints } from "@/lib/site";

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
            <p className="eyebrow light">Custom systems · Integrations · Automation · Implementation · Ongoing partnership</p>
            <h1>Make your business systems <span>work together.</span></h1>
            <p className="hero-lede">Cwlwm Systems builds the operating layer between your people, processes, data, and software — so work moves cleanly from one step to the next.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/book">Request a 20-minute fit call <span>↗</span></Link>
              <Link className="button button-ghost-light" href="/pricing">See pricing & engagements</Link>
            </div>
            <div className="hero-proof">
              <span>Work directly with the builder</span>
              <span>Built around your existing stack</span>
              <span>Ongoing support without forced lock-in</span>
            </div>
          </div>
          <div className="hero-visual"><SystemMap /></div>
        </div>
      </section>

      <section className="problem-strip">
        <div className="container problem-grid">
          <div>
            <p className="eyebrow">The problem I solve</p>
            <h2>Your business may not need another app. It may need the apps you already have to behave like one system.</h2>
            <Link className="text-link" href="/problems">See the problems I work on →</Link>
          </div>
          <div className="friction-list">
            {friction.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section signal-section">
        <div className="container">
          <SectionIntro
            eyebrow="Does this sound familiar?"
            title="The most expensive software problem is often the work happening between systems."
            copy="These are the signals I look for before discussing technology. If several are familiar, there is usually an operating problem worth mapping."
          />
          <div className="signal-grid">
            {problemSignals.slice(0, 6).map((signal, index) => <article key={signal}><span>{String(index + 1).padStart(2, "0")}</span><p>{signal}</p></article>)}
          </div>
          <Link className="button secondary" href="/problems">Explore common problems</Link>
        </div>
      </section>

      <section className="section founder-section section-tint">
        <div className="container founder-grid">
          <div>
            <p className="eyebrow">Founder-led by design</p>
            <h2>You work directly with the person building the system.</h2>
          </div>
          <div>
            <p>Cwlwm Systems is a one-person systems studio. There is no sales handoff between the first conversation and delivery. I learn the workflow, map the problem, design the solution, build it, and work with you through implementation.</p>
            <div className="founder-points">
              <span>No account-manager handoff</span>
              <span>One person accountable for the whole system</span>
              <span>Business and technical decisions stay connected</span>
            </div>
            <Link className="text-link" href="/about">Why I built Cwlwm Systems →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="What I build"
            title="Systems for the work that does not fit neatly inside one product."
            copy="I combine software engineering, systems thinking, automation, data, and operations to solve cross-functional business problems end to end."
            action={<Link className="text-link" href="/solutions">All solutions →</Link>}
          />
          <div className="solution-grid">
            {solutions.map((solution) => (
              <Link href={`/solutions#${solution.slug}`} className="solution-card" key={solution.slug}>
                <span>{solution.number}</span><h3>{solution.title}</h3><p>{solution.short}</p><b>Explore →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionIntro
            eyebrow="Representative systems"
            title="Proof through the systems themselves."
            copy="These case studies focus on the operating challenge, system design, workflow, safeguards, and business value. Client-specific names, metrics, screenshots, and testimonials are only published with permission."
            action={<Link className="text-link" href="/case-studies">View all case studies →</Link>}
          />
          <div className="case-grid home-case-grid">
            {caseStudies.slice(0, 3).map((study) => <CaseStudyCard key={study.slug} study={study} />)}
          </div>
        </div>
      </section>

      <section className="section pricing-preview-section">
        <div className="container">
          <SectionIntro
            eyebrow="Engagements & pricing"
            title="Enough pricing clarity to know whether it is worth a conversation."
            copy="I do not force custom work into artificial Basic / Pro / Enterprise packages. These are common starting points; final build pricing follows a written scope."
            action={<Link className="text-link" href="/pricing">Full pricing details →</Link>}
          />
          <div className="pricing-preview-grid">
            {engagementOptions.map((item) => (
              <article key={item.title}>
                <span>{item.title}</span><strong>{item.price}</strong><p>{item.fit}</p><Link href={item.href}>Learn more →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-band">
        <div className="container review-band-grid">
          <div>
            <p className="eyebrow light">Systems & Workflow Review</p>
            <h2>Not ready to scope a build? Start with clarity.</h2>
            <p>A fixed-price review maps one important workflow, the systems and data around it, where it breaks, and what I would prioritize next.</p>
          </div>
          <div className="review-band-price"><span>Fixed price</span><strong>$750</strong><Link className="button button-light" href="/systems-review">See what is included</Link></div>
        </div>
      </section>

      <section className="section ongoing-home-section">
        <div className="container">
          <SectionIntro
            eyebrow="After launch"
            title="Build the system, help the team adopt it, then keep improving it."
            copy="A project can end with a documented handoff, or I can stay involved through maintenance, onboarding, training, troubleshooting, future phases, new integrations, and ongoing systems ownership."
            action={<Link className="text-link" href="/ongoing-partnership">Ongoing partnership details →</Link>}
          />
          <div className="ongoing-preview-grid">
            {ongoingEngagementOptions.slice(0, 3).map((item) => (
              <article key={item.title}>
                <span>{item.title}</span>
                <strong>{item.price}</strong>
                <p>{item.fit}</p>
                <Link className="text-link" href={item.href}>See what is included →</Link>
              </article>
            ))}
          </div>
          <div className="ongoing-home-note">
            <div><p className="eyebrow">Retainers reserve capacity</p><h3>Ongoing does not mean unlimited.</h3></div>
            <p>Monthly partnerships are scoped around expected availability, planned development, support needs, and system complexity. The agreement defines recurring capacity, response expectations, additional work, and any rollover terms.</p>
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
                <h3>{industry.title}</h3><p>{industry.intro}</p><div>{industry.needs.slice(0, 3).map((need) => <span key={need}>{need}</span>)}</div>
              </article>
            ))}
          </div>
          <Link className="button secondary" href="/industries">Explore industries</Link>
        </div>
      </section>

      <section className="section process-home">
        <div className="container">
          <SectionIntro
            eyebrow="What happens after you contact me"
            title="A clear path from problem to working system."
            copy="The goal is to reduce uncertainty before development, not create a long sales process."
            action={<Link className="text-link light-link" href="/approach">See the full approach →</Link>}
          />
          <div className="next-step-grid">
            {nextSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section trust-preview-section">
        <div className="container">
          <SectionIntro
            eyebrow="Trust & ownership"
            title="You should know what you are buying and how you can leave."
            copy="Custom software is easier to trust when ownership, access, hosting, security, handoff, and ongoing support are discussed before they become problems."
            action={<Link className="text-link" href="/trust">Trust & ownership details →</Link>}
          />
          <div className="trust-preview-grid">
            {trustPoints.slice(0, 3).map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionIntro
            eyebrow="Insights"
            title="Useful guidance before you decide to buy anything."
            copy="The best client relationship starts with a clear business problem. These articles explain how I think about automation, integrations, internal tools, and build-vs-buy decisions."
            action={<Link className="text-link" href="/insights">All insights →</Link>}
          />
          <div className="home-insight-grid">
            {insights.slice(0, 3).map((article) => (
              <article key={article.slug}><span>{article.category} · {article.readTime}</span><h3>{article.title}</h3><p>{article.description}</p><Link className="text-link" href={`/insights/${article.slug}`}>Read →</Link></article>
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
            <Link className="text-link" href="/book">Request a fit call →</Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 6).map((faq) => (
              <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
