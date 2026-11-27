import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Websites, Software & Business Systems | Cwlwm Systems",
  description: "Cwlwm Systems designs and builds professional websites, custom applications, integrations and connected business operations. Independent, hands-on technical delivery.",
  alternates: { canonical: "/" },
};

const primaryServices = [
  {
    no: "01",
    name: "Websites & ecommerce",
    description: "High-quality digital experiences that are easy to navigate, maintain and grow.",
    tags: "Web design  /  Ecommerce  /  Analytics",
    href: "/services#digital-experiences",
    icon: "window",
  },
  {
    no: "02",
    name: "Custom software",
    description: "Practical applications, portals and internal tools built around your actual workflow.",
    tags: "Applications  /  Portals  /  Data",
    href: "/services#software-products",
    icon: "app",
  },
  {
    no: "03",
    name: "Automation & integrations",
    description: "Connect business systems, remove repetitive steps and improve data reliability.",
    tags: "APIs  /  CRM  /  Operations",
    href: "/services#connected-systems",
    icon: "flow",
  },
] as const;

const projects = [
  {
    slug: "olson-tenglund",
    label: "Web presence, brand & local search",
    image: "https://raw.githubusercontent.com/kaseypelchy-ops/olson-tenglund-info/main/assets/parts-counter-scene.webp",
    imageDescription: "Image from the Olson & Tenglund website",
  },
  {
    slug: "port-petals",
    label: "Ecommerce & customer experience",
    image: "https://raw.githubusercontent.com/cwlwmsystems/port-petals/main/public/port-petals-logo-transparent.png",
    imageDescription: "Port Petals brand artwork featured in the storefront",
  },
  {
    slug: "salt-light-church",
    label: "Community website / public preview",
    image: "https://raw.githubusercontent.com/kaseypelchy-ops/church-website/main/public/images/placeholders/landscape/hero-worship.jpg",
    imageDescription: "Worship imagery used in the Salt & Light Church site preview",
  },
  {
    slug: "cwlwm-field-operations",
    label: "Custom software in development",
    image: null,
    imageDescription: "Conceptual architecture schematic",
  },
].map(item => {
  const project = portfolioProjects.find(p => p.slug === item.slug);
  return project ? { ...item, project } : null;
}).filter((item): item is NonNullable<typeof item> => item !== null);

type Project = typeof portfolioProjects[number];
type ProjectTile = {
  slug: string;
  label: string;
  image: string | null;
  imageDescription: string;
  project: Project | undefined;
};
type DefinedProjectTile = Omit<ProjectTile, "project"> & { project: Project };
// Typed inference helper used to keep project references grounded to portfolio entries.
 

