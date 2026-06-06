"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import TimelineCard from "./TimelineCard";
import TimelineNode from "./TimelineNode";

export default function ExperienceTimeline() {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aYear = a.end === "Present" ? 9999 : a.end.year;
    const bYear = b.end === "Present" ? 9999 : b.end.year;
    if (aYear !== bYear) return bYear - aYear;
    if (a.end === "Present" && b.end !== "Present") return -1;
    if (b.end === "Present" && a.end !== "Present") return 1;
    return 0;
  });

  return (
    <section className="relative py-24 md:py-40 px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md mb-6"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60">
              Professional Trajectory
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 animate-gradient">Experience</span>
          </h2>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
            A chronicle of my contributions and growth across various technical roles and environments.
          </p>
        </motion.div>

        <div className="relative">
          {sortedExperiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={experience.company} className="relative flex justify-center mb-16 md:mb-24 last:mb-0">
                <TimelineNode isLast={index === sortedExperiences.length - 1} />

                <div className={cn(
                  "flex w-full pl-16 md:pl-0",
                  isEven ? "md:justify-start" : "md:justify-end"
                )}>
                  <TimelineCard
                    experience={experience}
                    index={index}
                    isEven={isEven}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}