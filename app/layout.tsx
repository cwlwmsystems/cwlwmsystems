import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import "./company.css";
import "./atelier.css";
import "./atelier-inner.css";
import "./compact.css";
import "./landing.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalyticsEvents } from "@/components/GoogleAnalyticsEvents";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Cwlwm Systems | Digital Experiences & Connected Business Technology",
    template: "%s | Cwlwm Systems",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "business website development",
    "ecommerce development",
    "custom operational software",
    "business process automation",
    "systems integration",
    "custom business applications",
    "brand identity and digital presence",
    "workflow automation",
    "internal business systems",
    "systems and workflow review",
    "internal tools",
    "data intelligence",
    "field operations software",
    "RevOps systems",
    "fractional systems partner",
    "software maintenance retainer",
    "business systems training",
    "phased software development",
  ],
  authors: [{ name: "Cwlwm Systems" }],
  creator: "Cwlwm Systems",
  publisher: "Cwlwm Systems",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: "Cwlwm Systems | Websites, Software & Connected Systems",
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cwlwm Systems | Websites, Software & Connected Business Systems",
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
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital and business systems services",
      itemListElement: [
      { "@type": "OfferCatalog", name: "Business websites and ecommerce", url: `${site.url}/services/business-websites` },
      { "@type": "OfferCatalog", name: "Brand identity, SEO and digital presence", url: `${site.url}/services/seo-aeo` },
      { "@type": "OfferCatalog", name: "Custom business software", url: `${site.url}/services/custom-software` },
      { "@type": "OfferCatalog", name: "Systems integration", url: `${site.url}/services/automation-integrations` },
      ],
    },
  };

  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7Y9QPDV3CF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7Y9QPDV3CF', { send_page_view: false });
          `}
        </Script>
        <Script
          id="hs-script-loader"
          src="https://js.hs-scripts.com/247226891.js"
          strategy="afterInteractive"
        />
        <GoogleAnalyticsEvents />
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
