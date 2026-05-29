import { defaultLocale } from "@/i18n/config.js";

/** Pick a locale slice from a record (`docUiCopy`, `siteCopy`, `docSections`, …). */
export function pickLocale(record, locale, fallback = defaultLocale) {
  return record?.[locale] ?? record?.[fallback];
}
