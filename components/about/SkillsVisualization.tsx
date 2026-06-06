"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SkillOverview from "./skills/SkillOverview";
import SkillCategoryCard from "./skills/SkillCategoryCard";

export default function SkillsVisualization() {
  return (
    <section className="relative py-24 md:py-40 px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60">
              Technical Arsenal
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-400 animate-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Crafting digital experiences with a meticulously selected suite of modern tools and frameworks.
          </p>
        </motion.div>

        <SkillOverview />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCategoryCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}