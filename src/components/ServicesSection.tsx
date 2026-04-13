import { Globe, ShoppingCart, BarChart3, Smartphone, Code2, Database } from 'lucide-react';
import { useState } from 'react';

const ServicesSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [activeDesktopIndex, setActiveDesktopIndex] = useState(0);

  const services = [
    {
      icon: Code2,
      label: '[ SERVICIOS_01 ]',
      title: 'Desarrollo Web Fullstack',
      desc: 'Creamos aplicaciones web modernas, rápidas y escalables con las últimas tecnologías. Diseñado para rendimiento y mantenibilidad.',
      stats: [
        { label: 'STACK', value: 'REACT / NODE' },
        { label: 'DB', value: 'POSTGRES' }
      ]
    },
    {
      icon: Smartphone,
      label: '[ SERVICIOS_02 ]',
      title: 'Apps Móviles',
      desc: 'Desarrollo nativo y multiplataforma para iOS y Android. Interfaces de usuario fluidas y acceso a hardware nativo.',
      stats: [
        { label: 'PLATAFORMAS', value: 'IOS+AND' },
        { label: 'NATIVE', value: 'YES' }
      ]
    },
    {
      icon: BarChart3,
      label: '[ SERVICIOS_03 ]',
      title: 'Sistemas CRM',
      desc: 'Automatiza tu negocio con software de gestión personalizado. Interfaces basadas en datos que mejoran la eficiencia del equipo.',
      stats: [
        { label: 'ANALÍTICA', value: 'TIEMPO REAL' },
        { label: 'AUTOMACIÓN', value: 'ALTA' }
      ]
    },
    {
      icon: ShoppingCart,
      label: '[ SERVICIOS_04 ]',
      title: 'E-commerce',
      desc: 'Tiendas online optimizadas con pasarelas de pago, gestión de inventario y dashboards financieros precisos.',
      stats: [
        { label: 'PAGOS', value: 'MÚLTIPLES' },
        { label: 'UPTIME', value: '99.9%' }
      ]
    },
    {
      icon: Code2,
      label: '[ SERVICIOS_05 ]',
      title: '+ Soluciones a Medida',
      desc: 'Construimos sistemas tecnológicos que se adaptan exactamente a tus requerimientos operativos. Si puedes imaginarlo, podemos estructurarlo en código.',
      stats: [
        { label: 'ARQUITECTURA', value: 'PERSONALIZADA' },
        { label: 'SOPORTE', value: 'CONTINUO' }
      ]
    }
  ];

  const activeDesktopService = services[activeDesktopIndex];

  return (
    <section id="servicios" className="py-24 bg-transparent text-nd-textPrimary border-t border-nd-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="display-font text-5xl md:text-6xl text-nd-textDisplay uppercase tracking-tight">
            NUESTROS<br />SE<span className="text-nd-accent">R</span>VICIOS
          </h2>
          <div className="mt-8 label-font text-nd-textSecondary text-xs">
            / SOLUCIONES TECNOLÓGICAS ESCALABLES /
          </div>
        </div>

        {/* Desktop IDE Split Pane */}
        <div className="hidden md:flex flex-row border border-nd-border bg-nd-black min-h-[500px]">
          
          {/* Sidebar (30%) */}
          <div className="w-[30%] border-r border-nd-border bg-nd-surface flex flex-col pt-8">
            <div className="px-8 mb-8 flex items-center gap-3 opacity-60">
              <Code2 className="w-4 h-4 text-nd-textSecondary" />
              <span className="label-font text-[10px] text-nd-textSecondary">EXPLORER</span>
            </div>
            
            <div className="flex flex-col">
              {services.map((service, idx) => {
                const isActive = activeDesktopIndex === idx;
                return (
                  <button 
                    key={idx}
                    onClick={() => setActiveDesktopIndex(idx)}
                    className={`w-full text-left px-8 py-5 flex items-center gap-4 transition-all duration-200 border-l-2
                      ${isActive 
                        ? 'border-nd-accent bg-nd-surfaceRaised/50 text-nd-textDisplay shadow-[inset_2px_0_10px_rgba(255,0,0,0.05)]' 
                        : 'border-transparent text-nd-textSecondary hover:bg-nd-surfaceRaised/30 hover:text-nd-textPrimary'
                      }`}
                  >
                    <service.icon className={`w-4 h-4 flex-shrink-0 transition-colors ${isActive ? 'text-nd-accent' : ''}`} strokeWidth={1.5} />
                    <span className="label-font text-[11px] tracking-wider">{service.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Main Panel (70%) */}
          <div className="w-[70%] p-12 lg:p-16 bg-nd-black flex flex-col relative overflow-hidden justify-center group">
            {/* The active content */ }
            <div key={activeDesktopIndex} className="animate-[fadeIn_0.3s_ease-out] z-10 w-full max-w-2xl">
                <div className="mb-6 flex items-center gap-4">
                  <span className="label-font text-[10px] text-nd-accent px-3 py-1 border border-nd-accent/30 bg-nd-accent/5">
                     {activeDesktopService.label}
                  </span>
                  <div className="h-px bg-nd-border-visible flex-grow opacity-50" />
                </div>
                
                <h3 className="display-font text-5xl lg:text-6xl text-nd-textDisplay mb-8 tracking-tight">
                  {activeDesktopService.title}
                </h3>
                
                <p className="text-nd-textPrimary text-lg leading-relaxed mb-12 opacity-90">
                  {activeDesktopService.desc}
                </p>
                
                <div className="border border-nd-border bg-nd-surface/40 p-6 relative">
                  <div className="absolute -top-3 left-4 bg-nd-black px-2 label-font text-[10px] text-nd-textSecondary flex items-center gap-2">
                    <Database className="w-3 h-3 text-nd-accent/50" /> CONFIG.yml
                  </div>
                  <div className="font-mono text-sm tracking-wide flex flex-col gap-4 mt-2">
                    {activeDesktopService.stats.map((stat, i) => (
                      <div key={i} className="flex flex-row items-center">
                         <span className="text-nd-accent/80 w-32 shrink-0">{stat.label.toLowerCase()}:</span>
                         <span className="text-nd-textDisplay">"{stat.value}"</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            
            {/* Subtle background decoration */}
            <activeDesktopService.icon className="absolute -right-16 -bottom-16 w-80 h-80 text-nd-surfaceRaised/30 pointer-events-none group-hover:scale-105 transition-transform duration-1000" strokeWidth={0.5} />
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="flex flex-col md:hidden border-t border-nd-border">
          {services.map((service, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div key={idx} className="border-b border-nd-border/60">
                <button 
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full py-6 pr-2 flex items-center justify-between text-left focus:outline-none bg-transparent"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center border border-nd-border/60 text-nd-textPrimary bg-nd-surfaceRaised/30">
                      <service.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-lg font-medium text-nd-textDisplay tracking-wide leading-tight px-2">
                       {service.title}
                    </span>
                  </div>
                  <div className={`text-2xl font-mono transition-colors duration-300 ml-4 ${isOpen ? 'text-nd-accent' : 'text-nd-textSecondary'}`}>
                    {isOpen ? '-' : '+'}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}
                >
                  <div className="pb-8 pt-2">
                    <p className="text-sm text-nd-textPrimary mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="flex flex-col gap-2 border-t border-nd-border/40 pt-6">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="flex justify-between items-center bg-nd-black/40 border border-nd-border/50 px-4 py-3">
                          <span className="label-font text-[10px] text-nd-textSecondary">{stat.label}</span>
                          <span className="label-font text-xs text-nd-textDisplay">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;