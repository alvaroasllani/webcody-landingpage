import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GlobalBlaze from "@/components/GlobalBlaze";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <GlobalBlaze />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <TechStackSection />
        <ProjectsCarousel />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
