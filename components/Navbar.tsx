"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-gold/20 bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-serif text-xl tracking-[0.2em] text-burgundy"
        >
          S <span className="text-gold">&amp;</span> A
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-sans text-xs uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-burgundy"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-burgundy md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <Menu className="size-6" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 flex flex-col paper-texture transition-opacity duration-500 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-serif text-xl tracking-[0.2em] text-burgundy">
            S <span className="text-gold">&amp;</span> A
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-burgundy"
            aria-label="Close menu"
          >
            <X className="size-7" />
          </button>
        </div>

        <ul className="flex flex-1 flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-3xl tracking-wide text-burgundy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
