"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";

export default function AboutMeSection() {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  const focusKeyword = isArabic ? "انشاء موقع" : "website development";

  const title = isArabic ? "من أنا ولماذا أنا" : "Who I am & why me";
  const body = isArabic
    ? "أبني مواقع سريعة ومهيأة لمحركات البحث باستخدام Next.js و React. تركيزي الأساسي: تجربة مستخدم قوية، أداء ممتاز، وهيكلة SEO صحيحة."
    : "I build fast, SEO-ready websites using Next.js and React. My focus: strong UX, top performance, and clean technical SEO.";

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">{focusKeyword}</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{body}</p>

        <div className={`mt-8 flex flex-wrap gap-3 ${direction === "rtl" ? "justify-end" : "justify-start"}`}>
          <Link
            href={href("/about")}
            className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400"
          >
            {isArabic ? "اقرأ المزيد" : "Read more"}
          </Link>

          <Link
            href={href("/services")}
            className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400"
          >
            {isArabic ? "خدماتي" : "My services"}
          </Link>
        </div>
      </div>
    </section>
  );
}
