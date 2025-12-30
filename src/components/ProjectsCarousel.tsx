import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, BarChart3, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma de ventas online completa con carrito de compras, gestión de productos y pagos integrados",
    category: "E-commerce",
    icon: ShoppingCart,
    image: "/img/ecomerce/0.PNG",
    tags: ["React", "Node.js", "PayPal", "Stripe"],
    url: "https://plantilla-e-comerce.vercel.app/",
    glowColor: "purple",
  },
  {
    id: 2,
    title: "Sistema Sayqa",
    description: "Sistema integral de gestión empresarial con dashboard analytics y control de inventarios",
    category: "Dashboard",
    icon: BarChart3,
    image: "/img/sayqa/1.PNG",
    tags: ["Vue.js", "Chart.js", "MySQL"],
    url: "https://sayqa-medicina-natural.netlify.app/",
    glowColor: "cyan",
  },
  {
    id: 3,
    title: "App90 Mobile",
    description: "Aplicación móvil nativa con funcionalidades avanzadas y experiencia optimizada",
    category: "Mobile App",
    icon: Smartphone,
    image: "/img/app90/1.PNG",
    tags: ["React Native", "Firebase"],
    glowColor: "purple",
  },
];

// ========== 3D TILT CARD COMPONENT ==========
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor: 'cyan' | 'purple';
}

const TiltCard = ({ children, className = '', glowColor }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for rotation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth animation
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const glowColors = {
    cyan: 'rgba(0, 242, 255, 0.4)',
    purple: 'rgba(189, 0, 255, 0.4)',
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full rounded-3xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          background: 'linear-gradient(180deg, rgba(20, 20, 40, 0.9) 0%, rgba(10, 10, 31, 0.95) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${glowColors[glowColor]}`
            : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// ========== PROJECT CARD ==========
interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltCard glowColor={project.glowColor as 'cyan' | 'purple'} className="h-full">
        {/* Image Container with Parallax Pop-out */}
        <div className="relative overflow-hidden h-48 md:h-56">
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: isHovered ? 1.1 : 1,
              z: isHovered ? 30 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-transparent to-transparent" />

            {/* Neon glow on hover */}
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: project.glowColor === 'cyan'
                  ? 'linear-gradient(to top, rgba(0, 242, 255, 0.1), transparent)'
                  : 'linear-gradient(to top, rgba(189, 0, 255, 0.1), transparent)',
              }}
            />
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div
              className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
              style={{
                background: project.glowColor === 'cyan'
                  ? 'rgba(0, 242, 255, 0.15)'
                  : 'rgba(189, 0, 255, 0.15)',
                border: `1px solid ${project.glowColor === 'cyan' ? 'rgba(0, 242, 255, 0.3)' : 'rgba(189, 0, 255, 0.3)'}`,
                color: project.glowColor === 'cyan' ? '#00f2ff' : '#bd00ff',
              }}
            >
              {project.category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: project.glowColor === 'cyan'
                  ? 'rgba(0, 242, 255, 0.1)'
                  : 'rgba(189, 0, 255, 0.1)',
                border: `1px solid ${project.glowColor === 'cyan' ? 'rgba(0, 242, 255, 0.2)' : 'rgba(189, 0, 255, 0.2)'}`,
              }}
            >
              <IconComponent
                className="w-5 h-5"
                style={{ color: project.glowColor === 'cyan' ? '#00f2ff' : '#bd00ff' }}
              />
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>

          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-md bg-white/5 border border-white/10 text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          {project.url ? (
            <Button
              className="w-full relative overflow-hidden group"
              style={{
                background: project.glowColor === 'cyan'
                  ? 'linear-gradient(135deg, #00f2ff 0%, #00b8cc 100%)'
                  : 'linear-gradient(135deg, #bd00ff 0%, #9900cc 100%)',
                boxShadow: project.glowColor === 'cyan'
                  ? '0 0 20px rgba(0, 242, 255, 0.3)'
                  : '0 0 20px rgba(189, 0, 255, 0.3)',
              }}
              onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
            >
              <span className="relative z-10 flex items-center justify-center text-white font-semibold">
                Ver Proyecto
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Shimmer effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-500" />
            </Button>
          ) : (
            <Button disabled className="w-full bg-white/5 text-slate-500 border border-white/10">
              Próximamente
            </Button>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
};

// ========== MAIN PROJECTS SECTION ==========
const ProjectsCarousel = () => {
  return (
    <section id="proyectos" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a1f' }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-purple-500/5 via-transparent to-transparent blur-3xl" />
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
            <span className="gradient-text">Proyectos</span> Destacados
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explora nuestro portafolio de soluciones digitales de alto impacto
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;