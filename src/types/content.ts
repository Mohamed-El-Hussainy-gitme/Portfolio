export type Language = "en" | "ar";

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface HeroCopy {
  title: LocalizedString;
  subtitle: LocalizedString;
  badge: LocalizedString;
  primaryCta: LocalizedString;
  secondaryCta: LocalizedString;
  secondaryCtaTargetHref: string;
}

export interface NavCopy {
  logo: LocalizedString;
  siteTitle: LocalizedString;
  home: LocalizedString;
  work: LocalizedString;
  contact: LocalizedString;
}

export interface OutroCopy {
  heading: LocalizedString;
  body: LocalizedString;
  contactIntro: LocalizedString;
  contactEmailLabel: LocalizedString;
  contactGithubLabel: LocalizedString;
  contactLinkedinLabel: LocalizedString;
}

export interface LocalizedProjectCopy {
  title: string;
  tagline: string;
  description: string;
  role: string;
  focus: string;
  highlights: string[];
}

export interface ProjectScreen {
  id: string;
  title: LocalizedString;
  imageUrl: string;
  alt: LocalizedString;
}

export interface ProjectLink {
  label: LocalizedString;
  href: string;
}

export interface ProjectDefinition {
  id: string;
  slug: string;
  accentColor: string;
  techStack: string[];
  copy: {
    en: LocalizedProjectCopy;
    ar: LocalizedProjectCopy;
  };
  screens: ProjectScreen[];
  links: {
    liveDemo?: ProjectLink;
    github?: ProjectLink;
  };
}

export interface SectionDefinition {
  id: string;
  label: LocalizedString;
}
