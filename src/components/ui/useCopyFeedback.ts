import { useStorePriority, Priority, useEffect, useRef } from "@unsetsoft/ryunixjs";

export const COPY_FEEDBACK_MS = 2500;

export function useCopyFeedback(): [boolean, () => void] {
  const [copied, setCopied] = useStorePriority(false);
  const setCopiedRef = useRef(setCopied);

  setCopiedRef.current = setCopied;

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopiedRef.current(false, Priority.IMMEDIATE);
    }, COPY_FEEDBACK_MS);

    return () => clearTimeout(timer);
  }, [copied]);

  const markCopied = () => setCopied(true, Priority.IMMEDIATE);

  return [copied, markCopied];
}
