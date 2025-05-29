import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PortfolioCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Let's collaborate to create something exceptional that meets your
          business goals and exceeds expectations.
        </p>
        <Link href="/#contact">
          <Button className="bg-silver hover:bg-gray-300 text-black px-8 py-6 text-lg">
            Get in Touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PortfolioCTASection;
