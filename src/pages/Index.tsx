import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
