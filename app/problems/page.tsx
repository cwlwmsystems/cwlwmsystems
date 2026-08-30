import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { problemSignals, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Problems I Solve",
  description: "Common signs that a business may benefit from custom workflow software, integration, automation, data systems, or an operational platform.",
  alternates: { canonical: "/problems" },
};

export default function ProblemsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Problems I solve</p>
          <h1>Start with the friction you can see.</h1>
          <p>You do not need to know whether the answer is software, integration, automation, or a process change. The useful starting point is the part of the business that is harder to operate than it should be.</p>
        </div>
      </section>

      <section className="section">
        <div className="container problem-signal-layout">
          <div className="problem-signal-intro">
            <p className="eyebrow">You may need Cwlwm Systems if…</p>
            <h2>The business is paying people to compensate for disconnected systems.</h2>
          </div>
          <div className="problem-signal-list">
            {problemSignals.map((signal, index) => (
              <article key={signal}><span>{String(index + 1).padStart(2, "0")}</span><p>{signal}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-intro">
            <div><p className="eyebrow">What that can become</p><h2>The solution is determined by the workflow, not the buzzword.</h2></div>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <Link className="solution-card" href={`/solutions#${solution.slug}`} key={solution.slug}>
                <span>{solution.number}</span><h3>{solution.title}</h3><p>{solution.short}</p><b>See the pattern →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container diagnostic-cta">
          <div><p className="eyebrow">Not sure what to build?</p><h2>That is what discovery is for.</h2><p>A good first conversation should clarify the problem, not pressure you into a predetermined solution.</p></div>
          <div><Link className="button primary" href="/book">Request a fit call</Link><Link className="text-link" href="/systems-review">Or start with a paid Systems Review →</Link></div>
        </div>
      </section>
      <CTA compact />
    </>
  );
}
