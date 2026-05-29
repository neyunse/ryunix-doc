import { CodeTabs } from "@/components/ui/CodeTabs";
import { manualInstallCommand } from "@/i18n/packages";

const PKG_MANAGERS = ["npm", "yarn", "bun", "pnpm"];

export const ManualInstallTabs = ({ channel = "canary" }) => (
  <CodeTabs
    tabs={PKG_MANAGERS.map((name) => ({
      name,
      code: manualInstallCommand(name, channel),
    }))}
  />
);
