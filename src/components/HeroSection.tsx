import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import WireframeSphere from "./WireframeSphere";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Desarrollo Web</span>
              <span className="gradient-text">Innovador</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Creamos experiencias digitales únicas que impulsan tu negocio hacia el futuro
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
                variant="ghost"
                className="btn-ghost text-lg px-8 py-4"
                onClick={() => window.open('https://github.com/alvaroasllani', '_blank')}
              >
                Ver mi GitHub
                <Globe className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Services Icons */}
            <motion.div
              className="flex justify-center lg:justify-start gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Globe, label: 'Web Apps', color: 'cyan' },
                { icon: Smartphone, label: 'Apps Móviles', color: 'purple' },
                { icon: Code, label: 'Sistemas', color: 'cyan' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className={`w-14 h-14 mx-auto mb-2 bg-${item.color === 'cyan' ? 'cyan' : 'purple'}-500/10 backdrop-blur-sm border border-${item.color === 'cyan' ? 'cyan' : 'purple'}-500/30 rounded-full flex items-center justify-center group-hover:bg-${item.color === 'cyan' ? 'cyan' : 'purple'}-500/20 transition-all duration-300`}>
                    <item.icon className={`w-6 h-6 icon-pulse ${item.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
                  </div>
                  <p className="text-xs text-slate-400 group-hover:text-white transition-colors">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Wireframe Sphere */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <WireframeSphere />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;