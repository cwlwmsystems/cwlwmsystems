import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { EngagementSelector } from "@/components/EngagementSelector";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Cwlwm Systems | Websites, Custom Software & Connected Business Systems",
  description: "An independent digital and systems studio building considered websites, ecommerce, custom applications, integrations and operational systems for ambitious businesses.",
  alternates: { canonical: "/" },
};

const services = [
  { number: "01", heading: "Digital experiences", copy: "Websites, ecommerce, brand systems and digital presence that earn trust from the first visit.", detail: "WEB / COMMERCE / IDENTITY", href: "/services#digital-experiences" },
  { number: "02", heading: "Software & applications", copy: "Purpose-built internal tools, customer platforms and applications designed around real work.", detail: "APPLICATIONS / PORTALS / TOOLS", href: "/services#software-products" },
  { number: "03", heading: "Connected operations", copy: "Integrations, automation, CRM and data architecture that turn disconnected systems into useful processes.", detail: "DATA / CRM / AUTOMATION", href: "/services#connected-systems" },
  { number: "04", heading: "Brand & growth", copy: "Identity, search visibility, analytics and creative systems that make a business easier to discover.", detail: "BRAND / SEARCH / MEASUREMENT", href: "/services#brand-growth" },
  { number: "05", heading: "Ongoing partnership", copy: "Implementation, maintenance, technical support and structured development long after launch.", detail: "SUPPORT / IMPROVEMENT / OWNERSHIP", href: "/services#ongoing-partnership" },
];

const projects = [
  { ...portfolioProjects[2], discipline: "WEB EXPERIENCE / BRAND / SEARCH", img: "https://raw.githubusercontent.com/kaseypelchy-ops/olson-tenglund-info/main/assets/parts-counter-scene.webp", visual: "atelier-project-olson", note: "Asset from the published Olson & Tenglund website" },
  { ...portfolioProjects[0], discipline: "ECOMMERCE / CUSTOMER SYSTEMS", img: "https://raw.githubusercontent.com/cwlwmsystems/port-petals/main/public/heroes/flowers.jpg", visual: "atelier-project-petals", note: "Image used by the Port Petals storefront" },
  { ...portfolioProjects[1], discipline: "INDEPENDENT SOFTWARE / OPERATIONS", img: null, visual: "atelier-project-field", note: "Architecture illustration; product remains in development" },
];

