import { Globe, ShoppingCart, BarChart3, Smartphone, Code2, Database } from 'lucide-react';
import { useState } from 'react';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const activeService = services[activeIndex];

  return (
    <section id="servicios" className="py-24 bg-transparent text-nd-textPrimary border-t border-nd-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="display-font text-4xl md:text-5xl lg:text-7xl text-nd-textDisplay tracking-tight uppercase mb-4">
            NUESTROS<br className="hidden md:block"/>SE<span className="text-nd-accent">R</span>VICIOS
          </h2>
          <div className="mt-4 label-font text-[10px] md:text-xs text-nd-textSecondary">
            / SOLUCIONES TECNOLÓGICAS ESCALABLES /
          </div>
        </div>

        {/* IDE Split Pane (Responsive) */}
        <div className="flex flex-col md:flex-row border border-nd-border bg-nd-black min-h-[500px]">
          
          {/* Sidebar Tabs */}
          <div className="w-full md:w-[30%] border-b md:border-b-0 md:border-r border-nd-border bg-nd-surface flex flex-col md:pt-8 relative">
            {/* Desktop Explorer Label */}
            <div className="hidden md:flex px-8 mb-8 items-center gap-3 opacity-60">
              <Code2 className="w-4 h-4 text-nd-textSecondary" />
              <span className="label-font text-[10px] text-nd-textSecondary">EXPLORER</span>
            </div>
            
            {/* Mobile Scroll Indicator Label */}
            <div className="flex md:hidden px-6 pt-4 pb-2 items-center justify-between opacity-60">
                <div className="flex items-center gap-2">
                    <Code2 className="w-3 h-3 text-nd-textSecondary" />
                    <span className="label-font text-[10px] text-nd-textSecondary">EXPLORER</span>
                </div>
                <span className="label-font text-[10px] text-nd-textDisplay underline animate-pulse">
                    [ DESLIZAR &rarr; ]
                </span>
            </div>
            
            <div className="flex flex-row md:flex-col overflow-x-auto scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {services.map((service, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 md:w-full text-left px-6 py-4 md:px-8 md:py-5 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2
                      ${isActive 
                        ? 'border-nd-accent bg-nd-surfaceRaised/50 text-nd-textDisplay md:shadow-[inset_2px_0_10px_rgba(255,0,0,0.05)] shadow-[inset_0_2px_10px_rgba(255,0,0,0.05)] md:shadow-none' 
                        : 'border-transparent text-nd-textSecondary hover:bg-nd-surfaceRaised/30 hover:text-nd-textPrimary'
                      }`}
                  >
                    <service.icon className={`w-5 h-5 md:w-4 md:h-4 flex-shrink-0 transition-colors ${isActive ? 'text-nd-accent' : ''}`} strokeWidth={1.5} />
                    <div className="flex flex-col text-center md:text-left">
                       <span className="label-font text-[9px] md:text-[11px] tracking-wider whitespace-nowrap">{service.label}</span>
                       <span className="md:hidden text-xs mt-1 font-medium">{service.title}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Main Panel */}
          <div className="w-full md:w-[70%] p-6 md:p-12 lg:p-16 bg-nd-black flex flex-col relative overflow-hidden justify-center group min-h-[400px]">
            {/* The active content */ }
            <div key={activeIndex} className="animate-[fadeIn_0.3s_ease-out] z-10 w-full max-w-2xl">
                <div className="mb-6 flex items-center gap-4">
                  <span className="label-font text-[9px] md:text-[10px] text-nd-accent px-3 py-1 border border-nd-accent/30 bg-nd-accent/5 hidden md:inline-block">
                     {activeService.label}
                  </span>
                  <div className="h-px bg-nd-border-visible flex-grow opacity-50 hidden md:block" />
                </div>
                
                <h3 className="display-font text-3xl md:text-5xl lg:text-6xl text-nd-textDisplay mb-6 md:mb-8 tracking-tight">
                  {activeService.title}
                </h3>
                
                <p className="text-nd-textPrimary text-base md:text-lg leading-relaxed mb-10 md:mb-12 opacity-90">
                  {activeService.desc}
                </p>
                
                <div className="border border-nd-border bg-nd-surface/40 p-5 md:p-6 relative">
                  <div className="absolute -top-3 left-4 bg-nd-black px-2 label-font text-[9px] md:text-[10px] text-nd-textSecondary flex items-center gap-2">
                    <Database className="w-3 h-3 text-nd-accent/50" /> CONFIG.yml
                  </div>
                  <div className="font-mono text-xs md:text-sm tracking-wide flex flex-col gap-3 md:gap-4 mt-2">
                    {activeService.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center">
                         <span className="text-nd-accent/80 w-auto sm:w-32 shrink-0 mb-1 sm:mb-0 text-[10px] md:text-xs">[{stat.label}]:</span>
                         <span className="text-nd-textDisplay">"{stat.value}"</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            
            {/* Subtle background decoration */}
            <activeService.icon className="absolute -right-10 -bottom-10 md:-right-16 md:-bottom-16 w-48 h-48 md:w-80 md:h-80 text-nd-surfaceRaised/30 pointer-events-none group-hover:scale-105 transition-transform duration-1000" strokeWidth={0.5} />
          </div>
        </div>
      </div>
      <style>{`
          .scrollbar-none::-webkit-scrollbar {
              display: none;
          }
      `}</style>
    </section>
  );
};

export default ServicesSection;