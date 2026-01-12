import experienceData from "./experience/experience.json";

export type Experience = {
  company: string;
  position: string;
  start: { month: number; year: number };
  end: { month: number; year: number } | "Present";
  description: string[];
};

export const experiences: Experience[] = (experienceData as any[]).map((exp) => ({
  ...exp,
})) as Experience[];

// Sort experiences so oldest is last (start date ascending, then reversed)
experiences.sort((a, b) => {
  const aDate = new Date(a.start.year, a.start.month - 1);
  const bDate = new Date(b.start.year, b.start.month - 1);
  return aDate.getTime() - bDate.getTime();
});
// Then reverse to have oldest at bottom
experiences.reverse();
