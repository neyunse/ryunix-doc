import type { RyunixNode } from "@unsetsoft/ryunixjs";

/** Shared props for layout and page shells in ryunix-doc. */
export type WithChildren = {
  children?: RyunixNode;
};

/** Layout shells — `children` come from JSX, not always present in the props object type. */
export type LayoutProps = WithChildren;

export type WithClassName = {
  className?: string;
};

export type LocaleProps = {
  locale: "en" | "es";
};

/** Lets list items pass React/Ryunix `key` without widening every prop type. */
export type WithOptionalKey = {
  key?: string | number;
};
