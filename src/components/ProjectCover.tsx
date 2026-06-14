import { motion } from "motion/react";
import { getProjectCoverTheme } from "../data/projectCovers";

interface ProjectCoverProps {
  slug: string;
  title?: string;
  year?: string;
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

const iconSizes = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

const ringSizes = {
  sm: "w-20 h-20",
  md: "w-28 h-28",
  lg: "w-36 h-36",
};

export function ProjectCover({
  slug,
  title,
  year,
  className = "",
  iconSize = "lg",
}: ProjectCoverProps) {
  const theme = getProjectCoverTheme(slug);
  const Icon = theme.icon;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} ${className}`}
      aria-hidden={!title}
      aria-label={title ? `${title} project cover` : undefined}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 blur-3xl" />

      {title && (
        <p className="absolute bottom-6 left-6 right-6 font-display text-white/10 text-2xl md:text-4xl font-bold leading-none truncate pointer-events-none select-none">
          {title}
        </p>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`relative flex items-center justify-center rounded-full border ${theme.ringColor} bg-white/5 backdrop-blur-sm ${ringSizes[iconSize]}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className={`${iconSizes[iconSize]} ${theme.iconColor}`} strokeWidth={1.5} />
        </motion.div>
      </div>

      {year && (
        <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm shadow border border-white/20 font-mono text-[9px] uppercase font-bold tracking-widest text-[#1B365D] rounded">
          {year}
        </span>
      )}
    </div>
  );
}
