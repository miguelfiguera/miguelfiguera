import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import { ProjectData } from "@/lib/types/landing.data.types";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full">
      <div className="aspect-video relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
        <CardDescription className="text-gray-400">
          {project.category}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t border-gray-800 pt-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-gray-800 text-silver"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <Link href={`/portfolio/${project.id}`} passHref>
          <Button
            variant="ghost"
            className="text-silver hover:text-white hover:bg-gray-800"
          >
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
