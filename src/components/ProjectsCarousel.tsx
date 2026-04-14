import { useState } from 'react';
import { ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    images: string[];
    url: string;
    stats: { label: string; value: string }[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "APP INMOBILIARIA",
        description: "Aplicación móvil diseñada para inmobiliarias que permite gestionar captaciones, propiedades y clientes de forma eficiente. Interfaz intuitiva y optimizada para el trabajo en campo.",
        category: "MOBILE APP",
        image: "/img/inmobiliaria/1.png",
        images: ["/img/inmobiliaria/1.png", "/img/inmobiliaria/2.png", "/img/inmobiliaria/3.png"],
        url: "https://app-inmobiliaria.glide.page",
        stats: [
            { label: "STACK", value: "GLIDEAPPS" },
            { label: "DB", value: "INTEGRADA" },
            { label: "PLATAFORMAS", value: "WEB / MOBILE" }
        ]
    },
    {
        id: 2,
        title: "ECOMMERCE SAYQA",
        description: "Tienda online de medicina natural con catálogo completo de productos, carrito de compras inteligente y múltiples pasarelas de pago integradas para una experiencia de compra fluida.",
        category: "E-COMMERCE",
        image: "/img/ecommerce/1.png",
        images: ["/img/ecommerce/1.png", "/img/ecommerce/2.png", "/img/ecommerce/3.png"],
        url: "https://sayqamedicinanatural.com/",
        stats: [
            { label: "STACK", value: "NEXT.JS / NEST.JS" },
            { label: "DB", value: "MYSQL" },
            { label: "TIPO", value: "TIENDA ONLINE" }
        ]
    },
    {
        id: 3,
        title: "SISTEMA ERP",
        description: "Sistema integral de punto de venta con gestión de inventario en tiempo real, módulo de ventas, reportes analíticos avanzados y control financiero completo.",
        category: "ERP / POS",
        image: "/img/erp/1.png",
        images: ["/img/erp/1.png", "/img/erp/2.png", "/img/erp/3.png"],
        url: "https://erp-sistemadeventa-web.vercel.app/pos",
        stats: [
            { label: "STACK", value: "NEXT.JS / NEST.JS" },
            { label: "DB", value: "POSTGRES" },
            { label: "ANALÍTICA", value: "TIEMPO REAL" }
        ]
    },
    {
        id: 4,
        title: "JUEGO ESCUDARÍA",
        description: "Juego educativo interactivo para Android. Diseñado para ofrecer una experiencia lúdica y de aprendizaje inmersiva.",
        category: "ANDROID GAME",
        image: "/img/escudaria/1.png",
        images: [],
        url: "#",
        stats: [
            { label: "STACK", value: "UNITY / C#" },
            { label: "PLATFORM", value: "ANDROID" },
            { label: "TIPO", value: "JUEGO EDUCATIVO" }
        ]
    },
    {
        id: 5,
        title: "BECERRA & ASOCIADOS",
        description: "Landing page corporativa para constructora. Diseño moderno y profesional enfocado en la presentación de servicios y proyectos de arquitectura.",
        category: "LANDING PAGE",
        image: "/img/becerra/1.png",
        images: [],
        url: "#",
        stats: [
            { label: "STACK", value: "HTML / CSS / JS" },
            { label: "DB", value: "N/A" },
            { label: "RUBRO", value: "CONSTRUCCIÓN" }
        ]
    },
    {
        id: 6,
        title: "CONSTRUCTORA AMULEK",
        description: "Sitio web institucional para empresa constructora, destacando portafolio de obras, servicios y contacto directo.",
        category: "LANDING PAGE",
        image: "/img/amulek/1.png",
        images: [],
        url: "#",
        stats: [
            { label: "STACK", value: "HTML / CSS / JS" },
            { label: "DB", value: "N/A" },
            { label: "RUBRO", value: "CONSTRUCCIÓN" }
        ]
    },
    {
        id: 7,
        title: "ALMASTREET",
        description: "Plataforma de e-commerce moderna y escalable. Optimizada para conversión y experiencia de usuario fluida en compras online.",
        category: "E-COMMERCE",
        image: "/img/almastreet/1.png",
        images: [],
        url: "#",
        stats: [
            { label: "STACK", value: "NEXT.JS / NEST.JS" },
            { label: "DB", value: "MYSQL" },
            { label: "TIPO", value: "TIENDA ONLINE" }
        ]
    },
    {
        id: 8,
        title: "LAFAVELABOLIVIA",
        description: "Tienda virtual de alto rendimiento con catálogo dinámico y gestión de inventario robusta para la marca.",
        category: "E-COMMERCE",
        image: "/img/lafavelabolivia/1.png",
        images: [],
        url: "#",
        stats: [
            { label: "STACK", value: "NEXT.JS / NEST.JS" },
            { label: "DB", value: "MYSQL" },
            { label: "TIPO", value: "TIENDA ONLINE" }
        ]
    }
];

