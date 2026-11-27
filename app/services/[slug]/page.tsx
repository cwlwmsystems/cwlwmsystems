import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceLanding, serviceLandings } from "@/lib/service-landings";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return serviceLandings.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceLanding(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | Cwlwm Systems`,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceLanding(slug);
  if (!service) notFound();
  const contactUrl = `/contact?interest=${service.slug === "business-websites" || service.slug === "ecommerce-development" || service.slug === "seo-aeo" ? "digital" : "systems"}`;
  const graph = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}#service`,
    name: service.serviceType,
    description: service.metaDescription,
    serviceType: service.serviceType,
    provider: { "@id": `${site.url}/#organization` },
    url: `${site.url}/services/${service.slug}`,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Pennsylvania" },
      { "@type": "Country", name: "United States" },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };

  return (
    <div className="company-site cp-landing">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([graph, faq]) }} />
      <section className="cp-landing-hero">
        <div className="cp-landing-container">
          <nav className="cp-landing-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services">Services</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{service.eyebrow}</span>
          </nav>
          <div className="cp-landing-hero-grid">
            <div>
              <span className="cp-landing-eyebrow">{service.eyebrow}</span>
              <h1>{service.title}</h1>
              <p className="cp-landing-intro">{service.introduction}</p>
              <div className="cp-landing-actions">
                <Link className="cp-landing-button" href={contactUrl}>Discuss your project <span aria-hidden="true">↗</span></Link>
                <Link className="cp-landing-secondary" href="#approach">See how we work <span aria-hidden="true">↓</span></Link>
              </div>
            </div>
            <aside className="cp-landing-audience">
              <span>WHO THIS HELPS</span>
              <p>{service.audience}</p>
              <strong>WHAT WE AIM TO IMPROVE</strong>
              <ul>{service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="cp-landing-section">
        <div className="cp-landing-container">
          <header className="cp-landing-section-head">
            <span>01 / THE BUSINESS PROBLEM</span>
            <h2>Problems worth solving.</h2>
          </header>
          <div className="cp-landing-three">
            {service.problems.map((problem, index) => (
              <article className="cp-landing-card" key={problem.title}>
                <span>0{index + 1}</span>
                <h3>{problem.title}</h3>
                <p>{problem.explanation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-landing-section cp-landing-light" id="approach">
        <div className="cp-landing-container">
          <header className="cp-landing-section-head">
            <span>02 / THE DELIVERABLES</span>
            <h2>What's included in the conversation.</h2>
            <p>The scope is defined around your requirements, not a fixed list of unnecessary features.</p>
          </header>
          <div className="cp-landing-deliverables">
            {service.deliverables.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.explanation}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-landing-section">
        <div className="cp-landing-container">
          <header className="cp-landing-section-head">
            <span>03 / HOW IT WORKS</span>
            <h2>Clear decisions. Practical delivery.</h2>
          </header>
          <div className="cp-landing-three">
            {service.process.map((item, index) => (
              <article key={item.title} className="cp-landing-process">
                <span>STEP 0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.explanation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-landing-section cp-landing-light">
        <div className="cp-landing-container">
          <header className="cp-landing-section-head">
            <span>04 / RELEVANT EXPERIENCE</span>
            <h2>Explore related work.</h2>
          </header>
          <div className="cp-landing-proof-grid">
            {service.relatedWork.map((item) => (
              <Link href={`/work/${item.slug}`} key={item.slug}>
                <span>SELECTED EXPERIENCE <span aria-hidden="true">↗</span></span>
                <h3>{item.label}</h3><p>{item.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-landing-section">
        <div className="cp-landing-container">
          <header className="cp-landing-section-head">
            <span>05 / COMMON QUESTIONS</span>
            <h2>Before we get started.</h2>
          </header>
          <div className="cp-landing-faq">
            {service.questions.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="cp-landing-related">
            <strong>RELATED SERVICES</strong>
            {service.relatedServices.map((related) => {
              const target = getServiceLanding(related);
              return target ? <Link key={related} href={`/services/${related}`}>{target.metaTitle} ↗</Link> : null;
            })}
          </div>
        </div>
      </section>

      <section className="cp-landing-finish">
        <div className="cp-landing-container">
          <div><span>LET'S DISCUSS YOUR REQUIREMENTS</span><h2>Make the next move count.</h2><p>Start with your business problem and what you want to improve. We'll identify a sensible next step.</p></div>
          <Link className="cp-landing-button" href={contactUrl}>Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
