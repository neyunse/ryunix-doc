import { techStack } from "@/i18n/packages";
import { useDocCopy } from "@/features/docs/DocLocaleContext";

export const TechStackList = () => {
  const copy = useDocCopy("tech");

  return (
    <ul className="list-disc pl-6 space-y-2 my-4 text-theme">
      {techStack.map((row) => (
        <li key={row.areaKey}>
          <strong>{copy.area[row.areaKey]}:</strong> {row.items.join(", ")}
        </li>
      ))}
    </ul>
  );
};
