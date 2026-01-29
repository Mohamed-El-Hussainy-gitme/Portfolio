"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";

export default function WhyChooseSection() {
  const { language, href, direction } = useLanguage();
  const isArabic = language === "ar";

  const title = isArabic ? "لماذا تختارني؟" : "Why choose me?";
  const items = [
    {
      t: isArabic ? "SEO تقني صحيح" : "Clean technical SEO",
      d: isArabic ? "Canonical، hreflang، Sitemap، وبنية صفحات واضحة للفهرسة." : "Canonical, hreflang, sitemap, and indexable structure.",
    },
    {
      t: isArabic ? "أداء وسرعة" : "Performance",
      d: isArabic ? "LCP/CLS أفضل وتجربة مستخدم أسرع على الموبايل." : "Better Core Web Vitals and faster UX on mobile.",
    },
    {
      t: isArabic ? "محتوى قوي" : "Strong content",
      d: isArabic ? "تركيز على كلمات بحث قصيرة وقابلة للتحويل." : "Short, intent-based keywords that convert.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {items.map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="font-semibold text-white">{x.t}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{x.d}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 flex flex-wrap gap-3 ${direction === "rtl" ? "justify-end" : "justify-start"}`}>
          <Link href={href("/services")} className="rounded-full border border-white/10 bg-slate-950/50 px-5 py-2.5 text-sm text-slate-100 hover:border-violet-400">
            {isArabic ? "تصفح الخدمات" : "Browse services"}
          </Link>

          <Link href={href("/blog")} className="rounded-full border border-white/10 bg-slate-950/50 px-5 py-2.5 text-sm text-slate-100 hover:border-violet-400">
            {isArabic ? "اقرأ المدونة" : "Read the blog"}
          </Link>

          <Link href={href("/projects")} className="rounded-full border border-white/10 bg-slate-950/50 px-5 py-2.5 text-sm text-slate-100 hover:border-violet-400">
            {isArabic ? "شاهد المشاريع" : "View projects"}
          </Link>
        </div>
      </div>
    </section>
  );
}
