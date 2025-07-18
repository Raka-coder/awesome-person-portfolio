"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, View } from "lucide-react";
import { toast } from "sonner";

export default function AnimatedHomeSection() {
  useEffect(() => {
    toast.dismiss();
  }, []);

  const handleDownloadClick = () => {
    const toastPopup = toast.loading("Loading CV", {
      duration: 2000,
      style: {
        backgroundColor: "oklch(0.92 0.004 286.32)", // Primary background
        border: "2px solid oklch(0.627 0.265 303.9)", // border
        color: "oklch(0.627 0.265 303.9)", // Purple text color
      },
    });
    setTimeout(() => {
      toast.dismiss(toastPopup);
    }, 2000);
  };
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen p-4 md:p-0 md:pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          Raka Restu
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-4 md:mb-6 font-medium"
        >
          IT Support
        </motion.h2>

        {/* Fullname */}
        <SplitText
          text="Fullname: Raka Restu Saputra"
          className="text-base md:text-lg text-slate-400 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed px-4"
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

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center mb-4 md:mb-6 px-4"
        >
          <Button
            size="lg"
            variant="default"
            className="sm:w-20 md:w-auto cursor-pointer"
          >
            <Link href="/projects">See my work</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="sm:w-20 md:w-auto cursor-pointer"
          >
            <a
              href="https://1drv.ms/b/c/7fc77f942dd3d7e8/EY0orGxBwCZGp86o4tLA5q0B-brdLAreqlVLCpvJoDbNxA?e=bDt7Ge"
              download
              onClick={handleDownloadClick}
              className="flex items-center"
            >
              <View size={20} className="mr-2" />
              View CV
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 justify-center mb-6"
        >
          <Link
            href="https://github.com/Raka-coder"
            className="text-slate-400 hover:text-purple-500 transition-colors p-2 rounded-full"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/raka-restu-saputra/"
            className="text-slate-400 hover:text-purple-500 transition-colors p-2 rounded-full"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
