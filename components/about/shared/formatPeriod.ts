import { Experience } from "@/data/experience";

export function formatPeriod(start: Experience["start"], end: Experience["end"]) {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const startStr = `${monthNames[start.month - 1]} ${start.year}`;
  const endStr =
    end === "Present" ? "Present" : `${monthNames[end.month - 1]} ${end.year}`;
  return `${startStr} — ${endStr}`;
}