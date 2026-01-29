export type SupportedLanguage = 'en' | 'ar';

export interface StoryInput {
  name: string;
  description: string;
  domain?: string;
}

export function generateStory(
  project: StoryInput,
  language: SupportedLanguage = 'en'
): string {
  const { name, description, domain } = project;

  if (language === 'ar') {
    const domainPart = domain ? ` في مجال ${domain}` : '';
    return `رحلة ${name} بدأت من حاجة حقيقية: ${description}. هذا المشروع يقدم تجربة واجهة حديثة${domainPart} تركّز على سرعة الفهم وسهولة الاستخدام. المشاهد المتتابعة تعرّف الزائر على الفكرة الأساسية، ثم تقوده إلى استكشاف التفاصيل والتفاعل مع الواجهة الحقيقية.`;
  }

  const domainText = domain ? ` In the ${domain} space,` : '';
  return `The journey of ${name} began from a concrete product need: ${description}.${domainText} It is crafted as a guided flow instead of a flat landing page. Each section reveals a new angle of the experience, building a compact product story that nudges visitors to open the live project and explore the full interface.`;
}
