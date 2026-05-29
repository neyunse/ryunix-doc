/** MDX pages by slug — content lives in src/content/docs/{locale}. */
import type { RyunixComponent } from "@unsetsoft/ryunixjs";

import type { DocLocale } from "./types";
import { docSlugs } from "./docSlugs";
export { docSlugs } from "./docSlugs";

import s0e from '@/content/docs/en/api/components/index.mdx';
import s0s from '@/content/docs/es/api/components/index.mdx';
import s1e from '@/content/docs/en/api/configuration/index.mdx';
import s1s from '@/content/docs/es/api/configuration/index.mdx';
import s2e from '@/content/docs/en/api/functions/index.mdx';
import s2s from '@/content/docs/es/api/functions/index.mdx';
import s3e from '@/content/docs/en/api/special-files/index.mdx';
import s3s from '@/content/docs/es/api/special-files/index.mdx';
import s4e from '@/content/docs/en/core/advanced-components/index.mdx';
import s4s from '@/content/docs/es/core/advanced-components/index.mdx';
import s5e from '@/content/docs/en/core/error-handling/index.mdx';
import s5s from '@/content/docs/es/core/error-handling/index.mdx';
import s6e from '@/content/docs/en/core/performance/index.mdx';
import s6s from '@/content/docs/es/core/performance/index.mdx';
import s7e from '@/content/docs/en/core/rendering/index.mdx';
import s7s from '@/content/docs/es/core/rendering/index.mdx';
import s8e from '@/content/docs/en/core/server-actions/index.mdx';
import s8s from '@/content/docs/es/core/server-actions/index.mdx';
import s9e from '@/content/docs/en/guides/api-routes/index.mdx';
import s9s from '@/content/docs/es/guides/api-routes/index.mdx';
import s10e from '@/content/docs/en/guides/cli/index.mdx';
import s10s from '@/content/docs/es/guides/cli/index.mdx';
import s11e from '@/content/docs/en/guides/create-app/index.mdx';
import s11s from '@/content/docs/es/guides/create-app/index.mdx';
import s12e from '@/content/docs/en/guides/devtools/index.mdx';
import s12s from '@/content/docs/es/guides/devtools/index.mdx';
import s13e from '@/content/docs/en/guides/ecosystem/index.mdx';
import s13s from '@/content/docs/es/guides/ecosystem/index.mdx';
import s14e from '@/content/docs/en/guides/mdx/index.mdx';
import s14s from '@/content/docs/es/guides/mdx/index.mdx';
import s15e from '@/content/docs/en/guides/ssg/index.mdx';
import s15s from '@/content/docs/es/guides/ssg/index.mdx';
import s16e from '@/content/docs/en/guides/typescript/index.mdx';
import s16s from '@/content/docs/es/guides/typescript/index.mdx';
import s17e from '@/content/docs/en/guides/vscode/index.mdx';
import s17s from '@/content/docs/es/guides/vscode/index.mdx';
import s18e from '@/content/docs/en/introduction/about/index.mdx';
import s18s from '@/content/docs/es/introduction/about/index.mdx';
import s19e from '@/content/docs/en/introduction/css/index.mdx';
import s19s from '@/content/docs/es/introduction/css/index.mdx';
import s20e from '@/content/docs/en/introduction/deploying/index.mdx';
import s20s from '@/content/docs/es/introduction/deploying/index.mdx';
import s21e from '@/content/docs/en/introduction/differences-with-react/index.mdx';
import s21s from '@/content/docs/es/introduction/differences-with-react/index.mdx';
import s22e from '@/content/docs/en/introduction/getting-started/index.mdx';
import s22s from '@/content/docs/es/introduction/getting-started/index.mdx';
import s23e from '@/content/docs/en/introduction/installation/index.mdx';
import s23s from '@/content/docs/es/introduction/installation/index.mdx';
import s24e from '@/content/docs/en/introduction/navigation/index.mdx';
import s24s from '@/content/docs/es/introduction/navigation/index.mdx';
import s25e from '@/content/docs/en/introduction/project-structure/index.mdx';
import s25s from '@/content/docs/es/introduction/project-structure/index.mdx';

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
