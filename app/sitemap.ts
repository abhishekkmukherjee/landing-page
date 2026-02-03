import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.scalexgrowth.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-02-03")
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date("2026-02-03")
    }
  ];
}
