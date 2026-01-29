"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../core/i18n/LanguageContext";
import type { BlogPost } from "../data/blog";

type Props = {
  post: BlogPost;
};

function formatDate(dateISO: string, language: "en" | "ar") {
  const d = new Date(dateISO);
  try {
    return d.toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return dateISO;
  }
}

export default function BlogQueryPost({ post }: Props) {
  const { language, direction, href } = useLanguage();
  const isArabic = language === "ar";

  const title = post.title[language];
  const desc = post.description[language];
  const urlLine = `${isArabic ? "مدونة المطور" : "Developer blog"} › /blog/${post.slug}`;
  const date = formatDate(post.dateISO, language);

  return (
    <article dir={direction} className="group">
      <Link href={href(`/blog/${post.slug}`)} className="block">
        <div className={direction === "rtl" ? "text-right" : "text-left"}>
          <div className="mb-1 text-[12px] text-slate-400">{urlLine}</div>

          <h2 className="mb-1 text-lg font-semibold tracking-tight text-sky-200 group-hover:underline sm:text-xl">
            {title}
          </h2>

          <div className="mb-2 flex flex-wrap items-center gap-2 text-[12px] text-slate-400">
            <span>{date}</span>
            <span aria-hidden>·</span>
            <span className="text-slate-300">{post.focusKeyword[language]}</span>
            {post.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-700/70 bg-slate-950/60 px-2 py-0.5 text-[11px] text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{desc}</p>
        </div>
      </Link>
    </article>
  );
}
