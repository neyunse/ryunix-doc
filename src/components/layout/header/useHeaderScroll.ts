import { useLayoutEffect } from "@unsetsoft/ryunixjs";
import { bindSiteHeaderScroll } from "./siteHeaderScroll";

/** Re-bind after route changes when JS fallback is active (no scroll-timeline). */
export function useHeaderScroll(routeKey?: string) {
  useLayoutEffect(() => {
    return bindSiteHeaderScroll();
  }, [routeKey]);
}
