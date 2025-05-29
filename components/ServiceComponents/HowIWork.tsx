import React, { FC } from "react";
import { Badge } from "../ui/badge";
import { WorkProcessStep } from "@/lib/types/landing.data.types";

interface Props {
  workProcess: WorkProcessStep[];
}

const HowIWork: FC<Props> = ({ workProcess }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
            Process
          </Badge>
          <h2 className="text-3xl font-bold mb-4">How I Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My structured approach ensures that your project is delivered on
            time, within budget, and to the highest standards.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {workProcess.map((step, index) => (
            <div key={step.id} className="relative">
              {index < workProcess.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-silver/30 to-transparent z-0"></div>
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-silver/10 border border-silver/30 flex items-center justify-center mb-4 text-silver font-bold text-2xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
