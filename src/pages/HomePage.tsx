"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";
import { Seo } from "../core/seo/Seo";

import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ReviewsSection from "../components/ReviewsSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import CtaStrip from "../components/CtaStrip";
import BlogQueryPost from "../components/BlogQueryPost";

import { blogPosts } from "../data/blog";
import { services } from "../data/services";

export default function HomePage() {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  // Focus keyword: use naturally 4–6 times total on the page.
  const focusKeyword = isArabic ? "بناء ويب سايت" : "website development";

  const title = isArabic
    ? "بناء ويب سايت احترافي | سرعة وSEO وتحويل"
    : "Website development for speed, SEO, and leads";

  const description = isArabic
    ? "بناء ويب سايت للشركات والمتاجر ولوحات التحكم. سرعة عالية وSEO تقني وتجربة عربية/إنجليزية بدون مشاكل اتجاه."
    : "Website development for companies, e-commerce, and dashboards. Fast performance, technical SEO, and clean bilingual UX.";

  const latestPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1)).slice(0, 3);
  }, []);

  const topServices = useMemo(() => services.slice(0, 6), []);

  return (
    <>
      <Seo title={title} description={description} focusKeyword={focusKeyword} />

      <HeroSection />

      {/* Services preview (conversion + internal linking) */}
      <section dir={direction} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className={direction === "rtl" ? "text-right" : "text-left"}>
          <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-cyan-100/85">
            {isArabic ? "الخدمات" : "Services"}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                {isArabic ? "خدمات واضحة النتائج" : "Services with clear outcomes"}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base" style={{ unicodeBidi: "plaintext" }}>
                {isArabic
                  ? `أقدم ${focusKeyword} بشكل منظم: نطاق واضح، مخرجات قابلة للتسليم، وتجهيز SEO تقني يساعدك تظهر بنتائج أفضل.`
                  : `I deliver ${focusKeyword} as a structured service: clear scope, concrete deliverables, and technical SEO foundations that improve visibility.`}
              </p>
            </div>

            <Link
              href={href("/services")}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70"
            >
              {isArabic ? "عرض كل الخدمات" : "View all services"}
            </Link>
          </div>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topServices.map((s) => (
            <Link
              key={s.id}
              href={href(`/services/${s.slug}`)}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 p-6 transition hover:border-white/20"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.14),transparent_55%)] opacity-70" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {s.focusKeyword[language]}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-50">{s.title[language]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.summary[language]}</p>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200/90">
                  <span>{isArabic ? "تفاصيل الخدمة" : "Service details"}</span>
                  <span className="transition group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SkillsSection />

      <ReviewsSection />

      <FeaturedProjectsSection />

      {/* Blog preview (internal linking to blog, which later links back to services) */}
      <section dir={direction} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className={direction === "rtl" ? "text-right" : "text-left"}>
          <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-cyan-100/85">
            {isArabic ? "المدونة" : "Blog"}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                {isArabic ? "مقالات عملية" : "Practical posts"}
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {isArabic
                  ? "محتوى يساعدك تفهم وتنفذ: SEO تقني، أداء، وتجربة RTL/LTR بدون مشاكل اتجاه."
                  : "Content you can apply: technical SEO, performance, and clean bilingual UX without direction bugs."}
              </p>
            </div>

            <Link
              href={href("/blog")}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70"
            >
              {isArabic ? "عرض كل المقالات" : "View all posts"}
            </Link>
          </div>
        </header>

        <div className="mt-8 space-y-5">
          {latestPosts.map((post) => (
            <div
              key={post.slug}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,rgba(167,139,250,0.16),transparent_55%)] opacity-70" />
              <div className="relative">
                <BlogQueryPost post={post} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
