import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell Cwlwm Systems about a workflow, integration, automation, data, or operational software problem in your business.",
  alternates: { canonical: "/contact" },
};

const goodFit = [
  "A process depends on repetitive manual work or spreadsheet coordination.",
  "Several tools are involved, but the handoffs between them are unreliable.",
  "You need an internal system that fits your workflow better than generic software.",
  "You want to use AI or automation inside a controlled, measurable process.",
  "Your data exists, but it is difficult to turn into clear operational action.",
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Start a project</p>
          <h1>Tell me what is not working.</h1>
          <p>You do not need to know what software should be built. Describe the process, the tools involved, where work gets stuck, and what you wish happened instead.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-side">
            <p className="eyebrow">A strong starting point</p>
            <h2>One real operating problem.</h2>
            <div className="contact-fit-list">{goodFit.map((item) => <p key={item}>{item}</p>)}</div>
            <div className="direct-email">
              <span>Prefer email?</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="contact-form-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
