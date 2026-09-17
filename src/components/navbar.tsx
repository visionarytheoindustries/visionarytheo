// src/components/navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Container with Standalone Icon + Native Text */}
        <div
          className="flex items-center space-x-3 cursor-pointer py-2"
          onClick={() => scrollToSection("hero")}
        >
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            <Image
              src="/images/vlogos/logo_light.svg"
              alt="Visionarytheo Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <span className="font-bold text-base sm:text-xl tracking-wider text-indigo-400 whitespace-nowrap">
            INDUSTRIES
          </span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection("products")}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        <div>
          <Link
            href="https://propflow.visionarytheo.co.za/auth/signup"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all shadow-lg shadow-indigo-600/20 whitespace-nowrap"
          >
            Launch Propflow
          </Link>
        </div>
      </div>
    </nav>
  );
}
