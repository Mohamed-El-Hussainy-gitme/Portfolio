"use client";

import React from "react";
import { useLanguage } from "../core/i18n/LanguageContext";

type LocaleText = { en: string; ar: string };

type Props = {
  platformLabel: LocaleText;
  reviewerName?: string;
  context?: LocaleText;
  dateISO?: string;
  screenshotSrc: string;
  screenshotAlt: LocaleText;
  sourceUrl: string;
};

function formatDate(dateISO: string, language: "en" | "ar") {
  const d = new Date(dateISO);
  try {
    return d.toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return dateISO;
  }
}

export default function ReviewCard({
  platformLabel,
  reviewerName,
  context,
  dateISO,
  screenshotSrc,
  screenshotAlt,
  sourceUrl,
}: Props) {
  const { language, direction } = useLanguage();
  const isArabic = language === "ar";

  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.12),transparent_55%)] opacity-70" />

      <div className="relative p-6" dir={direction}>
        <div className="flex items-start justify-between gap-4">
          <div className={direction === "rtl" ? "text-right" : "text-left"}>
            <span className="rounded-full border border-slate-700/70 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold text-slate-200">
              {platformLabel[language]}
            </span>

            <p className="mt-2 text-sm font-semibold text-slate-50">
              {reviewerName && reviewerName !== "—" ? reviewerName : isArabic ? "عميل" : "Client"}
            </p>

            {context ? (
              <p className="mt-1 text-xs text-slate-400" style={{ unicodeBidi: "plaintext" }}>
                {context[language]}
              </p>
            ) : null}
          </div>

          {dateISO ? (
            <span className="text-xs text-slate-500" dir="ltr">
              {formatDate(dateISO, language)}
            </span>
          ) : null}
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40">
          <img
            src={screenshotSrc}
            alt={screenshotAlt[language]}
            loading="lazy"
            className="h-56 w-full object-cover"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/60 px-5 py-2 text-xs font-semibold text-slate-100 transition hover:border-indigo-400"
          >
            {isArabic ? "افتح المصدر الأصلي" : "Open original source"}
          </a>

          <span className="text-[11px] text-slate-500">{isArabic ? "لقطة شاشة + رابط" : "Screenshot + link"}</span>
        </div>
      </div>
    </article>
  );
}
