import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Cwlwm Systems website and business inquiries.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how Cwlwm Systems handles personal information received through this website and ordinary business communications."
    >
      <h2>1. Scope</h2>
      <p>This Privacy Policy applies to information Cwlwm Systems receives through this website, the project inquiry form, and ordinary pre-sales or business communications. A client project may involve different data-processing activities governed by the applicable contract and, where appropriate, the <a href="/data-processing">Data Processing Terms</a>.</p>

      <h2>2. Information you provide</h2>
      <p>If you contact Cwlwm Systems, submit a project inquiry, or communicate about services, Cwlwm Systems may receive information such as your name, business email, phone number, company, role, project details, budget or timing information, and any other information you choose to provide.</p>
      <p>Please do not submit passwords, authentication secrets, payment-card data, regulated health information, government identifiers, or other highly sensitive information through the public contact form.</p>

      <h2>3. Information collected automatically</h2>
      <p>Web hosting and security infrastructure may process ordinary technical information when you visit the site, including IP address, request time, browser or device information, requested URL, referring page, and diagnostic or security logs. Cwlwm Systems does not intentionally use the launch version of this site for behavioral advertising or cross-site tracking.</p>

      <h2>4. How information is used</h2>
      <ul>
        <li>Respond to inquiries and communicate about requested services.</li>
        <li>Evaluate whether a project may be a good fit and prepare proposals or scopes.</li>
        <li>Operate, secure, troubleshoot, and improve the website.</li>
        <li>Prevent spam, abuse, fraud, or unauthorized activity.</li>
        <li>Maintain reasonable business, accounting, and legal records.</li>
        <li>Comply with legal obligations and protect rights, safety, and systems.</li>
      </ul>

      <h2>5. How information is shared</h2>
      <p>Cwlwm Systems does not sell personal information. Information may be shared with service providers that support website hosting, email delivery, security, or other business operations; with professional advisers when reasonably necessary; when required by law or valid legal process; or in connection with a business reorganization or transfer where legally permitted.</p>
      <p>Service providers are expected to process information only for the purpose of providing their services and according to their own contractual and legal obligations.</p>

      <h2>6. Website service providers</h2>
      <p>This website is designed to run on Vercel infrastructure. If server-side contact-form delivery is enabled, email delivery may be handled through Resend. Additional tools may be added over time; this policy and the <a href="/cookies">Cookie Policy</a> will be updated if the site's data practices materially change.</p>

      <h2>7. Cookies and analytics</h2>
      <p>The current site does not intentionally set advertising cookies. Necessary technical storage or request data may be used by hosting infrastructure for delivery, security, and reliability. If optional analytics or similar technologies are enabled later, Cwlwm Systems will describe them in the <a href="/cookies">Cookie Policy</a> and provide controls where required.</p>

      <h2>8. Data retention</h2>
      <p>Inquiry and business communication records may be retained for as long as reasonably necessary to respond, pursue or manage a business relationship, maintain records, resolve disputes, prevent abuse, or satisfy legal obligations. Technical logs are generally retained according to the settings and practices of the applicable infrastructure provider.</p>

      <h2>9. Security</h2>
      <p>Cwlwm Systems uses reasonable administrative and technical measures appropriate to the nature of the information handled. No website, transmission method, or storage system can be guaranteed completely secure. More information about the security approach is available on the <a href="/security">Security page</a>.</p>

      <h2>10. Your privacy choices and rights</h2>
      <p>Depending on where you live, applicable law may provide rights to request access to, correction of, deletion of, or a copy of personal information, or to object to or restrict certain processing. You may also ask whether Cwlwm Systems holds personal information you previously submitted.</p>
      <p>Requests can be sent to the contact address below. Cwlwm Systems may need to verify your identity and may retain information where required or permitted for legal, security, contractual, or legitimate business reasons.</p>

      <h2>11. Children</h2>
      <p>This website and Cwlwm Systems' services are directed to businesses and are not intended for children. Cwlwm Systems does not knowingly solicit personal information from children under 13 through this website.</p>

      <h2>12. International visitors</h2>
      <p>Cwlwm Systems operates from the United States, and website infrastructure or service providers may process information in the United States or other countries. Where a client engagement requires specific international transfer terms, those requirements should be addressed in the project agreement or data-processing terms.</p>

      <h2>13. Changes to this policy</h2>
      <p>This policy may be updated as the website, service providers, or business practices change. The effective date at the top identifies the current version. Material changes will be reflected on this page before or when the changed practice takes effect where reasonably practicable.</p>
    </LegalPage>
  );
}