const ProjectsGrid = () => {
    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [modalTouchStart, setModalTouchStart] = useState<number | null>(null);

    // Modal Handlers
    const openModal = (project: Project) => {
        if (project.images.length === 0) return; // Prevent modal if no images
        setActiveProject(project);
        setModalImageIndex(0);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveProject(null);
        document.body.style.overflow = 'auto';
    };

    const nextModalImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (activeProject) {
            setModalImageIndex((prev) => (prev + 1) % activeProject.images.length);
        }
    };

    const prevModalImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (activeProject) {
            setModalImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
        }
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
                
                {/* Header Area */}
                <div className="mb-16">
                    <h2 className="display-font text-4xl md:text-5xl lg:text-7xl text-nd-textDisplay tracking-tight uppercase mb-4">
                        SISTEMAS CONSTRUIDOS
                    </h2>
                    <div className="flex flex-wrap gap-4 label-font text-[10px] md:text-xs text-nd-textSecondary">
                        <span>[ PROYECTOS DESARROLLADOS: {String(projects.length).padStart(3, '0')} ]</span>
                        <span>[ ESTADO: COMPLETADOS ]</span>
                    </div>
                </div>

                {/* Grid Area */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="flex flex-col nothing-card p-3 sm:p-4 md:p-6 border-nd-border relative group"
                        >
                            {/* Image Box */}
                            <div 
                                className={`relative bg-nd-black border border-nd-border-visible rounded h-[120px] sm:h-[160px] md:h-[200px] flex items-center justify-center p-2 md:p-4 mb-8 md:mb-8 ${project.images.length > 0 ? 'cursor-pointer' : 'cursor-default'}`}
                                onClick={() => openModal(project)}
                            >
                                <div className="absolute inset-0 dot-grid-subtle opacity-20 pointer-events-none" />
                                
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="max-h-full max-w-full object-contain relative z-10 scale-95 group-hover:scale-100 transition-transform duration-500 ease-out" 
                                    onError={(e) => { 
                                        e.currentTarget.style.display = 'none'; 
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }} 
                                />
                                <div className="hidden absolute inset-0 flex items-center justify-center label-font text-[8px] md:text-xs text-nd-textDisabled border-2 border-dashed border-nd-border-visible m-2 md:m-4 pointer-events-none">
                                    [ ASSET_PENDING ]
                                </div>
                                
                                {/* Hover Indicator for Galley (if has images) */}
                                {project.images.length > 0 && (
                                    <div className="absolute top-1 right-1 md:top-2 md:right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-nd-black/80 backdrop-blur-sm border border-nd-border px-1.5 py-1 md:px-2 md:py-1 rounded label-font text-[8px] md:text-[9px] text-nd-textDisplay flex items-center gap-1 z-30 pointer-events-none">
                                        <ZoomIn className="w-2 h-2 md:w-3 md:h-3" />
                                    </div>
                                )}
                                
                                {/* Stats Box */}
                                <div className="absolute -right-1 -bottom-4 md:-right-2 md:-bottom-4 lg:-right-4 lg:-bottom-4 bg-nd-surface border border-nd-border px-1.5 md:px-3 py-1 md:py-2 shadow-xl z-20 w-[95px] md:w-[140px] rounded shadow-black/80 pointer-events-none">
                                    {project.stats.map((s) => (
                                        <div key={s.label} className="border-b border-nd-border pb-[2px] mb-[2px] md:pb-1 md:mb-1 last:border-0 last:pb-0 last:mb-0">
                                            <div className="label-font text-[6px] md:text-[8px] text-nd-textSecondary leading-none">{s.label}:</div>
                                            <div className="label-font text-[7px] md:text-[10px] text-nd-textPrimary truncate mt-[2px] leading-tight" title={s.value}>{s.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow flex flex-col mt-4 md:mt-4">
                                <h3 className="text-sm sm:text-base lg:text-xl font-medium text-nd-textDisplay mb-2 md:mb-3 truncate" title={project.title}>
                                    {project.title}
                                </h3>
                                <p className="text-nd-textPrimary text-[11px] md:text-sm mb-4 md:mb-8 line-clamp-3 md:line-clamp-4 opacity-90 leading-tight md:leading-relaxed font-sans flex-grow">
                                    {project.description}
                                </p>
                                
                                <div className="mt-auto">
                                    <button 
                                        className="label-font text-[9px] md:text-[11px] text-nd-textPrimary hover:text-nd-textDisplay hover:tracking-widest flex items-center gap-1 md:gap-2 transition-all duration-300 uppercase whitespace-nowrap"
                                        onClick={() => project.url !== '#' ? window.open(project.url, '_blank') : null}
                                    >
                                        [ VER_PROYECTO ]
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FULLSCREEN MODAL */}
            {isModalOpen && activeProject && (
                <div 
                    className="fixed inset-0 z-[100] bg-nd-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 lg:p-10 cursor-pointer"
                    onClick={closeModal}
                >
                    <div 
                        className="absolute top-0 left-0 right-0 p-4 lg:p-8 flex justify-between items-center border-b border-nd-border/50 bg-nd-black/50 overflow-hidden cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="label-font text-xs lg:text-sm text-nd-textDisplay tracking-widest hidden sm:block">
                            [ {activeProject.title.toUpperCase()} ]
                        </span>
                        
                        <div className="flex items-center gap-6 z-50">
                            <span className="label-font text-[10px] text-nd-textSecondary">
                                / ARCHIVO_{modalImageIndex + 1}_DE_{activeProject.images.length} /
                            </span>
                            <button 
                                onClick={closeModal}
                                className="w-10 h-10 flex flex-shrink-0 items-center justify-center text-nd-textSecondary hover:text-nd-accent hover:border-nd-accent transition-colors border border-nd-border cursor-pointer"
                            >
                                <X className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    <div 
                        className="relative w-full max-w-6xl flex-grow flex flex-col items-center justify-center mt-20 sm:mt-16 sm:px-16 active:cursor-grabbing"
                        onTouchStart={handleModalTouchStart}
                        onTouchEnd={handleModalTouchEnd}
                    >
                        <img 
                            src={activeProject.images[modalImageIndex]} 
                            alt={`${activeProject.title} - captura ${modalImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain pointer-events-auto select-none border border-nd-border bg-nd-black shadow-2xl cursor-default" 
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        {activeProject.images.length > 1 && (
                            <>
                                <button 
                                    onClick={prevModalImage}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-nd-black border border-nd-border text-nd-textSecondary hover:text-nd-accent hover:border-nd-accent transition-all z-50 pointer-events-auto shadow-xl cursor-pointer"
                                >
                                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                </button>
                                <button 
                                    onClick={nextModalImage}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-nd-black border border-nd-border text-nd-textSecondary hover:text-nd-accent hover:border-nd-accent transition-all z-50 pointer-events-auto shadow-xl cursor-pointer"
                                >
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsGrid;