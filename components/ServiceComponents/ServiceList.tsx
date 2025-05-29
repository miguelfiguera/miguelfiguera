import React, { FC } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Layers,
  Server,
  Layout,
  CheckSquare,
  Cpu,
  Globe,
  Headphones,
  Code,
} from "lucide-react";
import {
  ServiceItem,
  ServiceListIntro,
  LucideIconName,
} from "@/lib/types/landing.data.types";

interface Props {
  content: ServiceListIntro;
  services: ServiceItem[];
}

const renderIcon = (iconName: LucideIconName, className: string) => {
  switch (iconName) {
    case "Layers":
      return <Layers className={className} />;
    case "Server":
      return <Server className={className} />;
    case "Layout":
      return <Layout className={className} />;
    case "CheckSquare":
      return <CheckSquare className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Globe":
      return <Globe className={className} />;
    case "Headphones":
      return <Headphones className={className} />;
    case "Code":
      return <Code className={className} />;
    default:
      return null;
  }
};

const ServiceList: FC<Props> = ({ content, services }) => {
  return (
    <>
      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className=" flex flex-col items-center text-center space-y-4 mb-12">
            <Badge className="mb-2 bg-gray-800 text-silver hover:bg-gray-800/90">
              {content.badge}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {content.title}
            </h1>
            <p className="text-gray-400 md:text-xl max-w-[800px]">
              {content.description}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-gray-900 border-gray-800 overflow-hidden h-full hover:border-silver/50 transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-silver/10 flex items-center justify-center mb-4">
                    {renderIcon(service.iconName, "h-6 w-6 text-silver")}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="rounded-full bg-silver/10 p-1 text-silver mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/#contact"
                    className="text-silver hover:text-white flex items-center gap-1 text-sm"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
