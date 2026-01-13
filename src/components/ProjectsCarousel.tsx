import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, BarChart3, Smartphone, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "App Inmobiliaria",
        description: "Aplicación móvil diseñada para inmobiliarias que permite gestionar captaciones, propiedades y clientes de forma eficiente. Interfaz intuitiva y optimizada para el trabajo en campo.",
        category: "Mobile App",
        icon: Smartphone,
        image: "/img/inmobiliaria/1.png",
        images: [
            "/img/inmobiliaria/1.png",
            "/img/inmobiliaria/2.png",
            "/img/inmobiliaria/3.png",
            "/img/inmobiliaria/4.png",
            "/img/inmobiliaria/5.png",
            "/img/inmobiliaria/6.png",
            "/img/inmobiliaria/7.png",
        ],
        tags: ["Glide", "Mobile", "CRM", "Real Estate"],
        url: "https://app-inmobiliaria.glide.page",
        accentColor: "#00f2ff",
    },
    {
        id: 2,
        title: "Ecommerce Sayqa",
        description: "Tienda online de medicina natural con catálogo completo de productos, carrito de compras inteligente y múltiples pasarelas de pago integradas para una experiencia de compra fluida.",
        category: "E-commerce",
        icon: ShoppingCart,
        image: "/img/ecommerce/1.png",
        images: [
            "/img/ecommerce/1.png",
            "/img/ecommerce/2.png",
            "/img/ecommerce/3.png",
            "/img/ecommerce/4.png",
            "/img/ecommerce/5.png",
            "/img/ecommerce/6.png",
            "/img/ecommerce/7.png",
            "/img/ecommerce/8.png",
            "/img/ecommerce/9.png",
            "/img/ecommerce/10.png",
            "/img/ecommerce/11.png",
            "/img/ecommerce/12.png",
            "/img/ecommerce/13.png",
        ],
        tags: ["React", "E-commerce", "Pagos Online", "SEO"],
        url: "https://sayqamedicinanatural.com/",
        accentColor: "#bd00ff",
    },
    {
        id: 3,
        title: "Sistema de Ventas ERP",
        description: "Sistema integral de punto de venta con gestión de inventario en tiempo real, módulo de ventas, reportes analíticos avanzados y control financiero completo para tu negocio.",
        category: "ERP / POS",
        icon: BarChart3,
        image: "/img/erp/1.png",
        images: [
            "/img/erp/1.png",
            "/img/erp/2.png",
            "/img/erp/3.png",
            "/img/erp/4.png",
            "/img/erp/5.png",
            "/img/erp/6.png",
            "/img/erp/7.png",
            "/img/erp/8.png",
            "/img/erp/9.png",
        ],
        tags: ["React", "Node.js", "PostgreSQL", "Dashboard"],
        url: "https://erp-sistemadeventa-web.vercel.app/pos",
        accentColor: "#00f2ff",
    },
];

// ========== IMAGE LIGHTBOX COMPONENT ==========
interface LightboxProps {
    images: string[];
    initialIndex: number;
    projectTitle: string;
    accentColor: string;
    onClose: () => void;
}

