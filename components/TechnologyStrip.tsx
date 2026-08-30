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
      </div>
    </section>
  );
}
