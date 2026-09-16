// src/components/auth_compliance_footer.tsx
import Link from "next/link";

export default function AuthComplianceFooter() {
  return (
    <div className="mt-6 text-center space-y-2 text-xs text-slate-500">
      <p>
        <span className="text-slate-300 font-medium">Free to sign up.</span> No
        upfront payment required. Automated billing of{" "}
        <span className="text-slate-400 font-medium">R20 per unit/month</span>{" "}
        only applies after you register units. Cancel anytime.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/terms" className="hover:text-indigo-400 transition-colors">
          Terms of Service
        </Link>
        <span>&bull;</span>
        <Link
          href="/privacy"
          className="hover:text-indigo-400 transition-colors"
        >
          Privacy Policy
        </Link>
        <span>&bull;</span>
        <Link
          href="/refund"
          className="hover:text-indigo-400 transition-colors"
        >
          Refund Policy
        </Link>
      </div>
    </div>
  );
}
