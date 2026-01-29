// app/blog/[slug]/page.tsx
import { blogPosts } from "@/data/blog";
import { Suspense } from "react";
import BlogDetailsClient from "./BlogDetailsClient";

// مهم مع output: "export"
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  // الصفحة دي غالبًا عندك هدفها "Redirect" للـ locale route
  // فهنستخدم Client component يعمل redirect
  return (
    <Suspense fallback={null}>
      <BlogDetailsClient slug={params.slug} />
    </Suspense>
  );
}
