"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";
import { Seo } from "../core/seo/Seo";
import { breadcrumbList } from "../core/seo/schema";
import {
  buildWhatsAppLink,
  CONTACT_EMAIL,
  CONTACT_EMAIL_COMPOSE_URL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
} from "../data/contact";

type GuidanceItem = {
  id: string;
  en: string;
  ar: string;
};

export default function ContactPage() {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  const focusKeyword = isArabic ? "طلب عرض سعر" : "request a quote";

  const title = isArabic ? "تواصل | طلب عرض سعر" : "Contact | Request a Quote";
  const description = isArabic
    ? "اطلب عرض سعر لموقع شركة أو صفحة بيع أو متجر إلكتروني أو لوحة تحكم. أرسل المتطلبات وسأرد بخطة واضحة."
    : "Request a quote for a company website, landing page, e-commerce, or dashboard. Send your requirements and I’ll reply with a clear plan.";

  const projectTypesAr = "(موقع شركة / صفحة هبوط / متجر / لوحة تحكم / تحسين SEO)";
  const projectTypesEn = "(company website / landing page / e-commerce / dashboard / SEO)";

  const waMessage = isArabic
    ? `مرحبًا محمد، أريد ${focusKeyword}. نوع المشروع ${projectTypesAr}.\n\nالهدف: [عملاء/مبيعات/حجز].\nالصفحات/الأقسام: [مثال: الرئيسية + الخدمات + المشاريع + تواصل].\nاللغة: [عربي/إنجليزي].\nالمرجع/أمثلة: [روابط].\nالوقت المتوقع: [تاريخ].\nالميزانية (اختياري): [نطاق].`
    : `Hi Mohamed, I’d like to ${focusKeyword}. Project type ${projectTypesEn}.\n\nGoal: [leads/sales/bookings].\nPages/sections: [e.g., Home + Services + Projects + Contact].\nLanguage: [AR/EN].\nReferences/examples: [links].\nTimeline: [date].\nBudget (optional): [range].`;

  const waLink = buildWhatsAppLink(waMessage);

  const guidance: GuidanceItem[] = [
    {
      id: "type",
      en: "Project type (company website, landing page, e-commerce, dashboard, SEO)",
      ar: "نوع المشروع (موقع شركة، صفحة هبوط، متجر، لوحة تحكم، SEO)",
    },
    {
      id: "goal",
      en: "Goal (leads, sales, bookings) and your primary CTA",
      ar: "الهدف (عملاء، مبيعات، حجوزات) والـ CTA الأساسي",
    },
    {
      id: "scope",
      en: "Pages/sections and key features (forms, filters, payments, admin, etc.)",
      ar: "الصفحات/الأقسام والميزات (نماذج، فلاتر، دفع، لوحة تحكم...)",
    },
    {
      id: "content",
      en: "Existing content (logo, brand colors, copy) or ask me to help write it",
      ar: "المحتوى المتوفر (شعار، ألوان، نصوص) أو اذكر أنك تريد مساعدتي في كتابته",
    },
    {
      id: "timeline",
      en: "Timeline and target launch date",
      ar: "الوقت المتوقع وتاريخ الإطلاق",
    },
  ];

  const h1 = isArabic ? "تواصل" : "Contact";
  const headline = isArabic
    ? "ارسل تفاصيل مشروعك وسأرد بخطة واضحة"
    : "Send your project details and I’ll reply with a clear plan";

  return (
    <div dir={direction} className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <Seo
        title={title}
        description={description}
        focusKeyword={focusKeyword}
        schema={[
          breadcrumbList(isArabic ? "ar" : "en", [
            { name: isArabic ? "الرئيسية" : "Home", path: "/" },
            { name: isArabic ? "تواصل" : "Contact", path: "/contact" },
          ]),
        ]}
      />

      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">{h1}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
          {headline}
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3" aria-label={isArabic ? "طرق التواصل" : "Contact methods"}>
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-slate-950/40 p-7">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50">
            {isArabic ? "أفضل طريقة للتواصل" : "Best way to reach me"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
            {isArabic
              ? "واتساب هو الأسرع للمشاريع الجديدة. ولو تفضل البريد، استخدم زر البريد لإرسال رسالة واضحة."
              : "WhatsApp is the fastest for new projects. If you prefer email, use the email button to send a clear message."}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 px-6 py-2.5 text-sm font-semibold text-slate-950"
            >
              {isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </a>

            <a
              href={CONTACT_EMAIL_COMPOSE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400"
            >
              {isArabic ? "أرسل بريدًا" : "Send an email"}
            </a>

            <Link
              href={href("/services")}
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-transparent px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400"
            >
              {isArabic ? "الخدمات" : "Services"}
            </Link>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <h3 className="text-base font-semibold text-slate-50">{isArabic ? "ماذا ترسل؟" : "What to send"}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
              {isArabic
                ? "كلما كانت الرسالة محددة، كان الرد أسرع. أرسل النقاط التالية (حتى لو بشكل مختصر):"
                : "The more specific your message is, the faster I can reply. Include these points (even briefly):"}
            </p>

            <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2" style={{ unicodeBidi: "plaintext" }}>
              {guidance.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" aria-hidden />
                  <span>{isArabic ? item.ar : item.en}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <h3 className="text-base font-semibold text-slate-50">{isArabic ? "روابط داخلية مفيدة" : "Helpful internal links"}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
              {isArabic
                ? "لو تريد اختيار الخدمة المناسبة، ابدأ بالخدمات ثم شاهد مشاريع مشابهة."
                : "If you want to pick the right service first, start with Services and then review similar projects."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={href("/services")}
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-5 py-2 text-xs font-semibold text-slate-950"
              >
                {isArabic ? "الخدمات" : "Services"}
              </Link>
              <Link
                href={href("/projects")}
                className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-5 py-2 text-xs font-medium text-slate-100 hover:border-indigo-400"
              >
                {isArabic ? "المشاريع" : "Projects"}
              </Link>
              <Link
                href={href("/blog")}
                className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-transparent px-5 py-2 text-xs font-medium text-slate-100 hover:border-indigo-400"
              >
                {isArabic ? "المدونة" : "Blog"}
              </Link>
            </div>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-slate-950/40 p-7" aria-label={isArabic ? "معلومات الاتصال" : "Contact details"}>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50">{isArabic ? "معلومات" : "Details"}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
            {isArabic ? "للعملاء الذين يفضلون البريد أو لينكدإن." : "For clients who prefer email or LinkedIn."}
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{isArabic ? "البريد" : "Email"}</p>
              <p className="mt-2 break-all text-sm text-slate-100">{CONTACT_EMAIL}</p>
              <div className="mt-3">
                <a
                  href={CONTACT_EMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-950"
                >
                  {isArabic ? "أرسل بريدًا" : "Send an email"}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{isArabic ? "روابط" : "Profiles"}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs">
                <a
                  className="rounded-full border border-slate-700/70 bg-slate-950/60 px-4 py-2 hover:border-indigo-400"
                  href={CONTACT_LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-slate-700/70 bg-slate-950/60 px-4 py-2 hover:border-indigo-400"
                  href={CONTACT_GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                {isArabic ? "وقت الرد" : "Response time"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200" style={{ unicodeBidi: "plaintext" }}>
                {isArabic
                  ? "عادةً أرد خلال 24 ساعة برسالة تتضمن الخطوات التالية."
                  : "I usually reply within 24 hours with next steps and a clear outline."}
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
