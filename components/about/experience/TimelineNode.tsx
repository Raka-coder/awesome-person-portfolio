"use client";
import { motion } from "framer-motion";

interface TimelineNodeProps {
  isLast: boolean;
}

export default function TimelineNode({ isLast }: TimelineNodeProps) {
  return (
    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center h-full pointer-events-none">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="relative z-20"
      >
        <div className="w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
        <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-20" />
      </motion.div>
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[2px] h-full bg-gradient-to-b from-primary via-primary/20 to-transparent origin-top mt-2"
        />
      )}
    </div>
  );
}