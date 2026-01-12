import { Code, Zap, Palette, Wrench, Heart } from "lucide-react";
import type { Skill } from "@/types/skills";
import skillsData from "@/data/skills/skills.json" // Skills kept in projects for now, or could be in its own

const iconMap: Record<string, any> = {
  Code,
  Zap,
  Palette,
  Wrench,
  Heart,
};

export const skills: Skill[] = (skillsData as any[]).map((skill) => ({
  ...skill,
  icon: iconMap[skill.icon] || Heart,
  items: skill.items || [],
})) as Skill[];
