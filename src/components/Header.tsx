"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-magazine mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-xl tracking-tight">
          Designdenker
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <li>
            <a href="#work" className="hover:text-muted transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-muted transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-muted transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-muted transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-foreground transition-transform ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <ul className="flex flex-col px-6 py-6 gap-6 text-lg">
            <li>
              <a href="#work" onClick={() => setMenuOpen(false)}>
                Work
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
