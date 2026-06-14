import type { LucideIcon } from "lucide-react";
import {
  GitBranch,
  Boxes,
  Layers,
  CloudUpload,
  FileCode,
  Globe,
  Search,
  Package,
} from "lucide-react";

export interface ProjectCoverTheme {
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  ringColor: string;
}

export const projectCoverThemes: Record<string, ProjectCoverTheme> = {
  "cloud-ci-pipeline": {
    icon: GitBranch,
    gradient: "from-[#0f2744] via-[#1B365D] to-[#2a5080]",
    iconColor: "text-sky-200",
    ringColor: "border-sky-300/30",
  },
  "kubernetes-sample-app": {
    icon: Boxes,
    gradient: "from-[#1a2f4a] via-[#2563eb] to-[#1e3a5f]",
    iconColor: "text-blue-100",
    ringColor: "border-blue-200/30",
  },
  "docker-compose-stack": {
    icon: Layers,
    gradient: "from-[#1e3a5f] via-[#0ea5e9] to-[#1B365D]",
    iconColor: "text-cyan-100",
    ringColor: "border-cyan-200/30",
  },
  "aws-cloud-migration": {
    icon: CloudUpload,
    gradient: "from-[#1B365D] via-[#f59e0b] to-[#92400e]",
    iconColor: "text-amber-100",
    ringColor: "border-amber-200/30",
  },
  "terraform-ec2-infrastructure": {
    icon: FileCode,
    gradient: "from-[#4c1d95] via-[#7c3aed] to-[#1B365D]",
    iconColor: "text-violet-100",
    ringColor: "border-violet-200/30",
  },
  "aws-static-hosting-autoscaling": {
    icon: Globe,
    gradient: "from-[#064e3b] via-[#059669] to-[#1B365D]",
    iconColor: "text-emerald-100",
    ringColor: "border-emerald-200/30",
  },
  "container-detective": {
    icon: Search,
    gradient: "from-[#431407] via-[#ea580c] to-[#1B365D]",
    iconColor: "text-orange-100",
    ringColor: "border-orange-200/30",
  },
  "aws-codebuild-pipeline": {
    icon: Package,
    gradient: "from-[#312e81] via-[#6366f1] to-[#1B365D]",
    iconColor: "text-indigo-100",
    ringColor: "border-indigo-200/30",
  },
};

const fallbackTheme: ProjectCoverTheme = {
  icon: Boxes,
  gradient: "from-[#1B365D] via-[#2d5a87] to-[#1B365D]",
  iconColor: "text-white",
  ringColor: "border-white/20",
};

export function getProjectCoverTheme(slug: string): ProjectCoverTheme {
  return projectCoverThemes[slug] ?? fallbackTheme;
}
