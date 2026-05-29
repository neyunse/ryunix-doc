import type { RyunixNode } from "@unsetsoft/ryunixjs";

declare module "@unsetsoft/ryunixjs/jsx-runtime" {
  namespace JSX {
    type Element = Exclude<RyunixNode, undefined> | null;
  }
}

export {};
