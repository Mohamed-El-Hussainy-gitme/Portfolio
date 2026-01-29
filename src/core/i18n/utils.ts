import { Language, LocalizedString } from "../../types/content";

export function getLocalized(
  value: LocalizedString,
  language: Language
): string {
  return language === "ar" ? value.ar : value.en;
}

export function isRtl(language: Language): boolean {
  return language === "ar";
}
