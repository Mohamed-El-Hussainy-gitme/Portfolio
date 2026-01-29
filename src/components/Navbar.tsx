"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "../core/i18n/LanguageContext";

const linkBase = "relative pb-1 text-slate-300 transition hover:text-white";
const linkUnderline =
  "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-200 group-hover:scale-x-100";

function stripLocale(pathname: string): string {
  if (!pathname) return "/";
  const cleaned = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
  return cleaned === "" ? "/" : cleaned;
}

const Navbar: React.FC = () => {
  const { language, toggleLanguage, direction, href } = useLanguage();
  const isArabic = language === "ar";
  const pathname = usePathname() || "/";
  const logicalPath = stripLocale(pathname);

  const brandTitle = isArabic ? "محمد الحسيني" : "Mohamed El-Husseiny";
  const brandSub = isArabic ? "ملف أعمال مطور ويب" : "Web developer portfolio";
  const logoSrc = "/brand/logo.svg";

  const items = [
    { to: "/", label: isArabic ? "الرئيسية" : "Home" },
    { to: "/projects", label: isArabic ? "المشاريع" : "Projects" },
    { to: "/services", label: isArabic ? "الخدمات" : "Services" },
    { to: "/blog", label: isArabic ? "المدونة" : "Blog" },
    { to: "/contact", label: isArabic ? "تواصل" : "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-[#050816]/95 via-[#050816]/80 to-transparent backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={href("/")} className="group flex items-center gap-3" aria-label={brandTitle}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/70 ring-1 ring-white/10 shadow-lg shadow-violet-500/20">
            <Image
              src={logoSrc}
              alt={isArabic ? "شعار المطور" : "Developer logo"}
              width={24}
              height={24}
              priority
            />
          </div>

          <div className={direction === "rtl" ? "flex flex-col items-end" : "flex flex-col items-start"}>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-200">{brandTitle}</span>
            <span className="text-[11px] text-slate-400 transition group-hover:text-slate-200">{brandSub}</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => {
            const isActive = logicalPath === item.to;
            return (
              <Link
                key={item.to}
                href={href(item.to)}
                className={`${linkBase} group ${isActive ? "text-white" : ""}`}
              >
                {item.label}
                <span className={linkUnderline} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-slate-400 sm:inline">
            {isArabic ? "متاح لمشاريع جديدة" : "Available for work"}
          </span>

          <button
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-[11px] font-semibold tracking-[0.15em] text-slate-100 hover:border-violet-400"
            aria-label={isArabic ? "تبديل اللغة" : "Toggle language"}
          >
            {isArabic ? "EN" : "AR"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
