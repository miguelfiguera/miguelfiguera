import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { ProcessStep } from "@/lib/types/landing.data.types";

interface ProjectApproachSectionProps {
  processSteps: ProcessStep[];
}

const ProjectApproachSection: React.FC<ProjectApproachSectionProps> = ({
  processSteps,
}) => {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
              Process
            </Badge>
            <h2 className="text-3xl font-bold mb-6">My Approach to Projects</h2>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-silver/10 flex items-center justify-center text-silver font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-silver/20 via-silver/10 to-transparent blur-xl"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-800">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Development process"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectApproachSection;
