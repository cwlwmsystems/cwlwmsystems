import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Security",
  description: "Security principles and data-handling practices used by Cwlwm Systems.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return (
    <LegalPage
      eyebrow="Trust"
      title="Security Practices"
      intro="Practical security principles for the systems Cwlwm Systems designs, builds, integrates, and operates."
      note="Security is project-specific. This page describes general practices, not a certification, warranty, or promise that every control listed is included in every engagement. Material security or compliance requirements should be written into the SOW."
    >
      <h2>Secure-by-design priorities</h2>
      <ul>
        <li><strong>Least privilege:</strong> access is designed around the minimum permissions a user or service needs.</li>
        <li><strong>Authentication and authorization:</strong> systems use appropriate identity and role controls where the workflow requires them.</li>
        <li><strong>Secrets management:</strong> credentials, API keys, and environment secrets should be kept out of client-side code and source files intended for public access.</li>
        <li><strong>Encrypted transport:</strong> production web traffic and service-to-service communication should use encrypted transport where supported.</li>
        <li><strong>Environment separation:</strong> development, staging, and production concerns are separated when project risk and scope warrant it.</li>
        <li><strong>Validation:</strong> inputs, business rules, and data boundaries are validated rather than relying only on user-interface behavior.</li>
        <li><strong>Operational visibility:</strong> appropriate logging, error handling, and monitoring are used so failures are visible instead of silent.</li>
      </ul>

      <h2>Data minimization</h2>
      <p>The preferred design is to collect and retain only the data required for the business workflow. Sensitive data should not be copied into additional systems merely because it is available. When a workflow can operate with a stable identifier or limited field set instead of a full source record, that narrower approach is preferred.</p>

      <h2>Third-party platforms</h2>
      <p>Security also depends on the cloud providers, databases, APIs, identity systems, and other third-party services selected for a project. Cwlwm Systems evaluates those dependencies in the context of project requirements, but does not control a third party&apos;s infrastructure, security program, availability, or product changes.</p>

      <h2>Dependencies and maintenance</h2>
      <p>For maintained systems, reasonable efforts are made to keep critical runtime dependencies current, address known material vulnerabilities, and avoid unsupported software where practical. Responsibility for ongoing patching and maintenance after handoff depends on the support arrangement stated in the SOW.</p>

      <h2>Backups and recovery</h2>
      <p>Backup, recovery-point, recovery-time, retention, and disaster-recovery requirements vary significantly by system. They are included only when they are part of the agreed architecture or hosting responsibility. Client-owned systems remain subject to the Client&apos;s own backup and recovery practices unless the SOW assigns those responsibilities to Cwlwm Systems.</p>

      <h2>Incident response</h2>
      <p>If Cwlwm Systems is operating a covered system and confirms a security incident within its responsibility, the response priority is to contain the issue, preserve useful evidence, protect data and access, understand scope, restore safe operation, and communicate with the affected Client according to the applicable agreement.</p>

      <h2>Client responsibilities</h2>
      <p>Security is shared. Clients are responsible for protecting credentials they control, promptly removing access for departed users, maintaining secure endpoints, reviewing permissions, providing accurate compliance requirements, and avoiding the transmission of sensitive data through channels not designed for it.</p>

      <h2>Compliance and certifications</h2>
      <p>Cwlwm Systems does not claim SOC 2, ISO 27001, PCI DSS, HIPAA certification, or another formal security certification unless that claim is expressly stated in a current written document. If a project must meet a particular regulatory or contractual framework, the requirement should be identified during scoping so the architecture, providers, documentation, and responsibilities can be evaluated appropriately.</p>

      <h2>Reporting a vulnerability</h2>
      <p>If you believe you found a security issue in a Cwlwm Systems website or a system Cwlwm Systems directly operates, please report it privately using the contact address below. Include the affected URL or system, a clear description, reproduction steps when safe, and potential impact. Do not access data that is not yours, disrupt production, or publicly disclose an unresolved issue.</p>
    </LegalPage>
  );
}
