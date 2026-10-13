import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { portfolio } from "@/data/portfolio";
import { SITE_URL, CONTENT_LAST_UPDATED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_LAST_UPDATED);

  const pair = (enPath: string, frPath: string): MetadataRoute.Sitemap => {
    const en = `${SITE_URL}${enPath}`;
    const fr = `${SITE_URL}${frPath}`;
    const alternates = { languages: { en, fr } };
    return [
      { url: en, lastModified, alternates },
      { url: fr, lastModified, alternates },
    ];
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    ...pair("", "/fr"),
    ...pair("/services", "/fr/services"),
    { url: `${SITE_URL}/portfolio`, lastModified },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.flatMap((s) =>
    pair(`/services/${s.slug}`, `/fr/services/${s.slug}`)
  );

  const portfolioRoutes: MetadataRoute.Sitemap = portfolio.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    lastModified,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes];
}