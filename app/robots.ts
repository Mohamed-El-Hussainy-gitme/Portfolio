// app/robots.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://elhussainy.pages.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
