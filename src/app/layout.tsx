import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visionarytheo Industries | Ecosystem",
  description:
    "Centralized SaaS ecosystem powering PropFlow, KasiFlow, InvoiceFlow, and EduFlow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
