import type { Metadata } from "next";
import Link from "next/link";
import { portfolioProjects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Selected Work | Cwlwm Systems",
  description: "Explore original client website and ecommerce work alongside independently developed software from Cwlwm Systems. See what is live, what was built, and how it works.",
  alternates: { canonical: "/work" },
};

const media = [
  {slug:"olson-tenglund",src:"https://raw.githubusercontent.com/kaseypelchy-ops/olson-tenglund-info/main/assets/parts-counter-scene.webp",label:"Image used on the Olson & Tenglund website"},
  {slug:"port-petals",src:"https://raw.githubusercontent.com/cwlwmsystems/port-petals/main/public/port-petals-logo-transparent.png",label:"Port Petals logo artwork featured on the ecommerce storefront"},
  {slug:"salt-light-church",src:"https://raw.githubusercontent.com/kaseypelchy-ops/church-website/main/public/images/placeholders/landscape/hero-worship.jpg",label:"Worship image used on the Salt & Light Church site preview"},
];

const order = ["olson-tenglund","port-petals","salt-light-church","cwlwm-field-operations","community-websites"];
const projects = order.map(slug=>portfolioProjects.find(p=>p.slug===slug)).filter((p):p is typeof portfolioProjects[number]=>Boolean(p));

export default function WorkPage() {
  return <div className="company-site atelier-inner atelier-work-page">
    <section className="studio-page-hero">
      <div className="studio-container">
        <div className="studio-page-top"><span>01 / THE PORTFOLIO</span><span>CLIENT WORK + INDEPENDENT DEVELOPMENT</span></div>
        <h1>Built with<br/><em>intention.</em></h1>
        <div className="studio-page-tail"><p>Each project starts with a real requirement and ends with practical decisions. This is selected work developed independently through Cwlwm Systems.</p><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
    </section>
    <section className="studio-work-index">
      <div className="studio-container">
        {projects.map((project,i)=>{
          const image=media.find(item=>item.slug===project.slug);
          return <article className="studio-work-item" key={project.slug}>
            <Link href={`/work/${project.slug}`} className={`studio-work-visual studio-work-visual-${i+1}`} aria-label={`Explore ${project.name}`}>
              {image ? <div className="studio-work-photo" role="img" aria-label={image.label} style={{backgroundImage:`url("${image.src}")`}}/> :
                <div className="studio-work-diagram" aria-label="Technical architecture diagram; no fabricated product screenshots"><span>CWLWM / SYSTEM STUDY</span><div><b>INTERFACE</b><i>→</i><b>PROCESS</b><i>→</i><b>DATA</b></div><small>DESIGN · ARCHITECTURE · IMPLEMENTATION</small></div>}
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
        <p className="studio-accuracy">Project visuals show artwork and media used on their respective websites. Salt &amp; Light Church is a public site preview with some placeholder content and unfinished integrations. Architecture illustrations are schematics, not screenshots. Employment projects are not represented as Cwlwm client engagements.</p>
      </div>
    </section>
    <section className="studio-page-cta"><div className="studio-container"><span>YOUR PROJECT / NEXT</span><div><h2>Build something<br/><em>meaningful.</em></h2><Link href="/contact">Discuss your project ↗</Link></div></div></section>
  </div>;
}
