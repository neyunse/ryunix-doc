import { Image, useEffect, useRouter, useStore } from "@unsetsoft/ryunixjs";
import { Menu, X, Github } from "lucide";

import LocaleSwitcher from "@/components/ui/LocaleSwitcher";
import HeaderNavLink from "@/components/layout/HeaderNavLink";
import HeaderBrandLink from "@/components/layout/HeaderBrandLink";
import HeaderNavMenuToggle from "@/components/layout/HeaderNavMenuToggle";
import { Icon } from "@/components/ui/Icon";
import Logo from "@/resources/logo-min.svg";
import { cn } from "@/lib/cn";
import { brandGradientTextClass, siteHeaderInnerClass, siteHeaderShellClass } from "@/lib/uiClasses";

export const SITE_HEADER_ID = "site-header";
export const SITE_HEADER_NAV_ID = "site-header-nav";

const SiteHeader = ({
  homePath,
  homeNavLabel = "Home",
  docsPath,
  docsNavLabel = "Docs",
  templatesPath,
  templatesNavLabel,
  menuNavLabel = "Menu",
}) => {
  const [isNavOpen, setIsNavOpen] = useStore(false);
  const { location } = useRouter();

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <header
      id={SITE_HEADER_ID}
      className={cn(siteHeaderShellClass, isNavOpen && "is-nav-open")}
    >
      {isNavOpen ? (
        <button
          type="button"
          className="site-header-nav-backdrop md:hidden"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setIsNavOpen(false)}
        />
      ) : null}

      <div className={siteHeaderInnerClass}>
        <HeaderBrandLink to={homePath}>
          <Image src={Logo} width={36} height={36} fill="var(--color-logo-fill)" alt="Ryunix Logo" />
          <span className={cn(brandGradientTextClass, "hidden sm:block")}>RyunixJS</span>
        </HeaderBrandLink>

        <nav id={SITE_HEADER_NAV_ID} className="site-header-nav" aria-label="Main">
          <ul className="site-header-nav-list">
            <li>
              <HeaderNavLink to={homePath} exact dropdown>
                {homeNavLabel}
              </HeaderNavLink>
            </li>
            {templatesPath && templatesNavLabel ? (
              <li>
                <HeaderNavLink to={templatesPath} dropdown>
                  {templatesNavLabel}
                </HeaderNavLink>
              </li>
            ) : null}
            <li>
              <HeaderNavLink to={docsPath} dropdown>
                {docsNavLabel}
              </HeaderNavLink>
            </li>
          </ul>
        </nav>

        <div className="site-header-actions">
          <HeaderNavMenuToggle
            isOpen={isNavOpen}
            controlsId={SITE_HEADER_NAV_ID}
            label={menuNavLabel}
            onToggle={() => setIsNavOpen(!isNavOpen)}
          >
            <Icon icon={isNavOpen ? X : Menu} className="w-5 h-5 shrink-0" />
          </HeaderNavMenuToggle>
          <LocaleSwitcher className="shrink-0" />
          <a
            href="https://github.com/UnSetSoft/Ryunixjs"
            className={cn(
              "inline-flex items-center justify-center gap-2 min-h-10 px-2 sm:px-3",
              "text-sm font-medium text-theme-muted rounded-lg border-0 bg-transparent",
              "transition-colors duration-200 hover:text-theme",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <span className="hidden md:inline">GitHub</span>
            <Icon icon={Github} className="w-4 h-4 shrink-0 opacity-80" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
