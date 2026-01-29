"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Static export (output: 'export') لا يدعم redirect() في Server Components.
    // لذلك بنعمل تحويل Client-side.
    const lang = (typeof navigator !== "undefined" ? navigator.language : "").toLowerCase();
    const target = lang.startsWith("ar") ? "/ar" : "/en";
    router.replace(target);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <p className="text-sm opacity-70">Redirecting…</p>
    </main>
  );
}
