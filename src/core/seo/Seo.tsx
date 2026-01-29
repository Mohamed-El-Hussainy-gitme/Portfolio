"use client";

export type SeoProps = {
  title: string;
  description: string;
  focusKeyword?: string;
  canonical?: string;
  locale?: "en" | "ar";
  schema?: Array<Record<string, unknown>>;
  ogImage?: string;
};

export function Seo(_props: SeoProps) {
  return null;
}
