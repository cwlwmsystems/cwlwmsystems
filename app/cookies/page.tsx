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
      <p>Cwlwm Systems does not intentionally use this website for behavioral advertising or to build advertising profiles across unrelated websites. The site does use analytics and CRM-related tracking technologies described below to understand site usage, measure engagement, support lead attribution, and improve the customer journey.</p>

      <h2>2. Necessary technologies</h2>
      <p>Hosting, network, security, or platform infrastructure may use temporary identifiers, request metadata, or similar technologies that are reasonably necessary to deliver pages, prevent abuse, balance traffic, maintain security, or troubleshoot reliability. These technologies are not used by Cwlwm Systems for behavioral advertising.</p>

      <h2>3. Forms and preferences</h2>
      <p>The contact form may use browser and server functionality necessary to submit an inquiry and prevent automated abuse. If future site features store a user preference locally, that storage will be limited to supporting the requested feature.</p>

      <h2>4. Embedded scheduling</h2>
      <p>The booking page embeds a Calendly scheduling interface. When that page is loaded or used, Calendly may process technical information and may use cookies, local storage, or similar technologies needed to provide scheduling, security, preferences, and related functionality under Calendly's own policies. Visitors who prefer not to use the embedded scheduler may contact Cwlwm Systems directly by email.</p>

      <h2>5. Analytics and CRM tracking</h2>
      <p>The website uses Google Analytics 4 to understand aggregate website usage and measure events such as page views, lead actions, bookings, checkout activity, and purchase confirmations. Google Analytics may use cookies or similar identifiers subject to its configuration and policies.</p>
      <p>The website also uses HubSpot tracking technology to understand website activity, traffic sources, and engagement and to support CRM attribution. HubSpot may use cookies or similar identifiers and, in some circumstances, may associate website activity with a known CRM contact when the visitor has been identified through supported HubSpot interactions or integrations.</p>
      <p>These tools are used for analytics, CRM, and business-development purposes rather than behavioral advertising by Cwlwm Systems. Where applicable law requires consent for non-essential technologies, related consent settings should be honored.</p>

      <h2>6. Managing cookies</h2>
      <p>Most browsers let you view, block, or delete cookies and control site storage. Blocking cookies or similar technologies can affect analytics, attribution, scheduling, or other website functionality. Cwlwm Systems does not maintain an advertising-cookie preference profile for behavioral advertising.</p>

      <h2>7. Related privacy information</h2>
      <p>For information about contact inquiries, website analytics, CRM records, request logs, retention, and privacy rights, see the <a href="/privacy">Privacy Policy</a>.</p>

      <h2>8. Policy updates</h2>
      <p>If new analytics, personalization, advertising, or consent-managed technologies are introduced, this page will be updated to describe the relevant categories, purposes, and available controls.</p>
    </LegalPage>
  );
}
