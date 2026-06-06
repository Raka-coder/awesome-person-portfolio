"use client";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export default function SpotlightCard({ children, className, index }: SpotlightCardProps) {
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
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 transition-all duration-500 overflow-hidden hover:border-primary/50",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionValue(`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`),
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}