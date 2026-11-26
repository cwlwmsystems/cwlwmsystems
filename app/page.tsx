import type { Metadata } from "next";
import Link from "next/link";
import { StudioFlow } from "@/components/StudioFlow";
import { portfolioProjects, skillAreas } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Custom Software, Websites & Connected Systems",
  description: "Cwlwm Systems is an independent software studio developing websites, custom applications, ecommerce, automation and business systems.",
  alternates: { canonical: "/" },
};

const services = [
  { n:"01", title:"Custom applications", summary:"Purpose-built software for the workflows your business depends on.", href:"/solutions/operational-platforms" },
  { n:"02", title:"Websites & ecommerce", summary:"Digital experiences that feel effortless for customers and staff.", href:"/solutions" },
  { n:"03", title:"Automation & integrations", summary:"Reliable connections between APIs, teams, systems and decisions.", href:"/solutions/integrations-automation" },
  { n:"04", title:"Data, CRM & RevOps", summary:"Clearer information, better processes and measurable operations.", href:"/expertise" },
];

const signature = portfolioProjects.slice(0,3);

export default function HomePage() {
  return (
    <div className="studio-home">
      <section className="studio-hero" aria-labelledby="studio-hero-title">
        <div className="studio-hero-grid" aria-hidden="true" />
        <div className="container studio-hero-content">
          <div className="studio-hero-label"><span className="studio-availability-dot" /> INDEPENDENT SOFTWARE & SYSTEMS STUDIO</div>
          <h1 id="studio-hero-title">Complex systems.<br/><em>Beautifully simple.</em></h1>
          <div className="studio-hero-bottom">
            <p>We design and build custom software, digital experiences and integrations that make the work behind your business feel effortless.</p>
            <div className="studio-hero-actions">
              <Link className="studio-primary-link" href="/work">Explore our work <span aria-hidden="true">↗</span></Link>
              <Link className="studio-secondary-link" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="studio-hero-foot"><span>FOUNDER-LED / BUILT WITH INTENT</span><a href="#studio-intro">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section className="studio-intro studio-section" id="studio-intro" aria-labelledby="studio-intro-title">
        <div className="container studio-intro-layout">
          <div className="studio-section-index"><span>01 / THE STUDIO</span></div>
          <div>
            <h2 id="studio-intro-title">Good software does more than <em>look good.</em></h2>
            <div className="studio-intro-split">
              <p>It connects the people, data and decisions behind the experience. We work from the business requirement through architecture, development, testing and long-term operations.</p>
              <Link className="studio-text-link" href="/about">Meet the studio <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-services studio-section" aria-labelledby="studio-services-title">
        <div className="container">
          <div className="studio-section-heading"><span className="studio-section-index">02 / CAPABILITIES</span><h2 id="studio-services-title">Built around <em>the problem.</em></h2><p>From a better storefront to a custom operations platform, every project starts with what the business needs to accomplish.</p></div>
          <div className="studio-service-list">
            {services.map(s=><Link key={s.n} href={s.href} className="studio-service-row"><span className="studio-row-num">{s.n}</span><span className="studio-service-title">{s.title}</span><span className="studio-service-summary">{s.summary}</span><span className="studio-service-arrow" aria-hidden="true">↗</span></Link>)}
          </div>
        </div>
      </section>

      <section className="studio-work studio-section" aria-labelledby="studio-work-title">
        <div className="container">
          <div className="studio-work-heading"><div><span className="studio-section-index">03 / SELECTED WORK</span><h2 id="studio-work-title">Proof is in <em>the work.</em></h2></div><Link className="studio-text-link" href="/work">All projects <span aria-hidden="true">↗</span></Link></div>
          <div className="studio-work-stack">
            {signature.map((p,index)=><article className={index%2===0?"studio-work-item":"studio-work-item is-reversed"} key={p.slug}>
              <Link href={`/work/${p.slug}`} className={`studio-project-art studio-project-${index+1}`} aria-label={`Explore ${p.name}`}>
                <span className="studio-project-art-kicker">CWLWM / SELECTED WORK — 0{index+1}</span>
                <span className="studio-project-art-mark" aria-hidden="true">{index===0?"✳":index===1?"◇":"↗"}</span>
                <span className="studio-project-art-title">{p.name}</span>
                <span className="studio-project-art-footer">{p.type} <span aria-hidden="true">↗</span></span>
              </Link>
              <div className="studio-work-copy">
                <span className="studio-project-counter">PROJECT / 0{index+1}</span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <p className="studio-project-status">{p.status}</p>
                <div className="studio-project-tech">{p.tools.slice(0,4).map(t=><span key={t}>{t}</span>)}</div>
                <Link href={`/work/${p.slug}`} className="studio-text-link">Explore the project <span aria-hidden="true">↗</span></Link>
              </div>
            </article>)}
          </div>
          <p className="studio-work-disclosure">Project visuals are branded editorial graphics, not screenshots of client software. Detailed project pages distinguish what is live, in development and planned.</p>
        </div>
      </section>

      <section className="studio-process studio-section" aria-labelledby="studio-process-title">
        <div className="container studio-process-layout">
          <div className="studio-process-copy"><span className="studio-section-index">04 / HOW WE THINK</span><h2 id="studio-process-title">A connected system.<br/><em>Not another silo.</em></h2><p>Good engineering means understanding the workflow before writing the code. Explore how discovery, data design, development and testing connect.</p><Link href="/approach" className="studio-text-link">Our approach <span aria-hidden="true">↗</span></Link></div>
          <StudioFlow />
        </div>
      </section>

      <section className="studio-expertise studio-section" aria-labelledby="studio-expertise-title">
        <div className="container studio-expertise-layout">
          <div><span className="studio-section-index">05 / EXPERTISE</span><h2 id="studio-expertise-title">Breadth of experience.<br/><em>Depth in execution.</em></h2><p>Software engineering, operational data, integrations, CRM and analytics—connected through practical systems thinking.</p><Link className="studio-text-link" href="/expertise">Explore technical expertise <span aria-hidden="true">↗</span></Link></div>
          <div className="studio-expertise-list">{skillAreas.map((a,i)=><div key={a.name}><span>0{i+1}</span><strong>{a.name}</strong><p>{a.detail}</p></div>)}</div>
        </div>
      </section>

      <section className="studio-founder studio-section" aria-labelledby="studio-founder-title">
        <div className="container studio-founder-layout"><span className="studio-section-index">06 / INDEPENDENT BY DESIGN</span><div><h2 id="studio-founder-title">You work directly with <em>the person building it.</em></h2><p>Cwlwm Systems was founded by Kasey Pelchy in August 2026. My background spans software development, business systems, technical operations, automation, data, integrations and RevOps. Cwlwm client work is distinct from my professional employment experience.</p><Link href="/about" className="studio-text-link">More about Cwlwm <span aria-hidden="true">↗</span></Link></div></div>
      </section>

      <section className="studio-contact" aria-labelledby="studio-contact-title">
        <div className="container"><span className="studio-section-index">07 / YOUR NEXT PROJECT</span><h2 id="studio-contact-title">Have something <em>in mind?</em></h2><div className="studio-contact-row"><p>Something to build, streamline or connect? We should talk.</p><Link href="/contact" className="studio-contact-cta">Let&apos;s make it work <span aria-hidden="true">↗</span></Link></div></div>
      </section>
    </div>
  );
}
