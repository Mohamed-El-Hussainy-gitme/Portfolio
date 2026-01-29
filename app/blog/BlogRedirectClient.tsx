"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = searchParams?.get("lang") ?? "en";


  useEffect(() => {
    const base = lang === "ar" ? "/ar" : "/en";
    router.replace(`${base}/blog`);
  }, [router, lang]);

  return (
    <main className="min-h-screen grid place-items-center p-6">
      <p className="text-sm opacity-70">Redirecting…</p>
    </main>
  );
}
