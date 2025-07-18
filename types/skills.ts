export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