export default function HomePage() {
  return (
    <div className="company-site compact-site">
      <section className="cp-hero" aria-labelledby="cp-hero-title">
        <div className="cp-container cp-hero-grid">
          <div className="cp-hero-copy">
            <div className="cp-eyebrow"><span className="cp-status-dot" /> INDEPENDENT DIGITAL & SYSTEMS STUDIO</div>
            <h1 id="cp-hero-title">Better websites.<br/>Smarter systems.<br/><span>Stronger businesses.</span></h1>
            <p>We design and build the digital experiences, custom software and connected systems that help businesses operate and grow.</p>
            <div className="cp-actions">
              <Link href="/contact" className="cp-button cp-button-primary">Start a project <span aria-hidden="true">↗</span></Link>
              <Link href="/work" className="cp-button cp-button-secondary">See our work <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="cp-hero-proof"><span>Founder-led</span><span>Business-first thinking</span><span>Direct technical delivery</span></div>
          </div>
          <div className="cp-system" aria-label="Illustrative system showing websites, business applications and data connected through Cwlwm Systems">
            <div className="cp-system-top"><span>THE CONNECTED BUSINESS</span><span>01 / 03</span></div>
            <div className="cp-system-inner">
              <div className="cp-system-node cp-system-node-a"><span>01</span><strong>Digital experience</strong><small>Website / Ecommerce</small></div>
              <div className="cp-system-spine" aria-hidden="true"><i /><i /><i /></div>
              <div className="cp-system-core"><Image src="/cwlwm-knot.png" alt="" width={514} height={505}/><span>CWLWM SYSTEMS</span></div>
              <div className="cp-system-spine cp-system-spine-after" aria-hidden="true"><i /><i /><i /></div>
              <div className="cp-system-double">
                <div className="cp-system-node"><span>02</span><strong>Business software</strong><small>Applications / CRM</small></div>
                <div className="cp-system-node"><span>03</span><strong>Operations & data</strong><small>Automation / Reporting</small></div>
              </div>
            </div>
            <div className="cp-system-bottom"><span>DESIGN</span><span>BUILD</span><span>CONNECT</span><span>SUPPORT</span></div>
          </div>
        </div>
      </section>

      <section className="cp-services cp-section" aria-labelledby="cp-services-title">
        <div className="cp-container">
          <div className="cp-section-header">
            <div><span className="cp-overline">WHAT WE DO</span><h2 id="cp-services-title">The right solution, built properly.</h2></div>
            <p>From the first customer interaction to the systems behind the scenes, we bring design and engineering together.</p>
          </div>
          <div className="cp-service-grid">
            {primaryServices.map(item => (
              <Link href={item.href} key={item.no} className="cp-service-card">
                <div className="cp-service-top"><span>{item.no} / CAPABILITY</span><span aria-hidden="true">↗</span></div>
                <div className={`cp-service-icon cp-service-icon-${item.icon}`} aria-hidden="true">
                  {item.icon === "window" ? <><i/><i/><i/></> : item.icon==="app" ? <><i/><i/><i/><i/></> : <><i/><i/><i/></>}
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="cp-service-tags">{item.tags}</span>
              </Link>
            ))}
          </div>
          <div className="cp-services-extra"><span>Also available:</span><Link href="/services#brand-growth">Brand & digital growth ↗</Link><Link href="/services#ongoing-partnership">Ongoing technical partnership ↗</Link><Link href="/services" className="cp-services-all">View all services ↗</Link></div>
        </div>
      </section>

      <section className="cp-work cp-section" aria-labelledby="cp-work-title">
        <div className="cp-container">
          <div className="cp-section-header">
            <div><span className="cp-overline">SELECTED WORK</span><h2 id="cp-work-title">Built for real businesses and communities.</h2></div>
            <Link href="/work" className="cp-inline-link">View all projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="cp-work-grid">
            {projects.map(item => (
              <article className="cp-work-card" key={item.slug}>
                <Link href={`/work/${item.slug}`} className={`cp-work-image cp-work-image-${item.slug}`} aria-label={`View ${item.project.name} case study`}>
                  {item.image ? <div className="cp-work-photo" style={{backgroundImage:`url("${item.image}")`}} role="img" aria-label={item.imageDescription}/> :
                    <div className="cp-work-schematic">
                      <div className="cp-work-schematic-label">FIELD OPERATIONS / SYSTEM DESIGN</div>
                      <div className="cp-schematic-map"><span>TEAM</span><i aria-hidden="true">↔</i><span>PLATFORM</span><i aria-hidden="true">↔</i><span>DATA</span></div>
                      <div className="cp-schematic-footer">ARCHITECTURE — NOT A SCREENSHOT</div>
                    </div>}
                  <span className="cp-work-view">VIEW PROJECT <span aria-hidden="true">↗</span></span>
                </Link>
                <div className="cp-work-description">
                  <span>{item.label}</span>
                  <h3><Link href={`/work/${item.slug}`}>{item.project.name}</Link></h3>
                  <p>{item.project.summary}</p>
                  <div className="cp-work-end"><span>{item.project.status}</span><Link href={`/work/${item.slug}`} aria-label={`View ${item.project.name}`}>↗</Link></div>
                </div>
              </article>
            ))}
          </div>
          <p className="cp-accuracy">Portfolio visuals use existing project brand and website assets. Salt &amp; Light Church is a public preview, not a verified finished launch. Cwlwm Field Operations is independent software in development; its visual is a schematic, not a product screenshot.</p>
        </div>
      </section>

      <section className="cp-choice cp-section" aria-labelledby="cp-choice-title">
        <div className="cp-container">
          <div className="cp-section-header">
            <div><span className="cp-overline">HOW CAN WE HELP?</span><h2 id="cp-choice-title">Choose your starting point.</h2></div>
            <p>You do not need a detailed technical brief. Tell us what needs to improve, and we can determine an appropriate first step.</p>
          </div>
          <div className="cp-choice-grid">
            <div className="cp-choice-card">
              <div className="cp-choice-num">01 / DIGITAL PROJECTS</div>
              <h3>Build a better digital presence.</h3>
              <p>Websites, ecommerce, brand identity, local search and the customer experience.</p>
              <Link href="/contact?interest=digital" className="cp-choice-link">Discuss a website or digital project <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="cp-choice-card">
              <div className="cp-choice-num">02 / SOFTWARE & SYSTEMS</div>
              <h3>Simplify how your business works.</h3>
              <p>Custom applications, HubSpot/CRM, workflow automation, integrations and operational reporting.</p>
              <Link href="/contact?interest=systems" className="cp-choice-link">Discuss software or systems <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cp-about cp-section" aria-labelledby="cp-about-title">
        <div className="cp-container cp-about-grid">
          <div>
            <span className="cp-overline">THE PERSON BEHIND THE WORK</span>
            <h2 id="cp-about-title">Experience in technology. Grounded in business.</h2>
            <p>Cwlwm Systems is an independent company founded by Kasey Pelchy. My background spans software development, business operations, databases, automation, analytics and CRM systems.</p>
            <p>Clients work directly with the person responsible for their project—from discovery and implementation to documentation and support.</p>
            <Link href="/about" className="cp-inline-link">Learn about Cwlwm Systems <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="cp-about-points">
            <div><strong>Business-first</strong><p>Define the requirement and outcome before choosing a platform or writing code.</p></div>
            <div><strong>Built for real use</strong><p>Prioritize clarity, maintainability, secure data handling and dependable workflows.</p></div>
            <div><strong>Direct partnership</strong><p>A practical process with defined scope, testing and clear handoff or ongoing support.</p></div>
          </div>
        </div>
      </section>

      <section className="cp-final">
        <div className="cp-container cp-final-row">
          <div><span className="cp-overline">READY TO MOVE FORWARD?</span><h2>Have a project in mind?</h2><p>Tell me what you want to build, fix or connect.</p></div>
          <Link href="/contact" className="cp-button cp-button-primary">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
