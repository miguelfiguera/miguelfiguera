"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-gray-900"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="fixed top-0 right-0 w-full max-w-xs h-full bg-gray-900 p-6 shadow-xl">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="space-y-6">
              <Link
                href="/"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#projects"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/#certifications"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </Link>
              <Link
                href="/blog"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/portfolio"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/#contact"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/admin"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
              <Link
                href="/cv-builder"
                className="block text-lg font-medium text-white hover:text-silver"
                onClick={() => setIsOpen(false)}
              >
                CV Builder
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
