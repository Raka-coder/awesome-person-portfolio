export type Experience = {
  company: string;
  position: string;
  start: { month: number; year: number };
  end: { month: number; year: number } | "Present";
  description: string[];
};

// Example data, you can add more
export const experiences: Experience[] = [
  {
    company: "CV. Klik Media",
    position: "IT Support & Service",
    start: { month: 4, year: 2023 },
    end: { month: 7, year: 2023 },
    description: [
      "Handle customer inquiries and note down hardware/software problems.",
      "Handle the physical hardware/software installation.",
      "Manage and maintain including network, and surveillance.",
    ],
  },
  {
    company: "Technonet Solution",
    position: "IT Support & System Administrator",
    start: { month: 7, year: 2023 },
    end: { month: 12, year: 2023 },
    description: [
      "Handle user-facing tasks including technical diagnostics, and print-related services.",
      "Perform structured cabling for local area networks and fiber optics.",
    ],
  },
];

// Sort experiences so oldest is last (start date ascending, then reversed)
experiences.sort((a, b) => {
  const aDate = new Date(a.start.year, a.start.month - 1);
  const bDate = new Date(b.start.year, b.start.month - 1);
  return aDate.getTime() - bDate.getTime();
});
// Then reverse to have oldest at bottom
experiences.reverse();
