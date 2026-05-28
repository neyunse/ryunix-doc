const SIDEBAR_SCROLL_KEY = "ryunix-doc:sidebar-scroll";
export const DOCS_SIDEBAR_ID = "docs-sidebar-scroll-container";

/** Survives layout remounts during client navigation. */
let sidebarScrollCache = 0;
let isRestoringScroll = false;

export const readSidebarScrollCache = () => {
  if (sidebarScrollCache > 0) return sidebarScrollCache;
  try {
    const saved = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
    if (saved !== null) sidebarScrollCache = Number(saved);
  } catch {
    /* private mode / blocked storage */
  }
  return sidebarScrollCache;
};

export const writeSidebarScrollCache = (value) => {
  sidebarScrollCache = value;
  try {
    sessionStorage.setItem(SIDEBAR_SCROLL_KEY, String(value));
  } catch {
    /* private mode / blocked storage */
  }
};

export const getDocsSidebarElement = () => document.getElementById(DOCS_SIDEBAR_ID);

export const persistDocsSidebarScroll = () => {
  if (isRestoringScroll) return;
  const aside = getDocsSidebarElement();
  if (!aside) return;
  writeSidebarScrollCache(aside.scrollTop);
};

export const restoreDocsSidebarScroll = () => {
  const target = readSidebarScrollCache();
  if (target <= 0) return;

  const aside = getDocsSidebarElement();
  if (!aside) return;

  // Skip when scroll position is already correct (avoids repaint flash on route change).
  if (Math.abs(aside.scrollTop - target) < 1) return;

  isRestoringScroll = true;
  aside.scrollTop = target;
  isRestoringScroll = false;
};
