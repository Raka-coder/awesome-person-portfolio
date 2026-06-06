"use client";
import { motion } from "framer-motion";
import SplitText from "@/components/home/SplitText";

export default function HeroContent() {
  return (
    <div className="space-y-4 md:space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
      >
        Raka Restu
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
          IT Support
        </span>
      </motion.div>

      <SplitText
        text="Fullname: Raka Restu Saputra"
        className="text-base md:text-lg text-foreground/50 max-w-3xl mx-auto leading-relaxed px-4"
        delay={70}
        duration={0.1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </div>
  );
}