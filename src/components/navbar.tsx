// src/components/navbar.tsx
"use client";

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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          className="font-bold text-xl tracking-wider text-indigo-400 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          VISIONARYTHEO
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
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-lg shadow-indigo-600/20"
          >
            Launch Propflow
          </Link>
        </div>
      </div>
    </nav>
  );
}
