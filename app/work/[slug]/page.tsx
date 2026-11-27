import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/portfolio";

export function generateStaticParams() { return portfolioProjects.map(p=>({slug:p.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const p=portfolioProjects.find(x=>x.slug===slug);
  if (!p) return {};
  return {title:`${p.name} | Selected Work`,description:p.summary,alternates:{canonical:`/work/${slug}`}};
}

const images: Record<string, string> = {
  "olson-tenglund": "https://raw.githubusercontent.com/kaseypelchy-ops/olson-tenglund-info/main/assets/parts-counter-scene.webp",
  "port-petals": "https://raw.githubusercontent.com/cwlwmsystems/port-petals/main/public/heroes/flowers.jpg",
};

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=portfolioProjects.find(x=>x.slug===slug);
  if (!p) notFound();
  const image=images[p.slug];
  const next=portfolioProjects[(portfolioProjects.findIndex(x=>x.slug===p.slug)+1)%portfolioProjects.length];
  return <div className="company-site atelier-inner atelier-case">
    <section className="studio-page-hero studio-case-hero">
      <div className="studio-container">
        <div className="studio-page-top"><Link href="/work">← ALL WORK</Link><span>{p.type.toUpperCase()}</span></div>
        <h1>{p.name}</h1>
        <div className="studio-page-tail"><p>{p.summary}</p><span>{p.status.toUpperCase()}</span></div>
      </div>
    </section>
    <section className="studio-case-visual-section">
      <div className="studio-container">
        {image?<div className="studio-case-photo" role="img" aria-label={`Photography used by the ${p.name} project`} style={{backgroundImage:`url("${image}")`}}/>:
        <div className="studio-case-schematic" aria-label="Conceptual architecture, not a production screenshot"><div><span>CWLWM SYSTEMS / ARCHITECTURE</span><span>DOCUMENTED SYSTEM DESIGN</span></div><div className="studio-case-schematic-flow"><strong>USERS</strong><span>↔</span><strong>APPLICATION</strong><span>↔</span><strong>BUSINESS DATA</strong></div><div><span>DATA MODEL / INTEGRATION / WORKFLOWS</span><span>NOT A SCREENSHOT</span></div></div>}
        <p className="studio-case-image-note">{image?"Project image originates from media used in the respective website; it is not presented as a full interface screenshot.":"This diagram is a schematic of the type of system described; it does not represent a production screenshot."}</p>
      </div>
    </section>
    <section className="studio-case-chapter">
      <div className="studio-container studio-case-grid"><div><span className="studio-overline">01 / THE CONTEXT</span><h2>The work<br/><em>behind the work.</em></h2></div><div className="studio-case-lead">{p.challenge}</div></div>
    </section>
    <section className="studio-case-chapter studio-case-chapter-toned">
      <div className="studio-container studio-case-grid">
        <div><span className="studio-overline">02 / THE BUILD</span><h2>Made to<br/><em>work in practice.</em></h2></div>
        <div className="studio-case-list">{p.delivered.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></div>)}</div>
      </div>
    </section>
    <section className="studio-case-chapter studio-case-chapter-dark">
      <div className="studio-container studio-case-grid"><div><span className="studio-overline">03 / ENGINEERING</span><h2>Considered<br/><em>under the hood.</em></h2></div><div><div className="studio-case-list">{p.engineering.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></div>)}</div><div className="studio-case-tools">{p.tools.map(tool=><span key={tool}>{tool}</span>)}</div></div></div>
    </section>
    <section className="studio-case-chapter">
      <div className="studio-container studio-case-grid"><div><span className="studio-overline">04 / STATUS & TRANSPARENCY</span><h2>The details<br/><em>matter.</em></h2></div><div className="studio-case-notes"><p>{p.note}</p><div className="studio-case-links">{p.website&&<a href={p.website} target="_blank" rel="noopener noreferrer">Live website ↗</a>}{p.study&&<a href={p.study} target="_blank" rel="noopener noreferrer">Approved case study ↗</a>}{p.repository&&<a href={p.repository} target="_blank" rel="noopener noreferrer">Technical repository ↗</a>}</div></div></div>
    </section>
    <section className="studio-next-project"><div className="studio-container"><span className="studio-overline">NEXT PROJECT</span><Link href={`/work/${next.slug}`}>{next.name} <span aria-hidden="true">↗</span></Link></div></section>
    <section className="studio-page-cta"><div className="studio-container"><span>GOOD WORK / STARTS HERE</span><div><h2>What&apos;s your<br/><em>next move?</em></h2><Link href="/contact">Start a conversation ↗</Link></div></div></section>
  </div>;
}
