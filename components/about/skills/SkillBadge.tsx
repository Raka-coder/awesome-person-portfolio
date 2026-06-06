"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CategoryStyles } from "./getCategoryStyles";

interface SkillBadgeProps {
  name: string;
  index: number;
  styles: CategoryStyles;
}

export default function SkillBadge({ name, index, styles }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group/badge relative"
    >
      <div className={cn(
        "px-3 py-1.5 rounded-lg bg-secondary/30 border border-border/50 transition-all duration-300 cursor-default backdrop-blur-sm",
        styles.badge
      )}>
        <span className="text-xs font-medium text-foreground/70 group-hover/badge:text-inherit transition-colors">
          {name}
        </span>
      </div>
    </motion.div>
  );
}