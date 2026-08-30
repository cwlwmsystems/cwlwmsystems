import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`} className={`case-card accent-${study.accent}`}>
      <div className="case-card-top">
        <span>{study.number}</span>
        <span>Case study</span>
      </div>
      <div>
        <p className="case-eyebrow">{study.eyebrow}</p>
        <h3>{study.title}</h3>
        <p>{study.intro}</p>
      </div>
      <div className="case-card-bottom">
        <div>{study.applications.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
        <b>Explore system →</b>
      </div>
    </Link>
  );
}
