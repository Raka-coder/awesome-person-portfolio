"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "./ui/badge"
import type { Project, ProjectCategory } from "@/types/projects"
import type { TabItem } from "@/types/tabs"
import { ProjectCard } from "./CardProjects"
import { SortOptions } from "./SortOptions"

interface ProjectTabsProps {
  projects: Project[]
  categories: ProjectCategory[]
}

export function ProjectTabs({ projects, categories }: ProjectTabsProps) {
  const [selectedTab, setSelectedTab] = useState("all")
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("oldest")

  const sortProjects = (projectsToSort: Project[]) => {
    return projectsToSort.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()
      return sortOrder === "oldest" ? dateA - dateB : dateB - dateA
    })
  }

  const tabItems: TabItem[] = [
    {
      id: "all",
      label: "All Projects",
      value: "all",
      count: projects.length,
    },
    {
      id: "featured",
      label: "Featured",
      value: "featured",
      count: projects.filter((p) => p.featured).length,
    },
    ...categories.map((category) => ({
      id: category.id,
      label: category.name,
      value: category.id,
      count: projects.filter((p) => p.categories.some((c) => c.id === category.id)).length,
    })),
  ]

  const getFilteredProjects = (tabValue: string): Project[] => {
    if (tabValue === "all") return projects
    if (tabValue === "featured") return projects.filter((p) => p.featured)
    return projects.filter((p) => p.categories.some((c) => c.id === tabValue))
  }

  const filteredProjects = sortProjects(getFilteredProjects(selectedTab))

  return (
    <div className="w-full">
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-64 flex-shrink-0">
            <TabsList className="flex flex-col h-auto w-full bg-card p-2 gap-1 lg:sticky lg:top-6">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.value}
                  className="w-full justify-between data-[state=active]:bg-purple-600/20 data-[state=active]:text-purple-400 data-[state=active]:border-purple-500/30 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200 border border-transparent"
                >
                  <span>{tab.label}</span>
                  <Badge variant="secondary" className="ml-2 bg-slate-700 text-slate-300 text-xs">
                    {tab.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="flex-1">
            <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />

            {tabItems.map((tab) => (
              <TabsContent key={tab.id} value={tab.value} className="mt-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{tab.label}</h2>
                  <p className="text-slate-400">
                    {tab.count} project{tab.count !== 1 ? "s" : ""} found
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects
                    .filter((project) =>
                      tab.value === "all"
                        ? true
                        : tab.value === "featured"
                        ? project.featured
                        : project.categories.some((c) => c.id === tab.value)
                    )
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.filter((project) =>
                  tab.value === "all"
                    ? true
                    : tab.value === "featured"
                    ? project.featured
                    : project.categories.some((c) => c.id === tab.value)
                ).length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-slate-500 mb-2">No projects found</div>
                    <p className="text-sm text-slate-600">Try selecting a different category or check back later.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  )
}