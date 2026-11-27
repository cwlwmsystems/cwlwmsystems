"use client";

import Link from "next/link";
import { useState } from "react";

const tracks = [
  {
    id: "digital",
    number: "01",
    tab: "Digital presence",
    heading: "A better first impression. A stronger business behind it.",
    description: "For established businesses ready to make their website, brand, and customer experience reflect the quality of what they do.",
    needs: ["A professional website that feels like our business", "A storefront customers actually want to use", "Clearer local visibility, content and analytics"],
    outcome: "Websites, ecommerce, brand and ongoing digital support",
    href: "/contact?interest=digital",
    link: "Discuss a digital project",
  },
  {
    id: "systems",
    number: "02",
    tab: "Software & systems",
    heading: "Less work between systems. More control over the business.",
    description: "For teams tired of manual handoffs, disconnected data, fragile spreadsheets, and software that was never designed around their process.",
    needs: ["A custom application or internal platform", "Reliable connections between software and data", "Clearer CRM, automation, reporting or operations"],
    outcome: "Applications, integrations, CRM and operational systems",
    href: "/contact?interest=systems",
    link: "Discuss a systems project",
  },
] as const;

export function EngagementSelector() {
  const [selected, setSelected] = useState(0);
  const track = tracks[selected];
  return (
    <div className="atelier-selector">
      <div className="atelier-selector-nav" role="group" aria-label="Choose the type of project">
        {tracks.map((item, index) => (
          <button key={item.id} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index}
            className={selected === index ? "atelier-selector-tab is-active" : "atelier-selector-tab"}>
            <span>{item.number}</span> {item.tab}
            <span className="atelier-selector-tab-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="atelier-selector-body" aria-live="polite">
        <div>
          <span className="atelier-kicker atelier-kicker-muted">YOUR STARTING POINT / {track.number}</span>
          <h3>{track.heading}</h3>
          <p>{track.description}</p>
          <Link href={track.href} className="atelier-cta atelier-cta-cream">{track.link}<span aria-hidden="true">↗</span></Link>
        </div>
        <div className="atelier-selector-aside">
          <span className="atelier-kicker atelier-kicker-muted">SOUND FAMILIAR?</span>
          {track.needs.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}
          <small>{track.outcome}</small>
        </div>
      </div>
    </div>
  );
}
