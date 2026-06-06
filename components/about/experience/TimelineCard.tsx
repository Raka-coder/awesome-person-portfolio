"use client";
import { motion, useMotionValue } from "framer-motion";
import { Experience } from "@/data/experience";
import { Briefcase, Calendar, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { formatPeriod } from "../shared/formatPeriod";

interface TimelineCardProps {
  experience: Experience;
  index: number;
  isEven: boolean;
}

export default function TimelineCard({ experience, index, isEven }: TimelineCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative p-6 md:p-8 rounded-[2rem] bg-card/40 backdrop-blur-md border border-border/50 transition-all duration-500 overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)]",
        "w-full md:w-[calc(50%-2rem)]"
      )}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionValue(`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`),
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                {experience.position}
              </h3>
              <p className="text-sm font-bold text-primary/80 uppercase tracking-widest mt-1">
                {experience.company}
              </p>
            </div>
            <div className="hidden lg:block">
               <div className="px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-[10px] font-bold text-foreground/40 uppercase tracking-tighter whitespace-nowrap">
                {formatPeriod(experience.start, experience.end)}
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-[10px] font-bold text-foreground/40 uppercase tracking-tighter">
              <Calendar className="w-3 h-3" />
              <span>{formatPeriod(experience.start, experience.end)}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-3">
          {experience.description.map((desc, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-3 text-sm md:text-base text-foreground/60 leading-relaxed"
            >
              <Terminal className="w-4 h-4 mt-1 text-primary/40 flex-shrink-0" />
              <span>{desc}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Decorative Corner Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Briefcase className="w-8 h-8" />
      </div>
    </motion.div>
  );
}