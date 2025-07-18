import {
  Github,
  ExternalLink,
  Figma,
  Eye,
  Clock,
  Calendar,
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

const getLinkIcon = (type: ProjectLink["type"]) => {
  switch (type) {
    case "github":
      return <Github size={16} />;
    case "live":
      return <ExternalLink size={16} />;
    case "demo":
      return <Eye size={16} />;
    case "figma":
      return <Figma size={16} />;
    case "behance":
      return <ExternalLink size={16} />;
    default:
      return <ExternalLink size={16} />;
  }
};

const getStatusColor = (status: Project["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "in-progress":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "planned":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    default:
      return "bg-slate-500/20 text-slate-400 border-slate-500/30";
  }
};

const getStatusLabel = (status: Project["status"]) => {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    case "planned":
      return "Planned";
    default:
      return "Unknown";
  }
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-card border-slate-700/50 transition-all duration-200 group pt-0 hover:border-ring hover:ring-chart-4">
      <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.imageAlt}
          loading="lazy"
          fill
          className="group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge className={`${getStatusColor(project.status)} border`}>
            <Clock size={12} className="mr-1" />
            {getStatusLabel(project.status)}
          </Badge>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-white text-lg group-hover:text-purple-400 transition-colors">
            {project.name}
          </CardTitle>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Calendar size={12} />
            {new Date(project.createdAt).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
        <CardDescription className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.categories.map((category) => (
            <Badge
              key={category.id}
              variant="outline"
              className="text-xs border-slate-600 text-slate-300 hover:bg-slate-700/50"
            >
              <div
                className={`w-2 h-2 rounded-full ${category.color} mr-1.5`}
              />
              {category.name}
            </Badge>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-slate-700/50 text-slate-300 hover:bg-slate-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              asChild
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white bg-transparent"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {getLinkIcon(link.type)}
                <span className="ml-2">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
