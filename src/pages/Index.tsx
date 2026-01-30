import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ProductDemo from "@/components/ProductDemo";
import KeyBenefits from "@/components/KeyBenefits";
import WhoItsFor from "@/components/WhoItsFor";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <ProductDemo />
        <KeyBenefits />
        <WhoItsFor />
        <PricingSection />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
