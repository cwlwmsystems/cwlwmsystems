import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/service-agreement", label: "Service Agreement" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/data-processing", label: "Data Processing" },
  { href: "/security", label: "Security" },
  { href: "/legal", label: "All legal & policies" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/cwlwm-knot.png" alt="" width={514} height={505} aria-hidden="true" />
          <div>
            <strong>Cwlwm Systems</strong>
            <p>Connected systems. Clearer operations.</p>
          </div>
        </div>
        <div className="footer-column">
          <span>Explore</span>
          {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-column">
          <span>Legal</span>
          {legalLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-column">
          <span>Contact</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/contact">Project inquiry</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Cwlwm Systems. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
