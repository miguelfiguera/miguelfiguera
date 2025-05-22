import React, { FC } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/lib/types/landing.data.types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      {" "}
      {/* Add background color and border styles */}
      <CardHeader>
        <CardTitle className="text-xl text-white">{project.title}</CardTitle>{" "}
        {/* Add text color */}
        <CardDescription className="text-gray-400">
          {project.category}
        </CardDescription>{" "}
        {/* Add text color */}
      </CardHeader>
      <CardContent>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-md aspect-video w-full object-cover"
        />
        <p className="text-sm text-muted-foreground mt-2">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-row justify-between items-center border-t border-gray-800 pt-4">
        {" "}
        {/* Add border styles */}
        <div>
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-gray-800 text-silver mr-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div>
          <Button
            variant="ghost"
            className="text-silver hover:text-white hover:bg-gray-800"
            asChild // Make the Link component a child of the Button
          >
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-silver hover:text-white hover:bg-gray-800"
            asChild // Make the Link component a child of the Button
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
