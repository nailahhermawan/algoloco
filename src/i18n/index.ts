import { DEFAULT_LANGUAGE } from '@/lib/config';
import { id } from './locales/id';
import { en } from './locales/en';
import type { TranslationDictionary } from './schema';

export type SupportedLocale = 'id' | 'en';

export const dictionaries: Record<SupportedLocale, TranslationDictionary> = {
  id,
  en,
};

let currentLocale: SupportedLocale = DEFAULT_LANGUAGE;

export function setLocale(locale: SupportedLocale): void {
  currentLocale = locale;
}

export function getLocale(): SupportedLocale {
  return currentLocale;
}

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKey = NestedKeyOf<TranslationDictionary>;

/**
 * Resolves a dotted key path in an object.
 */
function resolvePath(obj: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split('.');
  let current: unknown = obj;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }

  return typeof current === 'string' ? current : undefined;
}

/**
 * Translates a key with optional parameter interpolation.
 * Parameters are represented as `{paramName}` in translation strings.
 */
export function t(
  key: TranslationKey | string,
  params?: Record<string, string | number>,
  locale: SupportedLocale = currentLocale,
): string {
  const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LANGUAGE];
  const template = resolvePath(dict as unknown as Record<string, unknown>, key) ?? key;

  if (!params) {
    return template;
  }

  return Object.entries(params).reduce<string>((acc, [paramKey, value]) => {
    return acc.replaceAll(`{${paramKey}}`, String(value));
  }, template);
}
