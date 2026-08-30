import type { Metadata } from "next";
import { CalendlyBooking } from "@/components/CalendlyBooking";

export const metadata: Metadata = {
  title: "Book a 30-Minute Project Fit Call",
  description:
    "Book a focused project-fit conversation with Cwlwm Systems about a workflow, integration, custom system, phased build, or ongoing systems partnership.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <section className="page-hero booking-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">30-minute project fit call</p>
          <h1>Tell me what is getting in the way.</h1>
          <p>
            You do not need to arrive with a software specification. Bring the business problem,
            inefficient workflow, disconnected process, or system that should work better. I will
            use this conversation to determine whether Cwlwm Systems is a sensible fit and what the
            next step should be.
          </p>
        </div>
      </section>

      <section className="section booking-section">
        <div className="container booking-layout booking-layout-calendar">
          <aside className="booking-side">
            <p className="eyebrow">Before you book</p>
            <h2>A focused first conversation.</h2>
            <p className="booking-intro">
              This is a project-fit call, not a free strategy workshop. I will get enough context to
              understand the problem at a high level and decide whether it makes sense to continue.
            </p>

            <div className="booking-expectation">
              <h3>Good topics for this call</h3>
              <ul className="check-list">
                <li>Disconnected software or duplicate data entry</li>
                <li>Spreadsheet-heavy operational workflows</li>
                <li>Repetitive work that should be automated</li>
                <li>Custom internal tools or operational platforms</li>
                <li>Reporting, data visibility, or integration problems</li>
                <li>Existing systems that need another phase or ongoing ownership</li>
              </ul>
            </div>

            <div className="booking-expectation">
              <h3>What happens on the call</h3>
              <ul className="check-list">
                <li>I learn how the process works today and where it breaks down.</li>
                <li>I determine whether an existing product could solve it more simply.</li>
                <li>I identify the most sensible next step if custom work is appropriate.</li>
                <li>If I do not think I am the right fit, I will tell you.</li>
              </ul>
            </div>

            <p className="booking-note">
              No presentation or technical documentation is required. Understanding the current
              process is more useful than arriving with a predetermined solution.
            </p>
          </aside>

          <div className="booking-calendar-card">
            <div className="booking-calendar-heading">
              <p className="eyebrow">Choose a time</p>
              <h2>Book your project fit call.</h2>
              <p>Select an available time below. After the booking is completed, you will be taken to a Cwlwm Systems confirmation page.</p>
            </div>

            <CalendlyBooking />

            <p className="booking-privacy-note">
              Scheduling is provided by Calendly. Information submitted through the scheduler is
              processed by Calendly to create and manage the appointment. See the Cwlwm Systems <a href="/privacy">Privacy Policy</a> and <a href="/subprocessors">Subprocessors</a> page for more information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
