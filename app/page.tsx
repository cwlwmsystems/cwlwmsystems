import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ConnectedWorkflowDemo } from "@/components/ConnectedWorkflowDemo";
import { companyServices, companyPrinciples } from "@/lib/company";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Websites, Custom Software & Business Systems | Cwlwm Systems",
  description: "Cwlwm Systems builds professional websites, custom software, automation and connected business systems. Talk directly with the person building your solution.",
  alternates: { canonical: "/" },
};

const painPoints = [
  {
    num: "01",
    title: "Your digital presence isn't keeping up.",
    copy: "An outdated website, inconsistent brand or difficult customer experience can hold an otherwise great business back.",
    service: "Websites & ecommerce",
    href: "/services#digital-experiences",
  },
  {
    num: "02",
    title: "Your systems don't talk to each other.",
    copy: "Good software still creates bad processes when information moves by spreadsheet, email or manual re-entry.",
    service: "Integrations & automation",
    href: "/services#connected-systems",
  },
  {
    num: "03",
    title: "Your workflow has outgrown the tools.",
    copy: "When generic platforms can't reflect how the team actually operates, a focused custom application may be the missing piece.",
    service: "Custom applications",
    href: "/services#software-products",
  },
] as const;

const proof = portfolioProjects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="company-site cx-home">
      <section className="cx-hero" aria-labelledby="cx-hero-title">
        <div className="cx-hero-wash" aria-hidden="true" />
        <div className="company-wrap cx-hero-layout">
          <div className="cx-hero-copy">
            <p className="cx-overline cx-overline-light"><span className="cx-overline-bar" /> INDEPENDENT DIGITAL & BUSINESS SYSTEMS STUDIO</p>
            <h1 id="cx-hero-title">Make your business <em>work better.</em></h1>
            <p className="cx-hero-description">Professional websites. Purpose-built software. Connected systems. Cwlwm Systems helps growing businesses create better customer experiences and smoother operations.</p>
            <div className="cx-hero-actions">
              <Link href="/contact" className="cx-primary-button">Let&apos;s discuss your project <span aria-hidden="true">↗</span></Link>
              <Link href="/work" className="cx-quiet-link cx-quiet-link-light">See what we build <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="cx-hero-credentials"><span>FOUNDER-LED DELIVERY</span><span>SOFTWARE + DIGITAL EXPERIENCE</span><span>BUILT FOR REAL OPERATIONS</span></div>
          </div>
          <div className="cx-hero-visual">
            <div className="cx-hero-orbit cx-hero-orbit-one" aria-hidden="true"/>
            <div className="cx-hero-orbit cx-hero-orbit-two" aria-hidden="true"/>
            <div className="cx-hero-visual-top"><span>THE CONNECTED BUSINESS</span><span>FIG. 01 / CWLWM</span></div>
            <div className="cx-hero-network" aria-label="Illustration showing websites, software, and operations working together">
              <div className="cx-hero-symbol"><Image src="/cwlwm-knot.png" alt="" width={514} height={505} priority /></div>
              <div className="cx-hero-node cx-hero-node-one"><small>01</small><strong>Experience</strong><span>Websites & commerce</span></div>
              <div className="cx-hero-node cx-hero-node-two"><small>02</small><strong>Software</strong><span>Apps & tools</span></div>
              <div className="cx-hero-node cx-hero-node-three"><small>03</small><strong>Systems</strong><span>Data & automation</span></div>
            </div>
            <div className="cx-hero-visual-bottom"><span>ONE CONNECTED APPROACH</span><span>DESIGN / DEVELOP / INTEGRATE</span></div>
          </div>
        </div>
      </section>

      <section className="cx-intro cx-section" aria-labelledby="cx-intro-title">
        <div className="company-wrap cx-intro-layout">
          <p className="cx-overline">THE DIFFERENCE</p>
          <div>
            <h2 id="cx-intro-title">Not another tool.<br/><em>A better way forward.</em></h2>
            <div className="cx-intro-tail">
              <p>Many business problems live between the tools you already use. We look at the entire experience, from how customers find you to how your team manages the work behind the scenes.</p>
              <Link href="/about" className="cx-quiet-link">Get to know Cwlwm <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-problems cx-section" aria-labelledby="cx-problems-title">
        <div className="company-wrap">
          <div className="cx-section-top">
            <div><p className="cx-overline">WHERE WE HELP / 01</p><h2 id="cx-problems-title">Sound <em>familiar?</em></h2></div>
            <p>Clear answers to the digital and operational problems that cost businesses time, opportunities and attention.</p>
          </div>
          <div className="cx-problem-list">
            {painPoints.map((item) => (
              <article className="cx-problem" key={item.num}>
                <span className="cx-problem-number">{item.num}</span>
                <div className="cx-problem-main"><h3>{item.title}</h3><p>{item.copy}</p></div>
                <Link href={item.href} className="cx-problem-link">{item.service} <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-workflow-section cx-section" aria-labelledby="cx-workflow-title">
        <div className="company-wrap">
          <div className="cx-workflow-heading">
            <p className="cx-overline cx-overline-light">SEE HOW IT WORKS / 02</p>
            <h2 id="cx-workflow-title">From separate pieces<br/>to <em>one connected process.</em></h2>
            <p>Explore a simplified example of how we think about websites, data, automation and operations. Choose a scenario and follow the information from start to finish.</p>
          </div>
          <ConnectedWorkflowDemo />
        </div>
      </section>

      <section className="cx-services cx-section" aria-labelledby="cx-services-title">
        <div className="company-wrap">
          <div className="cx-section-top">
            <div><p className="cx-overline">WHAT WE DO / 03</p><h2 id="cx-services-title">Capabilities that <em>connect.</em></h2></div>
            <p>One company that can deliver the customer-facing experience, the systems underneath it, and the technical partnership that follows.</p>
          </div>
          <div className="cx-services-list">
            {companyServices.map((service) => (
              <Link href={`/services#${service.slug}`} className="cx-service" key={service.slug}>
                <span className="cx-service-num">{service.number}</span>
                <div><h3>{service.title}</h3><p>{service.description}</p></div>
                <span className="cx-service-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <div className="cx-align-right"><Link href="/services" className="cx-quiet-link">Explore all services <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="cx-proof cx-section" aria-labelledby="cx-proof-title">
        <div className="company-wrap">
          <div className="cx-section-top cx-section-top-dark">
            <div><p className="cx-overline cx-overline-light">SELECTED WORK / 04</p><h2 id="cx-proof-title">Experience you can <em>explore.</em></h2></div>
            <p>Real projects and independently developed software—presented with clear descriptions of what is live and what is still evolving.</p>
          </div>
          <div className="cx-proof-list">
            {proof.map((project,i)=>(
              <article key={project.slug} className="cx-proof-item">
                <Link href={`/work/${project.slug}`} className={`cx-proof-cover cx-proof-cover-${i+1}`} aria-label={`Explore ${project.name}`}>
                  <span>PROJECT / 0{i+1}</span>
                  <strong>{project.name}</strong>
                  <span>EXPLORE PROJECT ↗</span>
                </Link>
                <div className="cx-proof-info">
                  <span className="cx-proof-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <small>{project.status}</small>
                  <Link href={`/work/${project.slug}`} className="cx-quiet-link cx-quiet-link-light">View project <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
          <p className="cx-proof-disclosure">Project cover graphics are abstract brand compositions, not depictions of client software. Detailed project pages distinguish deployed work from work in development.</p>
          <div className="cx-align-right"><Link href="/work" className="cx-quiet-link cx-quiet-link-light">View the full portfolio <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="cx-approach cx-section" aria-labelledby="cx-approach-title">
        <div className="company-wrap">
          <div className="cx-section-top">
            <div><p className="cx-overline">HOW WE WORK / 05</p><h2 id="cx-approach-title">Thought through.<br/><em>Built to last.</em></h2></div>
            <p>A clear process, practical engineering decisions and direct accountability from first discussion to implementation and support.</p>
          </div>
          <div className="cx-approach-steps">
            {companyPrinciples.map((step)=>(
              <div className="cx-approach-step" key={step.number}><span>{step.number}</span><h3>{step.name}</h3><p>{step.description}</p></div>
            ))}
          </div>
          <div className="cx-align-right"><Link href="/approach" className="cx-quiet-link">See our approach <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="cx-founder" aria-labelledby="cx-founder-title">
        <div className="company-wrap cx-founder-layout">
          <div className="cx-founder-symbol" aria-hidden="true"><Image src="/cwlwm-knot.png" width={514} height={505} alt="" /></div>
          <div>
            <p className="cx-overline cx-overline-light">A DIRECT PARTNERSHIP / 06</p>
            <h2 id="cx-founder-title">Work directly with<br/><em>the person who builds it.</em></h2>
            <p>Cwlwm Systems is an independent company founded by Kasey Pelchy. My background includes software engineering, business systems, data, integrations, marketing operations and technical troubleshooting. I bring that experience to every engagement without layers of account management.</p>
            <p className="cx-founder-note">Cwlwm client work and owned products are distinguished from my employment experience.</p>
            <Link href="/about" className="cx-quiet-link cx-quiet-link-light">More about Cwlwm <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="cx-contact" aria-labelledby="cx-contact-title">
        <div className="company-wrap cx-contact-layout">
          <div>
            <p className="cx-overline">LET&apos;S TALK / 07</p>
            <h2 id="cx-contact-title">What&apos;s holding your <em>business back?</em></h2>
            <p>Bring the problem, the idea, or the process that isn&apos;t working. We&apos;ll discuss practical next steps—whether that&apos;s a better website, a focused integration or a custom application.</p>
          </div>
          <Link href="/contact" className="cx-primary-button">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
