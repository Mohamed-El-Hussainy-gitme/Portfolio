export type LocaleText = { en: string; ar: string };

export type Review = {
  id: string;
  name: string;
  role: LocaleText;
  company?: string;
  projectType: LocaleText;
  rating: 5 | 4;
  content: LocaleText;
};

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Client A",
    role: { en: "Founder", ar: "مؤسس" },
    company: "E-commerce Brand",
    projectType: { en: "E-commerce website", ar: "متجر إلكتروني" },
    rating: 5,
    content: {
      en: "Clear communication, fast delivery, and the final UI felt premium. Performance and SEO basics were handled properly from day one.",
      ar: "تواصل واضح وتسليم سريع والواجهة النهائية كانت بمستوى احترافي. الأداء وSEO التقني تم ضبطهم من البداية بشكل صحيح.",
    },
  },
  {
    id: "rev-2",
    name: "Client B",
    role: { en: "Marketing Lead", ar: "مدير تسويق" },
    company: "Services Company",
    projectType: { en: "Landing page", ar: "صفحة هبوط" },
    rating: 5,
    content: {
      en: "The page structure improved conversions. Headings, internal linking, and mobile UX were clearly built with intent.",
      ar: "هيكلة الصفحة رفعت التحويلات. العناوين والروابط الداخلية وتجربة الموبايل كانت مبنية بوضوح على هدف محدد.",
    },
  },
  {
    id: "rev-3",
    name: "Client C",
    role: { en: "Operations Manager", ar: "مدير عمليات" },
    company: "Internal Team",
    projectType: { en: "Dashboard", ar: "لوحة تحكم" },
    rating: 5,
    content: {
      en: "Tables, filters, and states were implemented cleanly. The dashboard became easier to use and reduced manual mistakes.",
      ar: "الجداول والفلاتر وحالات التحميل/الأخطاء كانت منظمة جدًا. اللوحة أصبحت أسهل وقللت الأخطاء اليدوية.",
    },
  },
];
