/** MDX pages by slug — content lives in src/content/docs/{locale}/<slug>.mdx */
import type { RyunixComponent } from "@unsetsoft/ryunixjs";

import type { DocLocale } from "./types";
import { docSlugs } from "./docSlugs";
export { docSlugs } from "./docSlugs";

import s0e, { frontmatter as m0e } from "@/content/docs/en/api/components.mdx";
import s0s, { frontmatter as m0s } from "@/content/docs/es/api/components.mdx";
import s1e, { frontmatter as m1e } from "@/content/docs/en/api/configuration.mdx";
import s1s, { frontmatter as m1s } from "@/content/docs/es/api/configuration.mdx";
import s2e, { frontmatter as m2e } from "@/content/docs/en/api/functions.mdx";
import s2s, { frontmatter as m2s } from "@/content/docs/es/api/functions.mdx";
import s3e, { frontmatter as m3e } from "@/content/docs/en/api/special-files.mdx";
import s3s, { frontmatter as m3s } from "@/content/docs/es/api/special-files.mdx";
import s4e, { frontmatter as m4e } from "@/content/docs/en/core/advanced-components.mdx";
import s4s, { frontmatter as m4s } from "@/content/docs/es/core/advanced-components.mdx";
import s5e, { frontmatter as m5e } from "@/content/docs/en/core/error-handling.mdx";
import s5s, { frontmatter as m5s } from "@/content/docs/es/core/error-handling.mdx";
import s6e, { frontmatter as m6e } from "@/content/docs/en/core/performance.mdx";
import s6s, { frontmatter as m6s } from "@/content/docs/es/core/performance.mdx";
import s7e, { frontmatter as m7e } from "@/content/docs/en/core/rendering.mdx";
import s7s, { frontmatter as m7s } from "@/content/docs/es/core/rendering.mdx";
import s8e, { frontmatter as m8e } from "@/content/docs/en/core/server-actions.mdx";
import s8s, { frontmatter as m8s } from "@/content/docs/es/core/server-actions.mdx";
import s9e, { frontmatter as m9e } from "@/content/docs/en/guides/api-routes.mdx";
import s9s, { frontmatter as m9s } from "@/content/docs/es/guides/api-routes.mdx";
import s10e, { frontmatter as m10e } from "@/content/docs/en/guides/cli.mdx";
import s10s, { frontmatter as m10s } from "@/content/docs/es/guides/cli.mdx";
import s11e, { frontmatter as m11e } from "@/content/docs/en/guides/create-app.mdx";
import s11s, { frontmatter as m11s } from "@/content/docs/es/guides/create-app.mdx";
import s12e, { frontmatter as m12e } from "@/content/docs/en/guides/devtools.mdx";
import s12s, { frontmatter as m12s } from "@/content/docs/es/guides/devtools.mdx";
import s13e, { frontmatter as m13e } from "@/content/docs/en/guides/ecosystem.mdx";
import s13s, { frontmatter as m13s } from "@/content/docs/es/guides/ecosystem.mdx";
import s14e, { frontmatter as m14e } from "@/content/docs/en/guides/mdx.mdx";
import s14s, { frontmatter as m14s } from "@/content/docs/es/guides/mdx.mdx";
import s15e, { frontmatter as m15e } from "@/content/docs/en/guides/ssg.mdx";
import s15s, { frontmatter as m15s } from "@/content/docs/es/guides/ssg.mdx";
import s16e, { frontmatter as m16e } from "@/content/docs/en/guides/typescript.mdx";
import s16s, { frontmatter as m16s } from "@/content/docs/es/guides/typescript.mdx";
import s17e, { frontmatter as m17e } from "@/content/docs/en/guides/vscode.mdx";
import s17s, { frontmatter as m17s } from "@/content/docs/es/guides/vscode.mdx";
import s18e, { frontmatter as m18e } from "@/content/docs/en/introduction/about.mdx";
import s18s, { frontmatter as m18s } from "@/content/docs/es/introduction/about.mdx";
import s19e, { frontmatter as m19e } from "@/content/docs/en/introduction/css.mdx";
import s19s, { frontmatter as m19s } from "@/content/docs/es/introduction/css.mdx";
import s20e, { frontmatter as m20e } from "@/content/docs/en/introduction/deploying.mdx";
import s20s, { frontmatter as m20s } from "@/content/docs/es/introduction/deploying.mdx";
import s21e, { frontmatter as m21e } from "@/content/docs/en/introduction/differences-with-react.mdx";
import s21s, { frontmatter as m21s } from "@/content/docs/es/introduction/differences-with-react.mdx";
import s22e, { frontmatter as m22e } from "@/content/docs/en/introduction/getting-started.mdx";
import s22s, { frontmatter as m22s } from "@/content/docs/es/introduction/getting-started.mdx";
import s23e, { frontmatter as m23e } from "@/content/docs/en/introduction/installation.mdx";
import s23s, { frontmatter as m23s } from "@/content/docs/es/introduction/installation.mdx";
import s24e, { frontmatter as m24e } from "@/content/docs/en/introduction/navigation.mdx";
import s24s, { frontmatter as m24s } from "@/content/docs/es/introduction/navigation.mdx";
import s25e, { frontmatter as m25e } from "@/content/docs/en/introduction/project-structure.mdx";
import s25s, { frontmatter as m25s } from "@/content/docs/es/introduction/project-structure.mdx";
import s26e, { frontmatter as m26e } from "@/content/docs/en/guides/seo-metadata.mdx";
import s26s, { frontmatter as m26s } from "@/content/docs/es/guides/seo-metadata.mdx";
import s27e, { frontmatter as m27e } from "@/content/docs/en/guides/i18n.mdx";
import s27s, { frontmatter as m27s } from "@/content/docs/es/guides/i18n.mdx";

type DocFrontmatter = Record<string, unknown>;

const docMeta = {
  "api/components": { en: m0e, es: m0s },
  "api/configuration": { en: m1e, es: m1s },
  "api/functions": { en: m2e, es: m2s },
  "api/special-files": { en: m3e, es: m3s },
  "core/advanced-components": { en: m4e, es: m4s },
  "core/error-handling": { en: m5e, es: m5s },
  "core/performance": { en: m6e, es: m6s },
  "core/rendering": { en: m7e, es: m7s },
  "core/server-actions": { en: m8e, es: m8s },
  "guides/api-routes": { en: m9e, es: m9s },
  "guides/cli": { en: m10e, es: m10s },
  "guides/create-app": { en: m11e, es: m11s },
  "guides/devtools": { en: m12e, es: m12s },
  "guides/ecosystem": { en: m13e, es: m13s },
  "guides/mdx": { en: m14e, es: m14s },
  "guides/ssg": { en: m15e, es: m15s },
  "guides/typescript": { en: m16e, es: m16s },
  "guides/vscode": { en: m17e, es: m17s },
  "introduction/about": { en: m18e, es: m18s },
  "introduction/css": { en: m19e, es: m19s },
  "introduction/deploying": { en: m20e, es: m20s },
  "introduction/differences-with-react": { en: m21e, es: m21s },
  "introduction/getting-started": { en: m22e, es: m22s },
  "introduction/installation": { en: m23e, es: m23s },
  "introduction/navigation": { en: m24e, es: m24s },
  "introduction/project-structure": { en: m25e, es: m25s },
  "guides/seo-metadata": { en: m26e, es: m26s },
  "guides/i18n": { en: m27e, es: m27s },
};

const FRONTMATTER_SEO_SKIP = new Set(["slug", "section"]);

export const docPages = {
  "api/components": { en: s0e, es: s0s },
  "api/configuration": { en: s1e, es: s1s },
  "api/functions": { en: s2e, es: s2s },
  "api/special-files": { en: s3e, es: s3s },
  "core/advanced-components": { en: s4e, es: s4s },
  "core/error-handling": { en: s5e, es: s5s },
  "core/performance": { en: s6e, es: s6s },
  "core/rendering": { en: s7e, es: s7s },
  "core/server-actions": { en: s8e, es: s8s },
  "guides/api-routes": { en: s9e, es: s9s },
  "guides/cli": { en: s10e, es: s10s },
  "guides/create-app": { en: s11e, es: s11s },
  "guides/devtools": { en: s12e, es: s12s },
  "guides/ecosystem": { en: s13e, es: s13s },
  "guides/mdx": { en: s14e, es: s14s },
  "guides/ssg": { en: s15e, es: s15s },
  "guides/typescript": { en: s16e, es: s16s },
  "guides/vscode": { en: s17e, es: s17s },
  "introduction/about": { en: s18e, es: s18s },
  "introduction/css": { en: s19e, es: s19s },
  "introduction/deploying": { en: s20e, es: s20s },
  "introduction/differences-with-react": { en: s21e, es: s21s },
  "introduction/getting-started": { en: s22e, es: s22s },
  "introduction/installation": { en: s23e, es: s23s },
  "introduction/navigation": { en: s24e, es: s24s },
  "introduction/project-structure": { en: s25e, es: s25s },
  "guides/seo-metadata": { en: s26e, es: s26s },
  "guides/i18n": { en: s27e, es: s27s },
};

export function getDocPage(
  locale: DocLocale,
  slug: string,
): RyunixComponent<Record<string, unknown>> | null {
  const row = docPages[slug as keyof typeof docPages];
  if (!row) return null;
  return row[locale as keyof typeof row] ?? row.en ?? null;
}

/** SEO fields from MDX frontmatter for a doc slug (Metatags shape). */
export function getDocPageMeta(
  locale: DocLocale,
  slug: string,
): Record<string, unknown> | null {
  const row = docMeta[slug as keyof typeof docMeta];
  if (!row) return null;
  const frontmatter = (row[locale as keyof typeof row] ?? row.en) as DocFrontmatter;
  if (!frontmatter) return null;

  const meta: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(frontmatter)) {
    if (FRONTMATTER_SEO_SKIP.has(key) || value == null) continue;
    meta[key] = value;
  }
  return Object.keys(meta).length > 0 ? meta : null;
}
