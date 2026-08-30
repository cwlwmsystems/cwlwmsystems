import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/solutions", "/case-studies", "/industries", "/approach", "/about", "/contact", "/privacy"];
  return [
    ...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...caseStudies.map((study) => ({ url: `${site.url}/case-studies/${study.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
