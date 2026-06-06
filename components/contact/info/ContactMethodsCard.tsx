"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Linkedin, ArrowUpRight } from "lucide-react";
import SpotlightCard from "../shared/SpotlightCard";

const contactMethods = [
  // {
  //   icon: MessageCircle,
  //   label: "WhatsApp",
  //   value: "+62 812-3456-7890",
  //   href: "https://wa.me/6281234567890",
  //   color: "text-emerald-400",
  //   bg: "bg-emerald-400/10",
  //   hoverBorder: "hover:border-emerald-400/50",
  // },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Raka Restu Saputra",
    href: "https://linkedin.com/in/raka-restu-saputra",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    hoverBorder: "hover:border-blue-400/50",
  },
  {
    icon: Mail,
    label: "Email",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@raka-restu.dev",
    href: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@raka-restu.dev"}`,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    hoverBorder: "hover:border-purple-400/50",
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+62 812-3456-7890",
  //   href: "tel:+6281234567890",
  //   color: "text-amber-400",
  //   bg: "bg-amber-400/10",
  //   hoverBorder: "hover:border-amber-400/50",
  // },
];

export default function ContactMethodsCard() {
  return (
    <SpotlightCard>
      <h3 className="text-lg font-bold text-foreground tracking-tight mb-6">
        Contact Methods
      </h3>
      <div className="space-y-3">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : undefined}
            rel={method.label !== "Email" && method.label !== "Phone" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ x: 4 }}
            className={`group flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50 transition-all duration-300 ${method.hoverBorder}`}
          >
            <div className={`p-3 rounded-xl ${method.bg} ${method.color} group-hover:scale-110 transition-transform duration-300`}>
              <method.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-0.5">
                {method.label}
              </p>
              <p className="text-sm font-medium text-foreground truncate">
                {method.value}
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-foreground/20 group-hover:text-foreground/60 transition-colors" />
          </motion.a>
        ))}
      </div>
    </SpotlightCard>
  );
}