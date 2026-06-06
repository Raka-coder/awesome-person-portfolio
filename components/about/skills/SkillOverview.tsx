"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";
import { getCategoryStyles } from "./getCategoryStyles";

export default function SkillOverview() {
  const totalSkills = skills.reduce((acc, skill) => acc + (skill.items?.length || 0), 0);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative p-8 rounded-[2rem] bg-card/30 backdrop-blur-xl border border-border/40 shadow-2xl overflow-hidden mb-12"
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold text-foreground mb-1">Tech Stack Depth</h4>
          <p className="text-foreground/40 text-sm font-medium tracking-wide uppercase">
            Quantifying digital craftsmanship
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill, index) => {
            const styles = getCategoryStyles(skill.name);
            const percentage = Math.min(Math.round(((skill.items?.length || 0) / 10) * 100), 100);
            
            return (
              <div key={skill.name} className="flex flex-col items-center gap-3">
                <div className="relative w-20 h-20 group">
                  <svg className="w-full h-full -rotate-90 drop-shadow-sm" viewBox="0 0 36 36">
                    <circle
                      cx="18" cy="18" r="16"
                      fill="none"
                      className="stroke-muted/20"
                      strokeWidth="2.5"
                    />
                    <motion.circle
                      cx="18" cy="18" r="16"
                      fill="none"
                      className={cn("stroke-current", styles.color)}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 100" }}
                      whileInView={{ strokeDasharray: `${percentage} 100` }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 + index * 0.1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={cn("text-lg font-bold tracking-tighter", styles.color)}>
                      {skill.items?.length}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                  {skill.name.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>

        <div className="px-6 py-3 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col items-center justify-center min-w-[140px]">
          <span className="text-3xl font-black text-primary tracking-tighter">{totalSkills}</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Total Tools</span>
        </div>
      </div>
    </motion.div>
  );
}