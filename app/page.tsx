import type { Metadata } from "next";
import Link from "next/link";
import { KnotExperience } from "@/components/KnotExperience";
import { ParallaxExperience } from "@/components/ParallaxExperience";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Cwlwm Systems | Connected by Design",
  description: "Cwlwm Systems builds thoughtful digital experiences, custom software and connected operating systems. Explore real client work and independent software.",
  alternates: { canonical: "/" },
};

const [petals, field, olson] = portfolioProjects;
const offerings = [
  { index:"01", title:"Digital experiences", subtitle:"Websites and ecommerce with substance.", link:"/solutions", tags:"WEB / COMMERCE / EXPERIENCE" },
  { index:"02", title:"Custom applications", subtitle:"Software built for the way teams work.", link:"/solutions/operational-platforms", tags:"APPLICATIONS / PLATFORMS / TOOLS" },
  { index:"03", title:"Connected operations", subtitle:"Automation, data and systems that talk.", link:"/solutions/integrations-automation", tags:"APIS / DATA / AUTOMATION" },
];

export default function HomePage() {
  return (
    <div className="v4-home">
      <ParallaxExperience />
      <section className="v4-hero-shell" aria-labelledby="v4-hero-title">
        <div className="v4-hero-sticky">
          <div className="v4-hero-light v4-hero-light-red" data-depth="0.12" aria-hidden="true"/>
          <div className="v4-hero-light v4-hero-light-green" data-depth="-0.08" aria-hidden="true"/>
          <div className="v4-hero-rule v4-hero-rule-top" aria-hidden="true"/>
          <div className="container v4-hero-grid">
            <div className="v4-hero-copy">
              <div className="v4-micro v4-hero-topline"><span className="v4-live-dot"/> INDEPENDENT DIGITAL & SYSTEMS STUDIO <span className="v4-hero-est">EST. 2026</span></div>
              <h1 id="v4-hero-title">Made to <em>connect.</em></h1>
              <p className="v4-hero-lede">A digital experience should be beautiful on the surface—and brilliantly connected underneath.</p>
              <div className="v4-hero-links"><Link href="/work" className="v4-button">Explore the work <span aria-hidden="true">↗</span></Link><Link href="/contact" className="v4-text-link v4-text-link-light">Start a project <span aria-hidden="true">↗</span></Link></div>
              <div className="v4-hero-scroll-note">SCROLL TO SEE WHAT CONNECTS <span aria-hidden="true">↓</span></div>
            </div>
            <KnotExperience />
          </div>
          <div className="v4-hero-bottom-index" aria-hidden="true"><span>CWLWM / THE STUDIO</span><span>01 / 05</span></div>
        </div>
      </section>

      <section className="v4-manifesto" aria-labelledby="v4-manifesto-title">
        <div className="container">
          <span className="v4-micro">THE THINKING BEHIND THE WORK / 01</span>
          <h2 id="v4-manifesto-title" data-entrance>Less friction.<br/><em>More possibility.</em></h2>
          <div className="v4-manifesto-footer" data-entrance><span className="v4-manifesto-mark" aria-hidden="true">C / S</span><p>We bring design, engineering and operations together to create experiences that feel effortless—and systems that stand up to real work.</p></div>
        </div>
      </section>

      <section className="v4-selected" aria-labelledby="v4-work-title">
        <div className="v4-selected-head container"><span className="v4-micro">SELECTED PROJECTS / 02</span><div className="v4-selected-heading"><h2 id="v4-work-title">Work that <em>speaks.</em></h2><Link href="/work" className="v4-text-link">All work <span aria-hidden="true">↗</span></Link></div></div>
        <article className="v4-feature v4-feature-petals">
          <div className="v4-feature-scene">
            <div className="v4-feature-glow" data-depth="0.13" aria-hidden="true"/>
            <div className="v4-feature-giant" data-depth="-0.09" aria-hidden="true">P</div>
            <div className="container v4-feature-stage">
              <div className="v4-feature-index"><span>01 / CLIENT COMMERCE PLATFORM</span><span>DESIGN × ENGINEERING</span></div>
              <div className="v4-feature-display" aria-label="Conceptual visual representation of a floral ecommerce interface">
                <div className="v4-interface-browser"><span/><span/><span/><div>PORT PETALS</div></div>
                <div className="v4-interface-floral"><span>EVERYDAY OCCASIONS</span><strong>Thoughtfully<br/>arranged.</strong><i>Flowers • Gifts • Delivery</i></div>
                <div className="v4-interface-side"><span>SHOP THE COLLECTION</span><b>01 — 03</b></div>
              </div>
              <div className="v4-feature-name"><h3>Port<br/><em>Petals.</em></h3><span>CONNECTED COMMERCE</span></div>
            </div>
          </div>
          <div className="container v4-feature-foot"><div><p className="v4-feature-status">{petals.status}</p><p>{petals.summary}</p></div><Link href="/work/port-petals" className="v4-text-link v4-text-link-light">Explore project <span aria-hidden="true">↗</span></Link></div>
        </article>

        <article className="v4-feature v4-feature-field">
          <div className="v4-feature-scene">
            <div className="v4-feature-glow" data-depth="0.16" aria-hidden="true"/>
            <div className="v4-feature-giant" data-depth="-0.1" aria-hidden="true">F</div>
            <div className="container v4-feature-stage">
              <div className="v4-feature-index"><span>02 / INDEPENDENT SOFTWARE PRODUCT</span><span>DATA × FIELD OPERATIONS</span></div>
              <div className="v4-feature-display v4-interface-operations" aria-label="Conceptual illustration of a field operations dashboard">
                <div className="v4-interface-browser"><span/><span/><span/><div>CWLWM / FIELD OPERATIONS</div></div>
                <div className="v4-ops-content"><div className="v4-ops-rail"><span>OVERVIEW</span><span>ACTIVITY</span><span>TERRITORIES</span><span>SCHEDULING</span></div><div className="v4-ops-main"><span>OPERATIONS AT A GLANCE</span><strong>One clear picture.</strong><div className="v4-ops-metrics"><i/><i/><i/></div><div className="v4-ops-chart"><i/><i/><i/><i/><i/><i/><i/><i/></div></div></div>
              </div>
              <div className="v4-feature-name"><h3>Field<br/><em>Operations.</em></h3><span>CONNECTED WORKFLOWS</span></div>
            </div>
          </div>
          <div className="container v4-feature-foot"><div><p className="v4-feature-status">{field.status}</p><p>{field.summary}</p></div><Link href="/work/cwlwm-field-operations" className="v4-text-link v4-text-link-light">Explore product <span aria-hidden="true">↗</span></Link></div>
        </article>

        <article className="v4-feature v4-feature-olson">
          <div className="v4-feature-scene">
            <div className="v4-feature-glow" data-depth="0.15" aria-hidden="true"/>
            <div className="v4-feature-giant" data-depth="-0.1" aria-hidden="true">&amp;</div>
            <div className="container v4-feature-stage">
              <div className="v4-feature-index"><span>03 / RETAIL WEB PRESENCE</span><span>WEB × DISCOVERABILITY</span></div>
              <div className="v4-feature-display v4-interface-parts" aria-label="Conceptual illustration of an automotive parts retail website">
                <div className="v4-interface-browser"><span/><span/><span/><div>OLSON & TENGLUND, INC.</div></div>
                <div className="v4-parts-content"><span>THREE STORES. ONE TRUSTED NAME.</span><strong>Built for<br/>the road ahead.</strong><small>LOCAL EXPERTISE / AUTO PARTS / SERVICE</small></div>
              </div>
              <div className="v4-feature-name"><h3>Olson &amp;<br/><em>Tenglund.</em></h3><span>LOCAL DIGITAL PRESENCE</span></div>
            </div>
          </div>
          <div className="container v4-feature-foot"><div><p className="v4-feature-status">{olson.status}</p><p>{olson.summary}</p></div><Link href="/work/olson-tenglund" className="v4-text-link v4-text-link-light">Explore project <span aria-hidden="true">↗</span></Link></div>
        </article>
        <div className="container v4-visual-disclosure">Visuals are conceptual brand compositions, not screenshots of deployed interfaces. Technical details and verified status are available on each project page.</div>
      </section>

      <section className="v4-capabilities" aria-labelledby="v4-capabilities-title">
        <div className="container">
          <div className="v4-capabilities-heading"><span className="v4-micro">WHAT WE CREATE / 03</span><h2 id="v4-capabilities-title" data-entrance>Thoughtful outside.<br/><em>Powerful inside.</em></h2></div>
          <div className="v4-capabilities-lines">
            {offerings.map(item=><Link key={item.index} href={item.link} className="v4-capability-row"><span>{item.index}</span><strong>{item.title}</strong><div><p>{item.subtitle}</p><small>{item.tags}</small></div><b aria-hidden="true">↗</b></Link>)}
          </div>
        </div>
      </section>

      <section className="v4-about" aria-labelledby="v4-about-title">
        <div className="v4-about-emblem" data-depth="0.1" aria-hidden="true">C</div>
        <div className="container v4-about-layout">
          <span className="v4-micro">THE STUDIO / 04</span>
          <div><h2 id="v4-about-title" data-entrance>Direct collaboration.<br/><em>Uncompromising care.</em></h2><p>Cwlwm Systems is an independent software studio founded by Kasey Pelchy. The work is personal: from understanding your operations to building, integrating and supporting the systems behind them.</p><Link href="/about" className="v4-text-link v4-text-link-light">Get to know the studio <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="v4-finale" aria-labelledby="v4-finale-title">
        <div className="container"><span className="v4-micro">THE NEXT CONNECTION / 05</span><h2 id="v4-finale-title" data-entrance>Make something<br/><em>matter.</em></h2><div className="v4-finale-bottom"><p>Have a project, a challenge, or a disconnected system? Tell us what you want to change.</p><Link href="/contact" className="v4-button">Start a conversation <span aria-hidden="true">↗</span></Link></div></div>
      </section>
    </div>
  );
}
