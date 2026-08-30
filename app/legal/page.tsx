import type { Metadata } from "next";
import Link from "next/link";
import { legal, legalNav } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal & Policies",
  description: "Legal terms, service agreement, privacy, data, security, and accessibility policies for Cwlwm Systems.",
  alternates: { canonical: "/legal" },
};

const descriptions: Record<string, string> = {
  "/terms": "Rules for using the Cwlwm Systems website, content, and public resources.",
  "/service-agreement": "The standard commercial terms that can govern paid consulting, development, integration, and automation work.",
  "/privacy": "How information submitted through this website is collected, used, retained, and protected.",
  "/cookies": "What cookies and similar technologies this website uses now and how future analytics would be handled.",
  "/acceptable-use": "Baseline rules for any hosted portal, API, application, or managed service Cwlwm Systems provides.",
  "/data-processing": "Standard data-processing terms for projects where Cwlwm Systems processes personal data on a client's behalf.",
  "/subprocessors": "Current website infrastructure providers and the approach to project-specific subprocessors.",
  "/billing-cancellation": "Default billing, invoice, cancellation, refund, and third-party cost rules for business engagements.",
  "/security": "The practical security principles used when designing, building, and operating client systems.",
  "/accessibility": "Cwlwm Systems' approach to accessible digital experiences and how to report an accessibility issue.",
};

export default function LegalHubPage() {
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Legal & policies</p>
          <h1>Clear terms for working together.</h1>
          <p>Standard website, service, privacy, data, security, and accessibility policies for Cwlwm Systems.</p>
          <p className="legal-effective">Current version effective {legal.effectiveDate}</p>
        </div>
      </section>
      <section className="section legal-index-section">
        <div className="container">
          <div className="legal-index-intro">
            <div>
              <p className="eyebrow">Before a project starts</p>
              <h2>The signed project documents come first.</h2>
            </div>
            <p>
              These published terms provide a consistent baseline. A proposal, statement of work, order form, data-processing addendum, or other document signed for a specific project can add to or change these terms. If a signed project document conflicts with a published term, the signed project document controls for that project.
            </p>
          </div>
          <div className="legal-card-grid">
            {legalNav.map((item, index) => (
              <Link className="legal-card" href={item.href} key={item.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{descriptions[item.href]}</p>
                <b>Read policy →</b>
              </Link>
            ))}
          </div>
          <div className="legal-review-callout">
            <strong>Contracting note</strong>
            <p>Project-specific scope, pricing, milestones, ownership details, support expectations, and special compliance requirements should be documented in the proposal or statement of work before work begins.</p>
          </div>
        </div>
      </section>
    </>
  );
}
