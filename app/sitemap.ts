import type { MetadataRoute } from "next";

const siteUrl = "https://3-d-pinturas.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}