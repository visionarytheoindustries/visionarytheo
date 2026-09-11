// src/components/pricing_section.tsx
import Link from "next/link";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 py-12 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">
            Propflow Pricing Structure
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Simple, scalable pricing built to grow seamlessly alongside your
            portfolio.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-slate-900 border border-indigo-500/30 rounded-3xl p-8 shadow-2xl relative space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Standard Tier</h3>
            <p className="text-slate-400 text-sm">
              Pay-as-you-go unit scaling with robust features.
            </p>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-extrabold text-white">R20</span>
            <span className="text-slate-400 text-sm">/ unit per month</span>
          </div>

          <div className="border-t border-slate-800 pt-6 space-y-4 text-sm text-slate-300">
            <div className="flex items-center space-x-3">
              <span className="text-indigo-400 font-bold">✓</span>
              <span>Full Rent Ledger & Tracking</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-indigo-400 font-bold">✓</span>
              <span>Automated Paystack Checkouts</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-indigo-400 font-bold">✓</span>
              <span>Optional Organization Vault Add-on (R450/mo)</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="https://propflow.visionarytheo.co.za/auth/signup"
              className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
