"use client";
import {
  Github,
  ExternalLink,
  Figma,
  Eye,
  Clock,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project, ProjectLink } from "@/types/projects";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

const getLinkIcon = (type: ProjectLink["type"]) => {
  switch (type) {
    case "github":
      return <Github size={14} />;
    case "live":
      return <ExternalLink size={14} />;
    case "demo":
      return <Eye size={14} />;
    case "figma":
      return <Figma size={14} />;
    default:
      return <ExternalLink size={14} />;
  }
};

const getStatusStyles = (status: Project["status"]) => {
  switch (status) {
    case "completed":
      return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
    case "in-progress":
      return "text-amber-400 border-amber-400/30 bg-amber-400/10";
    case "planned":
      return "text-blue-400 border-blue-400/30 bg-blue-400/10";
    default:
      return "text-slate-400 border-slate-400/30 bg-slate-400/10";
  }
};

export function ProjectCard({ project }: { project: Project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layout
      onMouseMove={onMouseMove}
      className="group relative h-full rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 transition-all duration-500 overflow-hidden hover:border-primary/50"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionValue(`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`),
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Image Section */}
        <div className="aspect-[16/10] relative overflow-hidden m-4 rounded-2xl">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.imageAlt}
            loading="lazy"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          <div className="absolute top-3 right-3 flex gap-2">
            <div className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-full border backdrop-blur-md text-[10px] font-bold uppercase tracking-wider transition-colors",
              getStatusStyles(project.status)
            )}>
              <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", getStatusStyles(project.status).split(' ')[2])} />
              {project.status}
            </div>
          </div>

          {project.featured && (
            <div className="absolute top-3 left-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md text-[10px] font-bold text-primary uppercase tracking-wider">
                <Sparkles size={10} />
                Featured
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 px-8 pb-8 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-foreground/30 uppercase tracking-tighter mt-2">
              <Calendar size={12} />
              {new Date(project.createdAt).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>

          <p className="text-sm text-foreground/50 leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-secondary/50 border border-border/50 text-[10px] font-medium text-foreground/60 transition-colors group-hover:border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-2.5 py-1 text-[10px] font-medium text-foreground/30">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors group/link"
                >
                  <span className="p-2 rounded-lg bg-secondary/50 border border-border/50 group-hover/link:border-primary/30 group-hover/link:bg-primary/5 transition-all">
                    {getLinkIcon(link.type)}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
