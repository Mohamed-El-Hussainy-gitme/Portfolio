"use client";

import React from "react";
import { useLanguage } from "../core/i18n/LanguageContext";
import { reviewPlatforms } from "../data/reviewPlatforms";
import { verifiedReviews } from "../data/verifiedReviews";

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  const stars = Array.from({ length: 5 }, (_, i) => i < full);

  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${full} out of 5`}>
      {stars.map((filled, idx) => (
        <svg
          key={idx}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${filled ? "text-amber-400" : "text-slate-700"}`}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M10 1.5l2.63 5.33 5.88.86-4.25 4.14 1 5.85L10 15.97 4.74 17.68l1-5.85-4.25-4.14 5.88-.86L10 1.5z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { language, direction } = useLanguage();
  const isArabic = language === "ar";

  const platformsWithUrls = reviewPlatforms.filter((p) => Boolean(p.profileUrl && p.profileUrl.trim()));

  const hasReviews = verifiedReviews.length > 0;
  const hasPlatformLinks = platformsWithUrls.length > 0;

  return (
    <section id="reviews" dir={direction} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className={direction === "rtl" ? "text-right" : "text-left"}>
        <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-cyan-100/85">
          {isArabic ? "مراجعات موثّقة" : "Verified reviews"}
        </p>

        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          {isArabic ? "تقييمات من منصّات حقيقية" : "Reviews from real platforms"}
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base" style={{ unicodeBidi: "plaintext" }}>
          {isArabic
            ? "بدل كتابة تقييمات داخل الموقع، نعتمد على روابط التقييمات الأصلية من المنصّات نفسها (Upwork / Fiverr / LinkedIn...) مع لقطات شاشة كإثبات."
            : "Instead of writing reviews inside the site, we link to the ORIGINAL reviews on real platforms (Upwork / Fiverr / LinkedIn...) and optionally show screenshots as proof."}
        </p>
      </header>

      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/40 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-300">
            <p className="font-semibold text-slate-50">{isArabic ? "مصادر التقييمات" : "Review sources"}</p>
            <p className="mt-1 text-slate-400">
              {hasPlatformLinks
                ? isArabic
                  ? "اضغط لفتح صفحتك الرسمية على كل منصة."
                  : "Click to open your official profile on each platform."
                : isArabic
                  ? "لم يتم إضافة روابط المنصّات بعد."
                  : "Platform links are not added yet."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(hasPlatformLinks ? platformsWithUrls : reviewPlatforms).map((p) => {
              const label = p.badge ?? p.name[language];
              const disabled = !p.profileUrl;

              const baseClass =
                "inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold transition";
              const activeClass =
                "border-slate-700/70 bg-slate-950/60 text-slate-100 hover:border-cyan-300/70";
              const disabledClass =
                "border-slate-800/60 bg-slate-950/20 text-slate-500 cursor-not-allowed";

              return disabled ? (
                <span
                  key={p.id}
                  className={`${baseClass} ${disabledClass}`}
                  title={isArabic ? "أضف الرابط لاحقاً" : "Add the URL later"}
                >
                  {label}
                </span>
              ) : (
                <a
                  key={p.id}
                  href={p.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseClass} ${activeClass}`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {!hasReviews ? (
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 p-6">
          <div className={direction === "rtl" ? "text-right" : "text-left"}>
            <p className="text-sm font-semibold text-slate-50">{isArabic ? "التقييمات فارغة حالياً" : "No reviews yet"}</p>
            <p className="mt-2 text-sm text-slate-300" style={{ unicodeBidi: "plaintext" }}>
              {isArabic
                ? "هذا مقصود حالياً. عند إرسال روابط التقييمات + لقطات الشاشة، سنضيفها هنا بحيث تكون كل بطاقة مرتبطة بالمصدر الأصلي."
                : "This is intentional for now. Once you send the review links + screenshots, we’ll add them here so each card points to the original source."}
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
              <p className="text-xs font-semibold text-slate-200">{isArabic ? "لتعبئة القسم:" : "To populate this section:"}</p>
              <ol className="mt-2 list-decimal space-y-1 ps-5 text-xs text-slate-400" style={{ unicodeBidi: "plaintext" }}>
                <li>
                  {isArabic
                    ? "ضع روابط صفحتك الرسمية على المنصّات داخل src/data/reviewPlatforms.ts"
                    : "Add your official profile links in src/data/reviewPlatforms.ts"}
                </li>
                <li>
                  {isArabic
                    ? "أضف كل تقييم داخل src/data/verifiedReviews.ts"
                    : "Add each review entry in src/data/verifiedReviews.ts"}
                </li>
                <li>
                  {isArabic
                    ? "ضع لقطة شاشة للتقييم داخل public/reviews (اختياري لكن الأفضل)"
                    : "Put a review screenshot inside public/reviews (optional but recommended)"}
                </li>
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verifiedReviews.map((r) => {
            const platform = reviewPlatforms.find((p) => p.id === r.platformId);
            const platformLabel = platform?.name[language] ?? r.platformId;
            const excerpt = r.excerpt?.[language] ?? r.excerpt?.en ?? r.excerpt?.ar;

            return (
              <article
                key={r.id}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 p-6"
                aria-label={isArabic ? `تقييم موثّق من ${platformLabel}` : `Verified review from ${platformLabel}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.12),transparent_55%)] opacity-70" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className={direction === "rtl" ? "text-right" : "text-left"}>
                      <p className="text-sm font-semibold text-slate-50">{r.reviewerName}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {platformLabel}
                        {r.dateText ? ` • ${r.dateText}` : ""}
                      </p>
                    </div>

                    {typeof r.rating === "number" ? <Stars rating={r.rating} /> : null}
                  </div>

                  {r.screenshotSrc ? (
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40"
                      aria-label={isArabic ? "فتح التقييم الأصلي" : "Open original review"}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.screenshotSrc}
                        alt={isArabic ? `لقطة شاشة لتقييم من ${platformLabel}` : `Screenshot of a review on ${platformLabel}`}
                        className="h-auto w-full"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  ) : null}

                  {excerpt ? (
                    <blockquote className="mt-4 text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
                      “{excerpt}”
                    </blockquote>
                  ) : null}

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/60 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-indigo-400"
                    >
                      {isArabic ? "شاهد التقييم في مصدره" : "View on original platform"}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
