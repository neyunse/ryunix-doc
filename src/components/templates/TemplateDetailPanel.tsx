import { NavLink } from "@unsetsoft/ryunixjs";
import { CodeTabs } from "@/components/ui/CodeTabs";
import ConfigSnippet from "@/components/templates/ConfigSnippet";
import { cn } from "@/lib/cn";
import { sectionEyebrowClass, templateBadgeClass, templateFileListClass } from "@/lib/uiClasses";
import {
  craTemplateCommandTabs,
  craTemplateWorkflowTabs,
} from "@/i18n/templatesCatalog";

const accentRing = {
  blue: "ring-blue-500/30 from-blue-500/10",
  cyan: "ring-cyan-500/30 from-cyan-500/10",
  amber: "ring-amber-500/30 from-amber-500/10",
  purple: "ring-purple-500/30 from-purple-500/10",
};

const TemplateDetailPanel = ({ template, copy, docsBase }) => {
  const t = copy.templates[template.id];
  const badge = copy.badges[template.badgeKey];
  const ring = accentRing[template.accent] ?? accentRing.blue;
  const flagsHint =
    template.cliFlags.length === 0 ? copy.card.noFlags : template.cliFlags.join(" ");

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-theme bg-surface-card shadow-sm ring-1",
        "bg-gradient-to-br to-transparent",
        ring,
      )}
    >
      <header className="p-6 sm:p-8 border-b border-theme">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={templateBadgeClass}>
            {badge}
          </span>
          <span className="font-mono text-xs text-theme-muted">{flagsHint}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-theme font-mono tracking-tight">{t.title}</h1>
        <p className="mt-3 text-theme-muted leading-relaxed max-w-3xl">{t.longDescription ?? t.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {template.featureKeys.map((key) => (
            <li
              key={key}
              className={cn(
                "text-xs font-medium px-2.5 py-1 rounded-lg border border-purple-400/20",
                "bg-purple-500/10 text-purple-600 dark:text-purple-300",
              )}
            >
              {copy.features[key]}
            </li>
          ))}
        </ul>
      </header>

      <div className="p-6 sm:p-8 flex flex-col gap-10">
        <section>
          <h2 className={sectionEyebrowClass("mb-1")}>{copy.detail.workflowTitle}</h2>
          <p className="text-sm text-theme-muted mb-4">{copy.detail.workflowBody}</p>
          <CodeTabs tabs={craTemplateWorkflowTabs(template.id)} />
        </section>

        <section>
          <h2 className={sectionEyebrowClass()}>{copy.card.scaffoldLabel}</h2>
          <CodeTabs tabs={craTemplateCommandTabs(template.id)} />
        </section>

        <section>
          <h2 className={sectionEyebrowClass()}>{copy.card.configLabel}</h2>
          <ConfigSnippet
            filename="ryunix.config.js"
            code={template.ryunixConfig}
            copyLabel={copy.card.copyConfig}
          />
        </section>

        {template.extraFiles.length > 0 ? (
          <section>
            <h2 className={sectionEyebrowClass()}>{copy.card.extraFilesLabel}</h2>
            <div className="flex flex-col gap-4">
              {template.extraFiles.map((file) => (
                <ConfigSnippet
                  key={file.name}
                  filename={file.name}
                  code={file.preview}
                  copyLabel={copy.card.copyConfig}
                />
              ))}
            </div>
          </section>
        ) : null}

        <div className="grid sm:grid-cols-2 gap-6">
          <section>
            <h2 className={sectionEyebrowClass()}>{copy.card.structureLabel}</h2>
            <ul className={templateFileListClass}>
              {template.structureKeys.map((key) => (
                <li key={key}>{copy.structure[key]}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className={sectionEyebrowClass()}>{copy.card.scriptsLabel}</h2>
            <ul className={templateFileListClass}>
              {template.scriptKeys.map((key) => (
                <li key={key}>
                  <span className="text-theme">{key === "lintFix" ? "lint:fix" : key}</span>
                  <span className="text-theme-muted"> → </span>
                  {copy.scripts[key]}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <footer className="px-6 sm:px-8 py-4 border-t border-theme">
        <NavLink
          to={`${docsBase}/guides/create-app`}
          className="text-sm font-medium text-blue-500 hover:text-purple-500 transition-colors"
        >
          {copy.hero.docsLink} →
        </NavLink>
      </footer>
    </div>
  );
};

export default TemplateDetailPanel;
