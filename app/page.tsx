import type { Metadata } from "next";
import Link from "next/link";
import { ParallaxExperience } from "@/components/ParallaxExperience";
import { StudioFlow } from "@/components/StudioFlow";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Cwlwm Systems — Custom Software, Digital Experiences & Automation",
  description: "Independently built custom software, websites and operational systems. Explore the work and the engineering behind it.",
  alternates: { canonical: "/" },
};

const services = [
  { n: "01", name: "Software & platforms", desc: "Custom applications and the operating systems behind growing businesses.", href: "/solutions/operational-platforms" },
  { n: "02", name: "Digital experiences", desc: "Beautiful websites, storefronts and thoughtfully designed customer journeys.", href: "/solutions" },
  { n: "03", name: "Automation & integration", desc: "Connect disconnected systems, data, teams and business rules.", href: "/solutions/integrations-automation" },
  { n: "04", name: "Data & RevOps", desc: "Make information useful through CRM, reporting and reliable processes.", href: "/expertise" },
];

const work = portfolioProjects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="cinema-home">
      <ParallaxExperience />

      <section className="cinema-hero" aria-labelledby="cinema-title">
        <div className="cinema-hero-noise" aria-hidden="true" />
        <div className="cinema-hero-ambient cinema-hero-ambient-one" data-depth="0.14" aria-hidden="true" />
        <div className="cinema-hero-ambient cinema-hero-ambient-two" data-depth="-0.1" aria-hidden="true" />
        <div className="cinema-orbit cinema-orbit-a" data-depth="0.19" aria-hidden="true" />
        <div className="cinema-orbit cinema-orbit-b" data-depth="-0.08" aria-hidden="true" />
        <div className="cinema-hero-grid" aria-hidden="true" />
        <div className="container cinema-hero-inner">
          <div className="cinema-hero-eyebrow"><span className="cinema-signal" /> INDEPENDENT SOFTWARE STUDIO <span className="cinema-hero-eyebrow-end">EST. 2026 / PENNSYLVANIA</span></div>
          <h1 id="cinema-title"><span className="cinema-hero-line">We build</span><span className="cinema-hero-line cinema-hero-line-two">what <em>connects.</em></span></h1>
          <div className="cinema-hero-midline"><span className="cinema-hero-rule" /><span>SOFTWARE / SYSTEMS / DIGITAL EXPERIENCES</span></div>
          <div className="cinema-hero-bottom">
            <p>Considered design. Serious engineering. Custom software, websites, automation and the systems that move a business forward.</p>
            <div className="cinema-hero-links"><Link href="/work" className="cinema-button-primary">See selected work <span aria-hidden="true">↗</span></Link><Link href="/contact" className="cinema-link-light">Start a conversation <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="cinema-hero-index"><span>SCROLL TO EXPLORE</span><span className="cinema-scroll-indicator" aria-hidden="true" /><span>01 — 06</span></div>
        </div>
      </section>

      <section className="cinema-statement" aria-labelledby="cinema-statement-title">
        <div className="container cinema-statement-inner">
          <div className="cinema-kicker">01 / AN IDEA, FULLY REALIZED</div>
          <h2 id="cinema-statement-title" data-entrance>Technology is only powerful when <em>everything works together.</em></h2>
          <div className="cinema-statement-bottom" data-entrance><p>Cwlwm Systems creates connected digital experiences—from the first interaction to the complicated systems working behind the scenes.</p><Link href="/about" className="cinema-underlined">Meet the studio <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="cinema-work" id="selected-work" aria-labelledby="cinema-work-title">
        <div className="container cinema-work-heading"><div className="cinema-kicker">02 / WORK, NOT JUST WORDS</div><h2 id="cinema-work-title" data-entrance>Made to <em>matter.</em></h2><div className="cinema-work-heading-bottom"><p>Real client platforms, independent software products and digital experiences. Every build has a purpose beyond the screen.</p><Link href="/work" className="cinema-underlined">Explore all projects <span aria-hidden="true">↗</span></Link></div></div>
        <div className="cinema-work-rail">
          {work.map((project, index) => (
            <article className={`cinema-work-chapter cinema-work-chapter-${index+1}`} key={project.slug}>
              <div className="cinema-work-scene">
                <div className="cinema-scene-backdrop" data-depth={index%2===0?"0.13":"-0.1"} aria-hidden="true"><div className="cinema-scene-rings" /><div className="cinema-scene-accent" /></div>
                <div className="cinema-scene-content">
                  <div className="cinema-scene-meta"><span>FEATURED PROJECT / 0{index+1}</span><span>{project.type}</span></div>
                  <div className="cinema-scene-visual" aria-hidden="true">
                    <div className="cinema-device-frame"><div className="cinema-device-top"><span /><span /><span /><b>{index===0?"portpetals.com":index===1?"Cwlwm / Field Operations":"Olson & Tenglund"}</b></div><div className="cinema-device-screen"><div className="cinema-device-menu"/><div className="cinema-device-headline">{index===0?"A little joy, delivered.":index===1?"One operation. Clear visibility.":"Your local auto parts partner."}</div><div className="cinema-device-lines"><i/><i/><i/></div><div className="cinema-device-panels"><i/><i/><i/></div></div></div>
                  </div>
                  <div className="cinema-scene-title"><span>0{index+1} / 03</span><h3>{project.name}</h3></div>
                </div>
              </div>
              <div className="container cinema-work-caption"><div><span className="cinema-kicker">{project.status}</span><p>{project.summary}</p></div><Link href={`/work/${project.slug}`} className="cinema-underlined">View case study <span aria-hidden="true">↗</span></Link></div>
            </article>
          ))}
        </div>
        <div className="container cinema-project-disclaimer">Project visuals are original conceptual interface illustrations—not screenshots of deployed software. Detailed project pages link to verified repositories and client-approved case studies where available.</div>
      </section>

      <section className="cinema-capabilities" aria-labelledby="cinema-capabilities-title">
        <div className="container">
          <div className="cinema-kicker">03 / WHAT WE CREATE</div>
          <div className="cinema-capabilities-intro"><h2 id="cinema-capabilities-title" data-entrance>From first sketch to <em>final integration.</em></h2><p>Exceptional digital work happens when design, data and engineering are considered together.</p></div>
          <div className="cinema-capabilities-list">
            {services.map(s=><Link href={s.href} key={s.n} className="cinema-capability"><span>{s.n}</span><strong>{s.name}</strong><p>{s.desc}</p><b aria-hidden="true">↗</b></Link>)}
          </div>
        </div>
      </section>

      <section className="cinema-process" aria-labelledby="cinema-process-title">
        <div className="cinema-process-halo" data-depth="0.1" aria-hidden="true" />
        <div className="container cinema-process-inner"><div className="cinema-process-intro"><div className="cinema-kicker">04 / HOW IT ALL CONNECTS</div><h2 id="cinema-process-title" data-entrance>Nothing is <em>isolated.</em></h2><p>Business requirements, the data model, the interface and its integrations are all parts of one system. Explore how we turn them into a working whole.</p><Link href="/approach" className="cinema-underlined">Our approach <span aria-hidden="true">↗</span></Link></div><StudioFlow /></div>
      </section>

      <section className="cinema-founder" aria-labelledby="cinema-founder-title">
        <div className="container cinema-founder-inner">
          <div className="cinema-founder-monogram" data-depth="0.08" aria-hidden="true">C<span>×</span>S</div>
          <div className="cinema-founder-content"><div className="cinema-kicker">05 / THE PERSON BEHIND THE BUILD</div><h2 id="cinema-founder-title" data-entrance>Small studio.<br/><em>Big-picture thinking.</em></h2><p>Founded by Kasey Pelchy in 2026, Cwlwm Systems brings software development, systems architecture, data, automation, business operations and RevOps into one cohesive practice. You work directly with the person doing the work.</p><div className="cinema-founder-links"><Link href="/about" className="cinema-underlined">Meet Kasey <span aria-hidden="true">↗</span></Link><Link href="/expertise" className="cinema-underlined">Explore expertise <span aria-hidden="true">↗</span></Link></div></div>
        </div>
      </section>

      <section className="cinema-outro" aria-labelledby="cinema-outro-title"><div className="cinema-outro-orb" data-depth="0.15" aria-hidden="true" /><div className="container cinema-outro-content"><div className="cinema-kicker">06 / YOUR TURN</div><h2 id="cinema-outro-title" data-entrance>Let&apos;s build <em>what&apos;s next.</em></h2><p>An idea, a challenge or a system that needs connecting. We start with the problem and build toward the right solution.</p><Link href="/contact" className="cinema-outro-button">Start a project <span aria-hidden="true">↗</span></Link></div></section>
    </div>
  );
}
