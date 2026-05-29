import { useEffect, useStore } from "@unsetsoft/ryunixjs";
import { Monitor, Moon, Sun } from "lucide";
import { Icon } from "@/components/ui/Icon";
import {
  applyTheme,
  defaultTheme,
  resolveThemeFromCookie,
  setThemeCookie,
  watchSystemTheme,
  type ThemePreference,
} from "@/i18n/themeCookie";

const options = [
  { id: "light", icon: Sun },
  { id: "system", icon: Monitor },
  { id: "dark", icon: Moon },
];

const ThemeToggle = ({ labels }) => {
  const [theme, setTheme] = useStore<ThemePreference>(defaultTheme);

  useEffect(() => {
    const saved = resolveThemeFromCookie();
    setTheme(saved as ThemePreference);
    applyTheme(saved as ThemePreference);
  }, []);

  useEffect(() => {
    if (theme !== "system") return undefined;
    return watchSystemTheme(() => applyTheme("system"));
  }, [theme]);

  const selectTheme = (next: ThemePreference) => {
    if (next === theme) return;
    setTheme(next);
    setThemeCookie(next);
    applyTheme(next);
  };

  return (
    <div className="ryx-theme-segment" role="radiogroup" aria-label={labels.title}>
      {options.map(({ id, icon }) => {
        const active = theme === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            title={labels[id]}
            onClick={() => selectTheme(id as ThemePreference)}
            className={`ryx-theme-segment-btn ${active ? "ryx-theme-segment-btn--active" : ""}`}
          >
            <Icon icon={icon} className="ryx-theme-segment-icon" strokeWidth={1.75} />
            <span className="ryx-theme-segment-sr-only">{labels[id]}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
