"use client";

import React from "react";
import { useLanguage } from "../core/i18n/LanguageContext";
import { Seo } from "../core/seo/Seo";
import { breadcrumbList } from "../core/seo/schema";
import { buildWhatsAppLink } from "../data/contact";

export default function AboutPage() {
  const { language, direction } = useLanguage();
  const isArabic = language === "ar";

  const focusKeyword = isArabic ? "مطور مواقع" : "web developer";
  const title = isArabic ? "مطور مواقع: خبرة React وSEO وRTL" : "Web developer: React, SEO, and RTL";
  const description = isArabic
    ? "نبذة عن محمد: مطور مواقع Full-stack، متخصص React/TypeScript، SEO تقني، وتجربة RTL نظيفة لمواقع الشركات والمتاجر ولوحات التحكم."
    : "About Mohamed: a full-stack web developer focused on React/TypeScript, technical SEO, and clean RTL UX for business sites, e-commerce, and dashboards.";

  const wa = buildWhatsAppLink(
    isArabic ? `مرحبًا محمد، أريد بناء ويب سايت وأرغب في معرفة أفضل خطة.` : `Hi Mohamed, I need website development and want the best plan.`
  );

  return (
    <div dir={direction} className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <Seo
        title={title}
        description={description}
        focusKeyword={focusKeyword}
        schema={[
          breadcrumbList(isArabic ? "ar" : "en", [
            { name: isArabic ? "الرئيسية" : "Home", path: "/" },
            { name: isArabic ? "من أنا" : "About", path: "/about" },
          ]),
        ]}
      />

      <header className={direction === "rtl" ? "text-right" : "text-left"}>
        <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-cyan-100/85">{isArabic ? "من أنا" : "About"}</p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          {isArabic ? "مطور مواقع يهتم بالنتيجة" : "A web developer focused on outcomes"}
        </h1>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          {isArabic
            ? "أركز على بناء مواقع سريعة وواضحة تساعدك على التحويل والظهور: هيكلة محتوى صحيحة، SEO تقني، وتجربة RTL/LTR بدون خلط."
            : "I build fast, clear websites designed for conversion and visibility: clean structure, technical SEO, and RTL/LTR without language mixing."}
        </p>
      </header>

      <div className="mt-8">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 px-6 py-2.5 text-sm font-semibold text-slate-950"
        >
          {isArabic ? "تواصل على واتساب" : "Chat on WhatsApp"}
        </a>
      </div>
    </div>
  );
}
