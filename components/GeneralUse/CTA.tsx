import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { CTAContent } from "@/lib/types/landing.data.types";

interface Props {
  content: CTAContent;
}

function CTA(props: Props) {
  const { content } = props;

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{content.title}</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          {content.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/#contact">
            <Button className="bg-silver hover:bg-gray-300 text-black px-8 py-6 text-lg">
              {content.primaryButtonText}
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white px-8 py-6 text-lg"
            >
              {content.secondaryButtonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
