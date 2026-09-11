// src/components/contact_section.tsx
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 py-12 border-t border-slate-900"
    >
      <div className="max-w-3xl mx-auto w-full space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">
            Contact & Support
          </h2>
          <p className="text-slate-400">
            Need assistance or compliance verification? Reach out directly.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
          <p className="text-slate-300 text-sm">Primary Support Channel:</p>
          <p className="text-indigo-400 font-semibold text-lg">
            support@visionarytheo.co.za
          </p>
        </div>
      </div>
    </section>
  );
}
