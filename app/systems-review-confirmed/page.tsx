import type { Metadata } from "next";
import Link from "next/link";
import { SystemsReviewPurchaseTracking } from "@/components/SystemsReviewPurchaseTracking";

export const metadata: Metadata = {
  title: "Systems Review Confirmed",
  description: "Your Cwlwm Systems Systems & Workflow Review purchase has been completed.",
  robots: { index: false, follow: false },
};

const preworkMailto =
  "mailto:cwlwmsystems@gmail.com?subject=Systems%20%26%20Workflow%20Review%20Pre-Work&body=Business%20name%3A%0A%0AWorkflow%20or%20process%20to%20review%3A%0A%0APeople%20or%20teams%20involved%3A%0A%0ACurrent%20systems%2C%20apps%2C%20spreadsheets%2C%20or%20tools%3A%0A%0AWhere%20the%20process%20slows%20down%20or%20breaks%3A%0A%0AWhat%20you%20wish%20worked%20differently%3A%0A%0AAnything%20else%20I%20should%20know%3A";

export default function SystemsReviewConfirmedPage() {
  return (
    <div className="booking-confirmed-page">
      <SystemsReviewPurchaseTracking />
      <section className="booking-confirmed-wrap">
        <div className="booking-confirmed-mark" aria-hidden="true">✓</div>
        <p className="eyebrow">Payment confirmed</p>
        <h1>Your Systems &amp; Workflow Review is underway.</h1>
        <p className="booking-confirmed-lead">
          Thank you. Your $750 fixed-price review has been purchased successfully. Stripe will send
          your payment receipt to the email address used at checkout.
        </p>

        <div className="booking-confirmed-panel">
          <h2>What happens next</h2>
          <p>
            <strong>1. Send the pre-work.</strong> Tell me which workflow or operating problem you want
            reviewed, who is involved, which systems touch it, and where the friction happens today.
          </p>
          <p>
            <strong>2. I review the current state.</strong> I will use your notes to prepare for the
            working session and identify any information, access, or examples that would make the
            review more useful.
          </p>
          <p>
            <strong>3. We schedule the working session.</strong> I will follow up directly to arrange
            the session at a time that works for you and confirm the scope of the workflow being
            reviewed.
          </p>
          <p>
            <strong>4. You receive the findings.</strong> The deliverable includes the current-state
            workflow, systems and data inventory, bottlenecks and risk points, automation
            opportunities, and a prioritized recommendation for what to do next.
          </p>
        </div>

        <div className="booking-confirmed-panel">
          <h2>Helpful information to send</h2>
          <p>
            You do not need to create a formal technical document. A plain-language description is
            enough. Screenshots, sample spreadsheets, example forms, process notes, and links to the
            tools involved can also be useful when appropriate.
          </p>
        </div>

        <div className="booking-confirmed-actions">
          <a className="button primary" href={preworkMailto}>Send your pre-work details</a>
          <Link className="button secondary" href="/systems-review">Review what is included</Link>
        </div>

        <div className="booking-confirmed-signoff">
          <strong>Kasey Pelchy</strong>
          <span>Founder · Cwlwm Systems</span>
        </div>
      </section>
    </div>
  );
}
