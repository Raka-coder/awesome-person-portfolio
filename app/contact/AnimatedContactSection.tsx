"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import ContactInformation from "@/components/ContactInformation";

export default function AnimatedContactSection() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 md:p-12 pt-20 md:pt-12">
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
        >
          Get in touch
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-center md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 font-medium"
        >
          Let&lsquo;s work together on a project you&lsquo;re passionate about.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="flex-1">
            <ContactInformation />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
