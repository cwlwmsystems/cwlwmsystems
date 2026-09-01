import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Standard Service Agreement",
  description: "Standard commercial terms for Cwlwm Systems consulting, custom software, integration, automation, and related services.",
  alternates: { canonical: "/service-agreement" },
};

export default function ServiceAgreementPage() {
  return (
    <LegalPage
      eyebrow="Client agreement"
      title="Standard Service Agreement"
      intro="Baseline commercial terms for consulting, custom software, integrations, automation, data work, and related professional services."
      note="This agreement applies only when a proposal, statement of work, order form, email authorization, or other project document expressly references it or the parties otherwise agree that it governs the engagement. A signed project document controls if it conflicts with this standard agreement."
    >
      <h2>1. Agreement structure</h2>
      <p>This Standard Service Agreement (the “Agreement”) is between Cwlwm Systems (“Cwlwm Systems”) and the customer identified in an applicable proposal, statement of work, order form, or other written authorization (“Client”). Each project document that references this Agreement is a “Statement of Work” or “SOW.” The SOW defines the project-specific scope, fees, schedule, deliverables, assumptions, and any special terms.</p>

      <h2>2. Services</h2>
      <p>Cwlwm Systems will perform the services described in the applicable SOW using reasonable professional care. Services may include discovery, process mapping, technical design, software development, systems integration, workflow automation, data processing, reporting, AI-assisted workflows, deployment, documentation, training, or other work specifically described in the SOW.</p>
      <p>Anything not reasonably described in the agreed scope is outside scope. New features, materially changed requirements, additional integrations, unexpected data remediation, expanded compliance requirements, or rework caused by changed assumptions may require a written change in scope, schedule, or fees.</p>

      <h2>3. Client responsibilities</h2>
      <p>Client will provide timely access to appropriate personnel, systems, documentation, credentials, test data, APIs, licenses, decisions, and approvals reasonably needed for the work. Client is responsible for the accuracy and legality of materials and instructions it provides and for obtaining permissions necessary for Cwlwm Systems to access Client-controlled systems and data.</p>
      <p>Delays in required Client input may affect delivery dates. Cwlwm Systems is not responsible for delay caused by missing access, unavailable Client personnel, third-party approval, or dependencies outside Cwlwm Systems&apos; reasonable control.</p>

      <h2>4. Fees, invoices, and expenses</h2>
      <p>Fees and payment milestones are stated in the SOW. Unless the SOW states otherwise, invoices are due within fourteen (14) calendar days of the invoice date. Client is responsible for applicable sales, use, or similar transaction taxes other than taxes based on Cwlwm Systems&apos; net income.</p>
      <p>Material third-party costs or reimbursable expenses will be included only when stated in the SOW or approved by Client. If an undisputed invoice becomes materially overdue, Cwlwm Systems may pause affected work after reasonable notice until the account is brought current.</p>

      <h2>5. Changes to scope</h2>
      <p>Either party may request a change. A material change is not part of the project until the parties agree in writing on any effect to scope, assumptions, fees, responsibilities, or schedule. Email approval is sufficient when it clearly identifies the requested change and commercial effect.</p>

      <h2>6. Delivery, review, and acceptance</h2>
      <p>Client will review deliverables within ten (10) business days after delivery or another period stated in the SOW. If a deliverable materially fails to meet an expressly agreed requirement, Client will provide enough detail to reproduce and evaluate the issue. Cwlwm Systems will make reasonable corrections for in-scope nonconformities.</p>
      <p>A deliverable is considered accepted when Client approves it in writing, places it into production use, or does not identify a material in-scope nonconformity within the review period. Minor defects that do not materially prevent intended use do not delay acceptance and can be handled through an agreed correction plan.</p>

      <h2>7. Intellectual property</h2>
      <h3>Client materials</h3>
      <p>Client retains ownership of data, content, trademarks, documentation, code, systems, and other materials supplied by Client (“Client Materials”). Client grants Cwlwm Systems a limited right to use Client Materials only as reasonably necessary to perform the services.</p>
      <h3>Background technology</h3>
      <p>Cwlwm Systems retains ownership of pre-existing materials and reusable know-how, methods, architecture patterns, utilities, libraries, templates, generic components, development techniques, and tools that were not created exclusively for Client (“Background Technology”).</p>
      <h3>Project-specific deliverables</h3>
      <p>Unless the SOW states otherwise, after full payment of all amounts due for the applicable project, Client owns the project-specific source code, configurations, documentation, designs, and other deliverables created expressly for Client, excluding Background Technology and third-party materials. To the extent Background Technology is embedded in a paid deliverable, Client receives a perpetual, non-exclusive, worldwide license to use that Background Technology as part of the deliverable for Client&apos;s internal business purposes and operation of the delivered system.</p>
      <h3>Third-party and open-source materials</h3>
      <p>Third-party software, APIs, libraries, platforms, and open-source components remain subject to their own licenses and terms. Cwlwm Systems does not transfer ownership of third-party materials.</p>

      <h2>8. Confidentiality</h2>
      <p>Each party may receive non-public business, technical, financial, customer, security, or operational information from the other (“Confidential Information”). The receiving party will use Confidential Information only for the engagement, protect it using reasonable care, and disclose it only to people or service providers who need it for the engagement and are subject to appropriate confidentiality obligations.</p>
      <p>Confidential Information does not include information that is public through no breach of this Agreement, was lawfully known without restriction before disclosure, is received lawfully from another source without confidentiality duty, or is independently developed without use of the other party&apos;s Confidential Information. A legally required disclosure is permitted if the receiving party gives notice when legally allowed and reasonably cooperates in seeking protective treatment.</p>

      <h2>9. Data protection and security</h2>
      <p>Each party will comply with privacy and security obligations that legally apply to its role. When Cwlwm Systems processes personal data on Client&apos;s behalf in a manner that requires processor or service-provider terms, the <a href="/data-processing">Data Processing Terms</a> apply unless the parties sign a separate data-processing agreement.</p>
      <p>Cwlwm Systems will use reasonable security practices appropriate to the services and described generally on the <a href="/security">Security page</a>. Client is responsible for identifying special regulatory, contractual, retention, residency, encryption, audit, or security requirements before work begins so they can be expressly included in the SOW. Cwlwm Systems does not represent that a project is compliant with a specific legal or industry framework unless that obligation is expressly included in the SOW.</p>

      <h2>10. Third-party services</h2>
      <p>A project may depend on third-party platforms such as cloud hosting, databases, email providers, analytics tools, APIs, AI providers, mapping services, CRM systems, or other software selected by Client or approved for the project. Third-party availability, pricing, terms, limits, security, and product changes are controlled by those providers. Client is responsible for third-party subscription or usage fees unless the SOW says otherwise.</p>

      <h2>11. AI-assisted functionality</h2>
      <p>If a project includes machine-learning or generative-AI functionality, the SOW should identify the intended use, provider, data handling assumptions, and any required human review. AI outputs can be incomplete or incorrect and should not be treated as independently authoritative for high-impact decisions unless the project expressly includes appropriate validation and controls.</p>

      <h2>12. Warranty and correction period</h2>
      <p>Cwlwm Systems warrants that services will be performed in a professional and workmanlike manner. Unless the SOW provides a different period, Cwlwm Systems will correct reproducible, material defects reported within thirty (30) days after acceptance when the defect is caused by the delivered work failing to perform an expressly agreed requirement.</p>
      <p>This correction obligation does not cover problems caused by Client changes, unsupported third-party changes, misuse, environments outside the agreed configuration, data quality issues outside scope, or systems modified by others after delivery. Except for the express warranty above and to the extent permitted by law, other warranties are disclaimed.</p>

      <h2>13. Implementation, training, support, and recurring services</h2>
      <p>Implementation services such as data migration, administrator configuration, user onboarding, team training, launch support, documentation, standard operating procedures, or post-launch refinement are included only to the extent described in the SOW.</p>
      <p>Ongoing support, monitoring, hosting administration, maintenance, updates, backups, incident response, training, onboarding, future development phases, fractional systems services, or on-call availability are included only if the SOW expressly includes them. Otherwise, post-acceptance work is handled under a new SOW, support arrangement, retainer, or approved additional work.</p>
      <h3>Recurring retainers and reserved capacity</h3>
      <p>A recurring retainer reserves the level of Cwlwm Systems availability, delivery capacity, and services described in the applicable SOW. A retainer does not provide unlimited development, unlimited support, or unrestricted on-call availability unless the SOW expressly states otherwise. The SOW should identify included capacity, priority rules, response expectations, additional-work rates, billing cadence, and whether unused capacity rolls forward.</p>
      <h3>Phased development</h3>
      <p>When a project is divided into phases, each phase may have its own scope, assumptions, acceptance criteria, payment milestone, or authorization point. Completion of one phase does not automatically require Client to authorize a later phase unless the applicable SOW expressly creates that commitment.</p>

      <h2>14. Publicity and portfolio use</h2>
      <p>Cwlwm Systems will not publish Client confidential information. Client name, logo, screenshots, metrics, testimonial language, or identifiable project details will not be used publicly without Client permission. Cwlwm Systems may continue to use general skills, experience, non-confidential know-how, and generalized or anonymized system patterns developed through the work.</p>

      <h2>15. Termination</h2>
      <p>Either party may terminate an engagement if the other materially breaches the agreement and does not cure the breach within ten (10) business days after written notice when the breach can reasonably be cured. Client may also stop a project for convenience by written notice. For recurring or retainer services, any notice period, renewal term, or end-of-cycle cancellation rule stated in the SOW applies. Client will pay for services performed through the effective termination date, reserved capacity or approved non-cancelable commitments that are payable under the SOW, and any other amounts expressly identified there. Any unused prepaid amount that is refundable under the SOW will be returned after final reconciliation.</p>
      <p>Upon termination, each party will reasonably cooperate in returning Client property and providing paid-for work in progress in its then-current state. Sections concerning payment, intellectual property, confidentiality, data protection, disclaimers, liability, and other provisions that by their nature should survive will survive termination.</p>

      <h2>16. Limitation of liability</h2>
      <p>To the extent permitted by law, neither party will be liable to the other for indirect, incidental, special, exemplary, punitive, or consequential damages, or for lost profits, lost revenue, lost business opportunity, or loss of goodwill arising from the engagement, even if the possibility was known.</p>
      <p>To the extent permitted by law, Cwlwm Systems&apos; aggregate liability arising from an applicable SOW will not exceed the fees actually paid to Cwlwm Systems under that SOW during the six (6) months preceding the event giving rise to the claim, or the total fees paid under that SOW if the engagement has existed for less than six months. This limitation does not reduce Client&apos;s obligation to pay undisputed fees and does not apply to liability that cannot legally be limited.</p>

      <h2>17. Independent contractor</h2>
      <p>Cwlwm Systems is an independent contractor. Nothing in the Agreement creates an employment relationship, partnership, joint venture, fiduciary relationship, franchise, or agency authority between the parties.</p>

      <h2>18. Force majeure</h2>
      <p>Neither party is responsible for delay caused by events beyond its reasonable control, such as widespread infrastructure failure, natural disaster, government action, labor disruption, internet or cloud outage, war, civil unrest, or failure of a critical third-party service, provided the affected party uses reasonable efforts to reduce the impact.</p>

      <h2>19. Dispute resolution</h2>
      <p>Before filing a formal claim, the parties will make a good-faith effort to resolve the issue through direct discussion between people authorized to settle the dispute. Either party may seek urgent equitable relief when reasonably necessary to protect confidential information, intellectual property, system access, or security.</p>

      <h2>20. Notices</h2>
      <p>Project notices may be delivered by email to the business contacts used for the engagement unless the SOW requires another method. A party should promptly notify the other if its notice contact changes.</p>

      <h2>21. Entire agreement and order of precedence</h2>
      <p>The applicable SOW, this Agreement, any signed data-processing terms, and documents expressly incorporated by reference form the entire agreement for the covered services and replace prior discussions about the same scope. If documents conflict, the order of precedence is: (1) a signed amendment or SOW provision that expressly overrides another term, (2) the SOW, (3) a signed data-processing addendum for data-protection matters, and (4) this Standard Service Agreement.</p>

      <h2>22. Assignment and severability</h2>
      <p>Neither party may assign a project agreement to an unrelated third party without the other party&apos;s reasonable consent, except in connection with a merger, acquisition, reorganization, or sale of substantially all relevant business assets. If a provision is unenforceable, it will be limited to the minimum extent necessary and the remaining provisions will continue in effect.</p>
    </LegalPage>
  );
}
