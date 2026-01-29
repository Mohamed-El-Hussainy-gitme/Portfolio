"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") === "ar" ? "ar" : "en";
    router.replace(`/${lang}/projects`);
  }, [router]);

  return null;
}
