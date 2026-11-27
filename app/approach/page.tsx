import type { Metadata } from "next";
import Link from "next/link";
import { companyPrinciples } from "@/lib/company";

export const metadata:Metadata={
 title:"Our Approach | Cwlwm Systems",
 description:"How Cwlwm Systems approaches discovery, design, architecture, implementation, onboarding and long-term technical ownership.",
 alternates:{canonical:"/approach"},
};

export default function ApproachPage(){
 return <div className="company-site atelier-inner atelier-approach-page">
   <section className="studio-page-hero"><div className="studio-container">
     <div className="studio-page-top"><span>05 / THE APPROACH</span><span>BUSINESS FIRST / TECHNOLOGY SECOND</span></div>
     <h1>Considered from<br/><em>the beginning.</em></h1>
     <div className="studio-page-tail"><p>Not just a finished interface, but a clear process, strong decisions and a system your business can own with confidence.</p><span>DISCOVERY → DELIVERY</span></div>
   </div></section>
   <section className="studio-process-intro"><div className="studio-container studio-case-grid">
     <div><span className="studio-overline">A WORKING PRINCIPLE</span><h2>Understand first.<br/><em>Build second.</em></h2></div>
     <p>The objective isn&apos;t to introduce more technology. It&apos;s to understand what needs to change, the people involved, the systems already in place and what a practical result looks like. Then we choose the right level of design and engineering.</p>
   </div></section>
   <section className="studio-process-phases"><div className="studio-container">
     {companyPrinciples.map((step)=><article key={step.number} className="studio-process-phase">
       <span>{step.number}</span><h3>{step.name}</h3><p>{step.description}</p>
     </article>)}
   </div></section>
   <section className="studio-process-ownership"><div className="studio-container studio-case-grid">
     <div><span className="studio-overline">LONG-TERM THINKING</span><h2>What happens<br/><em>after launch?</em></h2></div>
     <div><p>We define what success means before starting. When the work is ready, we validate the real workflows, prepare documentation and agree on support, training, or a straightforward handoff. Clients should never be left guessing what happens next.</p><Link href="/services#ongoing-partnership" className="studio-text-link">Explore ongoing partnership <span aria-hidden="true">↗</span></Link></div>
   </div></section>
   <section className="studio-page-cta"><div className="studio-container"><span>YOUR PROJECT / OUR NEXT CONVERSATION</span><div><h2>Let&apos;s get<br/><em>it right.</em></h2><Link href="/contact">Discuss a project ↗</Link></div></div></section>
 </div>;
}
