import en from './translations/en';
import ru from './translations/ru';
import tr from './translations/tr';
import de from './translations/de';
import uk from './translations/uk';
import es from './translations/es';
import fr from './translations/fr';
import pl from './translations/pl';
import ja from './translations/ja';
import ko from './translations/ko';
import zh from './translations/zh';
import pt from './translations/pt';

import type { Language } from '../config/languages';

export const translations = {
  en,
  ru,
  tr,
  de,
  uk,
  es,
  fr,
  pl,
  ja,
  ko,
  zh,
  pt,
};

export type TranslationKeys = typeof en;

export function getTranslation(lang: Language): TranslationKeys {
  return translations[lang] || translations.en;
}

export type { Language };
