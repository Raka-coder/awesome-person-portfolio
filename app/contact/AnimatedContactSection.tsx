"use client";
import { motion } from "framer-motion";
import AvailabilityCard from "@/components/contact/info/AvailabilityCard";
import ContactMethodsCard from "@/components/contact/info/ContactMethodsCard";
import SocialCard from "@/components/contact/info/SocialCard";
import ContactFormCard from "@/components/contact/form/ContactFormCard";

export default function AnimatedContactSection() {
  return (
    <section className="relative min-h-screen py-24 md:py-40 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
              Get in Touch
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-400 animate-gradient">Work Together</span>
          </h2>
          <p className="text-foreground/50 max-w-2xl mx-auto text-lg">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Form + Availability */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactFormCard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AvailabilityCard />
            </motion.div>
          </div>

          {/* Right: Contact Methods + Social */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactMethodsCard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SocialCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}