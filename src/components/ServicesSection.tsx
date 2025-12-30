import { useRef, useState, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Globe, ShoppingCart, BarChart3, Smartphone, Code2, Terminal } from 'lucide-react';

// ========== SPOTLIGHT CARD COMPONENT ==========
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = '' }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      className={`relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-lg border border-white/10 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Spotlight gradient that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 242, 255, 0.08), transparent 40%)`,
        }}
      />

      {/* Glow border effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-3xl"
        style={{
          opacity: isFocused ? 1 : 0,
          boxShadow: 'inset 0 0 0 1px rgba(0, 242, 255, 0.2)',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {children}
    </motion.div>
  );
};

// ========== TERMINAL CODE VISUAL ==========
const TerminalCode = () => (
  <motion.div
    className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 max-w-sm"
    initial={{ opacity: 0.6 }}
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="ml-2 text-xs text-slate-500 font-mono">terminal</span>
    </div>
    <div className="font-mono text-xs space-y-1">
      <p className="text-slate-500">$ npm install @webcody/future</p>
      <p className="text-cyan-400">→ Downloading innovation...</p>
      <p className="text-green-400">✓ Success! Your app is ready 🚀</p>
      <motion.span
        className="inline-block text-cyan-400"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        █
      </motion.span>
    </div>
  </motion.div>
);

// ========== FLOATING PHONE MOCKUP ==========
const FloatingPhone = () => (
  <motion.div
    className="relative"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className="w-28 h-48 bg-black/80 backdrop-blur-sm rounded-[1.5rem] border border-purple-500/30 p-1.5 shadow-lg shadow-purple-500/20">
      <div className="w-full h-full bg-slate-900/80 rounded-[1.2rem] overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-4 bg-black rounded-b-xl" />

        {/* Screen content */}
        <div className="pt-6 px-2 space-y-2">
          <div className="w-full h-12 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-lg animate-pulse" />
          <div className="w-full h-6 bg-white/5 rounded-md" />
          <div className="w-3/4 h-6 bg-white/5 rounded-md" />
          <div className="w-full h-8 bg-cyan-500/20 rounded-lg mt-4 flex items-center justify-center">
            <span className="text-[8px] text-cyan-400 font-medium">DOWNLOAD</span>
          </div>
        </div>
      </div>
    </div>

    {/* Glow effect */}
    <div className="absolute -inset-4 bg-gradient-to-t from-purple-500/20 to-transparent blur-xl -z-10" />
  </motion.div>
);

// ========== ICON WITH HOVER EFFECT ==========
interface HoverIconProps {
  icon: React.ComponentType<{ className?: string }>;
  color: 'cyan' | 'purple' | 'emerald';
}

const HoverIcon = ({ icon: Icon, color }: HoverIconProps) => {
  const colors = {
    cyan: 'group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_12px_rgba(0,242,255,0.8)]',
    purple: 'group-hover:text-purple-400 group-hover:drop-shadow-[0_0_12px_rgba(189,0,255,0.8)]',
    emerald: 'group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]',
  };

  const bgColors = {
    cyan: 'bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-500/50',
    purple: 'bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/50',
    emerald: 'bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/50',
  };

  return (
    <motion.div
      className={`w-14 h-14 rounded-2xl ${bgColors[color]} border flex items-center justify-center transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
    >
      <Icon className={`w-7 h-7 text-slate-400 transition-all duration-300 ${colors[color]}`} />
    </motion.div>
  );
};

// ========== MAIN SERVICES SECTION ==========
const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a1f' }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] top-0 -left-64 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute w-[600px] h-[600px] bottom-0 -right-64 bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluciones tecnológicas de vanguardia para escalar tu negocio al futuro
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {/* Main Card: Desarrollo Web (2x2) */}
          <motion.div
            className="col-span-1 md:col-span-2 md:row-span-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SpotlightCard className="h-full group p-8">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code2 className="w-64 h-64 text-cyan-400" />
              </div>

              <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                  <HoverIcon icon={Globe} color="cyan" />
                  <h3 className="text-3xl font-bold mb-4 mt-6 text-white">
                    Desarrollo Web Fullstack
                  </h3>
                  <p className="text-lg text-slate-400 mb-8 max-w-md">
                    Creamos aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.
                  </p>
                  <TerminalCode />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Apps Móviles (1x2) */}
          <motion.div
            className="col-span-1 md:row-span-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SpotlightCard className="h-full group p-8">
              <div className="h-full flex flex-col relative z-10">
                <HoverIcon icon={Smartphone} color="purple" />
                <h3 className="text-2xl font-bold mb-4 mt-6 text-white">
                  Apps Móviles
                </h3>
                <p className="text-slate-400 mb-8">
                  Desarrollo nativo y multiplataforma para iOS y Android.
                </p>
                <div className="mt-auto flex justify-center">
                  <FloatingPhone />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Sistemas CRM (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SpotlightCard className="h-full group p-8">
              <HoverIcon icon={BarChart3} color="cyan" />
              <h3 className="text-xl font-bold mb-2 mt-6 text-white">
                Sistemas CRM
              </h3>
              <p className="text-sm text-slate-400">
                Automatiza tu negocio con software de gestión personalizado.
              </p>
            </SpotlightCard>
          </motion.div>

          {/* E-commerce (2x1) */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SpotlightCard className="h-full group p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <HoverIcon icon={ShoppingCart} color="emerald" />
                  <h3 className="text-xl font-bold mb-2 mt-6 text-white">
                    E-commerce
                  </h3>
                  <p className="text-sm text-slate-400">
                    Tiendas online optimizadas con pasarelas de pago, inventario y más.
                  </p>
                </div>

                {/* Mini stats decoration */}
                <div className="hidden md:flex gap-4">
                  {[
                    { value: '99.9%', label: 'Uptime' },
                    { value: '2.5s', label: 'Load' },
                    { value: '10K+', label: 'Users' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;