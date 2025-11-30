import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, BarChart3, Smartphone, Code2, ArrowRight, Terminal } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas a medida para escalar tu negocio
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {/* Main Card: Desarrollo Web Fullstack (2x2) */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 hover:shadow-vibrant">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-64 h-64 text-primary" />
            </div>

            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Desarrollo Web Fullstack
                </h3>
                <p className="text-lg text-slate-300 mb-8 max-w-md">
                  Creamos aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías como React, Next.js y Node.js.
                </p>

                {/* Decorative Code Snippet */}
                <div className="bg-slate-950 rounded-xl p-4 shadow-2xl max-w-md transform group-hover:translate-x-2 transition-transform duration-500 border border-slate-800">
                  <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-xs text-slate-400">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">App</span> = () ={'>'} {'{'}</p>
                    <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                    <p className="pl-8 text-green-400">{'<WebCody />'}</p>
                    <p className="pl-4">);</p>
                    <p>{'}'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="ghost" className="group/btn p-0 hover:bg-transparent text-primary hover:text-primary-glow">
                  Ver detalles <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Card: Apps Móviles (1x2 Vertical) */}
          <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 hover:shadow-vibrant">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors"></div>

            <div className="p-8 h-full flex flex-col relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Apps Móviles
              </h3>
              <p className="text-muted-foreground mb-8">
                Desarrollo nativo y multiplataforma para iOS y Android.
              </p>

              {/* Mobile Mockup Visualization */}
              <div className="mt-auto flex justify-center">
                <div className="w-32 h-56 bg-slate-950 rounded-[2rem] border-4 border-slate-800 p-2 shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-full h-full bg-slate-900 rounded-[1.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-8 bg-slate-950 flex justify-center items-center">
                      <div className="w-12 h-3 bg-black rounded-full"></div>
                    </div>
                    <div className="p-4 pt-10 space-y-2">
                      <div className="w-full h-20 bg-slate-800/50 rounded-lg animate-pulse"></div>
                      <div className="w-full h-8 bg-slate-800/30 rounded-lg"></div>
                      <div className="w-full h-8 bg-slate-800/30 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tertiary Card: Sistemas de Ventas (1x1) */}
          <div className="md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 hover:shadow-vibrant">
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Sistemas CRM
                </h3>
                <p className="text-sm text-slate-300">
                  Automatiza tu negocio con software de gestión a medida.
                </p>
              </div>
            </div>
          </div>

          {/* Tertiary Card: E-commerce (2x1 Wide) */}
          <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 hover:shadow-vibrant">
            <div className="p-8 h-full flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  E-commerce
                </h3>
                <p className="text-sm text-slate-300">
                  Tiendas online optimizadas para vender más. Pasarelas de pago, inventario y más.
                </p>
              </div>

              {/* Decorative UI Element */}
              <div className="hidden md:block w-48 bg-slate-950 rounded-lg shadow-lg p-3 border border-slate-800 transform group-hover:rotate-2 transition-transform duration-300">
                <div className="flex justify-between items-center mb-2">
                  <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                  <div className="w-16 h-2 bg-slate-800 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-slate-900 rounded"></div>
                  <div className="w-2/3 h-2 bg-slate-900 rounded"></div>
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="w-12 h-4 bg-primary/20 rounded"></div>
                  <div className="w-8 h-4 bg-green-500/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;