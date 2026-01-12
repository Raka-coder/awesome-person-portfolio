export interface SkillItem {
  name: string;
  badge: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  items?: SkillItem[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
