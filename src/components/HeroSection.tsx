import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float animation-delay-400 opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up text-white">
            <span className="block">Desarrollo Web</span>
            <span className="text-primary">Innovador</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-8 animate-fade-in-up animation-delay-200">
            Creamos experiencias digitales únicas que impulsan tu negocio hacia el futuro
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="btn-hero text-lg px-8 py-4 group"
              onClick={() => {
                const proyectosSection = document.getElementById('proyectos');
                proyectosSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Proyectos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all"
              onClick={() => window.open('https://github.com/alvaroasllani', '_blank')}
            >
              Ver mi GitHub
              <Globe className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Services Icons */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in-up animation-delay-600">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors glow-effect">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-slate-400 group-hover:text-white transition-colors">Web Apps</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors glow-effect">
                <Smartphone className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-sm text-slate-400 group-hover:text-white transition-colors">Apps Móviles</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors glow-effect">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <p className="text-sm text-slate-400 group-hover:text-white transition-colors">Sistemas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;