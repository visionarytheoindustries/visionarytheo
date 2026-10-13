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
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-1">
                        100% Free Utility
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                        Simple, Powerful, and Free Forever
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Manage properties, track rent, and handle compliance without paying a cent
                        in monthly software subscriptions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Core Platform Tier */}
                    <div className="bg-slate-900 border border-indigo-500/30 rounded-3xl p-8 shadow-2xl relative space-y-6 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="space-y-2 min-h-24">
                                <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-1">
                                    Core Software
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    StoepSmart Standard
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    Complete property management tooling with zero subscription
                                    walls.
                                </p>
                            </div>

                            <div className="flex items-baseline space-x-2">
                                <span className="text-4xl font-extrabold text-white">R0</span>
                                <span className="text-slate-400 text-sm">/ forever free</span>
                            </div>

                            <div className="border-t border-slate-800 pt-6 space-y-4 text-sm text-slate-300">
                                <div className="flex items-center space-x-3">
                                    <span className="text-indigo-400 font-bold">✓</span>
                                    <span>Portfolio Operations & Tracking Log</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-indigo-400 font-bold">✓</span>
                                    <span>Rent Ledger & Maintenance Ticketing</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-indigo-400 font-bold">✓</span>
                                    <span>Digital Inspection & Property Logs</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link
                                href="https://stoepsmart.visionarytheo.co.za/auth/signup"
                                className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20"
                            >
                                Get Started Free
                            </Link>
                        </div>
                    </div>

                    {/* Ecosystem Partners Tier */}
                    <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-8 shadow-2xl relative space-y-6 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="space-y-2 min-h-24">
                                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold mb-1">
                                    Ecosystem Partners
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    Legal & Insurance Hub
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    Integrated professional services natively embedded into your
                                    workflow.
                                </p>
                            </div>

                            <div className="flex items-baseline space-x-2">
                                <span className="text-2xl font-extrabold text-white pt-2">
                                    Integrated
                                </span>
                                <span className="text-slate-400 text-sm">/ expert services</span>
                            </div>

                            <div className="border-t border-slate-800 pt-6 space-y-4 text-sm text-slate-300">
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-bold">✓</span>
                                    <span>Official Lease Templates & Compliance Hub</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-bold">✓</span>
                                    <span>Rental Income & Structural Insurance Quotes</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-400 font-bold">✓</span>
                                    <span>Direct Access to Vetted Industry Experts</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link
                                href="https://stoepsmart.visionarytheo.co.za/auth/signup"
                                className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition-all border border-slate-700"
                            >
                                Explore Platform
                            </Link>
                        </div>
                    </div>
                </div>

                {/* License Transparency Notice */}
                <div className="max-w-xl mx-auto text-center text-xs text-slate-500 space-y-1 pt-2">
                    <p>
                        <span className="text-slate-300 font-medium">100% Free Workspace.</span> No
                        credit cards or subscription fees required. StoepSmart is sustained through
                        strategic partnerships with leading legal compliance firms and insurance
                        providers.
                    </p>
                </div>
            </div>
        </section>
    );
}
