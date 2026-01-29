"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";

export default function NotFoundPage() {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{isArabic ? "الصفحة غير موجودة" : "Page not found"}</h1>
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
        {isArabic ? "الرابط غير صحيح أو تم نقل الصفحة." : "The link is incorrect or the page has been moved."}
      </p>

      <div className={`mt-10 flex flex-wrap gap-3 ${direction === "rtl" ? "justify-end" : "justify-start"}`}>
        <Link href={href("/")} className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400">
          {isArabic ? "العودة للرئيسية" : "Back to home"}
        </Link>

        <Link href={href("/projects")} className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400">
          {isArabic ? "عرض المشاريع" : "View projects"}
        </Link>
      </div>
    </section>
  );
}
