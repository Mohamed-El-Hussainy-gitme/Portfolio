"use client";

import React, { useMemo, useState } from "react";
import { useLanguage } from "../core/i18n/LanguageContext";
import { projects } from "../data/projects";

type Locale = "en" | "ar";

type SkillCategory = {
  id: string;
  label: { en: string; ar: string };
  description: { en: string; ar: string };
};

type SkillItem = {
  id: string;
  label: string;
  iconSrc: string;
  usedInProjects: number;
  categoryId: string;
};

const CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    label: { en: "Front-end", ar: "تطوير الواجهات" },
    description: {
      en: "Core technologies used to build production UIs.",
      ar: "التقنيات الأساسية لبناء واجهات جاهزة للإطلاق.",
    },
  },
  {
    id: "ui",
    label: { en: "UI & Styling", ar: "واجهة وتصميم" },
    description: {
      en: "Styling, layout, and UI tooling used across projects.",
      ar: "أدوات الستايل والتخطيط والواجهات المستخدمة داخل المشاريع.",
    },
  },
  {
    id: "state",
    label: { en: "State & Data", ar: "إدارة الحالة والبيانات" },
    description: {
      en: "State management and API/data handling utilities.",
      ar: "إدارة الحالة والتعامل مع البيانات وواجهات الـ API.",
    },
  },
  {
    id: "tooling",
    label: { en: "Tooling", ar: "أدوات العمل" },
    description: {
      en: "Build tooling and collaboration essentials.",
      ar: "أدوات البناء والعمل الجماعي.",
    },
  },
];

/**
 * IMPORTANT:
 * - Must be filename-safe on Windows + URLs
 * - Must match filenames inside /public/skills
 */
function normalizeToken(token: string): string {
  const t = token.trim().toLowerCase();

  // Normalize common patterns first
  const normalized = t
    .replace(/\+/g, "plus")
    .replace(/&/g, "and")
    .replace(/\./g, "")
    .replace(/@/g, "")
    .replace(/['"]/g, "")
    .replace(/:/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "");

  // Replace any remaining non-alphanumeric sequences with a single hyphen
  const slug = normalized
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return slug;
}

function categorize(token: string): string {
  const t = token.toLowerCase();

  if (t.includes("tailwind") || t.includes("css") || t.includes("mui") || t.includes("framer")) return "ui";
  if (t.includes("redux") || t.includes("zustand") || t.includes("state") || t.includes("api") || t.includes("axios")) return "state";
  if (t.includes("git") || t.includes("github") || t.includes("vite") || t.includes("eslint") || t.includes("typescript")) return "tooling";
  return "frontend";
}

function countUsage(token: string): number {
  const needle = token.toLowerCase().trim();
  return projects.reduce((acc, p) => {
    const used = p.techStack.some((x) => x.toLowerCase().trim() === needle);
    return acc + (used ? 1 : 0);
  }, 0);
}

export default function SkillsSection() {
  const { language, direction } = useLanguage();
  const lang: Locale = language === "ar" ? "ar" : "en";
  const isArabic = lang === "ar";

  const [query, setQuery] = useState<string>("");

  const allTokens = useMemo(() => {
    const raw = projects.flatMap((p) => p.techStack);
    const uniq = Array.from(new Set(raw.map((t) => t.trim()).filter(Boolean)));
    return uniq;
  }, []);

  const items = useMemo<SkillItem[]>(() => {
    return allTokens
      .map((label) => {
        const id = normalizeToken(label);
        return {
          id,
          label,
          iconSrc: `/skills/${id}.svg`,
          usedInProjects: countUsage(label),
          categoryId: categorize(label),
        };
      })
      .sort((a, b) => b.usedInProjects - a.usedInProjects);
  }, [allTokens]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it) => it.label.toLowerCase().includes(q));
  }, [items, query]);

  // If an image fails to load, we fall back to a placeholder instead of demoting/hiding it.
  const [brokenIds, setBrokenIds] = useState<Set<string>>(() => new Set());

  const byCategory = useMemo(() => {
    const map = new Map<string, SkillItem[]>();
    for (const it of filtered) {
      const list = map.get(it.categoryId) ?? [];
      list.push(it);
      map.set(it.categoryId, list);
    }
    return map;
  }, [filtered]);

  const usageLabel = (count: number): string => {
    if (isArabic) return `مستخدم في ${count.toLocaleString("ar-EG")} مشروع`;
    return `Used in ${count} project${count === 1 ? "" : "s"}`;
  };

  return (
    <section id="skills" dir={direction} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <header className={direction === "rtl" ? "text-right" : "text-left"}>
        <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-cyan-100/85">
          {isArabic ? "المهارات والأدوات" : "Skills & Tools"}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              {isArabic ? "Skills & Tools" : "Skills & Tools"}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base" style={{ unicodeBidi: "plaintext" }}>
              {isArabic
                ? "Grid احترافي مبني على التقنيات المستخدمة فعليًا داخل المشاريع. الشعارات يتم تحميلها من مجلد /public/skills."
                : "A premium grid derived from real project usage. Logos are loaded from /public/skills."}
            </p>
          </div>

          <div className="w-full sm:w-[320px]">
            <label className="block">
              <span className="sr-only">{isArabic ? "بحث" : "Search"}</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                placeholder={isArabic ? "ابحث عن مهارة..." : "Search a tool..."}
              />
            </label>
          </div>
        </div>
      </header>

      <div className="mt-10 space-y-10">
        {CATEGORIES.map((cat) => {
          const list = byCategory.get(cat.id) ?? [];
          if (list.length === 0) return null;

          return (
            <div key={cat.id} className="rounded-3xl border border-white/10 bg-slate-950/30 p-6 sm:p-7">
              <div className={direction === "rtl" ? "text-right" : "text-left"}>
                <h3 className="text-lg font-semibold tracking-tight text-slate-50">{cat.label[lang]}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300" style={{ unicodeBidi: "plaintext" }}>
                  {cat.description[lang]}
                </p>
              </div>

              <div className="mt-6 grid justify-items-stretch gap-4 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
                {list.map((s) => {
                  const usePlaceholder = brokenIds.has(s.id);
                  const src = usePlaceholder ? "/skills/placeholder.svg" : s.iconSrc;

                  return (
                    <div
                      key={s.id}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center transition hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_62%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                      <div className="relative mx-auto flex w-full flex-col items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/50">
                          <img
                            src={src}
                            alt={isArabic ? `شعار ${s.label}` : `${s.label} logo`}
                            loading="lazy"
                            width={44}
                            height={44}
                            className="h-11 w-11 object-contain"
                            onError={() => {
                              setBrokenIds((prev) => {
                                if (prev.has(s.id)) return prev;
                                const next = new Set(prev);
                                next.add(s.id);
                                return next;
                              });
                            }}
                          />
                        </div>

                        <p className="text-sm font-semibold text-slate-100" style={{ unicodeBidi: "plaintext" }}>
                          {s.label}
                        </p>

                        <p className="text-[11px] text-slate-400">
                          <span className="tabular-nums" dir="ltr">
                            {usageLabel(s.usedInProjects)}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
