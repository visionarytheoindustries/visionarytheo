// src/components/about_section.tsx
export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 py-12 border-t border-slate-900 bg-slate-900/40"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            About Visionarytheo Industries
          </h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto">
            Visionarytheo Industries is a South Africa-based software house and
            parent initiative dedicated to building a centralized ecosystem of
            B2B SaaS productivity applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Centralized Ecosystem
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We engineer purpose-built platforms—such as Propflow, Eduflow, and
              Kasiflow—designed to eliminate operational friction and streamline
              administrative organization for modern enterprises.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-lg font-semibold text-white">
              Strictly B2B Productivity
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We provide pure digital software architecture and workflow tools.
              Our focus is entirely on data organization and operational
              efficiency, with zero financial intermediation or fund processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
