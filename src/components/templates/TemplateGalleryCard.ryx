import { NavLink } from "@unsetsoft/ryunixjs";
import { ArrowRight } from "lucide";
import { Icon } from "@/components/ui/Icon";
import TemplatePreview from "@/components/templates/TemplatePreview";
import { cn } from "@/lib/cn";

import type { WithOptionalKey } from "@/types/components";

const TemplateGalleryCard = ({
  template,
  copy,
  locale,
}: {
  template: {
    id: string;
    badgeKey: string;
    featureKeys: string[];
    accent: string;
  };
  copy: {
    templates: Record<string, { title: string; description: string }>;
    badges: Record<string, string>;
    features: Record<string, string>;
    gallery: { viewDetails: string };
  };
  locale: string;
} & WithOptionalKey) => {
  const t = copy.templates[template.id];
  const badge = copy.badges[template.badgeKey];
  const detailPath = `/${locale}/templates/${template.id}`;
  const previewFeatures = template.featureKeys.slice(0, 4);

  return (
    <article
      className={cn(
        "group flex flex-col h-full rounded-2xl border border-theme bg-surface-card overflow-hidden shadow-sm",
        "transition-all duration-300 hover:border-purple-400/35",
        "hover:shadow-[0_12px_40px_-12px_rgba(139,92,246,0.22)] hover:-translate-y-0.5",
      )}
    >
      <NavLink
        to={detailPath}
        className={cn(
          "block focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-blue-500/50 focus-visible:ring-inset",
        )}
      >
        <div className="p-3 sm:p-4 pb-0">
          <TemplatePreview templateId={template.id} accent={template.accent} compact />
        </div>
        <div className="p-5 sm:p-6 pt-4 flex flex-col flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full border border-theme",
                "px-2.5 py-0.5 text-xs font-medium text-theme-muted",
              )}
            >
              {badge}
            </span>
          </div>
          <h2
            className={cn(
              "text-lg font-bold text-theme font-mono tracking-tight transition-colors",
              "group-hover:text-blue-600 dark:group-hover:text-blue-400",
            )}
          >
            {t.title}
          </h2>
          <p className="mt-2 text-sm text-theme-muted leading-relaxed line-clamp-3">{t.description}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {previewFeatures.map((key) => (
              <li
                key={key}
                className={cn(
                  "text-[0.65rem] font-medium px-2 py-0.5 rounded-md",
                  "bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-400/15",
                )}
              >
                {copy.features[key]}
              </li>
            ))}
          </ul>
          <span
            className={cn(
              "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold",
              "text-blue-600 dark:text-blue-400 group-hover:gap-2.5 transition-all",
            )}
          >
            {copy.gallery.viewDetails}
            <Icon icon={ArrowRight} className="w-4 h-4" />
          </span>
        </div>
      </NavLink>
    </article>
  );
};

export default TemplateGalleryCard;
