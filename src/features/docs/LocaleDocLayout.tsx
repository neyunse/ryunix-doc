import { HydrationBoundary, type RyunixNode } from "@unsetsoft/ryunixjs";
import DocLayoutShell from "@/features/docs/DocLayoutShell";
import { DocLocaleProvider } from "@/features/docs/DocLocaleContext";
import { getDocSections } from "@/i18n/config";
import { pickLocale } from "@/i18n/locale";
import { docUiCopy } from "@/i18n/docUiCopy";

const LocaleDocLayout = ({ locale, children }: { locale: string; children?: RyunixNode }) => {
  const copy = pickLocale(docUiCopy, locale);
  const sections = getDocSections(locale);
  return (
    <DocLocaleProvider locale={locale}>
      <DocLayoutShell
        sections={sections}
        prevLabel={copy?.prev ?? "Previous"}
        nextLabel={copy?.next ?? "Next"}
      >
        <HydrationBoundary id={`docs-${locale}`}>{children}</HydrationBoundary>
      </DocLayoutShell>
    </DocLocaleProvider>
  );
};

export default LocaleDocLayout;
