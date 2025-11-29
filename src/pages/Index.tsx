import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import Specialties from "@/components/Specialties";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import Doctor from "@/components/Doctor";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <main>
        <Hero />
        <About />
        <WhatsAppBanner />
        <Specialties />
        <WhyChoose />
        <Process />
        <SocialProof />
        <Doctor />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
