import { site, solutions, industries } from "@/lib/site";
import { caseStudies } from "@/lib/case-studies";

export function GET() {
  const text = `# Cwlwm Systems

> ${site.tagline}

Cwlwm Systems designs custom operational software, integrations, workflow automation, AI-assisted business systems, and data/decision intelligence for businesses whose work has outgrown disconnected tools and manual handoffs.

## Core positioning

Cwlwm Systems builds the operating layer between people, processes, data, and software. The company favors connecting and extending useful existing systems before recommending replacement.

## Solutions

${solutions.map((item) => `- ${item.title}: ${item.short}`).join("\n")}

## Representative system patterns

${caseStudies.map((item) => `- ${item.title}: ${item.intro}`).join("\n")}

## Industries and use cases

${industries.map((item) => `- ${item.title}: ${item.intro}`).join("\n")}

## How projects begin

A prospect can describe a manual process, disconnected tools, data problem, workflow bottleneck, or system that should work differently. Cwlwm Systems determines whether the right next step is a diagnostic, integration, automation, prototype, or custom build.

## Important pages

- Home: ${site.url}/
- Solutions: ${site.url}/solutions
- Case studies: ${site.url}/case-studies
- Industries: ${site.url}/industries
- Approach: ${site.url}/approach
- About: ${site.url}/about
- Contact: ${site.url}/contact
- Legal & policies: ${site.url}/legal
- Terms of Service: ${site.url}/terms
- Standard Service Agreement: ${site.url}/service-agreement
- Privacy Policy: ${site.url}/privacy
- Data Processing Terms: ${site.url}/data-processing
- Subprocessors: ${site.url}/subprocessors
- Billing & Cancellation: ${site.url}/billing-cancellation
- Security Practices: ${site.url}/security
- Accessibility: ${site.url}/accessibility

## Contact

Email: ${site.email}
Website: ${site.url}
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
