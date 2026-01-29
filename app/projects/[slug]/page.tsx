import RedirectClient from "./RedirectClient";
import { Suspense } from "react";
import { projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={null}>
      <RedirectClient slug={params.slug} />
    </Suspense>
  );
}
