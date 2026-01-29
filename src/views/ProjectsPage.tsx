"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";
import { Seo } from "../core/seo/Seo";
import { breadcrumbList, projectsItemListSchema } from "../core/seo/schema";
import { projects as allProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { buildWhatsAppLink } from "../data/contact";

const TAGS: Array<{ value: string; labelEn: string; labelAr: string }> = [
  { value: "all", labelEn: "All", labelAr: "الكل" },
  { value: "landing", labelEn: "Landing pages", labelAr: "صفحات بيع" },
  { value: "dashboard", labelEn: "Dashboards", labelAr: "لوحات تحكم" },
  { value: "ecommerce", labelEn: "E-commerce", labelAr: "متاجر" },
  { value: "seo", labelEn: "SEO", labelAr: "SEO" },
  { value: "wordpress", labelEn: "WordPress", labelAr: "ووردبريس" },
  { value: "3d", labelEn: "3D", labelAr: "ثري دي" },
];

export default function ProjectsPage() {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  const [activeTag, setActiveTag] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (activeTag === "all") return allProjects;
    return allProjects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const title = isArabic ? "المشاريع ودراسات الحالة" : "Projects & Case Studies";
  const description = isArabic
    ? "مشاريع حقيقية مع دراسات حالة تُظهر المشكلة والحل والنتيجة. اختر النوع المناسب واطلب تنفيذ مشروع مشابه."
    : "Real projects with case studies that show the problem, solution, and outcome. Filter by type and request a similar build.";

  const whatsappLink = buildWhatsAppLink(
    isArabic
      ? "مرحبًا محمد، شاهدت مشاريعك وأريد مشروعًا مشابهًا. نوع المشروع: [شركة/متجر/لوحة تحكم/صفحة بيع]. اللغة: [عربي/إنجليزي]. الهدف: [عملاء/مبيعات]. هل يمكن إرسال عرض سعر؟"
      : "Hi Mohamed, I reviewed your projects and I want something similar. Project type: [company/e-commerce/dashboard/landing]. Language: [AR/EN]. Goal: [leads/sales]. Can you send a quote?"
  );

  return (
    <div dir={direction} className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <Seo
        title={title}
        description={description}
        schema={[
          breadcrumbList(isArabic ? "ar" : "en", [
            { name: isArabic ? "الرئيسية" : "Home", path: "/" },
            { name: isArabic ? "المشاريع" : "Projects", path: "/projects" },
          ]),
          projectsItemListSchema(isArabic ? "ar" : "en", filteredProjects),
        ]}
      />

      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
          {description}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 px-6 py-2.5 text-sm font-semibold text-slate-950"
          >
            {isArabic ? "اطلب مشروع مشابه" : "Request a similar project"}
          </a>
          <Link
            href={href("/services")}
            className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400"
          >
            {isArabic ? "الخدمات" : "Services"}
          </Link>
          <Link
            href={href("/contact")}
            className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-transparent px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400"
          >
            {isArabic ? "تواصل الآن" : "Contact"}
          </Link>
        </div>
      </header>

      <section aria-label={isArabic ? "تصفية المشاريع" : "Project filters"} className="mb-8">
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => {
            const label = isArabic ? t.labelAr : t.labelEn;
            const isActive = activeTag === t.value;
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => setActiveTag(t.value)}
                className={
                  "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors " +
                  (isActive
                    ? "border-indigo-400 bg-slate-950/70 text-slate-50"
                    : "border-slate-700/70 bg-slate-900/30 text-slate-200 hover:border-slate-500")
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section aria-label={isArabic ? "قائمة المشاريع" : "Projects list"} className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} variant="standard" />
        ))}
      </section>

      <footer className="mt-14 rounded-3xl border border-white/10 bg-slate-950/40 p-7">
        <h2 className="text-lg font-semibold tracking-tight text-slate-50">
          {isArabic ? "هل تريد مشروعًا بنفس المستوى؟" : "Want a project at the same level?"}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
          {isArabic
            ? "اختر خدمة مناسبة ثم أرسل تفاصيل مشروعك. سأقترح خطة واضحة ومخرجات قابلة للقياس."
            : "Pick the relevant service and send your requirements. I’ll propose a clear plan with measurable deliverables."}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={href("/services")}
            className="inline-flex items-center justify-center rounded-full bg-slate-50 px-6 py-2.5 text-sm font-semibold text-slate-950"
          >
            {isArabic ? "تصفّح الخدمات" : "Browse services"}
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2.5 text-sm font-medium text-slate-100 hover:border-indigo-400"
          >
            {isArabic ? "تواصل عبر واتساب" : "WhatsApp"}
          </a>
        </div>
      </footer>
    </div>
  );
}
