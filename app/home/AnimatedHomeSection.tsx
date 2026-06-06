"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroContent from "@/components/home/hero/HeroContent";
import ActionButtons from "@/components/home/actions/ActionButtons";
import { toast } from "sonner";

export default function AnimatedHomeSection() {
  useEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen p-4 md:p-0 md:pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <HeroContent />
        <ActionButtons />
      </div>
    </motion.div>
  );
}