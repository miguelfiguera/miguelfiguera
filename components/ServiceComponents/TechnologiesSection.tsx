import React, { FC } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TechnologyItem,
  TechnologiesIntro,
  LucideIconName,
} from "@/lib/types/landing.data.types";
import { Code, Database, Server, Globe, Cpu } from "lucide-react";

interface Props {
  content: TechnologiesIntro;
  technologies: TechnologyItem[];
}

const renderTechnologyIcon = (iconName: LucideIconName, className: string) => {
  switch (iconName) {
    case "Code":
      return <Code className={className} />;
    case "Database":
      return <Database className={className} />;
    case "Server":
      return <Server className={className} />;
    case "Globe":
      return <Globe className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    // Add other cases as needed from LucideIconName if more icons are used for technologies
    default:
      return null;
  }
};

const TechnologiesSection: FC<Props> = ({ content, technologies }) => {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800"
                >
                  <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center text-silver">
                    {renderTechnologyIcon(tech.iconName, "w-5 h-5")}
                  </div>
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
              {content.badge}
            </Badge>
            <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
            <p className="text-gray-300 mb-6">{content.description}</p>
            <Link href="/#contact">
              <Button className="bg-silver hover:bg-gray-300 text-black">
                {content.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
