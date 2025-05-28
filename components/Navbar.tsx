import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

interface Props {
  [key: string]: never;
}

function Navbar(props: Props) {
  const {} = props;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-silver">MF</span>
            <span className="hidden sm:inline-block text-xl font-semibold">
              Miguel Figuera
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/#projects"
            className="text-sm font-medium text-gray-400 hover:text-silver transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#certifications"
            className="text-sm font-medium text-gray-400 hover:text-silver transition-colors"
          >
            Certifications
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-400 hover:text-silver transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-gray-400 hover:text-silver transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-gray-400 hover:text-silver transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/admin" className="hidden md:block">
            <Button
              variant="outline"
              className="border-gray-700 text-silver hover:bg-gray-900 hover:text-white"
            >
              Admin
            </Button>
          </Link>
          {/*           <Link href="/cv-builder">
            <Button className="bg-silver hover:bg-gray-300 text-black">
              CV Builder
            </Button>
          </Link> */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
