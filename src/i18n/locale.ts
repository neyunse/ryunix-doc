import { defaultLocale } from "@/i18n/config";

/** Pick a locale slice from a record (`docUiCopy`, `siteCopy`, `docSections`, …). */
export function pickLocale<T>(
  record: Partial<Record<string, T>> | undefined,
  locale: string,
  fallback: string = defaultLocale,
): T | undefined {
  return record?.[locale] ?? record?.[fallback];
}
