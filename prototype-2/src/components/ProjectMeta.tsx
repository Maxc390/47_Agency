import { IconType } from "react-icons";
import {
  LuCode,
  LuGlobe,
  LuLayers,
  LuMonitor,
  LuPalette,
  LuSmartphone,
} from "react-icons/lu";

type ProjectMetaProps = {
  category?: string;
  technologies?: string[];
  className?: string;
};

const CATEGORY_ICONS: Record<string, IconType> = {
  "Web Application": LuGlobe,
  "Mobile App": LuSmartphone,
  "Design System": LuPalette,
  "Dashboard": LuMonitor,
  "API": LuCode,
  "E-commerce": LuLayers,
};

const DEFAULT_ICON = LuCode;

export const ProjectMeta = ({
  category,
  technologies,
  className,
}: ProjectMetaProps) => {
  const CategoryIcon = category ? (CATEGORY_ICONS[category] || DEFAULT_ICON) : DEFAULT_ICON;

  return (
    <div className={className}>
      {category && (
        <div className="mb-4">
          <p className="mb-2 text-base font-semibold uppercase">Category</p>
          <p className="flex items-center gap-2">
            <CategoryIcon className="size-5" />
            {category}
          </p>
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div>
          <p className="mb-2 text-base font-semibold uppercase">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};