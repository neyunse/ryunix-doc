import { cn } from "@/lib/cn.js";

/** Shared class helpers for SiteHeader nav links (NavLink `className` callback). */

const headerNavLinkBase = cn(
  "relative z-[1] inline-flex items-center justify-center min-h-9 px-2.5 text-xs font-medium rounded-lg",
  "sm:px-4 sm:text-sm",
  "transition-[color,background-color,box-shadow,border-color] duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-header-bg)]",
);

export function headerNavLinkClass(isActive) {
  return cn(
    headerNavLinkBase,
    isActive
      ? "text-theme bg-surface-card border border-theme shadow-[var(--shadow-base)]"
      : cn(
          "text-theme-muted border border-transparent hover:text-theme",
          "hover:bg-black/[0.04] dark:hover:bg-white/[0.07] active:scale-[0.98]",
        ),
  );
}

const headerLogoBase = cn(
  "flex items-center gap-2 text-xl font-bold px-2.5 py-2 rounded-xl border transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45",
);

export function headerLogoClass(isActive) {
  return cn(
    headerLogoBase,
    isActive
      ? "border-theme bg-surface-card/80 shadow-[var(--shadow-base)]"
      : "border-transparent hover:bg-purple-500/10 hover:border-purple-400/25",
  );
}

export function headerExternalLinkClass() {
  return cn(
    "inline-flex items-center justify-center gap-2 min-h-9 px-3.5 text-sm font-medium",
    "text-theme-muted rounded-lg border border-transparent transition-all duration-200",
    "hover:text-theme hover:bg-black/[0.04] dark:hover:bg-white/[0.07] hover:border-theme",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45",
  );
}
