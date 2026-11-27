import type { Metadata } from "next";
import Link from "next/link";
import { companyServices } from "@/lib/company";

export const metadata:Metadata={
  title:"Services | Websites, Software & Connected Systems",
  description:"Websites, ecommerce, business applications, API integrations, automation, branding and ongoing support from Cwlwm Systems.",
  alternates:{canonical:"/services"},
};

export default function ServicesPage(){
  return <div className="company-site atelier-inner atelier-service-page">
    <section className="studio-page-hero">
      <div className="studio-container"><div className="studio-page-top"><span>02 / OUR CAPABILITIES</span><span>DESIGN / TECHNOLOGY / OPERATIONS</span></div>
        <h1>One partner.<br/><em>Many possibilities.</em></h1>
        <div className="studio-page-tail"><p>Every business needs something different. We build the digital presence, software and connected systems that make the difference.</p><Link href="/contact">START A CONVERSATION ↗</Link></div>
      </div>
    </section>
    <section className="studio-services-directory">
      <div className="studio-container">
        {companyServices.map((s,i)=><article className="studio-service-detail" id={s.slug} key={s.slug}>
          <div className="studio-service-heading"><span className="studio-overline">{s.number} / {String(companyServices.length).padStart(2,"0")}</span><h2>{s.title}</h2></div>
          <div className="studio-service-body"><p className="studio-service-intro">{s.description}</p><div className="studio-service-deliverables">{s.services.map((item,j)=><div key={item}><span>{String(j+1).padStart(2,"0")}</span>{item}</div>)}</div>
            <p className="studio-service-outcome"><strong>THE GOAL</strong>{s.outcome}</p>
            <div className="studio-service-actions"><Link href={`/work/${s.relatedProject}`} className="studio-text-link">Relevant work <span aria-hidden="true">↗</span></Link><Link href={`/contact?interest=${s.slug}`} className="studio-solid-link">Discuss this service <span aria-hidden="true">↗</span></Link></div>
          </div>
        </article>)}
      </div>
    </section>
    <section className="studio-page-cta"><div className="studio-container"><span>WHAT DO YOU NEED TO CHANGE?</span><div><h2>Let's find<br/><em>the right answer.</em></h2><Link href="/contact">Start with a conversation ↗</Link></div></div></section>
  </div>;
}
