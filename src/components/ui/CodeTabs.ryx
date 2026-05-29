import { useStore } from "@unsetsoft/ryunixjs";
import { Icon } from "./Icon";
import { Check, Copy } from "lucide";
import { useCopyFeedback } from "./useCopyFeedback";
import { copyButtonClass, terminalTrafficLightsClass } from "@/lib/uiClasses";
import { cn } from "@/lib/cn";

export type CodeTab = { name: string; code: string };

export const CodeTabs = ({ tabs = [] }: { tabs?: CodeTab[] }) => {
  const [activeTab, setActiveTab] = useStore(0);
  const [copied, markCopied] = useCopyFeedback();

  const copyToClipboard = () => {
    if (typeof window === "undefined") return;
    const currentCode = tabs[activeTab]?.code || "";
    navigator.clipboard.writeText(currentCode);
    markCopied();
  };

  const lines = tabs[activeTab]?.code?.split("\n") || [];

  return (
    <div className="relative overflow-hidden mt-6 mb-6 sm:mt-8 sm:mb-8 group perspective-1000 -mx-4 sm:mx-0 px-4 sm:px-0">
      <div className="relative code-tabs-shell">
        <div className="flex items-center justify-between px-6 py-[0.875rem] border-b border-theme">
          <div className="flex items-center min-w-0">
            <div className="flex space-x-[0.5rem] mr-8 shrink-0 relative">
              <div className={terminalTrafficLightsClass} />
            </div>
            <div className="flex space-x-2 overflow-x-auto scrollbar-hide pr-4 ml-8">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === i}
                  onClick={() => setActiveTab(i)}
                  className={cn("code-tabs-btn", activeTab === i && "code-tabs-btn--active")}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <button
            className={copyButtonClass(copied, "ml-2")}
            onClick={copyToClipboard}
            aria-label="Copy code snippet"
            title="Copy"
          >
            {copied ? (
              <Icon icon={Check} className="w-4 h-4" />
            ) : (
              <Icon icon={Copy} className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="p-6 overflow-x-auto">
          <div className="flex flex-col font-mono text-sm leading-relaxed text-theme">
            {lines.map((line, idx) => (
              <div key={idx} className="flex">
                <span className="text-theme-muted select-none mr-3">$</span>
                <span className="whitespace-pre">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
