// src/app/page.tsx
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero_section";
import ProductSection from "@/components/product_section";
import PricingSection from "@/components/pricing_section";
import AboutSection from "@/components/about_section";
import ContactSection from "@/components/contact_section";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Products Section */}
      <ProductSection />
      {/* Pricing Section */}
      <PricingSection />
      {/* About Section */}
      <AboutSection />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
