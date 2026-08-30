import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { trustPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trust, Ownership & Delivery",
  description: "How Cwlwm Systems approaches ownership, hosting, security, documentation, client access, ongoing support, continuity, and project handoff.",
  alternates: { canonical: "/trust" },
};

export default function TrustPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Trust & ownership</p>
          <h1>Custom software should not make you dependent on mystery.</h1>
          <p>You should understand what is being built, where it runs, who controls it, what happens if something fails, how ongoing support works, and what happens if the working relationship ends.</p>
        </div>
      </section>

      <section className="section">
        <div className="container trust-grid">
          {trustPoints.map((item, index) => (
            <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item.title}</h2><p>{item.copy}</p></article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container ownership-grid">
          <div><p className="eyebrow">Plain-language ownership</p><h2>Your project should have an exit path.</h2></div>
          <div>
            <p>Project-specific ownership is defined in the signed service agreement and statement of work. The standard agreement is written so project-specific deliverables can transfer to the client after the agreed payment requirements are satisfied, while Cwlwm Systems retains reusable background tools, methods, frameworks, and know-how.</p>
            <p>Where practical, I can build with client-controlled repositories, cloud accounts, domains, or service accounts so a handoff does not require rebuilding the system from scratch somewhere else. If you prefer continuity instead, I can stay involved through a separately scoped ongoing systems partnership without changing those ownership principles.</p>
            <div className="trust-links"><Link className="text-link" href="/service-agreement">Read the standard Service Agreement →</Link><Link className="text-link" href="/security">Read Security Practices →</Link><Link className="text-link" href="/ongoing-partnership">Ongoing systems partnership →</Link></div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
