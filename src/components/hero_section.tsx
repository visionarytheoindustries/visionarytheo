// src/components/hero_section.tsx
"use client";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-6"
    >
      <div className="max-w-3xl space-y-6">
        <span className="inline-block bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Visionarytheo Industries
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Modern Workflow Software for the African Market
        </h1>
        <p className="text-lg sm:text-xl text-slate-400">
          Building specialized enterprise tools designed to automate properties,
          compliance, and core business operations seamlessly.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection("products")}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
          >
            Explore Products
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-medium px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
