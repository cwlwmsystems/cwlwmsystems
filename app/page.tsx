import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { companyServices, companyPrinciples } from "@/lib/company";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Cwlwm Systems | Digital Experiences, Software & Connected Systems",
  description: "Cwlwm Systems designs websites, ecommerce, custom software, integrations and reliable business systems. Independent, founder-led digital and technical work.",
  alternates: { canonical: "/" },
};

const featured = portfolioProjects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="company-site company-home">
      <section className="company-hero" aria-labelledby="company-hero-title">
        <div className="company-wrap company-hero-content">
          <div className="company-hero-copy">
            <p className="company-eyebrow"><span className="company-eyebrow-line" /> INDEPENDENT DIGITAL & SYSTEMS STUDIO</p>
            <h1 id="company-hero-title">Good design.<br/>Smart technology.<br/><em>Better business.</em></h1>
            <p className="company-hero-subtitle">Websites, software, automation and connected business systems—thoughtfully designed, carefully built and supported for the long run.</p>
            <div className="company-actions">
              <Link href="/work" className="company-button company-button-cream">Explore our work <span aria-hidden="true">↗</span></Link>
              <Link href="/contact" className="company-inline company-inline-light">Start a project <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="company-hero-art" aria-hidden="true">
            <div className="company-hero-art-circle company-hero-art-circle-one"/>
            <div className="company-hero-art-circle company-hero-art-circle-two"/>
            <div className="company-hero-art-frame">
              <span className="company-art-caption">CWLWM / CONNECTION BY DESIGN</span>
              <Image src="/cwlwm-knot.png" alt="" width={514} height={505} className="company-hero-knot" priority />
              <span className="company-art-subline">DESIGN — BUILD — CONNECT</span>
            </div>
          </div>
        </div>
        <div className="company-wrap company-hero-baseline"><span>INDEPENDENTLY OWNED. DIRECTLY DELIVERED.</span><span>ESTABLISHED 2026</span></div>
      </section>

      <section className="company-intro company-section" aria-labelledby="company-intro-title">
        <div className="company-wrap company-intro-layout">
          <p className="company-eyebrow company-eyebrow-dark">THE COMPANY <span>01 / 05</span></p>
          <div>
            <h2 id="company-intro-title" className="company-display">Technology should make business <em>easier, not harder.</em></h2>
            <div className="company-intro-tail">
              <p>Cwlwm Systems is a founder-led digital and systems studio. We design the customer-facing experience and build the technology behind it—connecting websites, operations, data and business processes into something that works.</p>
              <Link className="company-inline" href="/about">Discover Cwlwm Systems <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="company-services-home company-section" aria-labelledby="company-services-title">
        <div className="company-wrap">
          <div className="company-heading-pair"><div><p className="company-eyebrow company-eyebrow-dark">WHAT WE DO <span>02 / 05</span></p><h2 id="company-services-title" className="company-display">One partner.<br/><em>Many capabilities.</em></h2></div><p>From the first impression to the systems behind the scenes, we bring business requirements and technical execution into the same conversation.</p></div>
          <div className="company-service-list">{companyServices.map(s=><Link href={`/services#${s.slug}`} key={s.slug} className="company-service-item"><span className="company-service-index">{s.number}</span><div><h3>{s.title}</h3><p>{s.description}</p></div><span className="company-service-arrow" aria-hidden="true">↗</span></Link>)}</div>
          <div className="company-section-end"><Link href="/services" className="company-inline">Explore all services <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="company-work-home company-section" aria-labelledby="company-work-title">
        <div className="company-wrap">
          <div className="company-heading-pair company-heading-pair-light"><div><p className="company-eyebrow">SELECTED WORK <span>03 / 05</span></p><h2 id="company-work-title" className="company-display">Experience you can <em>explore.</em></h2></div><p>Real projects, real decisions, and clear distinctions between work in production and products still evolving.</p></div>
          <div className="company-feature-list">{featured.map((p,i)=><article className="company-feature" key={p.slug}>
            <Link href={`/work/${p.slug}`} className={`company-feature-visual company-feature-visual-${i+1}`} aria-label={`Explore ${p.name}`}><span className="company-feature-visual-top">CWLWM / PROJECT 0{i+1}</span><span className="company-feature-letter" aria-hidden="true">{i===0?"P":i===1?"F":"O"}</span><strong>{p.name}</strong><span className="company-feature-visual-bottom">EXPLORE PROJECT <span aria-hidden="true">↗</span></span></Link>
            <div className="company-feature-content"><p className="company-feature-type">{p.type}</p><h3>{p.name}</h3><p>{p.summary}</p><span className="company-feature-status">{p.status}</span><Link href={`/work/${p.slug}`} className="company-inline company-inline-light">View the project <span aria-hidden="true">↗</span></Link></div>
          </article>)}</div>
          <div className="company-section-end"><Link href="/work" className="company-inline company-inline-light">View the portfolio <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="company-process company-section" aria-labelledby="company-process-title">
        <div className="company-wrap">
          <div className="company-heading-pair"><div><p className="company-eyebrow company-eyebrow-dark">HOW WE WORK <span>04 / 05</span></p><h2 id="company-process-title" className="company-display">Clear thinking.<br/><em>Considered execution.</em></h2></div><p>Every engagement is different, but the fundamentals stay consistent: understand the requirement, build responsibly, and keep the outcome useful.</p></div>
          <div className="company-process-grid">{companyPrinciples.map(item=><div key={item.number} className="company-process-step"><span>{item.number}</span><h3>{item.name}</h3><p>{item.description}</p></div>)}</div>
          <div className="company-section-end"><Link href="/approach" className="company-inline">See our approach <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="company-home-founder company-section" aria-labelledby="company-founder-title">
        <div className="company-wrap company-founder-layout">
          <div><p className="company-eyebrow company-eyebrow-dark">THE FOUNDER</p><h2 id="company-founder-title" className="company-display">Built with <em>personal accountability.</em></h2></div>
          <div><p>Cwlwm Systems was founded by Kasey Pelchy, bringing experience across software development, technical operations, automation, data, marketing and revenue systems into an independent business.</p><p>Clients work directly with the person responsible for discovery, architecture, implementation and delivery. Employer work is distinct from independently owned Cwlwm projects.</p><Link href="/about" className="company-inline">Meet the founder <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="company-cta" aria-labelledby="company-cta-title">
        <div className="company-wrap company-cta-layout"><div><p className="company-eyebrow">LET US TALK <span>05 / 05</span></p><h2 id="company-cta-title" className="company-display">Build something <em>worth building.</em></h2><p>A new website, a custom application, disconnected tools, or an idea still taking shape. Start with the problem—then we can find the right solution.</p></div><Link href="/contact" className="company-button company-button-cream">Start a conversation <span aria-hidden="true">↗</span></Link></div>
      </section>
    </div>
  );
}
