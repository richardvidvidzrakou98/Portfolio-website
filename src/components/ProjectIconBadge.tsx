import { getProjectCoverTheme } from "../data/projectCovers";

interface ProjectIconBadgeProps {
  slug: string;
  size?: "sm" | "md";
  className?: string;
}

const sizes = {
  sm: { box: "w-9 h-9", icon: "w-4 h-4", radius: "rounded-lg" },
  md: { box: "w-11 h-11", icon: "w-5 h-5", radius: "rounded-xl" },
};

export function ProjectIconBadge({
  slug,
  size = "md",
  className = "",
}: ProjectIconBadgeProps) {
  const theme = getProjectCoverTheme(slug);
  const Icon = theme.icon;
  const s = sizes[size];

  return (
    <div
      className={`${s.box} ${s.radius} shrink-0 flex items-center justify-center bg-gradient-to-br ${theme.gradient} shadow-sm ${className}`}
      aria-hidden
    >
      <Icon className={`${s.icon} ${theme.iconColor}`} strokeWidth={1.75} />
    </div>
  );
}
