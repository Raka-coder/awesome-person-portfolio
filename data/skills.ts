import { Code, Zap, Palette, Wrench, Heart } from "lucide-react"
import type { Skill } from "@/types/skills"

export const skills: Skill[] = [
  { name: "Frontend", icon: Code, description: "React, Next, TypeScript, Tailwind" },
  { name: "Backend", icon: Zap, description: "PrismaORM, PostgreSQL/MySQL" },
  { name: "Design", icon: Palette, description: "Figma, FreeCAD, Fritzing" },
  { name: "Others", icon: Heart, description: "Git, Arduino, Setup Network" },
];