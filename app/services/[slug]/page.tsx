import RedirectClient from "./RedirectClient";
import { Suspense } from "react";
import { services } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={null}>
      <RedirectClient slug={params.slug} />
    </Suspense>
  );
}
