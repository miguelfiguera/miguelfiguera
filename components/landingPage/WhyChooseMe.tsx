import React, { FC } from "react";
import { Badge } from "../ui/badge";
import { Benefit } from "@/lib/types/landing.data.types";
import Image from "next/image";

interface Props {
  benefits: Benefit[];
}

const WhyChooseMe: FC<Props> = (props: Props) => {
  const { benefits } = props;

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
              Why Choose Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Delivering Excellence in Every Project
            </h2>
            <p className="text-gray-300 mb-8">
              With a proven track record of successful projects and satisfied
              clients, I bring technical expertise and creative problem-solving
              to every challenge.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">
                      {benefit.description}
                    </p>
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
                alt="Miguel Figuera working"
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

export default WhyChooseMe;
