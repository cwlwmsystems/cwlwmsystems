import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility statement for the Cwlwm Systems website.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility Statement"
      intro="Cwlwm Systems aims to make this website usable by as many people as reasonably possible."
    >
      <h2>Accessibility approach</h2>
      <p>The site is designed with semantic page structure, keyboard-accessible navigation, visible focus behavior, readable contrast, responsive layouts, reduced-motion support, form labels, alternative text where appropriate, and a skip-to-content link.</p>

      <h2>Standards</h2>
      <p>Cwlwm Systems uses the Web Content Accessibility Guidelines (WCAG) as a practical reference when designing and reviewing the site, with WCAG 2.2 Level AA as an accessibility target where reasonably applicable. This statement is not a claim of formal third-party certification or perfect conformance.</p>

      <h2>Known limitations</h2>
      <p>Technology, browser behavior, third-party services, and future site changes can introduce accessibility issues. If a third-party embedded service is added, its accessibility may be partly controlled by that provider.</p>

      <h2>Feedback and assistance</h2>
      <p>If you encounter a barrier, cannot access information, or need content in another reasonable format, contact Cwlwm Systems using the email below. Please include the page, what you were trying to do, and the browser or assistive technology involved when possible.</p>

      <h2>Ongoing improvement</h2>
      <p>Accessibility is treated as an ongoing design and maintenance concern. Reported issues will be reviewed and prioritized based on impact, feasibility, and the ability to provide an effective alternative.</p>
    </LegalPage>
  );
}
