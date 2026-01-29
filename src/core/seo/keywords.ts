export const PAGE_KEYWORDS = {
  home: {
    // short, high-intent phrases (avoid long sentences)
    en: ["build a website", "website development", "website design", "web developer", "Next.js developer"],
    ar: ["انشاء ويب سايت", "انشاء موقع الكتروني", "تصميم موقع", "مطور مواقع", "مطور Next.js"],
  },
  about: {
    en: ["full-stack developer", "portfolio", "web developer", "Next.js", "React"],
    ar: ["مطور فل ستاك", "بورتفوليو", "مطور ويب", "Next.js", "React"],
  },
  services: {
    en: ["landing page", "business website", "online store", "admin dashboard", "SEO audit"],
    ar: ["صفحة هبوط", "موقع شركة", "متجر إلكتروني", "لوحة تحكم", "سيو تقني"],
  },
  projects: {
    en: ["web projects", "case studies", "Next.js", "React", "UI UX"],
    ar: ["اعمال سابقة", "نماذج اعمال", "Next.js", "React", "UI UX"],
  },
  blog: {
    en: ["web development", "Next.js tips", "technical SEO", "web performance", "frontend architecture"],
    ar: ["تطوير مواقع", "نصائح Next.js", "سيو تقني", "سرعة الموقع", "هندسة الواجهة"],
  },
  contact: {
    en: ["hire web developer", "contact web developer", "project inquiry", "Next.js", "SEO"],
    ar: ["تواصل", "توظيف مطور مواقع", "طلب مشروع", "Next.js", "SEO"],
  },
} as const;
