import Link from "next/link";

const technologies = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Python", slug: "python" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Supabase", slug: "supabase" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "BigQuery", slug: "googlebigquery" },
  { name: "GitHub", slug: "github" },
  { name: "Vercel", slug: "vercel" },
  { name: "WordPress", slug: "wordpress" },
];

const securityPractices = [
  {
    title: "Least-privilege access",
    copy: "Users and services are given only the access their role or workflow requires.",
  },
  {
    title: "Secure credentials",
    copy: "API keys, service credentials, and environment secrets are kept out of public source and client-side code.",
  },
  {
    title: "Protected data flows",
    copy: "Encrypted connections and appropriate authorization controls are used for production data paths where supported.",
  },
  {
    title: "Environment separation",
    copy: "Development, staging, and production concerns are separated when the project risk and scope call for it.",
  },
  {
    title: "Validation & auditability",
    copy: "Business rules, permissions, input boundaries, logging, and failure handling are treated as part of the system design.",
  },
  {
    title: "Recovery planning",
    copy: "Backup, retention, and recovery responsibilities are defined according to the system and the agreed scope.",
  },
];

export function TechnologyStrip() {
  return (
    <section className="technology-strip" aria-labelledby="technology-strip-heading">
      <div className="container">
        <div className="technology-strip-heading">
          <div>
            <span className="technology-strip-eyebrow">Technology experience</span>
            <h2 id="technology-strip-heading">Tools I use to build.</h2>
          </div>
          <p>Languages, frameworks, databases, cloud platforms, and development tools I use to design and build business systems.</p>
        </div>

        <div className="technology-logo-grid" role="list" aria-label="Technologies used by Cwlwm Systems">
          {technologies.map((technology) => (
            <div className="technology-logo-item" role="listitem" key={technology.name}>
              <img
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${technology.slug}.svg`}
                alt=""
                aria-hidden="true"
                width="30"
                height="30"
                loading="lazy"
              />
              <span>{technology.name}</span>
            </div>
          ))}
        </div>

        <div className="security-practices-panel" aria-labelledby="security-practices-heading">
          <div className="security-practices-intro">
            <div>
              <span className="technology-strip-eyebrow">Security &amp; data practices</span>
              <h3 id="security-practices-heading">The stack matters. How it is configured matters more.</h3>
            </div>
            <div>
              <p>Business systems can contain sensitive operational and customer information. I design around practical controls such as least-privilege access, secure credential handling, authorization boundaries, environment separation, logging, and recovery planning appropriate to the project.</p>
              <Link className="text-link" href="/security">Read Security Practices →</Link>
            </div>
          </div>

          <div className="security-practices-grid" role="list" aria-label="Security and data handling practices">
            {securityPractices.map((practice, index) => (
              <article role="listitem" key={practice.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h4>{practice.title}</h4>
                <p>{practice.copy}</p>
              </article>
            ))}
          </div>

          <p className="security-practices-note">Security controls are scoped to the needs of each engagement. Formal compliance or certification requirements should be identified during discovery and documented in the applicable statement of work.</p>
        </div>
      </div>
    </section>
  );
}
