import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie and similar-technology policy for the Cwlwm Systems website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="A straightforward explanation of cookies, local storage, and similar technologies used on this website."
    >
      <h2>1. Current approach</h2>
      <p>The current version of the Cwlwm Systems website is designed without advertising cookies or behavioral advertising trackers. Cwlwm Systems does not intentionally use cookies to build advertising profiles or follow visitors across unrelated websites.</p>

      <h2>2. Necessary technologies</h2>
      <p>Hosting, network, security, or platform infrastructure may use temporary identifiers, request metadata, or similar technologies that are reasonably necessary to deliver pages, prevent abuse, balance traffic, maintain security, or troubleshoot reliability. These technologies are not used by Cwlwm Systems for behavioral advertising.</p>

      <h2>3. Forms and preferences</h2>
      <p>The contact form may use browser and server functionality necessary to submit an inquiry and prevent automated abuse. If future site features store a user preference locally, that storage will be limited to supporting the requested feature.</p>

      <h2>4. Embedded scheduling</h2>
      <p>The booking page embeds a Calendly scheduling interface. When that page is loaded or used, Calendly may process technical information and may use cookies, local storage, or similar technologies needed to provide scheduling, security, preferences, and related functionality under Calendly's own policies. Visitors who prefer not to use the embedded scheduler may contact Cwlwm Systems directly by email.</p>

      <h2>5. Analytics</h2>
      <p>Cwlwm Systems may add privacy-conscious website analytics in the future to understand aggregate site usage, such as which pages are visited and whether visitors reach the contact page. If an analytics tool introduces non-essential cookies or other tracking that requires consent, this policy and the site's consent controls will be updated before or when that technology is enabled.</p>

      <h2>6. Managing cookies</h2>
      <p>Most browsers let you view, block, or delete cookies and control site storage. Blocking necessary browser storage can affect how some websites function. Because the current Cwlwm Systems site does not intentionally use advertising cookies, there is no advertising-cookie preference profile to manage with Cwlwm Systems at this time.</p>

      <h2>7. Related privacy information</h2>
      <p>For information about contact inquiries, request logs, retention, and privacy rights, see the <a href="/privacy">Privacy Policy</a>.</p>

      <h2>8. Policy updates</h2>
      <p>If new analytics, personalization, advertising, or consent-managed technologies are introduced, this page will be updated to describe the relevant categories, purposes, and available controls.</p>
    </LegalPage>
  );
}
