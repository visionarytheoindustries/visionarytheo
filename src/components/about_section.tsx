// src/components/about_section.tsx
export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 py-12 border-t border-slate-900 bg-slate-900/40"
    >
      <div className="max-w-4xl mx-auto w-full space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          About Visionarytheo Industries
        </h2>
        <p className="text-slate-300 leading-relaxed text-lg">
          Visionarytheo Industries is a software development initiative
          engineered in South Africa, focused on solving operational friction
          points through clean architecture, high reliability, and intuitive
          product design.
        </p>
      </div>
    </section>
  );
}
