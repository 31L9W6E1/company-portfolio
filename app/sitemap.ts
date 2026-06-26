import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { projects } from "@/content/site";

const baseUrl = "https://alpharifbta.mn";
const staticPages = ["", "about", "services", "capabilities", "portfolio", "clients", "certifications", "news", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page ? 0.7 : 1
    }))
  );

  const projectPages = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65
    }))
  );

  return [...pages, ...projectPages];
}
