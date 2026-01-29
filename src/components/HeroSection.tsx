"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";
import { buildWhatsAppLink } from "../data/contact";

export default function HeroSection() {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  const focusKeyword = isArabic ? "بناء ويب سايت" : "website development";

  const title = isArabic
    ? "مطور مواقع يركز على النتيجة"
    : "A developer focused on business outcomes";

  const subtitle = isArabic
    ? "أبني مواقع شركات، صفحات هبوط، متاجر إلكترونية، ولوحات تحكم — بسرعة عالية وSEO تقني وتجربة عربية/إنجليزية بدون خلط."
    : "I build company websites, landing pages, e-commerce, and dashboards — fast performance, technical SEO, and clean bilingual UX.";

  const primaryCta = isArabic ? "اطلب عرض سعر" : "Request a quote";
  const secondaryCta = isArabic ? "شاهد المشاريع" : "View projects";

  const waMessage = isArabic
    ? `مرحبًا محمد، أنا مهتم بخدمة ${focusKeyword}. نوع المشروع: [شركة/متجر/لوحة تحكم]. الصفحات المطلوبة: [عدد الصفحات]. اللغة: [عربية/إنجليزية]. الهدف: [زيادة المبيعات/جمع عملاء]. الموعد المتوقع: [تاريخ]. أريد عرض سعر.`
    : `Hi Mohamed, I'm interested in ${focusKeyword}. Project type: [company/e-commerce/dashboard]. Pages: [number]. Language: [Arabic/English]. Goal: [increase sales/collect leads]. Target date: [date]. I'd like a quote.`;

  const waLink = buildWhatsAppLink(waMessage);

  return (
    <section dir={direction} className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_bottom,rgba(167,139,250,0.16),transparent_55%)] opacity-70" />

        <div className="relative">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            {isArabic ? "خدمات" : "Services"} • {isArabic ? "SEO تقني" : "Technical SEO"} • {isArabic ? "أداء" : "Performance"}
          </p>

          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {title}
          </h1>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base" style={{ unicodeBidi: "plaintext" }}>
            {subtitle}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              {primaryCta}
            </a>

            <Link
              href={href("/projects")}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-400"
            >
              {secondaryCta}
            </Link>

            <Link
              href={href("/services")}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/70"
            >
              {isArabic ? "الخدمات" : "Services"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
