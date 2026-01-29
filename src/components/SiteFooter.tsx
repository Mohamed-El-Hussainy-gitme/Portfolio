"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../core/i18n/LanguageContext";
import { buildWhatsAppLink, CONTACT_EMAIL, CONTACT_GITHUB, CONTACT_LINKEDIN } from "../data/contact";

export default function SiteFooter() {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  const focusKeyword = isArabic ? "بناء ويب سايت" : "website development";

  const waMessage = isArabic
    ? `مرحبًا محمد، أريد ${focusKeyword} وأرغب في طلب عرض سعر.`
    : `Hi Mohamed, I need ${focusKeyword} and would like a quote.`;

  const waLink = buildWhatsAppLink(waMessage);

  const brandTitle = isArabic ? "محمد الحسيني" : "Mohamed El-Husseiny";
  const brandTagline = isArabic
    ? `مطور ويب متخصص في ${focusKeyword} وتجارب RTL/EN بدون خلط.`
    : `Web developer focused on ${focusKeyword}, clean SEO, and flawless RTL/LTR UX.`;

    const logoSrc = "/brand/logo.svg";

  const links = [
    { to: "/", label: isArabic ? "الرئيسية" : "Home" },
    { to: "/projects", label: isArabic ? "المشاريع" : "Projects" },
    { to: "/services", label: isArabic ? "الخدمات" : "Services" },
    { to: "/blog", label: isArabic ? "المدونة" : "Blog" },
    { to: "/about", label: isArabic ? "من أنا" : "About" },
    { to: "/contact", label: isArabic ? "تواصل" : "Contact" },
  ];

  return (
    <footer
      dir={direction}
      className="relative mt-16 overflow-hidden border-t border-slate-800/70 bg-gradient-to-b from-slate-950 via-[#050816] to-black"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="multiverse-grid-overlay h-full w-full opacity-[0.12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(129,140,248,0.22),transparent_60%)] mix-blend-screen" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/70 ring-1 ring-white/10 shadow-lg shadow-violet-500/20">
                <Image
                  src={logoSrc}
                  alt={isArabic ? "شعار المطور" : "Developer logo"}
                  width={28}
                  height={28}
                />
              </div>

              <div className={direction === "rtl" ? "text-right" : "text-left"}>
                <div className="text-sm font-semibold text-slate-50">{brandTitle}</div>
                <div className="text-xs text-slate-400">{isArabic ? "ملف أعمال مطور ويب" : "Developer portfolio"}</div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300">{brandTagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-cyan-400/25 transition hover:brightness-105"
              >
                {isArabic ? "اطلب عرض سعر" : "Request a quote"}
              </a>

              <Link
                href={href("/projects")}
                className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/60 px-5 py-2 text-xs font-medium text-slate-100 hover:border-indigo-400"
              >
                {isArabic ? "شاهد المشاريع" : "View projects"}
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              {isArabic ? "روابط" : "Links"}
            </p>
            <ul className="grid gap-2 text-sm text-slate-300">
              {links.map((l) => (
                <li key={l.to}>
                  <Link href={href(l.to)} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              {isArabic ? "تواصل" : "Contact"}
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <span className="text-slate-400">{isArabic ? "البريد:" : "Email:"}</span>{" "}
                <a className="hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-xs">
                <a
                  className="rounded-full border border-slate-700/70 bg-slate-950/60 px-4 py-2 hover:border-indigo-400"
                  href={CONTACT_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-full border border-slate-700/70 bg-slate-950/60 px-4 py-2 hover:border-indigo-400"
                  href={CONTACT_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <p className="pt-2 text-xs leading-relaxed text-slate-400">
                {isArabic
                  ? `إذا كنت تبحث عن ${focusKeyword} سريع وحديث، ارسل رسالة مختصرة وسأرد عليك بخطة واضحة وخطوات التنفيذ.`
                  : `If you need ${focusKeyword} with clean UX and SEO, send a short message and I will reply with a clear plan and next steps.`}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700/70 to-transparent" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {brandTitle}. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </span>
          <span className="text-slate-600">
            {isArabic ? "مصمم بعناية لنتائج البحث (SEO/GEO) وتجربة عربية صحيحة." : "Crafted for SEO/GEO and clean bilingual UX."}
          </span>
        </div>
      </div>
    </footer>
  );
}
