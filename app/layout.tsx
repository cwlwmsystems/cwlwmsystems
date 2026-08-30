import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Cwlwm Systems | Custom Operational Software & Automation",
    template: "%s | Cwlwm Systems",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "custom operational software",
    "business process automation",
    "systems integration",
    "workflow automation",
    "internal business systems",
    "systems and workflow review",
    "internal tools",
    "data intelligence",
    "field operations software",
    "RevOps systems",
  ],
  authors: [{ name: "Cwlwm Systems" }],
  creator: "Cwlwm Systems",
  publisher: "Cwlwm Systems",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: "Cwlwm Systems | Connected systems. Clearer operations.",
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cwlwm Systems | Connected systems. Clearer operations.",
    description: site.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071b13",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    serviceType: [
      "Custom operational software",
      "Systems integration",
      "Workflow automation",
      "AI-assisted business systems",
      "Data and decision intelligence",
    ],
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
