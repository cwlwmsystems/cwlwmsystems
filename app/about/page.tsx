import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata:Metadata={
 title:"About Cwlwm Systems | Independent Technology Studio",
 description:"Cwlwm Systems is an independent, founder-led digital and systems studio blending business knowledge, software development, automation and practical implementation.",
 alternates:{canonical:"/about"},
};
export default function AboutPage(){
return <div className="company-site atelier-inner atelier-about-page">
  <section className="studio-page-hero"><div className="studio-container"><div className="studio-page-top"><span>03 / THE STUDIO</span><span>INDEPENDENT BY DESIGN</span></div><h1>Built around<br/><em>the work.</em></h1><div className="studio-page-tail"><p>Thoughtful design and practical engineering, with direct accountability from the first conversation through implementation and support.</p><span>CWLWM SYSTEMS / 2026</span></div></div></section>
  <section className="studio-about-intro"><div className="studio-container studio-case-grid"><span className="studio-overline">01 / WHO WE ARE</span><div><h2>Good technology is only as good as the business it serves.</h2><p>Cwlwm Systems is an independent digital and systems company founded by Kasey Pelchy. I work directly with businesses on websites, ecommerce, applications, integrations, automation, data and the technical systems that keep work moving.</p><p>The goal is straightforward: understand the problem, build what is appropriate, and make sure people can actually use and maintain the result.</p></div></div></section>
  <section className="studio-about-meaning"><div className="studio-container studio-about-meaning-grid"><div className="studio-about-symbol"><Image src="/cwlwm-knot.png" width={514} height={505} alt="The original interwoven Cwlwm Systems knot mark"/><span>FIG. 01 / CONNECTION BY DESIGN</span></div><div><span className="studio-overline">02 / THE NAME</span><h2>A knot holds things <em>together.</em></h2><p>Cwlwm is a Welsh word for a knot, tie or bond. It's a fitting name for the work: connecting people, information and technology so that a business becomes easier to operate—not more complicated.</p></div></div></section>
  <section className="studio-about-experience"><div className="studio-container studio-case-grid"><div><span className="studio-overline">03 / THE FOUNDER</span><h2>Technical depth.<br/><em>Business context.</em></h2></div><div><h3>Kasey Pelchy</h3><p>My experience spans business application development, database architecture, APIs and integrations, analytics, digital marketing operations, CRM/RevOps and production troubleshooting. That background informs the solutions I design and the questions I ask before anything is built.</p><p>My professional experience and Cwlwm Systems' independently owned projects are distinct. No previous employer's work is represented as a Cwlwm client engagement.</p><Link href="/expertise" className="studio-text-link">Explore technical expertise <span aria-hidden="true">↗</span></Link></div></div></section>
  <section className="studio-page-cta"><div className="studio-container"><span>WORK DIRECTLY / WITH THE PERSON BUILDING IT</span><div><h2>Let's create<br/><em>something useful.</em></h2><Link href="/contact">Get in touch ↗</Link></div></div></section>
</div>;
}
