import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Footer />
      <WhatsAppButton 
        phoneNumber="5491162754699"
        message="Hola! Me gustaría obtener más información sobre sus servicios de jardinería."
      />
    </div>
  );
};

export default Index;
