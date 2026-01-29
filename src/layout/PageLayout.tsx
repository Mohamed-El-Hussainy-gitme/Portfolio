"use client";

import React from "react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "@/core/i18n/LanguageContext";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { direction, language } = useLanguage();

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50" dir={direction} lang={language}>
      <Navbar />
      <main className="relative">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default PageLayout;
