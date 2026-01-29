"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  slug: string;
};

export default function RedirectClient({ slug }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams?.get("lang") || "en";
    router.replace(`/${lang}/projects/${slug}`);
  }, [router, searchParams, slug]);

  return null;
}
