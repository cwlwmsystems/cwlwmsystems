import type { Metadata } from "next";
import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio";
import { FieldOperationsSplash } from "@/components/FieldOperationsSplash";

export const metadata: Metadata = {
  title: "Selected Work | Cwlwm Systems",
  description: "Explore Cwlwm Systems client projects, independent software and a clearly attributed professional SEO/AEO engineering case study.",
  alternates: { canonical: "/work" },
};

const media = [
  {slug:"olson-tenglund",src:"https://raw.githubusercontent.com/kaseypelchy-ops/olson-tenglund-info/main/assets/parts-counter-scene.webp",label:"Image used on the Olson & Tenglund website"},
  {slug:"port-petals",src:"https://raw.githubusercontent.com/cwlwmsystems/port-petals/main/public/port-petals-logo-transparent.png",label:"Port Petals logo artwork featured on the ecommerce storefront"},
  {slug:"salt-light-church",src:"https://raw.githubusercontent.com/kaseypelchy-ops/church-website/main/public/images/placeholders/landscape/hero-worship.jpg",label:"Worship image used on the Salt & Light Church site preview"},
];

const order = ["olson-tenglund","port-petals","salt-light-church","cwlwm-field-operations","seo-aeo-search-intelligence"];
const projects = order.map(slug=>portfolioProjects.find(p=>p.slug===slug)).filter((p):p is typeof portfolioProjects[number]=>Boolean(p));

export default function WorkPage() {
  return <div className="company-site atelier-inner atelier-work-page">
    <section className="studio-page-hero">
      <div className="studio-container">
        <div className="studio-page-top"><span>01 / THE PORTFOLIO</span><span>CLIENT WORK / INDEPENDENT SOFTWARE / ENGINEERING EXPERIENCE</span></div>
        <h1>Built with<br/><em>intention.</em></h1>
        <div className="studio-page-tail"><p>A selection of Cwlwm client projects and independent software, alongside clearly attributed technical work from the founder’s previous professional roles.</p><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
    </section>
    <section className="studio-work-index">
      <div className="studio-container">
        {projects.map((project,i)=>{
          const image=media.find(item=>item.slug===project.slug);
          return <article className="studio-work-item" key={project.slug}>
            <Link href={`/work/${project.slug}`} className={`studio-work-visual studio-work-visual-${i+1}`} aria-label={`Explore ${project.name}`}>
              {image ? <div className="studio-work-photo" role="img" aria-label={image.label} style={{backgroundImage:`url("${image.src}")`}}/> :
                project.slug === "cwlwm-field-operations" ? <FieldOperationsSplash /> : project.slug === "seo-aeo-search-intelligence" ? <div className="seo-intelligence-visual" role="img" aria-label="Conceptual search intelligence architecture showing structured content, search evidence and optimization workflows"><span className="seo-intelligence-eyebrow">SEARCH / CONTENT / MEASUREMENT</span><div className="seo-intelligence-metric"><strong>SEO <i>+</i> AEO</strong><small>SEARCH INTELLIGENCE</small></div><div className="seo-intelligence-flow"><span>Structured content</span><span>Search evidence</span><span>Optimization</span></div><span className="seo-intelligence-foot">ENGINEERING CASE STUDY · NOT A PRODUCT SCREENSHOT</span></div> : <div className="studio-work-diagram" aria-label="Abstract design schematic"><span>CWLWM / SYSTEM STUDY</span><div><b>INTERFACE</b><i>→</i><b>PROCESS</b><i>→</i><b>DATA</b></div><small>DESIGN · ARCHITECTURE · IMPLEMENTATION</small></div>}
              <div className="studio-work-visual-footer"><span>PROJECT 0{i+1}</span><span>READ CASE STUDY ↗</span></div>
            </Link>
            <div className="studio-work-copy">
              <span className="studio-overline">{project.type}</span>
              <h2><Link href={`/work/${project.slug}`}>{project.name}</Link></h2>
              <p>{project.summary}</p>
              <span className="studio-status">{project.status}</span>
              <Link href={`/work/${project.slug}`} className="studio-text-link">Explore the work <span aria-hidden="true">↗</span></Link>
            </div>
          </article>;
        })}
        <p className="studio-accuracy">Project visuals show artwork and media used on their respective websites. Salt &amp; Light Church is a public site preview with some placeholder content and unfinished integrations. The Field Operations image reproduces its actual branded loading screen, not its operational dashboard. The SEO/AEO work is attributed to prior employment, with an architectural illustration—not a product screenshot. It is not a Cwlwm-owned platform.</p>
      </div>
    </section>
    <section className="studio-page-cta"><div className="studio-container"><span>YOUR PROJECT / NEXT</span><div><h2>Build something<br/><em>meaningful.</em></h2><Link href="/contact">Discuss your project ↗</Link></div></div></section>
  </div>;
}
