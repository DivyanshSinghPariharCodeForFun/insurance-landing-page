import { Toaster } from "./components/ui/sonner";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactFormSection } from "./components/ContactFormSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustBadges } from "./components/TrustBadges";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Footer } from "./components/Footer";

export default function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById("quote-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onGetQuote={scrollToForm} />
      <TrustBadges />
      <ServicesSection />
      <ContactFormSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" />
    </div>
  );
}
