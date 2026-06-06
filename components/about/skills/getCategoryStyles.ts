export interface CategoryStyles {
  color: string;
  bg: string;
  dot: string;
  border: string;
  glow: string;
  gradient: string;
  badge: string;
}

export function getCategoryStyles(name: string): CategoryStyles {
  switch (name) {
    case "Frontend":
      return {
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        dot: "bg-blue-400",
        border: "group-hover:border-blue-400/50",
        glow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]",
        gradient: "from-blue-500/10 to-cyan-500/10",
        badge: "group-hover/badge:bg-blue-400/10 group-hover/badge:text-blue-400 group-hover/badge:border-blue-400/30",
      };
    case "Backend":
      return {
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        dot: "bg-purple-400",
        border: "group-hover:border-purple-400/50",
        glow: "group-hover:shadow-[0_0_20px_rgba(192,132,252,0.15)]",
        gradient: "from-purple-500/10 to-pink-500/10",
        badge: "group-hover/badge:bg-purple-400/10 group-hover/badge:text-purple-400 group-hover/badge:border-purple-400/30",
      };
    case "Design":
      return {
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        dot: "bg-pink-400",
        border: "group-hover:border-pink-400/50",
        glow: "group-hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]",
        gradient: "from-pink-500/10 to-rose-500/10",
        badge: "group-hover/badge:bg-pink-400/10 group-hover/badge:text-pink-400 group-hover/badge:border-pink-400/30",
      };
    default:
      return {
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        dot: "bg-emerald-400",
        border: "group-hover:border-emerald-400/50",
        glow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]",
        gradient: "from-emerald-500/10 to-teal-500/10",
        badge: "group-hover/badge:bg-emerald-400/10 group-hover/badge:text-emerald-400 group-hover/badge:border-emerald-400/30",
      };
  }
}