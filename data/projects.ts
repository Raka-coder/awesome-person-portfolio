import type { ProjectsData, Project, ProjectCategory } from "@/types/projects"

export const projectCategories: ProjectCategory[] = [
  { id: "web", name: "Web", color: "bg-blue-500" },
  { id: "frontend", name: "Frontend", color: "bg-cyan-500" },
  { id: "iot", name: "IoT", color: "bg-emerald-400"},
]

export const sampleProjects: Project[] = [
  {
    id: "1",
    name: "Project GeometPop Kalkulus II",
    description: "Web application that can be used to calculate population modeling with geometric series",
    longDescription:
      "A project includes geometry population calculator, chart preview, and quiz exams.",
    categories: [
      projectCategories[0], // Web App
      projectCategories[1], 
    ],
    links: [
      { type: "github", url: "https://github.com/Raka-coder/project-geometpop-kalkulus-II", label: "View Code" },
      { type: "live", url: "https://geometpop.pages.dev/", label: "Live Demo" },
    ],
    image: "/images/geometpop.webp",
    imageAlt: "Project  GeometPop Kalkulus II",
    technologies: ["React", "Tailwind", "Mathjax"],
    status: "completed",
    featured: true,
    createdAt: "2025-05-26",
  },
  {
    id: "2",
    name: "Project Turunan Diferensial Kalkulus I",
    description: "Web application that can be used to calculate diferential derivative",
    longDescription:
      "A project includes material derivative differential, derivative calculator, and dark mode.",
    categories: [
      projectCategories[0], // Web App
      projectCategories[1], 
    ],
    links: [
      { type: "github", url: "https://github.com/Raka-coder/project-web-turdif-kalkulus_I", label: "View Code" },
      { type: "live", url: "https://turdif.vercel.app/", label: "Live Demo" },
    ],
    image: "/images/turdif.webp",
    imageAlt: "Project Turunan Diferensial Kalkalus I",
    technologies: ["React", "Tailwind", "Mathjax"],
    status: "completed",
    featured: true,
    createdAt: "2024-12-26",
  },
  {
    id: "3",
    name: "Task Manager App",
    description: "Simple CRUD task management application with supabase serverless backend database.",
    longDescription:
      "A simple CRUD task manager.",
    categories: [
      projectCategories[0], // Web App
      projectCategories[1],
    ],
    links: [
      { type: "github", url: "https://github.com/Raka-coder/react-supabase-crud-taskmanager", label: "View Code" },
      { type: "demo", url: "https://react-supabase-crud-taskmanager.vercel.app/", label: "Try Demo" },
    ],
    image: "/images/react-supabase.webp",
    imageAlt: "Task Management App Screenshot",
    technologies: ["React", "Tailwind", "Supabase"],
    status: "completed",
    featured: true,
    createdAt: "2025-04-20",
  },
  {
    id: "4",
    name: "Smart Home IoT",
    description: "A smart home IoT project with lighting control, and assistant.",
    longDescription:
      "A smart home IoT project with lighting control, and voice assistant. Utilizes Google Home, Sinric Pro API, and voice recognition technologies for enhanced convenience.",
    categories: [
      projectCategories[2], // IoT
    ],
    links: [
      { type: "github", url: "https://github.com/Raka-coder/project-smarthome-pio", label: "View Code" },
    ],
    image: "/images/smart-home.webp",
    imageAlt: "Smart Home IoT with google home",
    technologies: ["C++", "PlatformIO", "Sinric Pro", "Google Home", "ESP8266"],
    status: "completed",
    featured: true,
    createdAt: "2024-01-10",
  },
  {
    id: "5",
    name: "Portfolio Website",
    description: "Personal portfolio website built with Next.js featuring animated motion and responsive design.",
    longDescription:
      "A modern portfolio website showcasing projects and skills. Built with Next.js 15, featuring server-side rendering, responsive design, and optimized performance. Includes project showcase, and contact functionality.",
    categories: [
      projectCategories[0], // Web App
      projectCategories[1], // Frontend
    ],
    links: [
      { type: "github", url: "https://github.com/ahmadrizki/portfolio", label: "View Code" },
      { type: "live", url: "/", label: "Visit Site" },
    ],
    image: "/images/portfolio.webp",
    imageAlt: "Portfolio Website Screenshot",
    technologies: ["Next.js", "TypeScript", "Shadcn", "Framer Motion"],
    status: "completed",
    createdAt: "2025-07-12",
  },
]

export const projectsData: ProjectsData = {
  projects: sampleProjects,
  categories: projectCategories,
}
