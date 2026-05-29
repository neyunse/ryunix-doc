import { useRouter } from "@unsetsoft/ryunixjs";
import { localeLabels, locales, swapLocalePath, getLocaleFromPath } from "@/i18n/config";
import { setLocaleCookie } from "@/i18n/app";
import { cn } from "@/lib/cn";

const LocaleSwitcher = ({ className = "" }) => {
  const { location, navigate } = useRouter();
  const current = getLocaleFromPath(location) || "en";

  const onSelect = (locale) => {
    if (locale === current) return;
    setLocaleCookie(locale);
    const next = swapLocalePath(location, locale);
    navigate(next.startsWith(`/${locale}`) ? next : `/${locale}`);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full bg-surface-elevated border border-theme p-0.5",
        className,
      )}
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => onSelect(locale)}
          className={cn(
            "cursor-pointer px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full transition-all duration-200",
            current === locale
              ? "bg-blue-600 text-white"
              : cn(
                  "text-theme-muted hover:text-theme hover:bg-blue-500/15",
                  "hover:shadow-[0_0_12px_rgba(59,130,246,0.2)]",
                ),
          )}
          aria-current={current === locale ? "true" : undefined}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
