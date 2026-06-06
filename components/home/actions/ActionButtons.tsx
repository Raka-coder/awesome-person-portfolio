"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, View } from "lucide-react";
import { toast } from "sonner";

export default function ActionButtons() {
  const handleDownloadClick = () => {
    const toastPopup = toast.loading("Loading CV", {
      duration: 2000,
      style: {
        backgroundColor: "oklch(0.92 0.004 286.32)",
        border: "2px solid oklch(0.627 0.265 303.9)",
        color: "oklch(0.627 0.265 303.9)",
      },
    });
    setTimeout(() => {
      toast.dismiss(toastPopup);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="space-y-6"
    >
      {/* Primary Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center px-4">
        <Button
          size="lg"
          variant="default"
          className="sm:w-20 md:w-auto cursor-pointer rounded-xl h-12 px-8 font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        >
          <Link href="/projects">See my work</Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="sm:w-20 md:w-auto cursor-pointer rounded-xl h-12 px-8 font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
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
      </div>

      {/* Social Links */}
      <div className="flex gap-4 justify-center">
        <Link
          href="https://github.com/Raka-coder"
          className="text-foreground/40 hover:text-primary transition-all duration-300 p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:scale-110"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/raka-restu-saputra/"
          className="text-foreground/40 hover:text-primary transition-all duration-300 p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={20} />
        </Link>
      </div>
    </motion.div>
  );
}