import { site } from "@/lib/site";
import { serviceLandings } from "@/lib/service-landings";
import { portfolioProjects } from "@/lib/portfolio";

export function GET() {
  // Optional machine-readable service directory. This is not an indexing directive,
  // a claim of official AI preference, or a substitute for useful HTML pages.
  const text = [
    "# Cwlwm Systems",
    "",
    "> Independently operated digital and business systems company, based in Pennsylvania and serving businesses remotely.",
    "",
    "Cwlwm Systems builds business websites, ecommerce experiences, custom software, API integrations, workflow automation, CRM-connected processes, digital growth foundations and ongoing technical support.",
    "",
    "## Core services",
    "",
    ...serviceLandings.map((service) => `- ${service.metaTitle}: ${site.url}/services/${service.slug} — ${service.metaDescription}`),
    "",
    "## Selected work and technical experience",
    "",
    ...portfolioProjects.map((project) => `- ${project.name}: ${site.url}/work/${project.slug} — ${project.status}. ${project.summary}`),
    "",
    "Important distinction: Cwlwm's client work and independently owned software are distinct from engineering experience at previous employers. The SEO/AEO search-intelligence platform was developed during prior employment; its public showcase contains sanitized examples, not private production data or a software product owned by Cwlwm Systems.",
    "",
    "## About and contact",
    "",
    `- Services: ${site.url}/services`,
    `- Work: ${site.url}/work`,
    `- Company: ${site.url}/about`,
    `- Approach: ${site.url}/approach`,
    `- Contact: ${site.url}/contact`,
    `- Email: ${site.email}`,
    "",
    "This file is provided only as a factual summary. Search and AI visibility are not guaranteed.",
  ].join("\n");

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
