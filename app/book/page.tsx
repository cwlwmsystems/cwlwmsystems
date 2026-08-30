import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a 20-Minute Project Fit Call",
  description: "Request a short project-fit conversation with Cwlwm Systems to determine whether a workflow, integration, custom software project, phased build, or ongoing systems partnership is a good fit.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">20-minute project fit call</p>
          <h1>A short conversation before a big commitment.</h1>
          <p>The goal is simple: understand the problem well enough to determine whether I can help and what the next sensible step would be. This is not a free strategy workshop or a pressure-heavy sales call.</p>
        </div>
      </section>

      <section className="section">
        <div className="container booking-layout">
          <div className="booking-side">
            <p className="eyebrow">What I will try to answer</p>
            <h2>Is this a fit?</h2>
            <ul className="check-list">
              <li>Is the problem clear enough to act on?</li>
              <li>Could an existing product solve it more simply?</li>
              <li>Would an integration, automation, or custom system be appropriate?</li>
              <li>Does it need a paid Systems Review before it can be scoped responsibly?</li>
              <li>Would phased delivery or an ongoing systems partnership make sense after launch?</li>
              <li>Is the likely investment range aligned with your expectations?</li>
            </ul>
            <p className="booking-note">If I do not think custom work is the right answer, I will say so.</p>
          </div>
          <div className="contact-form-card"><ContactForm initialInterest="20-minute project fit call" /></div>
        </div>
      </section>
    </>
  );
}
