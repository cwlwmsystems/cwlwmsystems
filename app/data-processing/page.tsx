import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Data Processing Terms",
  description: "Standard data-processing terms for Cwlwm Systems client projects.",
  alternates: { canonical: "/data-processing" },
};

export default function DataProcessingPage() {
  return (
    <LegalPage
      eyebrow="Client data"
      title="Data Processing Terms"
      intro="Standard terms for projects where Cwlwm Systems processes personal data on a client's behalf."
      note="These terms are intended to supplement the applicable Service Agreement or SOW when Cwlwm Systems acts as a processor or service provider for Client personal data. If a Client requires a separate signed DPA, industry-specific addendum, or jurisdiction-specific transfer mechanism, that should be agreed before the relevant processing begins."
    >
      <h2>1. Roles and scope</h2>
      <p>For personal data that Cwlwm Systems processes on Client&apos;s behalf to provide contracted services (“Client Personal Data”), Client determines the business purpose and permitted use of the data, and Cwlwm Systems processes the data only as reasonably necessary to provide the contracted services and follow Client&apos;s documented instructions.</p>
      <p>These terms do not apply to ordinary business contact information that Cwlwm Systems processes for its own account-management, invoicing, security, or legal purposes; that information is handled under the <a href="/privacy">Privacy Policy</a>.</p>

      <h2>2. Processing instructions</h2>
      <p>The applicable SOW, Client configuration choices, authorized support requests, and written project instructions form the documented processing instructions. Cwlwm Systems will not materially expand the purpose of processing Client Personal Data without Client authorization unless required by law.</p>

      <h2>3. Client responsibilities</h2>
      <p>Client is responsible for determining that it has a lawful basis and appropriate notices, permissions, consents, and authority to provide Client Personal Data for the agreed processing. Client will not instruct Cwlwm Systems to process data in a manner that Client knows violates applicable law.</p>

      <h2>4. Confidentiality</h2>
      <p>People authorized to process Client Personal Data for Cwlwm Systems will be subject to confidentiality obligations appropriate to their role. Access will be limited to what is reasonably necessary to provide or support the contracted service.</p>

      <h2>5. Security measures</h2>
      <p>Cwlwm Systems will apply reasonable technical and organizational measures appropriate to the nature of the project and data, which may include access controls, encrypted transport, credential and secret management, environment separation, logging, backups where in scope, and vulnerability or dependency maintenance. General security principles are described on the <a href="/security">Security page</a>; project-specific requirements must be stated in the SOW when they are material to the engagement.</p>

      <h2>6. Subprocessors</h2>
      <p>Client authorizes Cwlwm Systems to use third-party service providers reasonably necessary to deliver the contracted service, subject to appropriate data-protection obligations. Depending on the project, these may include cloud hosting, database, email, monitoring, source-control, AI, analytics, or other infrastructure providers.</p>
      <p>For the public website, current infrastructure is designed around Vercel for hosting and may use Resend for contact-form email delivery when enabled. Project-specific subprocessors and data flows should be identified during project scoping when they materially process Client Personal Data.</p>

      <h2>7. Assistance with individual rights</h2>
      <p>Taking into account the nature of the processing, Cwlwm Systems will provide reasonable assistance when Client needs information or technical action to respond to a valid request from an individual concerning Client Personal Data. Client remains responsible for evaluating and responding to the request unless applicable law assigns a different responsibility.</p>

      <h2>8. Security incidents</h2>
      <p>If Cwlwm Systems confirms unauthorized access to or acquisition, alteration, loss, or disclosure of Client Personal Data within Cwlwm Systems&apos; responsibility that reasonably constitutes a reportable personal-data incident, Cwlwm Systems will notify Client without undue delay and provide reasonably available information needed to understand the nature and scope of the incident.</p>
      <p>Notice of an incident is not an admission of fault or liability. Client is responsible for determining any notification obligations that apply to Client unless the parties agree otherwise.</p>

      <h2>9. Deletion and return</h2>
      <p>At the end of the applicable services, Cwlwm Systems will, upon reasonable request and subject to the technical design of the project, return or delete Client Personal Data within Cwlwm Systems&apos; control unless retention is required by law, necessary for legitimate dispute or security records, or temporarily present in protected backups that are not reasonably accessible for ordinary use and will expire under normal retention cycles.</p>

      <h2>10. Audits and information requests</h2>
      <p>Cwlwm Systems will provide information reasonably necessary to demonstrate compliance with these terms. If a Client has a legal requirement for additional assessment, the parties will first try to satisfy it through existing documentation, architecture information, or written responses. Any on-site or intrusive audit must be reasonably scoped, protect other clients and confidential systems, occur no more than once annually absent a verified incident or legal requirement, and be scheduled with reasonable advance notice.</p>

      <h2>11. International transfers</h2>
      <p>Project infrastructure may process data in the United States or other locations supported by the selected service providers. If applicable law requires a particular cross-border transfer mechanism or data-residency commitment, that requirement must be identified and agreed before the relevant processing begins.</p>

      <h2>12. Conflicts</h2>
      <p>For data-protection matters, a separately signed DPA or data-protection provision in an SOW controls over these published terms to the extent of a direct conflict. The remainder of the Service Agreement continues to apply.</p>
    </LegalPage>
  );
}
