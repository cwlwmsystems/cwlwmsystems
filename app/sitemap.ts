import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";
import { portfolioProjects } from "@/lib/portfolio";
import { serviceLandings } from "@/lib/service-landings";

/**
 * Indexable public routes. Avoid presenting build time as the last actual
 * modification date of every page; use real, verified content modification
 * dates only when available.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const publicPages = [
    "",
    "/services",
    "/work",
    "/about",
    "/approach",
    "/contact",
    "/pricing",
    "/expertise",
    "/ongoing-partnership",
    "/insights",
    "/case-studies",
    "/systems-review",
    "/industries",
    "/solutions",
    "/problems",
    "/trust",
    "/book",
  ];
  const legalPages = [
    "/legal", "/terms", "/service-agreement", "/privacy",
    "/cookies", "/acceptable-use", "/data-processing",
    "/subprocessors", "/billing-cancellation", "/security", "/accessibility",
  ];

  return [
    ...publicPages.map((route) => ({
      url: `${site.url}${route}`,
      changeFrequency: (route === "" || route === "/insights" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : ["/services", "/work", "/contact"].includes(route) ? 0.9 : 0.7,
    })),
    ...serviceLandings.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...portfolioProjects.map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudies.map((study) => ({
      url: `${site.url}/case-studies/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...insights.map((insight) => ({
      url: `${site.url}/insights/${insight.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...legalPages.map((route) => ({
      url: `${site.url}${route}`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
