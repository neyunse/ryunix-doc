import type { RyunixNode } from "@unsetsoft/ryunixjs";

export type RouteParams = Record<string, string | string[] | undefined>;

export type PageProps = {
  params?: RouteParams;
  children?: RyunixNode;
};

export type LocaleParams = {
  params?: { locale?: string };
};
