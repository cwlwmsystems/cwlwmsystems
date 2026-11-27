import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const primary = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Selected work" },
  { href: "/about", label: "The studio" },
  { href: "/approach", label: "Approach" },
];
const secondary = [
  { href: "/expertise", label: "Expertise" },
  { href: "/pricing", label: "Engagements" },
  { href: "/ongoing-partnership", label: "Ongoing partnership" },
  { href: "/insights", label: "Insights" },
];
const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/legal", label: "Legal" },
  { href: "/accessibility", label: "Accessibility" },
];

export function Footer() {
  return <footer className="studio-footer">
    <div className="studio-footer-container">
      <div className="studio-footer-top">
        <div className="studio-footer-message">
          <span>AN INDEPENDENT DIGITAL & SYSTEMS STUDIO</span>
          <h2>Better business<br/>starts with <em>a conversation.</em></h2>
          <Link href="/contact" className="studio-footer-cta">Start a project <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="studio-footer-columns">
          <div><strong>Explore</strong>{primary.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          <div><strong>More</strong>{secondary.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          <div className="studio-footer-contact"><strong>Contact</strong><a href={`mailto:${site.email}`}>{site.email}</a><span>Based in Pennsylvania.<br/>Working with businesses everywhere.</span></div>
        </div>
      </div>
      <div className="studio-footer-bottom">
        <Link href="/" className="studio-footer-brand"><Image src="/cwlwm-knot.png" width={514} height={505} alt="" /><span>Cwlwm Systems</span></Link>
        <span>© {new Date().getFullYear()} Cwlwm Systems.</span>
        <div>{legal.map(x=><Link href={x.href} key={x.href}>{x.label}</Link>)}</div>
      </div>
    </div>
  </footer>;
}
