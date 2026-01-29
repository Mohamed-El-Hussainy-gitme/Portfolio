"use client";

import React, { Suspense } from "react";
import { LanguageProvider } from "@/core/i18n/LanguageContext";
import ScrollToHash from "@/core/router/ScrollToHash";
import PageLayout from "@/layout/PageLayout";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {/*
        Next.js App Router: components that call useSearchParams() must be wrapped
        in a Suspense boundary to avoid prerender/build errors.
      */}
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
      <PageLayout>{children}</PageLayout>
    </LanguageProvider>
  );
}
