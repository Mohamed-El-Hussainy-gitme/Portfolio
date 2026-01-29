export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
