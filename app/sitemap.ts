import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/solutions",
    "/problems",
    "/case-studies",
    "/pricing",
    "/systems-review",
    "/ongoing-partnership",
    "/industries",
    "/approach",
    "/trust",
    "/insights",
    "/about",
    "/book",
    "/contact",
    "/legal",
    "/terms",
    "/service-agreement",
    "/privacy",
    "/cookies",
    "/acceptable-use",
    "/data-processing",
    "/subprocessors",
    "/billing-cancellation",
    "/security",
    "/accessibility",
  ];

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" || route === "/insights" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : ["/solutions", "/case-studies", "/pricing", "/ongoing-partnership", "/contact"].includes(route) ? 0.85 : 0.7,
    })),
    ...caseStudies.map((study) => ({
      url: `${site.url}/case-studies/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...insights.map((insight) => ({
      url: `${site.url}/insights/${insight.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}
