import React, { FC } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectCard from "../GeneralUse/ProjectCard";
import { Project } from "@/lib/types/landing.data.types";

// Define the Project interface (consider moving this to a shared types file)
interface RecentProjectsProps {
  projects: Project[]; // Expects a 'projects' prop of type Project[]
}

const RecentProjects: FC<RecentProjectsProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
              Featured Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
          </div>
          <Link href="/portfolio">
            <Button variant="link" className="text-silver hover:text-white p-0">
              View All Projects →
            </Button>
          </Link>
        </div>
        {projects && projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>No projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
