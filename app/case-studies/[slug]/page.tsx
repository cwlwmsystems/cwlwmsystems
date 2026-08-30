import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.intro,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <section className={`case-hero accent-${study.accent}`}>
        <div className="container">
          <Link className="back-link" href="/case-studies">← All case studies</Link>
          <div className="case-hero-grid">
            <div>
              <p className="eyebrow light">Case study {study.number}</p>
              <h1>{study.title}</h1>
              <p>{study.intro}</p>
            </div>
            <div className="case-hero-meta">
              <span>Applicable to</span>
              <div>{study.applications.map((item) => <b key={item}>{item}</b>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section case-body">
        <div className="container">
          <div className="case-section-grid">
            <div className="case-side-title"><span>01</span><h2>Before</h2></div>
            <div className="challenge-cards">{study.challenge.map((item) => <p key={item}>{item}</p>)}</div>
          </div>

          <div className="case-section-grid">
            <div className="case-side-title"><span>02</span><h2>The system</h2></div>
            <div>
              <p className="case-large-copy">{study.solution}</p>
              <div className="flow-diagram">
                {study.flow.map((step, index) => (
                  <div className="flow-step" key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                    {index < study.flow.length - 1 ? <i>→</i> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="case-section-grid">
            <div className="case-side-title"><span>03</span><h2>Capabilities</h2></div>
            <div className="capability-grid">{study.capabilities.map((item) => <div key={item}>{item}</div>)}</div>
          </div>

          <div className="case-section-grid">
            <div className="case-side-title"><span>04</span><h2>Operational outcome</h2></div>
            <div><div className="value-list">{study.value.map((item, index) => <div key={item}><span>{index + 1}</span><p>{item}</p></div>)}</div><p className="case-proof-note">Case studies are presented as representative system patterns. Client-specific names, screenshots, testimonials, and measured results are only published with permission.</p></div>
          </div>

          <div className="case-section-grid technical-section">
            <div className="case-side-title"><span>05</span><h2>Technical foundation</h2></div>
            <div>
              <p className="muted-copy">The technology is selected to support the operating model, not the other way around. A system of this type may combine the following foundations:</p>
              <div className="pill-cloud">{study.foundation.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </div>

          <div className="case-context-cta">
            <div><p className="eyebrow">Could this pattern fit your business?</p><h2>Build the version that matches your workflow.</h2><p>The case study shows a reusable operating pattern, not a boxed product. I can adapt the architecture to the people, data, systems, and rules already inside your business.</p></div>
            <Link className="button primary" href="/contact">Build something like this</Link>
          </div>
        </div>
      </section>

      <section className="next-case">
        <div className="container next-case-inner">
          <div><p className="eyebrow">Next case study</p><h2>{nextStudy.title}</h2></div>
          <Link className="button secondary" href={`/case-studies/${nextStudy.slug}`}>Explore →</Link>
        </div>
      </section>
      <CTA compact />
    </>
  );
}
