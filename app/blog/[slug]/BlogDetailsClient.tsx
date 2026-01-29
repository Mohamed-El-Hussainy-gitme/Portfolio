// app/blog/[slug]/BlogDetailsClient.tsx
"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogDetailsClient({ slug }: { slug: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // useSearchParams() ممكن يكون null حسب النوع في Next
  const lang = searchParams?.get("lang") || "en";

  useEffect(() => {
    router.replace(`/${lang}/blog/${slug}`);
  }, [router, lang, slug]);

  return null;
}
