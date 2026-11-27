import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyBooking } from "@/components/CalendlyBooking";
import { site } from "@/lib/site";

export const metadata:Metadata={
 title:"Start a Project | Cwlwm Systems",
 description:"Discuss a website, ecommerce, branding, custom software, business integration or ongoing technical partnership with Cwlwm Systems.",
 alternates:{canonical:"/contact"},
};

export default async function ContactPage({searchParams}:{searchParams:Promise<{interest?:string}>}){
  const {interest}=await searchParams;
  const mode=interest==="digital"||interest==="digital-experiences"||interest==="brand-growth"?"digital":interest==="systems"||interest==="connected-systems"||interest==="software-products"?"systems":null;
  return <div className="company-site atelier-inner atelier-contact-page">
    <section className="studio-page-hero"><div className="studio-container"><div className="studio-page-top"><span>04 / GET IN TOUCH</span><span>DIRECT / FOUNDER-LED</span></div><h1>Start with<br/><em>a conversation.</em></h1><div className="studio-page-tail"><p>You don&apos;t need a perfect specification. Just tell me what you want to improve, build or connect.</p><span>30-MINUTE INTRODUCTION</span></div></div></section>
    <section className="studio-contact-content">
      <div className="studio-container studio-contact-grid">
        <div className="studio-contact-intro">
          <span className="studio-overline">A GOOD PLACE TO START</span>
          <h2>{mode==="digital"?"Something about your digital presence?":mode==="systems"?"Something about your systems?":"Let's talk about what needs to change."}</h2>
          <p>{mode==="digital"?"Whether it's a new website, ecommerce project, brand update or visibility issue, bring your goals and what you want customers to experience.":mode==="systems"?"Whether it's a custom application, manual workflow, CRM issue or disconnected data, bring the process that needs attention.":"A website that isn't doing its job. A process that takes too long. An application your business needs. We can start with the problem and find the right next step."}</p>
          <div className="studio-contact-expect"><span className="studio-overline">WHAT WE&apos;LL COVER</span><div><span>01</span>What you&apos;re trying to achieve</div><div><span>02</span>What&apos;s working and what isn&apos;t</div><div><span>03</span>Timing, constraints and next steps</div></div>
          <div className="studio-contact-email"><span className="studio-overline">PREFER EMAIL?</span><a href={`mailto:${site.email}`}>{site.email} ↗</a></div>
          <p className="studio-contact-small">You can also browse <Link href="/work">selected projects</Link> or <Link href="/services">services</Link> before booking.</p>
        </div>
        <div className="studio-contact-booking">
          <div className="studio-contact-booking-head"><span>YOUR FIRST CONVERSATION / 30 MIN</span><span>01 / DISCOVERY</span></div>
          <h3>Choose a time<br/>that works for you.</h3>
          <p>Use the calendar to book a free initial project-fit call. No obligation or technical brief required.</p>
          <CalendlyBooking/>
          <small>Scheduling is provided by Calendly. Your information is handled in accordance with the applicable privacy notices.</small>
        </div>
      </div>
    </section>
  </div>;
}
