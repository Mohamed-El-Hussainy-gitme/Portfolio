import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/core/seo/siteMeta";

import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

type Locale = "en" | "ar";
const locales: Locale[] = ["en", "ar"];

const staticPaths = ["/", "/projects", "/services", "/blog", "/contact"];

function buildUrl(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return `${SITE_ORIGIN}/${locale}${clean}`;
}

function toDateOnly(value: string | Date): string {
  const d = typeof value === "string" ? new Date(value) : value;
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = toDateOnly(new Date());
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({ url: buildUrl(locale, path), lastModified: today });
    }

    for (const p of projects) {
      entries.push({ url: buildUrl(locale, `/projects/${p.slug}`), lastModified: today });
    }

    for (const s of services) {
      entries.push({ url: buildUrl(locale, `/services/${s.slug}`), lastModified: today });
    }

    for (const post of blogPosts) {
      entries.push({ url: buildUrl(locale, `/blog/${post.slug}`), lastModified: toDateOnly(post.dateISO) });
    }
  }

  return entries;
}
