import { SITE_HEADER_ELEMENT_ID } from "./siteHeaderConstants";

const HEADER_SCROLL_FADE_PX = 100;
const HEADER_SCROLL_DESKTOP_MQ = "(min-width: 768px)";

function supportsScrollDrivenHeader() {
  return (
    typeof CSS !== "undefined" &&
    CSS.supports("animation-timeline", "scroll()")
  );
}

function readScrollY() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function resolveHeader() {
  return document.getElementById(SITE_HEADER_ELEMENT_ID);
}

/** Apply scroll-linked opacity on the header (desktop only). */
export function bindSiteHeaderScroll() {
  if (supportsScrollDrivenHeader()) {
    return () => {};
  }

  const header = resolveHeader();
  if (!header) return () => {};

  const desktop = window.matchMedia(HEADER_SCROLL_DESKTOP_MQ);

  const apply = () => {
    if (!desktop.matches) {
      header.style.setProperty("--header-opacity", "1");
      return;
    }
    const opacity = Math.min(readScrollY() / HEADER_SCROLL_FADE_PX, 1);
    header.style.setProperty("--header-opacity", String(opacity));
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      apply();
      ticking = false;
    });
  };

  apply();
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("scroll", onScroll, { passive: true });
  desktop.addEventListener("change", apply);
  window.addEventListener("pageshow", apply);

  return () => {
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("scroll", onScroll);
    desktop.removeEventListener("change", apply);
    window.removeEventListener("pageshow", apply);
    header.style.removeProperty("--header-opacity");
  };
}

let cleanup: (() => void) | undefined;

function ensureBound() {
  cleanup?.();
  cleanup = bindSiteHeaderScroll();
}

function waitForHeader(attemptsLeft: number) {
  if (resolveHeader()) {
    ensureBound();
    return;
  }
  if (attemptsLeft <= 0) return;
  requestAnimationFrame(() => waitForHeader(attemptsLeft - 1));
}

/** Client-only: runs when the header chunk loads (no useEffect / ref required). */
export function initSiteHeaderScroll() {
  if (typeof window === "undefined") return;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => waitForHeader(120), {
      once: true,
    });
  } else {
    waitForHeader(120);
  }

  window.addEventListener("popstate", ensureBound);
  window.addEventListener("pageshow", () => waitForHeader(120));
}

if (typeof window !== "undefined") {
  initSiteHeaderScroll();
}
