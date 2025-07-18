export interface ProjectLink {
  type: "github" | "live" | "demo" | "figma" | "behance"
  url: string
  label: string
}

export interface ProjectCategory {
  id: string
  name: string
  color: string
}

export interface Project {
  id: string
  name: string
  description: string
  longDescription?: string
  categories: ProjectCategory[]
  links: ProjectLink[]
  image: string
  imageAlt: string
  technologies: string[]
  status: "completed" | "in-progress" | "planned"
  featured?: boolean
  createdAt: string
}

export interface ProjectsData {
  projects: Project[]
  categories: ProjectCategory[]
}
