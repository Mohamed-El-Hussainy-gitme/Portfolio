export type LocalizedText = { en: string; ar: string };

export type ServiceItem = {
  id: string;
  slug: string;
  focusKeyword: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  deliverables: LocalizedText[];
  outcomes: LocalizedText[];
  process: LocalizedText[];
};

export const services: ServiceItem[] = [
  {
    id: "landing",
    slug: "landing-page",
    focusKeyword: { en: "landing page", ar: "صفحة هبوط" },
    title: { en: "Landing Page (Ads & Campaigns)", ar: "صفحة هبوط (إعلانات وحملات)" },
    summary: {
      en: "A conversion-first landing page for ads and campaigns—fast, focused, and tracking-ready.",
      ar: "صفحة هبوط للإعلانات والحملات: CTA واضح، سرعة عالية، وتتبع جاهز لقياس التحويل.",
    },
    deliverables: [
      { en: "One-page conversion funnel", ar: "صفحة واحدة بمسار تحويل واضح" },
      { en: "Tracking-ready (GA4 / Pixel)", ar: "جاهزة للتتبع (GA4 / Pixel)" },
      { en: "Fast load + clean SEO signals", ar: "تحميل سريع + إشارات SEO نظيفة" },
    ],
    outcomes: [
      { en: "Higher CTR-to-lead", ar: "تحويل أفضل من النقر إلى عميل" },
      { en: "Lower bounce on paid traffic", ar: "تقليل ارتداد زيارات الإعلانات" },
      { en: "Clear A/B test foundation", ar: "أساس قوي لاختبارات A/B" },
    ],
    process: [
      { en: "Message & offer mapping", ar: "تحديد الرسالة والعرض" },
      { en: "Design + copy draft", ar: "تصميم وصياغة المحتوى" },
      { en: "Build + QA + launch", ar: "تنفيذ + اختبار + إطلاق" },
    ],
  },
  {
    id: "company",
    slug: "company-website",
    focusKeyword: { en: "business website", ar: "موقع شركة" },
    title: { en: "Company Website (Brand & Leads)", ar: "موقع شركة (براند وعملاء)" },
    summary: {
      en: "A modern company website that builds trust, explains your offer, and ranks for core services.",
      ar: "موقع شركة يعزز الثقة ويشرح الخدمات ويستهدف كلمات بحث واضحة لكل خدمة.",
    },
    deliverables: [
      { en: "Service pages by intent", ar: "صفحات خدمات حسب نية البحث" },
      { en: "Trust blocks (proof, FAQs)", ar: "أقسام ثقة (إثباتات/أسئلة)" },
      { en: "Schema + internal linking", ar: "سكيما + ربط داخلي" },
    ],
    outcomes: [
      { en: "Clear positioning", ar: "تموضع واضح" },
      { en: "More qualified organic leads", ar: "عملاء من البحث بجودة أعلى" },
      { en: "Stronger credibility signals", ar: "إشارات مصداقية أقوى" },
    ],
    process: [
      { en: "Keyword + competitor scan", ar: "تحليل كلمات + منافسين" },
      { en: "Information architecture", ar: "بناء هيكل الصفحات" },
      { en: "Build + SEO polish", ar: "تنفيذ + ضبط SEO" },
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    focusKeyword: { en: "online store", ar: "متجر إلكتروني" },
    title: { en: "E-commerce Store (Catalog & Checkout)", ar: "متجر إلكتروني (كتالوج وشراء)" },
    summary: {
      en: "An e-commerce storefront optimized for product discovery, SEO templates, and a clean checkout flow.",
      ar: "متجر إلكتروني مُهيأ لعرض المنتجات + SEO للأقسام والمنتجات + مسار شراء واضح.",
    },
    deliverables: [
      { en: "Product listing + smart filters", ar: "قائمة منتجات + فلاتر ذكية" },
      { en: "Checkout UX + order states", ar: "تجربة شراء + حالات الطلب" },
      { en: "SEO-ready templates", ar: "قوالب جاهزة لـSEO" },
    ],
    outcomes: [
      { en: "Faster purchase journey", ar: "شراء أسرع" },
      { en: "More product pages indexed", ar: "فهرسة أفضل لصفحات المنتجات" },
      { en: "Higher add-to-cart rate", ar: "رفع معدل الإضافة للسلة" },
    ],
    process: [
      { en: "Catalog + user flow", ar: "تحديد الكتالوج ومسار المستخدم" },
      { en: "UI build + testing", ar: "تنفيذ الواجهة + الاختبارات" },
      { en: "Launch + improvements", ar: "إطلاق + تحسينات" },
    ],
  },
  {
    id: "dashboard",
    slug: "dashboard",
    focusKeyword: { en: "admin dashboard", ar: "لوحة تحكم" },
    title: { en: "Dashboard UI (Tables & Roles)", ar: "لوحة تحكم (جداول وصلاحيات)" },
    summary: {
      en: "Data-heavy dashboard UI with tables, filters, and safe state management.",
      ar: "لوحة تحكم احترافية للبيانات: جداول، فلاتر، وإدارة حالة منظمة.",
    },
    deliverables: [
      { en: "Tables + filters + exports", ar: "جداول + فلاتر + تصدير" },
      { en: "Role-based access patterns", ar: "صلاحيات حسب الدور" },
      { en: "Reusable UI system", ar: "نظام مكونات قابل لإعادة الاستخدام" },
    ],
    outcomes: [
      { en: "Fewer operational errors", ar: "أخطاء تشغيل أقل" },
      { en: "Faster workflows", ar: "مهام أسرع" },
      { en: "Maintainable UI system", ar: "نظام واجهة قابل للصيانة" },
    ],
    process: [
      { en: "Model the entities", ar: "نمذجة البيانات" },
      { en: "Build UI patterns", ar: "تنفيذ أنماط الواجهة" },
      { en: "Polish + QA", ar: "ضبط التفاصيل + اختبار" },
    ],
  },
  {
    id: "seo",
    slug: "seo-performance",
    focusKeyword: { en: "SEO audit", ar: "سيو تقني" },
    title: { en: "SEO & Performance (Core Web Vitals)", ar: "SEO وأداء (Core Web Vitals)" },
    summary: {
      en: "Technical SEO + performance work focused on crawling, indexing, and Core Web Vitals.",
      ar: "SEO تقني + تحسين الأداء: فهرسة، زحف، وCore Web Vitals.",
    },
    deliverables: [
      { en: "Indexing basics (robots/sitemap)", ar: "أساسيات الفهرسة (robots/sitemap)" },
      { en: "Schema + internal linking", ar: "سكيما + ربط داخلي" },
      { en: "Core Web Vitals fixes", ar: "إصلاحات Core Web Vitals" },
    ],
    outcomes: [
      { en: "Better crawl & clarity", ar: "وضوح أفضل لمحركات البحث" },
      { en: "Faster pages", ar: "صفحات أسرع" },
      { en: "Cleaner ranking signals", ar: "إشارات ترتيب أقوى" },
    ],
    process: [
      { en: "Audit", ar: "تحليل" },
      { en: "Fix + validate", ar: "إصلاح + تحقق" },
      { en: "Monitor & iterate", ar: "مراقبة + تحسين" },
    ],
  },
  {
    id: "maintenance",
    slug: "maintenance",
    focusKeyword: { en: "website maintenance", ar: "صيانة موقع" },
    title: { en: "Maintenance (Fixes & Content)", ar: "صيانة (إصلاحات ومحتوى)" },
    summary: {
      en: "Keep your website stable: fixes, content updates, and small iterations.",
      ar: "الحفاظ على موقعك ثابتًا: إصلاحات، تحديث محتوى، وتحسينات صغيرة مستمرة.",
    },
    deliverables: [
      { en: "Bug fixes + small features", ar: "إصلاحات + إضافات صغيرة" },
      { en: "Content publishing", ar: "نشر وتحديث المحتوى" },
      { en: "Performance & security checks", ar: "فحوصات أداء وأمان" },
    ],
    outcomes: [
      { en: "Less downtime", ar: "تعطل أقل" },
      { en: "Consistent updates", ar: "تحديثات مستمرة" },
      { en: "Peace of mind", ar: "راحة بال" },
    ],
    process: [
      { en: "Monthly plan", ar: "خطة شهرية" },
      { en: "Prioritize requests", ar: "تحديد الأولويات" },
      { en: "Deploy changes", ar: "نشر التحديثات" },
    ],
  },
];
