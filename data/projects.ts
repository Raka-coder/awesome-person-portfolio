import type { ProjectsData, Project, ProjectCategory } from "@/types/projects";
import projectCategoriesData from "./projects/categories.json";
import project1 from "./projects/project-1.json";
import project2 from "./projects/project-2.json";
import project3 from "./projects/project-3.json";
import project4 from "./projects/project-4.json";
import project5 from "./projects/project-5.json";
import project6 from "./projects/project-6.json";
import project7 from "./projects/project-7.json"

export const projectCategories: ProjectCategory[] = projectCategoriesData as ProjectCategory[];

const allProjectsRaw = [project1, project2, project3, project4, project5, project6, project7];

export const sampleProjects: Project[] = allProjectsRaw.map((p) => ({
  ...p,
  categories: p.categories.map((catId) => {
    const category = projectCategories.find((c) => c.id === catId);
    if (!category) {
      throw new Error(`Category ${catId} not found for project ${p.id}`);
    }
    return category;
  }),
})) as Project[];

export const projectsData: ProjectsData = {
  projects: sampleProjects,
  categories: projectCategories,
};
