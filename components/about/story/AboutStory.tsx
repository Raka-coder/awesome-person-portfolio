"use client";
import { motion } from "framer-motion";
import PhilosophyCard from "./PhilosophyCard";
import BeyondDeskCard from "./BeyondDeskCard";
import ValuesGrid from "./ValuesGrid";

export default function AboutStory() {
  return (
    <section className="relative py-24 md:py-40 px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
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
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60">
              Personal Mission
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-400 animate-gradient">Terminal</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-12">
          <PhilosophyCard />
          <BeyondDeskCard />
        </div>

        <ValuesGrid />
      </div>
    </section>
  );
}