import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { portfolio } from "@/data/portfolio";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_LAST_UPDATED);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified },
    { url: `${SITE_URL}/services`, lastModified },
    { url: `${SITE_URL}/portfolio`, lastModified },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolio.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes];
}