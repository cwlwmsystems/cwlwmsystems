import type { Metadata } from "next";
import Link from "next/link";
import { engagementOptions, ongoingEngagementOptions } from "@/lib/site";

export const metadata:Metadata={
 title:"Engagements & Pricing | Cwlwm Systems",
 description:"Explore published starting points for systems assessments, integrations, custom software and ongoing technical partnership.",
 alternates:{canonical:"/pricing"},
};

export default function PricingPage() {
 return <div className="company-site atelier-inner atelier-pricing-page">
   <section className="studio-page-hero"><div className="studio-container">
     <div className="studio-page-top"><span>06 / WORK WITH CWLWM</span><span>ENGAGEMENTS & STARTING POINTS</span></div>
     <h1>Clear scope.<br/><em>Thoughtful investment.</em></h1>
     <div className="studio-page-tail"><p>Good projects start with an honest understanding of scope. These are existing published starting points for technical engagements, not one-size-fits-all packages.</p><span>FINAL PRICING BY PROPOSAL</span></div>
   </div></section>
   <section className="studio-price-section"><div className="studio-container">
     <div className="studio-price-heading"><span className="studio-overline">01 / PROJECT ENGAGEMENTS</span><h2>Start where it <em>makes sense.</em></h2></div>
     <div className="studio-price-list">{engagementOptions.map((item,i)=><article key={item.title} className="studio-price-item">
       <span className="studio-price-no">0{i+1}</span>
       <div><h3>{item.title}</h3><p>{item.fit}</p><div className="studio-price-includes">{item.includes.map(x=><span key={x}>{x}</span>)}</div></div>
       <div className="studio-price-action"><strong>{item.price}</strong><Link href={item.href}>Explore ↗</Link></div>
     </article>)}</div>
   </div></section>
   <section className="studio-price-section studio-price-section-muted"><div className="studio-container">
     <div className="studio-price-heading"><span className="studio-overline">02 / ONGOING PARTNERSHIP</span><h2>Long-term thinking.<br/><em>Reliable support.</em></h2></div>
     <div className="studio-price-list">{ongoingEngagementOptions.map((item,i)=><article key={item.title} className="studio-price-item">
       <span className="studio-price-no">0{i+1}</span>
       <div><h3>{item.title}</h3><p>{item.fit}</p><div className="studio-price-includes">{item.includes.map(x=><span key={x}>{x}</span>)}</div></div>
       <div className="studio-price-action"><strong>{item.price}</strong><Link href={item.href}>Explore ↗</Link></div>
     </article>)}</div>
     <p className="studio-price-note">Starting fees are illustrative, not commitments for every project. Scope, milestones, deliverables, ownership, additional vendor costs and maintenance expectations are confirmed in a written proposal and agreement.</p>
   </div></section>
   <section className="studio-page-cta"><div className="studio-container"><span>LET’S DEFINE THE WORK</span><div><h2>Every project<br/><em>has its own shape.</em></h2><Link href="/contact">Start a conversation ↗</Link></div></div></section>
 </div>;
}
