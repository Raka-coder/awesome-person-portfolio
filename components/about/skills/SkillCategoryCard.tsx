"use client";
import { motion, useMotionValue } from "framer-motion";
import { Skill } from "@/types/skills";
import { cn } from "@/lib/utils";
import React from "react";
import { getCategoryStyles } from "./getCategoryStyles";
import SkillBadge from "./SkillBadge";

interface SkillCategoryCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCategoryCard({ skill, index }: SkillCategoryCardProps) {
  const styles = getCategoryStyles(skill.name);
  const Icon = skill.icon;
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 transition-all duration-500 overflow-hidden",
        styles.border,
        styles.glow
      )}
    >
      {/* Interactive Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionValue(`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`),
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className={cn(
            "p-3 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
            styles.bg,
            styles.color
          )}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">{skill.name}</h3>
            <div className="flex items-center gap-2">
              <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", styles.dot)} />
              <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">{skill.items?.length || 0} technologies</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {skill.items?.map((item, itemIndex) => (
            <SkillBadge key={item.name} name={item.name} index={itemIndex} styles={styles} />
          ))}
        </div>

        {skill.description && (
          <div className="mt-8 pt-6 border-t border-border/30">
            <p className="text-sm text-foreground/50 leading-relaxed italic">
              &quot;{skill.description}&quot;
            </p>
          </div>
        )}
      </div>

      {/* Decorative Gradient Blob */}
      <div className={cn(
        "absolute -bottom-24 -right-24 w-48 h-48 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br",
        styles.gradient
      )} />
    </motion.div>
  );
}