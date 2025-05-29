"use client";

import React, { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/PortfolioComponents/ProjectCard";
import { ProjectData } from "@/lib/types/landing.data.types";

interface ProjectShowcaseSectionProps {
  projects: ProjectData[];
}

type CategoryValue =
  | "all"
  | "Web Development"
  | "Mobile Development"
  | "UI/UX Design";

export const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({
  projects,
}) => {
  const [activeTab, setActiveTab] = useState<CategoryValue>("all");

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeTab);
  }, [projects, activeTab]);

  const tabCategories: { value: CategoryValue; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development", label: "Mobile Apps" },
    { value: "UI/UX Design", label: "UI/UX Design" },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="mb-2 bg-gray-800 text-silver hover:bg-gray-800/90">
            Portfolio
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            My Work
          </h1>
          <p className="text-gray-400 md:text-xl max-w-[700px]">
            A showcase of my projects, designs, and development work across
            various industries.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={(value) => setActiveTab(value as CategoryValue)}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900 border border-gray-800">
              {tabCategories.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-silver data-[state=active]:text-black"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* 
            Instead of multiple TabsContent, we can render one based on filteredProjects.
            However, the Tabs component expects a TabsContent for each TabsTrigger value
            to manage visibility. So, we'll keep the structure but filter inside.
            A more advanced approach might involve a single TabsContent and dynamically
            rendering its children, but this is simpler with the current Tabs component.
          */}

          {tabCategories.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {(tab.value === "all"
                  ? projects
                  : projects.filter((project) => project.category === tab.value)
                ).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          ))}
          {/* Fallback or message if no projects match (optional) */}
          {/* {filteredProjects.length === 0 && activeTab !== "all" && (
            <div className="text-center py-10 text-gray-400">
              No projects found in the "{activeTab}" category.
            </div>
          )} */}
        </Tabs>
      </div>
    </section>
  );
};

// Exporting default for potential direct import if needed, though named export is used above.
export default ProjectShowcaseSection;
