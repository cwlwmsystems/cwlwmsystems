import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical thinking on business systems, workflow automation, integrations, internal tools, operational software, and build-vs-buy decisions.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">Insights</p>
          <h1>Practical thinking about the systems underneath the business.</h1>
          <p>Short, useful guidance on deciding what to automate, when to integrate, when to build, and how to recognize operational problems before they become expensive.</p>
        </div>
      </section>

      <section className="section">
        <div className="container insights-grid">
          {insights.map((article, index) => (
            <article className="insight-card" key={article.slug}>
              <div className="insight-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
              <span className="insight-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Link className="text-link" href={`/insights/${article.slug}`}>Read article →</Link>
            </article>
          ))}
        </div>
      </section>

      <CTA compact />
    </>
  );
}
