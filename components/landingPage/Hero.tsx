import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
interface Props {
  [key: string]: never;
}

function Hero(props: Props) {
  const {} = props;

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <Badge className="bg-silver text-black hover:bg-silver/90">
              Software Developer
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Miguel <span className="text-silver">Figuera</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-md">
              Crafting exceptional digital experiences with clean code and
              innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <Button className="bg-silver hover:bg-gray-300 text-black">
                  Schedule a Meeting
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-silver/20 to-transparent"></div>
            <Image
              src="/myPhoto/mySelf.png"
              alt="Miguel Figuera"
              width={400}
              height={400}
              className="rounded-full border-2 border-silver/30 p-1"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
