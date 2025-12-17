export const languages = [
  'en',
  'ru',
  'tr',
  'de',
  'uk',
  'es',
  'fr',
  'pl',
  'ja',
  'ko',
  'zh',
  'pt',
] as const;

export type Language = typeof languages[number];

export const defaultLanguage: Language = 'ru';

export const languageNames: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  tr: 'Türkçe',
  de: 'Deutsch',
  uk: 'Українська',
  es: 'Español',
  fr: 'Français',
  pl: 'Polski',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
  pt: 'Português',
};
