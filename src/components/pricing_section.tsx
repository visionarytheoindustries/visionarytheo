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
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Propflow Software Pricing
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Simple, scalable B2B software licensing built to grow seamlessly
            alongside your operational portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Tier */}
          <div className="bg-slate-900 border border-indigo-500/30 rounded-3xl p-8 shadow-2xl relative space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Fixed height header block to match right card */}
              <div className="space-y-2 min-h-30">
                <div className="invisible px-3 py-1 text-xs font-semibold mb-1 select-none">
                  Placeholder
                </div>
                <h3 className="text-xl font-bold text-white">
                  Standard Software Tier
                </h3>
                <p className="text-slate-400 text-sm">
                  Flexible unit scaling with core administrative tools.
                </p>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-white">R20</span>
                <span className="text-slate-400 text-sm">/ unit per month</span>
              </div>

              <div className="border-t border-slate-800 pt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-center space-x-3">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Portfolio Operations & Tracking Log</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Automated Platform License Billing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-indigo-400 font-bold">✓</span>
                  <span>Tenant & Lease Documentation Tools</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="https://propflow.visionarytheo.co.za/auth/signup"
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Compliance Vault Tier */}
          <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-8 shadow-2xl relative space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Fixed height header block */}
              <div className="space-y-2 min-h-[7.5rem]">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold mb-1">
                  Add-on / Enterprise
                </div>
                <h3 className="text-xl font-bold text-white">
                  Compliance Vault
                </h3>
                <p className="text-slate-400 text-sm">
                  Advanced regulatory filing vault and secure document storage.
                </p>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-white">R450</span>
                <span className="text-slate-400 text-sm">/ month</span>
              </div>

              <div className="border-t border-slate-800 pt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Secure Regulatory Filing Vault</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Document Versioning & Audit Logs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>Multi-User Organization Access</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="https://propflow.visionarytheo.co.za/auth/signup"
                className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition-all border border-slate-700"
              >
                Add Vault Access
              </Link>
            </div>
          </div>
        </div>

        {/* License Transparency Notice */}
        <div className="max-w-xl mx-auto text-center text-xs text-slate-500 space-y-1 pt-2">
          <p>
            <span className="text-slate-300 font-medium">
              Free workspace setup.
            </span>{" "}
            No upfront fees required. Automated platform software billing of{" "}
            <span className="text-slate-400 font-medium">
              R20 per unit/month
            </span>{" "}
            only applies after you activate digital unit management. Cancel
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
