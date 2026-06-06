"use client";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Twitter, Globe } from "lucide-react";
import SpotlightCard from "../shared/SpotlightCard";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "@Raka-coder",
    href: "https://github.com/Raka-coder",
    color: "text-foreground",
    bg: "bg-foreground/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "Raka Restu",
    href: "https://linkedin.com/in/raka-restu-saputra",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Instagram,
    label: "Instagram",
    username: "@rakresptra",
    href: "https://instagram.com/rakresptra",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Globe,
    label: "Portfolio",
    username: "raka-restu.vercel.app",
    href: "https://raka-restu.vercel.app",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export default function SocialCard() {
  return (
    <SpotlightCard>
      <h3 className="text-lg font-bold text-foreground tracking-tight mb-6">
        Find Me Online
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <div className={`p-3 rounded-xl ${social.bg} ${social.color} group-hover:scale-110 transition-transform duration-300`}>
              <social.icon className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-0.5">
                {social.label}
              </p>
              <p className="text-[10px] font-medium text-foreground/60 truncate max-w-[100px]">
                {social.username}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </SpotlightCard>
  );
}