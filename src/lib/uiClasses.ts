import { cn } from "@/lib/cn";

export const primaryCtaClass = cn(
  "inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5",
  "text-base font-semibold text-white bg-blue-600 rounded-xl",
  "hover:bg-blue-500 hover:-translate-y-1",
  "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300",
);

export const secondaryCtaClass = cn(
  "inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5",
  "text-base font-semibold text-theme bg-surface-elevated border border-theme rounded-xl",
  "hover:bg-surface-card-hover hover:-translate-y-1 transition-all duration-300",
);

export const siteHeaderShellClass = cn(
  "site-header header-scroll sticky top-0 z-[100] text-theme relative",
  "min-h-[var(--ui-header-height)] h-auto md:h-[var(--ui-header-height)]",
  "border-b border-theme",
);

export const siteHeaderInnerClass = "site-header-inner";

export const siteContainerClass = cn(
  "w-full max-w-[var(--ui-container)] mx-auto px-4 sm:px-6 lg:px-8",
);

export const copyButtonClass = (copied: boolean, extra = "") =>
  cn(
    "cursor-pointer flex-shrink-0 p-1.5 rounded-md border transition-all duration-300",
    extra,
    copied
      ? cn(
          "bg-green-500/15 border-green-500/50 text-green-400",
          "shadow-[0_0_16px_rgba(34,197,94,0.35)] scale-110",
        )
      : "bg-transparent border-transparent text-theme-muted hover:bg-surface-elevated hover:text-theme",
  );

export const docSidebarLinkClass = (isActive: boolean) =>
  cn(
    "block px-3 py-2 rounded-xl transition-all duration-300",
    isActive
      ? cn(
          "bg-gradient-to-r from-blue-500/20 to-purple-500/10",
          "text-blue-600 dark:text-blue-300 font-medium shadow-[inset_2px_0_0_#3b82f6]",
        )
      : "text-theme-muted hover:bg-black/5 dark:hover:bg-white/5 hover:text-theme",
  );

export const docPagerLinkClass = (alignEnd = false) =>
  cn(
    "group flex flex-col w-full sm:w-1/2 p-4 rounded-2xl border border-theme",
    "bg-surface-card hover:bg-surface-card-hover hover:border-blue-500/50 transition-all duration-300",
    alignEnd && "items-end text-right",
    !alignEnd && "items-start",
  );

export const docPagerLabelRowClass = cn(
  "flex items-center text-theme-muted text-sm mb-1",
  "group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors",
);

export const glowOrbTopClass = cn(
  "fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]",
  "pointer-events-none opacity-50 dark:opacity-25 z-0",
);

export const glowOrbBottomClass = cn(
  "fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]",
  "pointer-events-none opacity-40 dark:opacity-20 z-0",
);

export const docsMenuToggleClass = cn(
  "cursor-pointer flex items-center gap-2 text-sm font-medium text-theme-muted",
  "hover:text-theme transition-colors",
);

export const docsMobileBarClass = cn(
  "lg:hidden sticky top-[var(--ui-header-height)] z-50 bg-header backdrop-blur-md",
  "border-b border-theme -mx-4 px-4 py-3 flex items-center justify-between",
);

export const docsOverlayClass = cn(
  "cursor-pointer fixed inset-0 z-[60] bg-black/40 dark:bg-black/60 backdrop-blur-sm lg:hidden",
);

export const docPagerContainerClass = cn(
  "mt-16 pt-8 border-t border-theme flex flex-col sm:flex-row gap-4",
  "justify-between items-center sm:items-stretch",
);

export const templateBadgeClass = cn(
  "inline-flex items-center rounded-full border border-theme",
  "px-2.5 py-0.5 text-xs font-medium text-theme-muted",
);

export const sectionEyebrowClass = (marginBottom = "mb-3") =>
  cn("text-sm font-semibold uppercase tracking-wider text-theme-muted", marginBottom);

export const templateFileListClass = cn(
  "font-mono text-xs text-theme-muted space-y-1.5",
  "bg-surface-elevated rounded-xl border border-theme p-4",
);

export const terminalTrafficLightsClass = cn(
  "w-[0.75rem] h-[0.75rem] rounded-full bg-[#ff5f56] opacity-90",
  "shadow-[1.25rem_0_0_#ffbd2e,2.5rem_0_0_#27c93f]",
);

export const homeHeroContainerClass = cn(
  "w-full max-w-[var(--ui-container)] mx-auto px-4 sm:px-6 lg:px-8",
  "py-20 sm:py-32 lg:py-40 flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center",
);

export const homeTerminalGlowClass = cn(
  "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl",
  "opacity-20 group-hover:opacity-40 transition-opacity duration-500",
);

export const templatesHeroGlowClass = cn(
  "absolute top-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full blur-[100px]",
  "pointer-events-none opacity-40 dark:opacity-25",
);

export const brandGradientTextClass = cn(
  "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600",
);

export const homeHeroHighlightClass = cn(
  "text-transparent bg-clip-text bg-gradient-to-r",
  "from-blue-400 via-blue-500 to-purple-500 animate-pulse",
);

export const terminalManagerActiveClass = cn(
  "bg-surface-elevated text-theme shadow-sm ring-1 ring-[var(--color-border-base)]",
);
