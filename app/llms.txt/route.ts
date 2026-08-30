import { site, solutions, industries, engagementOptions } from "@/lib/site";
import { caseStudies } from "@/lib/case-studies";
import { insights } from "@/lib/insights";

export function GET() {
  const text = `# Cwlwm Systems

> ${site.tagline}

Cwlwm Systems is an independent, founder-led systems studio that designs custom operational software, integrations, workflow automation, AI-assisted business systems, and data/decision intelligence for businesses whose work has outgrown disconnected tools and manual handoffs.

## Core positioning

Cwlwm Systems builds the operating layer between people, processes, data, and software. The company favors connecting and extending useful existing systems before recommending replacement. Clients work directly with the person diagnosing, designing, building, and refining the system.

## Solutions

${solutions.map((item) => `- ${item.title}: ${item.short}`).join("\n")}

## Engagements and starting prices

${engagementOptions.map((item) => `- ${item.title}: ${item.price}. ${item.fit}`).join("\n")}

## Systems & Workflow Review

A fixed-price $750 review of one defined workflow or operating problem. Deliverables include a current-state workflow map, systems/data inventory, bottlenecks and risks, automation opportunities, and a prioritized roadmap.

## Representative system patterns

${caseStudies.map((item) => `- ${item.title}: ${item.intro}`).join("\n")}

## Industries and use cases

${industries.map((item) => `- ${item.title}: ${item.intro}`).join("\n")}

## Insights

${insights.map((item) => `- ${item.title}: ${item.description}`).join("\n")}

## How projects begin

A prospect can describe a manual process, disconnected tools, data problem, workflow bottleneck, or system that should work differently. Cwlwm Systems determines whether the right next step is a short project-fit call, a paid systems review, an integration, automation, a focused internal tool, or a larger custom build.

## Important pages

- Home: ${site.url}/
- Solutions: ${site.url}/solutions
- Problems I solve: ${site.url}/problems
- Case studies: ${site.url}/case-studies
- Engagements & pricing: ${site.url}/pricing
- Systems & Workflow Review: ${site.url}/systems-review
- Request a project-fit call: ${site.url}/book
- Industries: ${site.url}/industries
- Approach: ${site.url}/approach
- Trust & ownership: ${site.url}/trust
- Insights: ${site.url}/insights
- About: ${site.url}/about
- Contact: ${site.url}/contact
- Legal & policies: ${site.url}/legal
- Standard Service Agreement: ${site.url}/service-agreement
- Privacy Policy: ${site.url}/privacy
- Security Practices: ${site.url}/security

## Contact

Email: ${site.email}
Website: ${site.url}
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
