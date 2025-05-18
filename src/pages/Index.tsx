import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] overflow-x-hidden">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-radial from-white/5 to-transparent opacity-30 blur-3xl z-0" />
      <Nav />
      <Hero />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
