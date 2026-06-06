"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap } from "lucide-react";
import SpotlightCard from "../shared/SpotlightCard";

export default function AvailabilityCard() {
  return (
    <SpotlightCard className="!p-0 border-primary/20">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-secondary/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
        </div>
        <div className="ml-4 flex items-center gap-2">
          <Zap className="w-3 h-3 text-foreground/40" />
          <span className="text-[10px] font-mono text-foreground/40 tracking-wider">availability.status</span>
        </div>
      </div>
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <div className="w-4 h-4 rounded-full bg-emerald-500" />
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-emerald-500 animate-ping opacity-30" />
          </motion.div>
          <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">
            Available for Work
          </span>
        </div>

        <p className="text-xl md:text-2xl font-bold leading-tight text-foreground tracking-tight mb-6">
          Open to <span className="text-primary">freelance</span> projects and <span className="text-primary">full-time</span> opportunities.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-foreground/60">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Web & Mobile Development</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/60">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>IT Support & System Admin</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-foreground/60">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Technical Consulting</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 flex items-center gap-2">
          <Clock className="w-4 h-4 text-foreground/40" />
          <span className="text-xs text-foreground/40">Typically responds within 24 hours</span>
        </div>
      </div>
    </SpotlightCard>
  );
}