import { Suspense } from "react";
import BlogRedirectClient from "./BlogRedirectClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen grid place-items-center p-6">
          <p className="text-sm opacity-70">Redirecting…</p>
        </main>
      }
    >
      <BlogRedirectClient />
    </Suspense>
  );
}
