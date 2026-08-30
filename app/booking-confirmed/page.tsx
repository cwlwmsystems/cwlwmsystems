import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Confirmed",
  description: "Your Cwlwm Systems project fit call has been scheduled.",
  robots: { index: false, follow: false },
};

export default function BookingConfirmedPage() {
  return (
    <div className="booking-confirmed-page">
      <section className="booking-confirmed-wrap">
        <div className="booking-confirmed-mark" aria-hidden="true">✓</div>
        <p className="eyebrow">Booking confirmed</p>
        <h1>You&apos;re scheduled.</h1>
        <p className="booking-confirmed-lead">
          Thanks for taking the time to tell me a little about what is happening in your business.
          Your booking details will be sent by Calendly to the email address you used when scheduling.
        </p>

        <div className="booking-confirmed-panel">
          <h2>Before we speak</h2>
          <p>
            Think about the process as it works today: where information starts, who touches it,
            which systems are involved, what is still manual, and where the friction occurs.
          </p>
          <p>
            You do not need to prepare a presentation, architecture diagram, or technical
            specification. The current workflow is the best place to start.
          </p>
        </div>

        <div className="booking-confirmed-signoff">
          <strong>Kasey Pelchy</strong>
          <span>Founder · Cwlwm Systems</span>
        </div>

        <div className="booking-confirmed-actions">
          <Link className="button primary" href="/">Return to Cwlwm Systems</Link>
          <Link className="button secondary" href="/case-studies">View case studies</Link>
        </div>
      </section>
    </div>
  );
}
