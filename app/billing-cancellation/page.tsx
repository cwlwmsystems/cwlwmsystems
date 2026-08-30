import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Billing & Cancellation Policy",
  description: "Default billing, payment, retainer, recurring-service, cancellation, and refund policies for Cwlwm Systems business engagements.",
  alternates: { canonical: "/billing-cancellation" },
};

export default function BillingCancellationPage() {
  return (
    <LegalPage
      eyebrow="Commercial terms"
      title="Billing & Cancellation"
      intro="Default commercial rules for Cwlwm Systems business engagements when a project document does not state something different."
      note="A signed proposal, statement of work, order form, or amendment can replace any default on this page. Project-specific documents control when they conflict with this policy."
    >
      <h2>1. Project pricing</h2>
      <p>Project fees may be fixed-price, milestone-based, time-and-materials, recurring, or another structure stated in the applicable proposal or SOW. Cwlwm Systems will not treat an informal website inquiry as authorization to begin billable work.</p>

      <h2>2. Deposits and milestone payments</h2>
      <p>If a project requires a deposit, reservation payment, or milestone payment, the proposal or SOW will identify the amount and when it becomes due. A deposit may be applied against project fees. Any non-refundable portion must be stated expressly in the project document.</p>
      <p>For phased development, each phase may be priced and authorized separately or included within one larger SOW with defined milestones. A later phase is not automatically billable unless it has been authorized under the applicable project terms.</p>

      <h2>3. Invoice terms</h2>
      <p>Unless the applicable project document states otherwise, invoices are due within fourteen (14) calendar days of the invoice date. If an undisputed invoice becomes materially overdue, Cwlwm Systems may pause affected work after reasonable notice until the account is brought current.</p>

      <h2>4. Recurring services and retainers</h2>
      <p>Cwlwm Systems does not assume that every build creates an ongoing subscription. Hosting administration, monitoring, support retainers, maintenance, phased development, onboarding, training, fractional systems services, or other recurring fees apply only when the Client expressly agrees to them.</p>
      <p>A retainer reserves the recurring capacity and availability described in the applicable SOW. It is not an unlimited-hours plan unless the SOW expressly says so. The SOW will define the billing cadence, included services or capacity, priority rules, response expectations, rates for additional work, renewal or cancellation timing, and whether any unused capacity rolls forward.</p>

      <h2>5. Third-party charges</h2>
      <p>Cloud usage, software subscriptions, domains, email delivery, mapping, AI usage, database plans, external APIs, and other third-party costs are the Client's responsibility unless the project document says they are included. Material pass-through costs will be disclosed or approved before they are incurred when reasonably practicable.</p>

      <h2>6. Taxes</h2>
      <p>Client is responsible for applicable sales, use, or similar transaction taxes that must legally be collected in connection with the services, excluding taxes based on Cwlwm Systems' net income.</p>

      <h2>7. Client cancellation</h2>
      <p>Unless the project document provides a different cancellation rule, Client may stop a project by written notice. Client remains responsible for work performed through the effective cancellation date, approved non-cancelable commitments, and any other cancellation amount expressly stated in the SOW.</p>

      <h2>8. Refunds</h2>
      <p>If Client prepaid for work that has not been performed, unused prepaid amounts will generally be returned after applying fees for completed work and approved non-cancelable commitments, unless the applicable project document expressly states that the payment or a defined portion is non-refundable. Accepted and completed professional services are not refundable simply because business priorities later change.</p>

      <h2>9. Billing questions and disputes</h2>
      <p>If an invoice appears incorrect, Client should raise the issue promptly and identify the disputed amount and reason. The parties will make a good-faith effort to resolve legitimate billing questions before escalation. Client should continue to pay undisputed portions when reasonably possible.</p>

      <h2>10. Relationship to the Service Agreement</h2>
      <p>This policy supplements the <a href="/service-agreement">Standard Service Agreement</a>. The Service Agreement contains additional terms covering scope changes, acceptance, ownership, confidentiality, termination, and liability.</p>
    </LegalPage>
  );
}
