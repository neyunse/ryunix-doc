import { NavLink } from "@unsetsoft/ryunixjs";
import { cn } from "@/lib/cn";

/** Main nav link with underline; `dropdown` styles the mobile panel layout. */
import type { RyunixNode } from "@unsetsoft/ryunixjs";

const HeaderNavLink = ({
  to,
  children,
  exact = false,
  dropdown = false,
}: {
  to: string;
  children?: RyunixNode;
  exact?: boolean;
  dropdown?: boolean;
}) => (
  <NavLink
    to={to}
    exact={exact}
    className={(({ isActive }: { isActive: boolean }) =>
      cn(
        "header-nav-link group relative inline-flex items-center justify-center",
        "min-h-10 px-3 sm:px-4 pb-2.5 pt-2 text-sm font-medium",
        "bg-transparent border-0 shadow-none rounded-none",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-header-bg)]",
        dropdown &&
          "w-full justify-start px-4 py-3 rounded-lg md:w-auto md:justify-center md:px-4 md:py-2 md:pb-2.5 md:pt-2 md:rounded-none",
        isActive ? "is-active text-theme" : "text-theme-muted hover:text-theme",
      )) as unknown as string}
  >
    <span className="relative z-[1] whitespace-nowrap">{children}</span>
    <span className="header-nav-underline" aria-hidden="true" />
  </NavLink>
);

export default HeaderNavLink;