export default function HomePage() {
  return (
    <div className="company-site atelier-home">
      <section className="atelier-hero" aria-labelledby="atelier-hero-title">
        <div className="atelier-frame atelier-hero-content">
          <div className="atelier-hero-overline">
            <span className="atelier-kicker">INDEPENDENT DIGITAL & SYSTEMS STUDIO</span>
            <span className="atelier-top-index">PENNSYLVANIA · WORKING EVERYWHERE</span>
          </div>
          <div className="atelier-hero-main">
            <div className="atelier-hero-type">
              <h1 id="atelier-hero-title">Better experiences.<br/><em>Better systems.</em><br/>Better business.</h1>
              <div className="atelier-hero-bottom">
                <p>Design-led websites, custom software and connected operations for businesses ready to move beyond the ordinary.</p>
                <div className="atelier-hero-actions">
                  <Link href="/contact" className="atelier-cta atelier-cta-dark">Discuss a project <span aria-hidden="true">↗</span></Link>
                  <Link href="#selected-work" className="atelier-text-link">Explore the work <span aria-hidden="true">↓</span></Link>
                </div>
              </div>
            </div>
            <div className="atelier-hero-identity" aria-label="Cwlwm Systems interwoven knot identity">
              <div className="atelier-hero-identity-top"><span>THE CWLWM MARK</span><span>FIG. / 01</span></div>
              <Image src="/cwlwm-knot.png" width={514} height={505} alt="Cwlwm Systems knot symbol" priority />
              <div className="atelier-hero-identity-bottom"><span>DESIGNED TO CONNECT.</span><span>2026 / CWLWM</span></div>
            </div>
          </div>
          <div className="atelier-hero-rule"><span>ONE PARTNER, FROM IDEA TO IMPLEMENTATION</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
        </div>
      </section>

      <section className="atelier-statement" aria-labelledby="atelier-statement-title">
        <div className="atelier-frame atelier-statement-grid">
          <span className="atelier-kicker atelier-kicker-muted">01 / WHAT WE BELIEVE</span>
          <div>
            <h2 id="atelier-statement-title">Good technology should feel <em>effortless.</em></h2>
            <div className="atelier-statement-bottom">
              <p>Most businesses don't need more disconnected tools. They need better digital experiences, clearer processes and technology that supports the people using it. That's what Cwlwm Systems is here to build.</p>
              <Link href="/about" className="atelier-text-link">Meet the studio <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="atelier-work" id="selected-work" aria-labelledby="atelier-work-title">
        <div className="atelier-frame">
          <div className="atelier-section-heading">
            <div><span className="atelier-kicker atelier-kicker-light">02 / SELECTED WORK</span><h2 id="atelier-work-title">The work <em>speaks.</em></h2></div>
            <p>Real client projects and independently developed products. Thoughtful design meets practical engineering, with nothing inflated or invented.</p>
          </div>
          <div className="atelier-projects">
            {projects.map((project, index) => (
              <article className={`atelier-project ${project.visual}`} key={project.slug}>
                <Link className="atelier-project-visual" href={`/work/${project.slug}`} aria-label={`Explore ${project.name}`}>
                  {project.img ? (
                    <div className="atelier-project-photography" style={{backgroundImage: `url("${project.img}")`}} role="img" aria-label={project.note}/>
                  ) : (
                    <div className="atelier-architecture" aria-label="Schematic showing the data and workflow architecture of a field operations platform">
                      <div className="atelier-architecture-title">CWLWM / FIELD OPERATIONS <span>ARCHITECTURE STUDY</span></div>
                      <div className="atelier-architecture-nodes"><span>FIELD USERS</span><span>APPLICATION</span><span>DATA + ACCESS</span></div>
                      <div className="atelier-architecture-line" aria-hidden="true"/>
                      <div className="atelier-architecture-bottom"><span>TERRITORIES</span><span>ACTIVITY</span><span>SCHEDULING</span><span>REPORTING</span></div>
                    </div>
                  )}
                  <div className="atelier-project-visual-label"><span>0{index+1} / SELECTED PROJECT</span><span>VIEW THE WORK ↗</span></div>
                </Link>
                <div className="atelier-project-description">
                  <span className="atelier-kicker atelier-kicker-light">{project.discipline}</span>
                  <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
                  <p>{project.summary}</p>
                  <div className="atelier-project-meta"><span>{project.status}</span><Link href={`/work/${project.slug}`} className="atelier-text-link atelier-text-link-light">Explore case study <span aria-hidden="true">↗</span></Link></div>
                </div>
              </article>
            ))}
          </div>
          <div className="atelier-work-footer"><span>PROJECT IMAGERY IS DRAWN FROM THE WORK ITSELF; FIELD OPERATIONS IS SHOWN AS A SCHEMATIC.</span><Link href="/work" className="atelier-text-link atelier-text-link-light">All selected work <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="atelier-services" aria-labelledby="atelier-services-title">
        <div className="atelier-frame">
          <div className="atelier-section-heading atelier-section-heading-ink">
            <div><span className="atelier-kicker atelier-kicker-muted">03 / EXPERTISE</span><h2 id="atelier-services-title">The right thinking.<br/><em>The right tools.</em></h2></div>
            <p>From first impressions to back-office infrastructure, every part of the business deserves the same consideration.</p>
          </div>
          <div className="atelier-service-list">
            {services.map(service=><Link key={service.number} href={service.href} className="atelier-service">
              <span className="atelier-service-number">{service.number}</span>
              <div><h3>{service.heading}</h3><p>{service.copy}</p></div>
              <span className="atelier-service-detail">{service.detail}</span>
              <span className="atelier-service-arrow" aria-hidden="true">↗</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="atelier-selector-section" aria-labelledby="atelier-selector-title">
        <div className="atelier-frame">
          <div className="atelier-section-heading">
            <div><span className="atelier-kicker atelier-kicker-light">04 / START HERE</span><h2 id="atelier-selector-title">Every good project<br/>starts with <em>a conversation.</em></h2></div>
            <p>You don't need a technical specification to get started. Choose what's closest to your goal, and we'll discuss the best way forward.</p>
          </div>
          <EngagementSelector />
        </div>
      </section>

      <section className="atelier-method" aria-labelledby="atelier-method-title">
        <div className="atelier-frame atelier-method-grid">
          <div><span className="atelier-kicker atelier-kicker-muted">05 / OUR APPROACH</span><h2 id="atelier-method-title">Thoughtful from the first question to the final detail.</h2><Link href="/approach" className="atelier-text-link">Explore our approach <span aria-hidden="true">↗</span></Link></div>
          <div className="atelier-method-steps">
            <div><span>01</span><h3>Understand</h3><p>Business requirements, users, bottlenecks and the actual outcome you're trying to achieve.</p></div>
            <div><span>02</span><h3>Design & build</h3><p>Appropriate architecture, considered interfaces, clear scope and real-world testing.</p></div>
            <div><span>03</span><h3>Implement & support</h3><p>Launch, documentation, training and an accountable next step after delivery.</p></div>
          </div>
        </div>
      </section>

      <section className="atelier-founder" aria-labelledby="atelier-founder-title">
        <div className="atelier-frame atelier-founder-grid">
          <div className="atelier-founder-mark"><Image src="/cwlwm-knot.png" alt="" width={514} height={505} /><span>INDEPENDENT BY DESIGN.</span></div>
          <div><span className="atelier-kicker atelier-kicker-light">06 / THE PERSON BEHIND THE WORK</span><h2 id="atelier-founder-title">A technical partner who knows the business side, too.</h2><p>Cwlwm Systems is independently founded and operated by Kasey Pelchy. My experience spans software development, business systems, data, marketing operations, automation and technical troubleshooting. You work directly with the person responsible for your solution.</p><p className="atelier-founder-disclosure">Cwlwm-owned projects and client engagements are distinguished from work performed in other professional roles.</p><Link href="/about" className="atelier-text-link atelier-text-link-light">More about Cwlwm <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="atelier-finale" aria-labelledby="atelier-finale-title">
        <div className="atelier-frame atelier-finale-grid">
          <span className="atelier-kicker atelier-kicker-muted">07 / THE NEXT STEP</span>
          <div><h2 id="atelier-finale-title">Let's make something <em>worth building.</em></h2><div className="atelier-finale-bottom"><p>Tell me where the experience falls short, the workflow breaks down, or the next idea begins.</p><Link href="/contact" className="atelier-cta atelier-cta-dark">Start a conversation <span aria-hidden="true">↗</span></Link></div></div>
        </div>
      </section>
    </div>
  );
}
