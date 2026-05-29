/** MDX pages by slug — content lives in src/content/docs/{locale}/<slug>.mdx */
import type { RyunixComponent } from "@unsetsoft/ryunixjs";

import type { DocLocale } from "./types";
import { docSlugs } from "./docSlugs";
export { docSlugs } from "./docSlugs";

import s0e from '@/content/docs/en/api/components.mdx';
import s0s from '@/content/docs/es/api/components.mdx';
import s1e from '@/content/docs/en/api/configuration.mdx';
import s1s from '@/content/docs/es/api/configuration.mdx';
import s2e from '@/content/docs/en/api/functions.mdx';
import s2s from '@/content/docs/es/api/functions.mdx';
import s3e from '@/content/docs/en/api/special-files.mdx';
import s3s from '@/content/docs/es/api/special-files.mdx';
import s4e from '@/content/docs/en/core/advanced-components.mdx';
import s4s from '@/content/docs/es/core/advanced-components.mdx';
import s5e from '@/content/docs/en/core/error-handling.mdx';
import s5s from '@/content/docs/es/core/error-handling.mdx';
import s6e from '@/content/docs/en/core/performance.mdx';
import s6s from '@/content/docs/es/core/performance.mdx';
import s7e from '@/content/docs/en/core/rendering.mdx';
import s7s from '@/content/docs/es/core/rendering.mdx';
import s8e from '@/content/docs/en/core/server-actions.mdx';
import s8s from '@/content/docs/es/core/server-actions.mdx';
import s9e from '@/content/docs/en/guides/api-routes.mdx';
import s9s from '@/content/docs/es/guides/api-routes.mdx';
import s10e from '@/content/docs/en/guides/cli.mdx';
import s10s from '@/content/docs/es/guides/cli.mdx';
import s11e from '@/content/docs/en/guides/create-app.mdx';
import s11s from '@/content/docs/es/guides/create-app.mdx';
import s12e from '@/content/docs/en/guides/devtools.mdx';
import s12s from '@/content/docs/es/guides/devtools.mdx';
import s13e from '@/content/docs/en/guides/ecosystem.mdx';
import s13s from '@/content/docs/es/guides/ecosystem.mdx';
import s14e from '@/content/docs/en/guides/mdx.mdx';
import s14s from '@/content/docs/es/guides/mdx.mdx';
import s15e from '@/content/docs/en/guides/ssg.mdx';
import s15s from '@/content/docs/es/guides/ssg.mdx';
import s16e from '@/content/docs/en/guides/typescript.mdx';
import s16s from '@/content/docs/es/guides/typescript.mdx';
import s17e from '@/content/docs/en/guides/vscode.mdx';
import s17s from '@/content/docs/es/guides/vscode.mdx';
import s18e from '@/content/docs/en/introduction/about.mdx';
import s18s from '@/content/docs/es/introduction/about.mdx';
import s19e from '@/content/docs/en/introduction/css.mdx';
import s19s from '@/content/docs/es/introduction/css.mdx';
import s20e from '@/content/docs/en/introduction/deploying.mdx';
import s20s from '@/content/docs/es/introduction/deploying.mdx';
import s21e from '@/content/docs/en/introduction/differences-with-react.mdx';
import s21s from '@/content/docs/es/introduction/differences-with-react.mdx';
import s22e from '@/content/docs/en/introduction/getting-started.mdx';
import s22s from '@/content/docs/es/introduction/getting-started.mdx';
import s23e from '@/content/docs/en/introduction/installation.mdx';
import s23s from '@/content/docs/es/introduction/installation.mdx';
import s24e from '@/content/docs/en/introduction/navigation.mdx';
import s24s from '@/content/docs/es/introduction/navigation.mdx';
import s25e from '@/content/docs/en/introduction/project-structure.mdx';
import s25s from '@/content/docs/es/introduction/project-structure.mdx';

export const docPages = {
  'api/components': { en: s0e, es: s0s },
  'api/configuration': { en: s1e, es: s1s },
  'api/functions': { en: s2e, es: s2s },
  'api/special-files': { en: s3e, es: s3s },
  'core/advanced-components': { en: s4e, es: s4s },
  'core/error-handling': { en: s5e, es: s5s },
  'core/performance': { en: s6e, es: s6s },
  'core/rendering': { en: s7e, es: s7s },
  'core/server-actions': { en: s8e, es: s8s },
  'guides/api-routes': { en: s9e, es: s9s },
  'guides/cli': { en: s10e, es: s10s },
  'guides/create-app': { en: s11e, es: s11s },
  'guides/devtools': { en: s12e, es: s12s },
  'guides/ecosystem': { en: s13e, es: s13s },
  'guides/mdx': { en: s14e, es: s14s },
  'guides/ssg': { en: s15e, es: s15s },
  'guides/typescript': { en: s16e, es: s16s },
  'guides/vscode': { en: s17e, es: s17s },
  'introduction/about': { en: s18e, es: s18s },
  'introduction/css': { en: s19e, es: s19s },
  'introduction/deploying': { en: s20e, es: s20s },
  'introduction/differences-with-react': { en: s21e, es: s21s },
  'introduction/getting-started': { en: s22e, es: s22s },
  'introduction/installation': { en: s23e, es: s23s },
  'introduction/navigation': { en: s24e, es: s24s },
  'introduction/project-structure': { en: s25e, es: s25s },
};

export function getDocPage(
  locale: DocLocale,
  slug: string,
): RyunixComponent<Record<string, unknown>> | null {
  const row = docPages[slug as keyof typeof docPages];
  if (!row) return null;
  return row[locale as keyof typeof row] ?? row.en ?? null;
}
