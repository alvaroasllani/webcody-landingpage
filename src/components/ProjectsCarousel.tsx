import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "APP INMOBILIARIA",
        description: "Aplicación móvil diseñada para inmobiliarias que permite gestionar captaciones, propiedades y clientes de forma eficiente. Interfaz intuitiva y optimizada para el trabajo en campo.",
        category: "MOBILE APP",
        image: "/img/inmobiliaria/1.png",
        images: ["/img/inmobiliaria/1.png", "/img/inmobiliaria/2.png", "/img/inmobiliaria/3.png"],
        url: "https://app-inmobiliaria.glide.page",
    },
    {
        id: 2,
        title: "ECOMMERCE SAYQA",
        description: "Tienda online de medicina natural con catálogo completo de productos, carrito de compras inteligente y múltiples pasarelas de pago integradas para una experiencia de compra fluida.",
        category: "E-COMMERCE",
        image: "/img/ecommerce/1.png",
        images: ["/img/ecommerce/1.png", "/img/ecommerce/2.png", "/img/ecommerce/3.png"],
        url: "https://sayqamedicinanatural.com/",
    },
    {
        id: 3,
        title: "SISTEMA ERP",
        description: "Sistema integral de punto de venta con gestión de inventario en tiempo real, módulo de ventas, reportes analíticos avanzados y control financiero completo.",
        category: "ERP / POS",
        image: "/img/erp/1.png",
        images: ["/img/erp/1.png", "/img/erp/2.png", "/img/erp/3.png"],
        url: "https://erp-sistemadeventa-web.vercel.app/pos",
    },
];

const ProjectsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [modalTouchStart, setModalTouchStart] = useState<number | null>(null);

    const activeProject = projects[activeIndex];

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % projects.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0].clientX;
        const distance = touchStart - touchEnd;
        
        if (distance > 50) nextSlide();
        if (distance < -50) prevSlide();
        setTouchStart(null);
    };

    // Modal Handlers
    const openModal = () => {
        setModalImageIndex(0);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // prevent background scroll
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextModalImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setModalImageIndex((prev) => (prev + 1) % activeProject.images.length);
    };

    const prevModalImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setModalImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
    };

    const handleModalTouchStart = (e: React.TouchEvent) => setModalTouchStart(e.targetTouches[0].clientX);
    const handleModalTouchEnd = (e: React.TouchEvent) => {
        if (!modalTouchStart) return;
        const touchEnd = e.changedTouches[0].clientX;
        const distance = modalTouchStart - touchEnd;
        
        if (distance > 50) nextModalImage();
        if (distance < -50) prevModalImage();
        setModalTouchStart(null);
    };

    return (
        <section id="proyectos" className="py-24 bg-transparent border-t border-nd-border">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
                <div className="mb-12 border-b border-nd-border pb-6">
                    <span className="label-font text-xs text-nd-textSecondary">03 / PROYECTOS_DESTACADOS</span>
                    <h2 className="display-font text-4xl md:text-5xl lg:text-6xl text-nd-textDisplay mt-4">
                        SISTEMAS<br/>CONSTRUIDOS
                    </h2>
                </div>

                <div className="nothing-card p-0 overflow-hidden flex flex-col-reverse lg:flex-row min-h-[500px]">
                    {/* Left: Info */}
                    <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col border-t lg:border-t-0 lg:border-r border-nd-border bg-nd-black">
                        <div className="label-font text-[11px] text-nd-textSecondary border border-nd-border-visible rounded-md px-3 py-1 w-max mb-8">
                            {activeProject.category}
                        </div>
                        
                        <h3 className="text-3xl font-medium text-nd-textDisplay mb-6">
                            {activeProject.title}
                        </h3>
                        
                        <p className="text-nd-textPrimary text-sm mb-12 flex-grow leading-relaxed">
                            {activeProject.description}
                        </p>
                        
                        <button 
                            className="nothing-btn-secondary w-full group overflow-hidden border-nd-border-visible"
                            onClick={() => window.open(activeProject.url, '_blank')}
                        >
                            <span className="flex items-center gap-3">
                                [ VER_PROYECTO ]
                                <ExternalLink className="w-4 h-4 text-nd-textSecondary group-hover:text-nd-textDisplay transition-colors" strokeWidth={1.5} />
                            </span>
                        </button>
                    </div>

                    {/* Right: Visual */}
                    <div 
                        className="w-full lg:w-2/3 bg-nd-surface flex items-center justify-center p-8 relative min-h-[350px] lg:min-h-[500px] cursor-grab active:cursor-grabbing group"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="absolute inset-0 dot-grid-subtle opacity-30 pointer-events-none" />
                        
                        {/* Interactive Wrapper to open modal */}
                        <div 
                            className="relative z-10 cursor-pointer flex items-center justify-center"
                            onClick={openModal}
                            title="Ampliar imágenes del proyecto"
                        >
                            <img 
                                src={activeProject.image} 
                                alt={activeProject.title} 
                                className="max-w-full max-h-[400px] object-contain border border-nd-border rounded-lg shadow-sm bg-nd-black group-hover:border-nd-accent/50 transition-colors"
                            />
                            {/* Hover Overlay Hint for Desktop */}
                            <div className="absolute inset-0 bg-nd-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg backdrop-blur-[2px]">
                                <div className="bg-nd-black border border-nd-border px-4 py-2 flex items-center gap-2 label-font text-xs text-nd-textDisplay">
                                    <ZoomIn className="w-4 h-4" /> [ AMPLIAR_GALERÍA ]
                                </div>
                            </div>
                        </div>
                        
                        {/* Image Controls (Project Switchers) */}
                        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
                            <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="w-10 h-10 flex items-center justify-center bg-nd-black border border-nd-border hover:bg-nd-surfaceRaised transition-colors pointer-events-auto">
                                <ChevronLeft className="w-5 h-5 text-nd-textDisplay" strokeWidth={1.5} />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="w-10 h-10 flex items-center justify-center bg-nd-black border border-nd-border hover:bg-nd-surfaceRaised transition-colors pointer-events-auto">
                                <ChevronRight className="w-5 h-5 text-nd-textDisplay" strokeWidth={1.5} />
                            </button>
                        </div>

                        <div className="absolute right-4 bottom-4 label-font text-[10px] text-nd-textSecondary bg-nd-black border border-nd-border px-3 py-1 z-20 pointer-events-none">
                            IMG_{activeIndex + 1}/{projects.length}
                        </div>
                    </div>
                </div>
            </div>

            {/* FULLSCREEN MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] bg-nd-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 lg:p-10">
                    <div className="absolute top-0 left-0 right-0 p-4 lg:p-8 flex justify-between items-center border-b border-nd-border/50 bg-nd-black/50 overflow-hidden">
                        <span className="label-font text-xs lg:text-sm text-nd-textDisplay tracking-widest hidden sm:block">
                            [ {activeProject.title.toUpperCase()} ]
                        </span>
                        
                        <div className="flex items-center gap-6 z-50">
                            <span className="label-font text-[10px] text-nd-textSecondary">
                                / ARCHIVO_{modalImageIndex + 1}_DE_{activeProject.images.length} /
                            </span>
                            <button 
                                onClick={closeModal}
                                className="w-10 h-10 flex flex-shrink-0 items-center justify-center text-nd-textSecondary hover:text-nd-accent hover:border-nd-accent transition-colors border border-nd-border"
                            >
                                <X className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    <div 
                        className="relative w-full max-w-6xl flex-grow flex flex-col items-center justify-center mt-20 sm:mt-16 overflow-hidden cursor-grab active:cursor-grabbing"
                        onTouchStart={handleModalTouchStart}
                        onTouchEnd={handleModalTouchEnd}
                    >
                        <img 
                            src={activeProject.images[modalImageIndex]} 
                            alt={`${activeProject.title} - captura ${modalImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain pointer-events-none select-none border border-nd-border bg-nd-black shadow-2xl" 
                        />

                        {activeProject.images.length > 1 && (
                            <>
                                <button 
                                    onClick={prevModalImage}
                                    className="absolute left-2 sm:left-0 lg:-left-20 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-nd-black border border-nd-border text-nd-textSecondary hover:text-nd-accent hover:border-nd-accent transition-all z-50 pointer-events-auto"
                                >
                                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                </button>
                                <button 
                                    onClick={nextModalImage}
                                    className="absolute right-2 sm:right-0 lg:-right-20 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-nd-black border border-nd-border text-nd-textSecondary hover:text-nd-accent hover:border-nd-accent transition-all z-50 pointer-events-auto"
                                >
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                </button>

                                {/* Mobile Modal indicators */}
                                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 sm:hidden z-50">
                                    {activeProject.images.map((_, i) => (
                                        <div 
                                            key={i} 
                                            className={`h-1 transition-all ${i === modalImageIndex ? 'w-6 bg-nd-accent' : 'w-2 bg-nd-border'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsCarousel;