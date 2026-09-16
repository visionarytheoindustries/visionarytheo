// src/components/product_section.tsx
import Link from "next/link";

export default function ProductSection() {
  return (
    <section
      id="products"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 py-12 border-t border-slate-900 bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">Our Products</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Explore our suite of purpose-built business management platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Propflow Card (Active) */}
          <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl p-8 flex flex-col justify-between relative shadow-xl">
            <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2.5 py-0.5 rounded-full font-medium">
              Live
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Propflow</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Advanced property management software featuring rent ledger
                tracking, secure payment gateways, and automated operational
                workflows.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="https://propflow.visionarytheo.co.za/auth/signin"
                className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-xl transition-all"
              >
                Open Propflow &rarr;
              </Link>
            </div>
          </div>

          {/* Eduflow Card (Coming Soon) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between relative opacity-75">
            <div className="absolute top-4 right-4 bg-slate-800 text-slate-400 text-xs px-2.5 py-0.5 rounded-full font-medium">
              Coming Soon
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Eduflow</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Streamlined educational administration, student tracking, and
                billing architecture designed for modern learning institutions.
              </p>
            </div>
            <div className="pt-8">
              <button
                disabled
                className="w-full bg-slate-800 text-slate-500 font-medium py-2.5 rounded-xl cursor-not-allowed"
              >
                In Development
              </button>
            </div>
          </div>

          {/* Kasiflow Card (Coming Soon) */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between relative opacity-75">
            <div className="absolute top-4 right-4 bg-slate-800 text-slate-400 text-xs px-2.5 py-0.5 rounded-full font-medium">
              Coming Soon
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Kasiflow</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Intelligent spaza shop inventory management, stock tracking, and
                retail sales ledger built for local township enterprises.
              </p>
            </div>
            <div className="pt-8">
              <button
                disabled
                className="w-full bg-slate-800 text-slate-500 font-medium py-2.5 rounded-xl cursor-not-allowed"
              >
                In Development
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
