import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [uptime, setUptime] = useState("99.9");

  useEffect(() => {
    const interval = setInterval(() => {
      const values = ["99.8", "99.9", "99.99"];
      setUptime(values[Math.floor(Math.random() * values.length)]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden bg-transparent pt-28 pb-12">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="label-font text-nd-textSecondary text-xs mb-8 flex items-center gap-4">
              <span>[ V_01.2 ]</span>
              <span className="w-12 h-px bg-nd-border"></span>
              <span>SYSTEM_READY</span>
            </div>

            <h1 className="display-font text-[48px] md:text-[80px] lg:text-[96px] leading-[0.9] tracking-tight text-nd-textDisplay mb-8 uppercase">
              <span className="block">DESARROLLO</span>
              <span className="block text-nd-textSecondary">WEB</span>
              <span className="block text-nd-accent">INNOVADOR.</span>
            </h1>

            <p className="text-lg md:text-xl text-nd-textPrimary mb-12 max-w-xl pr-8">
              Creamos experiencias digitales únicas que impulsan tu negocio hacia el futuro. Estructura, funcionalidad y rendimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto">
              <button
                className="nothing-btn-primary group"
                onClick={() => {
                  const proyectosSection = document.getElementById('proyectos');
                  proyectosSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                [ VER PROYECTOS ]
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </button>
              <button
                className="nothing-btn-secondary"
                onClick={() => window.open('https://github.com/alvaroasllani', '_blank')}
              >
                GITHUB
                <Globe className="ml-3 w-4 h-4 text-nd-textSecondary" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-nd-border pt-8 w-full max-w-2xl mb-12">
              {[
                { icon: Globe, label: 'WEB_APPS' },
                { icon: Smartphone, label: 'MÓVIL' },
                { icon: Code, label: 'SISTEMAS' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center border border-nd-border-visible text-nd-textPrimary">
                    <item.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="label-font text-[11px] text-nd-textSecondary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Data Representation (Expressive moment) */}
          <div className="hidden lg:flex lg:col-span-4 items-center justify-end">
            <div className="relative w-[550px] h-[350px] flex items-center justify-end">
              
              {/* Flat Dotted Mapamundi (Nothing Style) */}
              <div className="w-[550px] h-[320px] relative pointer-events-none origin-right scale-110">
                {/* Base dotted mask */}
                <div 
                  className="absolute inset-0 opacity-100 transition-opacity duration-1000"
                  style={{
                    WebkitMaskImage: "url('/world-map.svg')",
                    maskImage: "url('/world-map.svg')",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px)",
                    backgroundSize: "7px 7px"
                  }}
                />
                
                {/* Active Server Nodes (Pulsars) */}
                <div className="absolute top-[28%] left-[24%] w-1.5 h-1.5 bg-nd-accent rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-ping opacity-80" />
                <div className="absolute top-[42%] left-[48%] w-1.5 h-1.5 bg-nd-accent rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)] animate-pulse" />
                <div className="absolute top-[22%] right-[26%] w-1 h-1 bg-nd-textDisplay rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-[25%] right-[40%] w-1.5 h-1.5 bg-nd-textSecondary rounded-full animate-pulse" />
              </div>

              {/* Indicator text (Fixed position overlaying the right side) */}
              <div className="absolute -right-4 bottom-0 flex items-center gap-3 bg-transparent z-10 pointer-events-none">
                <div className="w-8 h-px bg-nd-border-visible" />
                <div className="flex flex-col bg-nd-black/80 backdrop-blur-md p-2 border border-nd-border shadow-2xl pointer-events-auto">
                  <span className="display-font text-3xl text-nd-textDisplay leading-none transition-all duration-300 w-24">
                    {uptime}
                  </span>
                  <span className="label-font text-[10px] text-nd-textSecondary mt-1">SYS_UPTIME %</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Tech Stack Marquee Full Width */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-nd-border bg-nd-black/40 backdrop-blur-sm py-3 mt-12">
        <div className="animate-ticker flex gap-10 whitespace-nowrap hover:[animation-play-state:paused] items-center">
          {[
            ...['html5', 'tailwindcss', 'javascript', 'python', 'typescript', 'laravel', 'react', 'nextdotjs', 'nestjs', 'php', 'mysql', 'postgresql', 'angular', 'vuedotjs'],
            ...['html5', 'tailwindcss', 'javascript', 'python', 'typescript', 'laravel', 'react', 'nextdotjs', 'nestjs', 'php', 'mysql', 'postgresql', 'angular', 'vuedotjs']
          ].map((slug, idx) => (
            <div key={idx} className="flex items-center gap-3 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-crosshair">
                <img src={`https://cdn.simpleicons.org/${slug}/white`} alt={slug} className="w-5 h-5 object-contain" />
                <span className="label-font text-[10px] text-nd-textSecondary hidden sm:block">
                  [ {slug.replace('dotjs', 'js').toUpperCase()} ]
                </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;