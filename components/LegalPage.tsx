import Link from "next/link";
import { legal, legalNav } from "@/lib/legal";

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  children: React.ReactNode;
  note?: string;
};

export function LegalPage({ eyebrow = "Legal", title, intro, children, note }: LegalPageProps) {
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="container narrow-left">
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <p className="legal-effective">Effective {legal.effectiveDate}</p>
        </div>
      </section>
      <section className="section legal-page">
        <div className="container legal-layout">
          <aside className="legal-sidebar" aria-label="Legal pages">
            <Link className="legal-hub-link" href="/legal">Legal & policies</Link>
            <nav>
              {legalNav.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
            </nav>
          </aside>
          <article className="legal-copy">
            {note ? <div className="legal-note">{note}</div> : null}
            {children}
            <hr />
            <h2>Questions</h2>
            <p>
              Questions about this document can be sent to{" "}
              <a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