const ImageLightbox = ({ images, initialIndex, projectTitle, accentColor, onClose }: LightboxProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose, handleNext, handlePrev]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

            {/* Content Container */}
            <div
                className="relative z-10 w-full h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 lg:p-6">
                    <div className="flex items-center gap-4">
                        <h3 className="text-white text-lg lg:text-xl font-semibold">{projectTitle}</h3>
                        <span className="text-slate-400 text-sm">
                            {currentIndex + 1} / {images.length}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        aria-label="Close gallery"
                    >
                        <X className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                </div>

                {/* Main Image Area */}
                <div className="flex-1 flex items-center justify-center px-4 lg:px-20 pb-4 relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-20"
                        style={{ boxShadow: `0 0 20px ${accentColor}30` }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-20"
                        style={{ boxShadow: `0 0 20px ${accentColor}30` }}
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-full max-h-full flex items-center justify-center"
                        >
                            <img
                                src={images[currentIndex]}
                                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                                className="max-w-full max-h-[70vh] lg:max-h-[75vh] object-contain rounded-lg"
                                style={{
                                    boxShadow: `0 20px 60px -20px ${accentColor}40, 0 0 40px rgba(0,0,0,0.5)`,
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Thumbnails */}
                <div className="p-4 lg:p-6">
                    <div className="flex justify-center gap-2 lg:gap-3 overflow-x-auto pb-2 max-w-full">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden transition-all ${index === currentIndex
                                    ? 'ring-2 scale-105'
                                    : 'opacity-50 hover:opacity-80'
                                    }`}
                                style={{
                                    boxShadow: index === currentIndex ? `0 0 0 2px ${accentColor}` : undefined,
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// ========== MAIN PROJECTS CAROUSEL ==========
const ProjectsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [lightbox, setLightbox] = useState<{ projectIndex: number; imageIndex: number } | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    const openLightbox = (projectIndex: number, imageIndex: number = 0) => {
        setLightbox({ projectIndex, imageIndex });
    };

    const closeLightbox = () => {
        setLightbox(null);
    };

    // Handle scroll snap on mobile
    const handleScroll = () => {
        if (!scrollContainerRef.current || !isMobile) return;
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth * 0.85;
        const newIndex = Math.round(scrollLeft / cardWidth);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
            setActiveIndex(newIndex);
        }
    };

    const activeProject = projects[activeIndex];
    const IconComponent = activeProject.icon;

    return (
        <>
            <section id="proyectos" className="py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a1f' }}>
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        className="absolute w-[1000px] h-[1000px] rounded-full blur-[150px] opacity-20"
                        animate={{
                            background: `radial-gradient(circle, ${activeProject.accentColor} 0%, transparent 70%)`,
                            x: '-50%',
                            y: '-50%',
                        }}
                        style={{ top: '50%', left: '30%' }}
                        transition={{ duration: 0.4 }}
                    />
                </div>

                <div className="container mx-auto px-4 lg:px-12 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-12 lg:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                            <span className="gradient-text">Proyectos</span> Destacados
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
                            Soluciones digitales que transforman negocios
                        </p>
                    </motion.div>

                    {/* ========== DESKTOP CAROUSEL ========== */}
                    <div className="hidden lg:block">
                        <div className="relative min-h-[600px] h-[70vh] max-h-[750px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="absolute inset-0"
                                >
                                    {/* Main Card */}
                                    <div
                                        className="h-full rounded-3xl overflow-hidden backdrop-blur-xl"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            boxShadow: `0 25px 80px -20px ${activeProject.accentColor}25, 0 10px 40px -10px rgba(0,0,0,0.5)`,
                                        }}
                                    >
                                        <div className="h-full flex">
                                            {/* Left Side - Project Info (35%) */}
                                            <div className="w-[35%] p-10 lg:p-12 flex flex-col justify-center relative">
                                                {/* Accent Line */}
                                                <div
                                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 rounded-r-full"
                                                    style={{ background: activeProject.accentColor }}
                                                />

                                                {/* Category Badge */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.05 }}
                                                    className="flex items-center gap-3 mb-6"
                                                >
                                                    <div
                                                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                                                        style={{
                                                            background: `${activeProject.accentColor}15`,
                                                            border: `1px solid ${activeProject.accentColor}30`,
                                                        }}
                                                    >
                                                        <IconComponent
                                                            className="w-6 h-6"
                                                            style={{ color: activeProject.accentColor }}
                                                        />
                                                    </div>
                                                    <span
                                                        className="px-4 py-1.5 rounded-full text-sm font-medium"
                                                        style={{
                                                            background: `${activeProject.accentColor}15`,
                                                            color: activeProject.accentColor,
                                                            border: `1px solid ${activeProject.accentColor}30`,
                                                        }}
                                                    >
                                                        {activeProject.category}
                                                    </span>
                                                </motion.div>

                                                {/* Title */}
                                                <motion.h3
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                                                >
                                                    {activeProject.title}
                                                </motion.h3>

                                                {/* Description */}
                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.15 }}
                                                    className="text-slate-400 text-lg leading-relaxed mb-8"
                                                >
                                                    {activeProject.description}
                                                </motion.p>

                                                {/* Tags */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="flex flex-wrap gap-2 mb-10"
                                                >
                                                    {activeProject.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-slate-300"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </motion.div>

                                                {/* CTA Button */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.25 }}
                                                >
                                                    <Button
                                                        size="lg"
                                                        className="relative overflow-hidden group px-8 py-6 text-lg font-semibold"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${activeProject.accentColor} 0%, ${activeProject.accentColor}cc 100%)`,
                                                            boxShadow: `0 10px 40px -10px ${activeProject.accentColor}50`,
                                                        }}
                                                        onClick={() => window.open(activeProject.url, '_blank', 'noopener,noreferrer')}
                                                    >
                                                        <span className="relative z-10 flex items-center text-white">
                                                            Ver Proyecto
                                                            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        </span>
                                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                    </Button>
                                                </motion.div>
                                            </div>

                                            {/* Right Side - Project Visual (65%) */}
                                            <div className="w-[65%] relative p-6 flex items-center justify-center">
                                                {/* Background Pattern */}
                                                <div
                                                    className="absolute inset-0 opacity-30"
                                                    style={{
                                                        backgroundImage: `radial-gradient(${activeProject.accentColor}20 1px, transparent 1px)`,
                                                        backgroundSize: '24px 24px',
                                                    }}
                                                />

                                                {/* Clickable Image Container */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    transition={{ delay: 0.1, duration: 0.3 }}
                                                    className="relative w-full h-full flex items-center justify-center cursor-pointer group"
                                                    onClick={() => openLightbox(activeIndex, 0)}
                                                >
                                                    <div
                                                        className="relative rounded-2xl overflow-hidden max-w-full max-h-full"
                                                        style={{
                                                            boxShadow: `0 30px 60px -15px rgba(0,0,0,0.5), 0 0 40px ${activeProject.accentColor}15`,
                                                        }}
                                                    >
                                                        <img
                                                            src={activeProject.image}
                                                            alt={activeProject.title}
                                                            className="w-full h-full object-contain max-h-[55vh] transition-transform duration-300 group-hover:scale-105"
                                                        />

                                                        {/* Hover Overlay */}
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                                                <ZoomIn className="w-5 h-5" />
                                                                <span className="font-medium">Ver galería ({activeProject.images.length})</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                aria-label="Next project"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-3 mt-8">
                            {projects.map((project, index) => (
                                <button
                                    key={project.id}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'w-10'
                                        : 'w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                    style={{
                                        background: index === activeIndex ? activeProject.accentColor : undefined,
                                    }}
                                    aria-label={`Go to project ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ========== MOBILE CAROUSEL (Scroll Snap) ========== */}
                    <div className="lg:hidden">
                        <div
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-[7.5%]"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            {projects.map((project, index) => {
                                const Icon = project.icon;
                                return (
                                    <motion.div
                                        key={project.id}
                                        className="flex-shrink-0 w-[85vw] snap-center"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div
                                            className="h-full rounded-3xl overflow-hidden backdrop-blur-xl"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                boxShadow: index === activeIndex
                                                    ? `0 25px 60px -15px ${project.accentColor}30`
                                                    : '0 10px 30px -10px rgba(0,0,0,0.3)',
                                                transition: 'box-shadow 0.3s ease',
                                            }}
                                        >
                                            {/* Clickable Image */}
                                            <div
                                                className="relative h-56 overflow-hidden cursor-pointer group"
                                                onClick={() => openLightbox(index, 0)}
                                            >
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-active:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-transparent to-transparent" />

                                                {/* Gallery indicator */}
                                                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs">
                                                    <ZoomIn className="w-3.5 h-3.5" />
                                                    <span>{project.images.length} fotos</span>
                                                </div>

                                                {/* Category Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span
                                                        className="px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
                                                        style={{
                                                            background: `${project.accentColor}20`,
                                                            color: project.accentColor,
                                                            border: `1px solid ${project.accentColor}40`,
                                                        }}
                                                    >
                                                        {project.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{
                                                            background: `${project.accentColor}15`,
                                                            border: `1px solid ${project.accentColor}25`,
                                                        }}
                                                    >
                                                        <Icon className="w-5 h-5" style={{ color: project.accentColor }} />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                                </div>

                                                <p className="text-slate-400 text-sm mb-5 line-clamp-3">
                                                    {project.description}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.slice(0, 3).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-400"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Button */}
                                                <Button
                                                    className="w-full py-5 font-semibold"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${project.accentColor} 0%, ${project.accentColor}cc 100%)`,
                                                        boxShadow: `0 8px 24px -8px ${project.accentColor}40`,
                                                    }}
                                                    onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                                                >
                                                    <span className="flex items-center justify-center text-white">
                                                        Ver Proyecto
                                                        <ExternalLink className="ml-2 w-4 h-4" />
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-4">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8' : 'w-1.5 bg-white/20'
                                        }`}
                                    style={{
                                        background: index === activeIndex ? project.accentColor : undefined,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightbox && (
                    <ImageLightbox
                        images={projects[lightbox.projectIndex].images}
                        initialIndex={lightbox.imageIndex}
                        projectTitle={projects[lightbox.projectIndex].title}
                        accentColor={projects[lightbox.projectIndex].accentColor}
                        onClose={closeLightbox}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectsCarousel;