import type { docI18nSettings } from "./settings";

export type DocLocale = (typeof docI18nSettings.locales)[number];

export type DocRouteMeta = {
  slug: string;
  label: string;
};

export type DocSectionRoutes = Record<string, DocRouteMeta[]>;

export type DocSidebarRoute = DocRouteMeta & { path: string };

export type DocSidebarSections = Record<string, DocSidebarRoute[]>;
