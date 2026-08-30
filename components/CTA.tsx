import Link from "next/link";

export function CTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "cta-band compact" : "cta-band"}>
      <div className="container cta-inner">
        <div>
          <p className="eyebrow light">Start with the problem</p>
          <h2>What is the business doing manually that it should not be?</h2>
          {!compact ? <p>Describe the process, disconnected tools, reporting gap, repetitive work, or handoff that is creating friction. I can help determine whether the right answer is a process change, integration, automation, or custom system.</p> : null}
        </div>
        <div className="cta-actions">
          <Link className="button button-light" href="/contact">Start a project <span>↗</span></Link>
          {!compact ? <Link className="button button-ghost-light" href="/book">Request a 20-minute fit call</Link> : null}
        </div>
      </div>
    </section>
  );
}
