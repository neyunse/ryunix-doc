import { cn } from "@/lib/cn";

import type { RyunixNode } from "@unsetsoft/ryunixjs";

const HeaderNavMenuToggle = ({
  isOpen,
  controlsId,
  label,
  onToggle,
  children,
}: {
  isOpen: boolean;
  controlsId: string;
  label: string;
  onToggle: () => void;
  children?: RyunixNode;
}) => (
  <button
    type="button"
    className={cn(
      "site-header-menu-toggle md:hidden",
      "inline-flex items-center gap-1.5 min-h-10 px-2.5 rounded-lg",
      "text-sm font-medium text-theme-muted border-0 bg-transparent",
      "transition-colors duration-200 hover:text-theme hover:bg-black/5 dark:hover:bg-white/5",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45",
    )}
    aria-expanded={isOpen}
    aria-controls={controlsId}
    onClick={onToggle}
  >
    {children}
    <span>{label}</span>
  </button>
);

export default HeaderNavMenuToggle;
