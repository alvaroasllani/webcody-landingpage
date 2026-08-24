import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TechStackSection />
      <ProjectsCarousel />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
