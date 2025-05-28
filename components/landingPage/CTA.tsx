import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  [key: string]: never;
}

function CTA(props: Props) {
  const {} = props;

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Let's collaborate to create something exceptional that meets your
          business goals and exceeds expectations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/#contact">
            <Button className="bg-silver hover:bg-gray-300 text-black px-8 py-6 text-lg">
              Schedule a Consultation
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white px-8 py-6 text-lg"
            >
              Explore My Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
