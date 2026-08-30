import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyBooking } from "@/components/CalendlyBooking";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Project Fit Call",
  description:
    "Book a 30-minute project fit call with Cwlwm Systems to discuss a workflow, integration, automation, operational software project, phased build, or ongoing systems support need.",
  alternates: { canonical: "/contact" },
};

const goodFit = [
  "A process depends on repetitive manual work or spreadsheet coordination.",
  "Several tools are involved, but the handoffs between them are unreliable.",
  "You need an internal system that fits your workflow better than generic software.",
  "You want automation or AI inside a controlled, measurable process.",
  "Your data exists, but it is difficult to turn into clear operational action.",
  "A live system needs maintenance, training, future phases, or a clear ongoing owner.",
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Start a conversation</p>
          <h1>Tell me what is not working.</h1>
          <p>
            You do not need to know what software should be built. Bring the process, the tools
            involved, where work gets stuck, and what you wish happened instead. Choose a time
            below and we can start there.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-side">
            <p className="eyebrow">A strong starting point</p>
            <h2>One real operating problem.</h2>
            <div className="contact-fit-list">
              {goodFit.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="contact-choice-links">
              <Link className="text-link" href="/pricing">See engagement pricing →</Link>
              <Link className="text-link" href="/systems-review">Explore the Systems Review →</Link>
              <Link className="text-link" href="/ongoing-partnership">Explore ongoing systems partnership →</Link>
            </div>
            <div className="direct-email">
              <span>Prefer email?</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>

          <div className="booking-calendar-card contact-calendly-card">
            <div className="booking-calendar-heading">
              <p className="eyebrow">Choose a time</p>
              <h2>Book a 30-minute project fit call.</h2>
              <p>
                Pick an available time below. Calendly will collect a few details about what you
                want to discuss before confirming the appointment.
              </p>
            </div>

            <CalendlyBooking />

            <p className="booking-privacy-note">
              Scheduling is provided by Calendly. Information submitted through the scheduler is
              processed by Calendly to create and manage the appointment. See the Cwlwm Systems{" "}
              <Link href="/privacy">Privacy Policy</Link> and{" "}
              <Link href="/subprocessors">Subprocessors</Link> page for more information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
