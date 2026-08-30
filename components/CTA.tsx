import Link from "next/link";

export function CTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "cta-band compact" : "cta-band"}>
      <div className="container cta-inner">
        <div>
          <p className="eyebrow light">Start with the problem</p>
          <h2>Tell us what is slowing the business down.</h2>
          {!compact ? <p>You do not need a software specification. Describe the manual process, disconnected tools, reporting gap, or workflow that is creating friction.</p> : null}
        </div>
        <Link className="button button-light" href="/contact">Start a project <span>↗</span></Link>
      </div>
    </section>
  );
}
