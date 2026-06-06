"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import type { Project, ProjectCategory } from "@/types/projects";
import type { TabItem } from "@/types/tabs";
import { ProjectCard } from "./CardProjects";
import { SortOptions } from "./SortOptions";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectTabsProps {
  projects: Project[];
  categories: ProjectCategory[];
}

export function ProjectTabs({ projects, categories }: ProjectTabsProps) {
  const [selectedTab, setSelectedTab] = useState("all");
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("oldest");

  const sortProjects = (projectsToSort: Project[]) => {
    return projectsToSort.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "oldest" ? dateA - dateB : dateB - dateA;
    });
  };

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
      count: projects.filter((p) =>
        p.categories.some((c) => c.id === category.id),
      ).length,
    })),
  ];

  const getFilteredProjects = (tabValue: string): Project[] => {
    let filtered = projects;
    if (tabValue === "featured") filtered = projects.filter((p) => p.featured);
    else if (tabValue !== "all") filtered = projects.filter((p) => p.categories.some((c) => c.id === tabValue));
    
    return sortProjects(filtered);
  };

  const filteredProjects = getFilteredProjects(selectedTab);

  return (
    <div className="w-full">
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="hidden lg:block">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 mb-4 px-4">
                  Filter by Category
                </h3>
              </div>
              <TabsList className="flex flex-col h-auto w-full bg-transparent p-0 gap-1.5">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.value}
                    className={cn(
                      "w-full justify-between px-4 py-3 rounded-xl transition-all duration-300 border border-transparent",
                      "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20",
                      "text-foreground/40 hover:text-foreground/80 hover:bg-secondary/50"
                    )}
                  >
                    <span className="text-sm font-bold tracking-tight">{tab.label}</span>
                    <span className="text-[10px] font-mono opacity-50">[{tab.count}]</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
               <div>
                  <h2 className="text-2xl font-black text-foreground tracking-tight mb-1">
                    {tabItems.find(t => t.value === selectedTab)?.label}
                  </h2>
                  <p className="text-sm font-medium text-foreground/40 uppercase tracking-widest">
                    {filteredProjects.length} Result{filteredProjects.length !== 1 ? 's' : ''} Found
                  </p>
               </div>
               <div className="flex items-center gap-4">
                  <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      ease: [0.21, 0.45, 0.32, 0.9]
                    }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 rounded-[2rem] border border-dashed border-border/50 bg-secondary/20"
              >
                <div className="text-foreground/20 font-black text-4xl mb-4">404_EMPTY</div>
                <p className="text-foreground/40 font-medium">No projects matching the current filter criteria.</p>
              </motion.div>
            )}
          </div>
        </div>
      </Tabs>
    </div>
  );
}
