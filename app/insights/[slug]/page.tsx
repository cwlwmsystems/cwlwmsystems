import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { getInsight, insights } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <article>
        <header className="article-hero">
          <div className="container article-hero-inner">
            <Link className="back-link" href="/insights">← All insights</Link>
            <div className="article-meta"><span>{insight.category}</span><span>{insight.published}</span><span>{insight.readTime}</span></div>
            <h1>{insight.title}</h1>
            <p>{insight.description}</p>
          </div>
        </header>

        <div className="section article-section">
          <div className="container article-layout">
            <aside className="article-takeaway">
              <span>Key takeaway</span>
              <p>{insight.takeaway}</p>
              <Link className="text-link" href="/book">Discuss a workflow →</Link>
            </aside>
            <div className="article-body">
              {insight.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>
      <CTA compact />
    </>
  );
}
