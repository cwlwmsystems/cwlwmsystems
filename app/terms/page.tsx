import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Cwlwm Systems website and public resources.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms govern access to and use of the Cwlwm Systems website and public resources."
      note="These website terms are separate from the Standard Service Agreement. Paid project work is governed by the applicable proposal, statement of work, order form, and any service agreement referenced by those documents."
    >
      <h2>1. Acceptance of these terms</h2>
      <p>By accessing or using this website, you agree to these Terms of Service. If you do not agree, do not use the website. If you use the site on behalf of an organization, you represent that you have authority to act for that organization.</p>

      <h2>2. Website purpose</h2>
      <p>This site describes Cwlwm Systems, its capabilities, approach, representative system patterns, and ways to request information or discuss a potential project. Site content is general information and is not a promise that a particular service, architecture, timeline, outcome, or technology is appropriate for your business.</p>

      <h2>3. No professional or legal advice</h2>
      <p>Information on this website is not legal, accounting, tax, compliance, cybersecurity certification, or other regulated professional advice. A project involving regulated data, industry-specific obligations, or material legal requirements should be reviewed with the appropriate qualified professionals.</p>

      <h2>4. Intellectual property</h2>
      <p>The website, brand, logo, written content, original diagrams, designs, code used to operate the public site, and other original materials are owned by Cwlwm Systems or used with permission, except where third-party rights are identified. You may view and print reasonable portions for your own internal evaluation of Cwlwm Systems. You may not copy, republish, sell, scrape for redistribution, remove ownership notices, or present the materials as your own.</p>

      <h2>5. Case studies and examples</h2>
      <p>Case studies and system patterns are presented to explain capabilities and design approaches. Details may be generalized, anonymized, simplified, or adapted to protect confidential information. Examples are not guarantees of identical results for another business.</p>

      <h2>6. Acceptable website use</h2>
      <p>You may not use the site to interfere with its operation, probe or bypass security controls without authorization, deliver malware, submit unlawful content, impersonate another person, harvest contact information, overload infrastructure, or attempt unauthorized access to any system connected to the website.</p>

      <h2>7. Inquiries and submissions</h2>
      <p>Submitting a contact form or email does not create a client relationship, confidentiality obligation beyond applicable law, or commitment to perform services. Do not send passwords, private keys, regulated data, highly sensitive personal information, or proprietary production data through the public inquiry form. Confidential project information can be handled through an appropriate channel after an engagement is established.</p>

      <h2>8. Third-party services and links</h2>
      <p>The site may depend on or link to third-party services. Cwlwm Systems does not control third-party websites, platforms, availability, security practices, or terms. Your use of a third-party service is governed by that provider&apos;s own terms.</p>

      <h2>9. Availability and changes</h2>
      <p>The website may be changed, suspended, or unavailable from time to time. Content may be updated without notice. Cwlwm Systems does not guarantee uninterrupted access or that every page will always be current, complete, or error-free.</p>

      <h2>10. Disclaimer of warranties</h2>
      <p>The website and public content are provided on an “as is” and “as available” basis to the extent permitted by law. Cwlwm Systems disclaims implied warranties relating to the public website, including merchantability, fitness for a particular purpose, and non-infringement, to the extent those warranties can legally be disclaimed.</p>

      <h2>11. Limitation of liability</h2>
      <p>To the extent permitted by law, Cwlwm Systems will not be liable for indirect, incidental, special, consequential, exemplary, or lost-profit damages arising from use of or inability to use this public website. Nothing in these terms excludes liability that cannot legally be excluded.</p>

      <h2>12. Privacy</h2>
      <p>Information collected through this site is handled as described in the <a href="/privacy">Privacy Policy</a> and <a href="/cookies">Cookie Policy</a>.</p>

      <h2>13. Changes to these terms</h2>
      <p>These terms may be revised as the site or services evolve. The effective date at the top of this page identifies the current published version. Continued use of the website after an update means the updated terms apply to future use.</p>

      <h2>14. Severability</h2>
      <p>If a provision of these terms is found unenforceable, the remaining provisions will remain in effect to the extent permitted by law.</p>
    </LegalPage>
  );
}
