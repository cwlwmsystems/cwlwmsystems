import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Subprocessors",
  description: "Infrastructure providers and subprocessor approach for Cwlwm Systems website and client projects.",
  alternates: { canonical: "/subprocessors" },
};

export default function SubprocessorsPage() {
  return (
    <LegalPage
      eyebrow="Client data"
      title="Subprocessors"
      intro="Infrastructure providers that may support the Cwlwm Systems website and the approach used for project-specific service providers."
      note="A client project may use a different set of providers based on the agreed architecture. Material project-specific subprocessors that handle Client Personal Data should be identified during scoping or provided to the Client on request."
    >
      <h2>Public website infrastructure</h2>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead><tr><th>Provider</th><th>Purpose</th><th>When used</th></tr></thead>
          <tbody>
            <tr><td>Vercel</td><td>Website hosting, edge delivery, request processing, and platform security.</td><td>Used to host the public Cwlwm Systems website.</td></tr>
            <tr><td>Resend</td><td>Server-side delivery of project inquiry emails.</td><td>Used only when the contact-form email integration is enabled.</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Client project providers</h2>
      <p>Custom systems can require cloud hosting, databases, identity providers, email or messaging services, monitoring, source control, mapping, analytics, AI services, or APIs selected for the specific project. Cwlwm Systems does not force every Client into a single vendor stack.</p>
      <p>Provider selection should consider the Client's existing environment, security requirements, data type, cost, integration needs, availability requirements, and contractual obligations.</p>

      <h2>Changes</h2>
      <p>If Cwlwm Systems is responsible for an ongoing hosted service that processes Client Personal Data and a material new subprocessor is added, Cwlwm Systems will provide reasonable notice through an agreed project channel or updated documentation when required by the applicable contract.</p>

      <h2>Third-party terms</h2>
      <p>Each third-party provider operates under its own terms, privacy practices, security program, service levels, and geographic infrastructure. Where the Client directly owns the provider account, the Client's agreement with that provider also governs that service.</p>

      <h2>Related terms</h2>
      <p>See the <a href="/data-processing">Data Processing Terms</a>, <a href="/security">Security Practices</a>, and applicable project SOW for additional responsibilities concerning Client data and third-party services.</p>
    </LegalPage>
  );
}
