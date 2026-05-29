import { useEffect, useRouter } from "@unsetsoft/ryunixjs";
import { defaultLocale } from "@/i18n/config";
import { resolveLocaleFromCookie } from "@/i18n/localeCookie";

const LegacyDocsRedirect = () => {
  const { location, navigate } = useRouter();

  useEffect(() => {
    const locale =
      typeof window !== "undefined" ? resolveLocaleFromCookie() : defaultLocale;
    const target = location.startsWith("/docs")
      ? `/${locale}${location}`
      : `/${locale}/docs/introduction/getting-started`;
    navigate(target);
  }, [location]);

  return null;
};

export default LegacyDocsRedirect;
