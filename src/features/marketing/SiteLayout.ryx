import type { RyunixNode } from "@unsetsoft/ryunixjs";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const SiteLayout = ({
  children,
  locale,
  docsPath,
  templatesPath,
  copy,
}: {
  children?: RyunixNode;
  locale: string;
  docsPath: string;
  templatesPath: string;
  copy: Record<string, any> | undefined;
}) => (
  <>
    <a href="#main-content" className="skip-to-content">
      {copy?.skipToContent}
    </a>
    <SiteHeader
      homePath={`/${locale}`}
      homeNavLabel={copy?.homeNav}
      docsPath={docsPath}
      docsNavLabel={copy?.docsNav}
      templatesPath={templatesPath}
      templatesNavLabel={copy?.templatesNav}
      menuNavLabel={copy?.menuNav}
    />
    <main id="main-content" className="text-theme bg-surface min-h-[var(--ui-main-min-height)]">
      {children}
    </main>
    <SiteFooter locale={locale} copy={copy} />
  </>
);

export default SiteLayout;
