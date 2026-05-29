import { Image, NavLink, type RyunixNode } from "@unsetsoft/ryunixjs";
import { Github, ExternalLink } from "lucide";
import { Icon } from "@/components/ui/Icon";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "@/resources/logo-min.svg";

const footerLinkClass =
  "text-sm text-theme-muted hover:text-theme transition-colors duration-200 inline-flex items-center gap-1.5";

const FooterLinkList = ({ title, children }: { title: string; children?: RyunixNode }) => (
  <div>
    <h3 className="text-xs font-semibold uppercase tracking-wider text-theme-muted mb-4">{title}</h3>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const SiteFooter = ({ locale, copy }) => {
  const base = `/${locale}`;
  const docs = `${base}/docs`;
  const { footer } = copy;
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-theme-muted bg-surface-footer text-sm text-theme-muted overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent dark:via-blue-500/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[min(100%,36rem)] h-48 blur-[80px] rounded-full opacity-30 dark:opacity-20"
        style={{ background: "var(--color-glow-blue)" }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[var(--ui-container)] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <NavLink
              to={base}
              className="inline-flex items-center gap-2.5 w-fit group"
            >
              <Image
                src={Logo}
                width={36}
                height={36}
                fill="var(--color-logo-fill)"
                alt="RyunixJS"
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                RyunixJS
              </span>
            </NavLink>
            <p className="text-theme-muted leading-relaxed max-w-md text-pretty">{footer.description}</p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <FooterLinkList title={footer.docsTitle}>
              <li>
                <NavLink to={`${docs}/introduction/getting-started`} className={footerLinkClass}>
                  {footer.links.gettingStarted}
                </NavLink>
              </li>
              <li>
                <NavLink to={`${docs}/introduction/installation`} className={footerLinkClass}>
                  {footer.links.installation}
                </NavLink>
              </li>
              <li>
                <NavLink to={`${docs}/api/configuration`} className={footerLinkClass}>
                  {footer.links.configuration}
                </NavLink>
              </li>
              <li>
                <NavLink to={`${docs}/guides/cli`} className={footerLinkClass}>
                  {footer.links.cli}
                </NavLink>
              </li>
            </FooterLinkList>
          </div>

          <div className="lg:col-span-2">
            <FooterLinkList title={footer.projectTitle}>
              <li>
                <a
                  href="https://github.com/UnSetSoft/Ryunixjs"
                  className={footerLinkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={Github} className="w-4 h-4 shrink-0 opacity-70" />
                  {footer.github}
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/@unsetsoft/ryunixjs"
                  className={footerLinkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footer.npm}
                  <Icon icon={ExternalLink} className="w-3.5 h-3.5 shrink-0 opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/UnSetSoft/Ryunixjs/blob/canary/LICENSE"
                  className={footerLinkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footer.license}
                  <Icon icon={ExternalLink} className="w-3.5 h-3.5 shrink-0 opacity-50" />
                </a>
              </li>
            </FooterLinkList>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-theme-muted flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ThemeToggle labels={footer.theme} />
          <div className="flex flex-col sm:items-end gap-1 text-xs text-theme-muted">
            <p>
              &copy; {year} {footer.copyright}
            </p>
            <p>
              {footer.license} ·{" "}
              <a
                href="https://github.com/UnSetSoft/Ryunixjs"
                className="text-theme-muted hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                UnSetSoft
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
