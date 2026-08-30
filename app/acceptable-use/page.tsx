import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Acceptable-use rules for Cwlwm Systems hosted applications, portals, APIs, and managed services.",
  alternates: { canonical: "/acceptable-use" },
};

export default function AcceptableUsePage() {
  return (
    <LegalPage
      title="Acceptable Use Policy"
      intro="Baseline rules for any hosted application, portal, API, automation, or managed service made available by Cwlwm Systems."
      note="This policy applies only to a service or system that Cwlwm Systems hosts, manages, or makes available for use. Client-owned deployments may be governed primarily by the client's own policies and the applicable project agreement."
    >
      <h2>1. Lawful and authorized use</h2>
      <p>Users may use a covered service only for lawful business purposes and within the permissions granted by the applicable Client or project agreement. Users must not use a covered service to violate law, regulation, contractual rights, privacy rights, intellectual property rights, or another person's rights.</p>

      <h2>2. Account and access security</h2>
      <p>Users must protect credentials, use individual accounts when required, follow authentication controls, and promptly report suspected compromise. Access must not be shared, sold, transferred, or used to impersonate another user unless the system expressly supports delegated access.</p>

      <h2>3. Prohibited security activity</h2>
      <p>Unless expressly authorized in writing for legitimate security testing, users may not probe, scan, exploit, bypass, disable, or interfere with authentication, authorization, rate limits, logging, network controls, data separation, or other security mechanisms. Users may not attempt to access another customer, tenant, account, record, or system beyond their authorization.</p>

      <h2>4. Malicious or disruptive content</h2>
      <p>Users may not upload, transmit, execute, or distribute malware, ransomware, destructive code, credential-stealing material, or content intended to compromise systems. Users may not deliberately overload infrastructure, create abusive automated traffic, or interfere with service availability for others.</p>

      <h2>5. Spam and abusive automation</h2>
      <p>Covered services may not be used to send unlawful or unsolicited bulk communications, facilitate phishing, harvest credentials, create deceptive identities, or automate activity that violates the rules of a connected third-party platform.</p>

      <h2>6. Data and content responsibilities</h2>
      <p>Users must have appropriate rights and authority to submit data to a covered service. Highly sensitive or regulated data should not be placed into a system unless the applicable SOW expressly confirms that the system is designed and approved for that data type.</p>

      <h2>7. High-impact decisions</h2>
      <p>AI-assisted or automated functionality must not be used as the sole basis for a high-impact decision involving legal rights, employment, credit, healthcare, safety, or another regulated decision unless the applicable project expressly includes the necessary review, validation, and compliance controls.</p>

      <h2>8. Resource abuse</h2>
      <p>Users may not intentionally consume unreasonable compute, storage, API quota, bandwidth, or other resources in a manner that materially degrades the covered service or creates unapproved third-party charges.</p>

      <h2>9. Enforcement</h2>
      <p>Cwlwm Systems may restrict or suspend access when reasonably necessary to address a security incident, unlawful use, material policy violation, or immediate threat to systems or data. When practicable, Cwlwm Systems will work with the Client to resolve the issue before longer-term restrictions are imposed.</p>

      <h2>10. Reporting concerns</h2>
      <p>Suspected abuse or unauthorized use should be reported promptly using the contact address below with enough information to investigate safely.</p>
    </LegalPage>
  );
}
