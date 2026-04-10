import React, { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="sticky top-0 z-50 flex items-center justify-between bg-background border-b border-border px-4 py-3">
        <a href="/" className="flex items-center gap-2 text-foreground">
          <Terminal size={22} />
          <span className="text-lg font-bold tracking-tight">Miguel Figuera</span>
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="text-foreground p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div className="fixed top-0 right-0 z-50 h-full w-64 bg-background border-l border-border p-6 flex flex-col gap-6">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="self-end text-foreground p-2"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
