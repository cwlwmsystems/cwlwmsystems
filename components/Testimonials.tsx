import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="section-intro"><div><p className="eyebrow">Client perspective</p><h2>What clients say after the system is in use.</h2></div></div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure key={`${item.company}-${item.name}`}>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption><strong>{item.name}</strong><span>{item.role} · {item.company}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
