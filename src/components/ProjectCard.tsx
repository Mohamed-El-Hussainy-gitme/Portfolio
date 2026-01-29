"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";
import type { ProjectDefinition } from "../data/projects";
import { getAssetPath } from "../core/utils/assetPath";

type Props = {
  project: ProjectDefinition;
  variant?: "standard" | "compact";
};

function buildAlt(name: string, tagline: string, focusKeyword: string, isArabic: boolean) {
  if (isArabic) return `${focusKeyword} — ${name} — لقطة من واجهة المشروع: ${tagline}`;
  return `${focusKeyword} — ${name} — project UI screenshot: ${tagline}`;
}

function inferFocusKeyword(techStack: string[], isArabic: boolean): string {
  const stack = techStack.map((t) => t.toLowerCase());
  const has = (s: string) => stack.some((t) => t.includes(s));

  if (has("seo")) return isArabic ? "تحسين SEO" : "SEO optimization";
  if (has("e-commerce") || has("store") || has("shop")) return isArabic ? "متجر إلكتروني" : "e-commerce website";
  if (has("dashboard") || has("admin")) return isArabic ? "لوحة تحكم" : "admin dashboard";
  if (has("wordpress")) return isArabic ? "موقع ووردبريس" : "WordPress website";
  if (has("next.js") || has("next")) return isArabic ? "تطوير Next.js" : "Next.js development";
  if (has("react")) return isArabic ? "تطوير React" : "React development";
  return isArabic ? "تصميم مواقع" : "website design";
}

export default function ProjectCard({ project, variant = "standard" }: Props) {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  const name = project.name[language];
  const tagline = project.tagline[language];
  const focusKeyword = project.focusKeyword?.[language] || inferFocusKeyword(project.techStack, isArabic);

  const cover = project.screens?.[0];
  const coverSrc = cover ? getAssetPath(cover.src) : undefined;

  const coverAlt = cover?.alt
    ? isArabic
      ? `${focusKeyword} — ${name} — ${cover.alt}`
      : `${focusKeyword} — ${name} — ${cover.alt}`
    : buildAlt(name, tagline, focusKeyword, isArabic);

  const goArrow = direction === "rtl" ? "←" : "→";

  return (
    <Link
      href={href(`/projects/${project.slug}`)}
      className={`group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 shadow-[0_0_24px_rgba(2,6,23,0.9)] transition hover:border-slate-600/70 ${
        variant === "compact" ? "p-4" : "p-6"
      }`}
      dir={direction}
      aria-label={name}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.16),transparent_55%)] opacity-70 transition group-hover:opacity-100" />

      <div className="relative">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
          {isArabic ? "مشروع" : "Project"} {String(project.universe).padStart(2, "0")}
        </p>

        <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-50">{name}</h3>

        <p className="mb-4 text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
          {tagline}
        </p>

        {coverSrc ? (
          <div
            className={`relative overflow-hidden rounded-2xl bg-slate-900/70 ${
              variant === "compact" ? "h-36" : "h-52"
            }`}
          >
            <Image
              src={coverSrc}
              alt={coverAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div
            className={`flex ${
              variant === "compact" ? "h-36" : "h-52"
            } items-center justify-center rounded-2xl bg-slate-900/70 text-xs text-slate-400`}
          >
            {isArabic ? "أضف صور المشروع لاحقًا" : "Add project images later"}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-700/70 bg-slate-950/60 px-3 py-1 text-xs text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200/90">
          <span>{isArabic ? "شاهد التفاصيل" : "View details"}</span>
          <span className="transition group-hover:translate-x-0.5" aria-hidden>
            {goArrow}
          </span>
        </div>
      </div>
    </Link>
  );
}
