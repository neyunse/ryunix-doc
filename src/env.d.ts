declare module "*.mdx" {
  import type { RyunixComponent } from "@unsetsoft/ryunixjs";

  const MDXComponent: RyunixComponent<Record<string, unknown>>;
  export default MDXComponent;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
