import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/portfolio";

export function generateStaticParams(){return portfolioProjects.map(project=>({slug:project.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const project=portfolioProjects.find(item=>item.slug===slug);
  if(!project)return {};
  return {title:`${project.name} | Cwlwm Systems Work`,description:project.summary,alternates:{canonical:`/work/${slug}`}};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=portfolioProjects.find(item=>item.slug===slug);
  if(!project)notFound();
  const index=portfolioProjects.findIndex(item=>item.slug===slug);
  return <div className="company-site company-inner company-case">
    <section className={`company-case-hero company-case-hero-${index+1}`}>
      <div className="company-wrap"><Link href="/work" className="company-case-back">← Back to work</Link><p className="company-eyebrow">{project.type}</p><h1>{project.name}</h1><p>{project.summary}</p><div className="company-case-meta"><span>{project.status}</span><span>PROJECT 0{index+1} / CWLWM SYSTEMS</span></div></div>
    </section>
    <section className="company-case-overview company-section"><div className="company-wrap company-case-overview-grid"><div><p className="company-eyebrow company-eyebrow-dark">THE CONTEXT</p><h2 className="company-display">What needed to <em>change.</em></h2></div><p>{project.challenge}</p></div></section>
    <section className="company-case-detail company-section"><div className="company-wrap company-case-detail-grid"><div><p className="company-eyebrow company-eyebrow-dark">THE SOLUTION</p><h2 className="company-display">What was <em>delivered.</em></h2></div><ul>{project.delivered.map(item=><li key={item}>{item}</li>)}</ul></div></section>
    <section className="company-case-engineering company-section"><div className="company-wrap company-case-detail-grid"><div><p className="company-eyebrow">BEHIND THE BUILD</p><h2 className="company-display">Engineering <em>with purpose.</em></h2></div><div><ul>{project.engineering.map(item=><li key={item}>{item}</li>)}</ul><div className="company-case-tech">{project.tools.map(t=><span key={t}>{t}</span>)}</div></div></div></section>
    <section className="company-case-notes company-section"><div className="company-wrap company-case-detail-grid"><div><p className="company-eyebrow company-eyebrow-dark">PROJECT STATUS</p><h2 className="company-display">Clearly <em>documented.</em></h2></div><div><p>{project.note}</p><div className="company-case-links">{project.website&&<a href={project.website} target="_blank" rel="noreferrer">Visit website ↗</a>}{project.study&&<a href={project.study} target="_blank" rel="noreferrer">Read approved case study ↗</a>}{project.repository&&<a href={project.repository} target="_blank" rel="noreferrer">View repository ↗</a>}</div></div></div></section>
    <section className="company-cta"><div className="company-wrap company-cta-layout"><div><p className="company-eyebrow">LET US BUILD SOMETHING USEFUL</p><h2 className="company-display">Have a project <em>in mind?</em></h2></div><Link href="/contact" className="company-button company-button-cream">Start a conversation <span aria-hidden="true">↗</span></Link></div></section>
  </div>;
}