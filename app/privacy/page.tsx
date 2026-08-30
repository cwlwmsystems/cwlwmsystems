import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Cwlwm Systems website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="container narrow-left"><p className="eyebrow light">Privacy</p><h1>Privacy Policy</h1><p>Effective August 29, 2026</p></div>
      </section>
      <section className="section legal-page">
        <div className="container legal-copy">
          <h2>Information you provide</h2>
          <p>If you contact Cwlwm Systems or submit the project inquiry form, Cwlwm Systems may receive information such as your name, email address, company, phone number, project details, and any other information you choose to provide.</p>
          <h2>How information is used</h2>
          <p>Information submitted through this site is used to respond to inquiries, evaluate potential projects, communicate about requested services, protect the site from abuse, and maintain business records related to those communications.</p>
          <h2>Service providers</h2>
          <p>This website may be hosted by infrastructure providers such as Vercel. If the contact form is enabled, email delivery may be handled by an email infrastructure provider such as Resend. Those providers may process technical or submitted information as needed to provide their services.</p>
          <h2>Analytics and cookies</h2>
          <p>This launch version of the site does not intentionally set advertising cookies or use behavioral advertising. Hosting providers may process standard request logs and technical information for security and reliability.</p>
          <h2>Data retention</h2>
          <p>Inquiry information may be retained for as long as reasonably necessary to respond, maintain business records, resolve disputes, or comply with legal obligations.</p>
          <h2>Your choices</h2>
          <p>You may request access, correction, or deletion of information you previously submitted by contacting Cwlwm Systems. Some information may need to be retained where required for legitimate business or legal purposes.</p>
          <h2>Contact</h2>
          <p>Questions about this policy can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
