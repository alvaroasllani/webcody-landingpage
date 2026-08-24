import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";

interface Project { title: string; category: string; year: string; description: string; image: string; images: string[]; url: string; stack: string; }

const projects: Project[] = [
  { title: "Sayqa", category: "E-commerce", year: "2025", description: "Una experiencia de compra para medicina natural: catálogo, carrito y pagos conectados en un recorrido simple y confiable.", image: "/img/ecommerce/1.png", images: ["/img/ecommerce/1.png", "/img/ecommerce/2.png", "/img/ecommerce/3.png", "/img/ecommerce/10.png"], url: "https://sayqamedicinanatural.com/", stack: "Next.js · Nest.js · MySQL" },
  { title: "Sistema ERP", category: "Producto SaaS", year: "2025", description: "Inventario, ventas, finanzas y analítica en tiempo real reunidos en un sistema operativo claro para el negocio.", image: "/img/erp/1.png", images: ["/img/erp/1.png", "/img/erp/2.png", "/img/erp/3.png", "/img/erp/6.png"], url: "https://erp-sistemadeventa-web.vercel.app/", stack: "Next.js · Nest.js · PostgreSQL" },
  { title: "Residencia", category: "Aplicación móvil", year: "2025", description: "Una herramienta de campo para inmobiliarias que organiza propiedades, captaciones y clientes sin fricción.", image: "/img/inmobiliaria/1.png", images: ["/img/inmobiliaria/1.png", "/img/inmobiliaria/2.png", "/img/inmobiliaria/3.png"], url: "https://residencia-consultor-ls6s.glide.page", stack: "Glide Apps · Mobile" },
  { title: "Escudaría", category: "Juego Android", year: "2024", description: "Aprendizaje y juego se encuentran en una experiencia interactiva creada para mantener la curiosidad en movimiento.", image: "/img/Escudaria/1.jpeg", images: ["/img/Escudaria/1.jpeg", "/img/Escudaria/2.jpeg", "/img/Escudaria/3.jpeg", "/img/Escudaria/4.jpeg"], url: "https://play.google.com/store/apps/details?id=com.webcody.escudaria&pcampaignid=web_share", stack: "Unity · C# · Android" },
  { title: "Becerra", category: "Web corporativa", year: "2024", description: "Una presencia digital sobria y visual para una constructora que necesitaba transmitir precisión antes del primer contacto.", image: "/img/Becerra/1.png", images: ["/img/Becerra/1.png", "/img/Becerra/2.png", "/img/Becerra/4.png", "/img/Becerra/6.png"], url: "https://becerraconstrucciones.com/", stack: "HTML · CSS · JavaScript" },
  { title: "Amulek", category: "Web corporativa", year: "2024", description: "Arquitectura, obra y servicios presentados mediante una experiencia institucional directa, cálida y fácil de recorrer.", image: "/img/Amulek/1.png", images: ["/img/Amulek/1.png", "/img/Amulek/2.png", "/img/Amulek/4.png", "/img/Amulek/8.png"], url: "https://amulekconstrucciones.com/", stack: "HTML · CSS · JavaScript" },
];

interface ProjectCardProps { project: Project; index: number; onOpen: () => void; }

const ProjectCard = ({ project, index, onOpen }: ProjectCardProps) => {
  const featured = index === 0;
  const medium = index === 1 || index === 2;
  const span = featured ? "lg:col-span-12" : medium ? "lg:col-span-6" : "lg:col-span-4";

  if (featured) {
    return (
      <article className={`${span} glass-edge group relative grid overflow-hidden rounded-[30px] lg:min-h-[560px] lg:grid-cols-[.68fr_.32fr]`}>
        <button onClick={onOpen} className="relative min-h-[300px] overflow-hidden bg-[#070913] text-left md:min-h-[360px]" aria-label={`Abrir galería de ${project.title}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_48%,rgba(140,245,255,.13),transparent_55%)]" />
          <div className="absolute left-[8%] right-[8%] top-[10%] h-[78%] rotate-[-3deg] overflow-hidden rounded-[24px] border border-white/10 opacity-35 transition-transform duration-700 group-hover:-translate-x-5 group-hover:-rotate-[6deg]"><img src={project.images[1]} alt="" className="h-full w-full object-cover object-top" /></div>
          <div className="absolute left-[5%] right-[4%] top-[12%] h-[76%] overflow-hidden rounded-[24px] border border-white/[.16] bg-[#0a0c14] p-2 shadow-[0_45px_110px_rgba(0,0,0,.6)] transition-transform duration-700 group-hover:-translate-y-3 group-hover:rotate-[1deg]">
            <div className="flex h-7 items-center gap-1.5 px-3"><span className="h-1.5 w-1.5 rounded-full bg-white/20" /><span className="h-1.5 w-1.5 rounded-full bg-white/10" /><span className="h-1.5 w-1.5 rounded-full bg-nd-accent/60" /></div>
            <img src={project.image} alt={`Vista principal de ${project.title}`} className="h-[calc(100%-1.75rem)] w-full rounded-[17px] object-cover object-top" />
          </div>
          <span className="absolute bottom-7 right-7 grid h-16 w-16 place-items-center rounded-full bg-nd-textDisplay text-nd-black shadow-2xl transition-transform duration-500 group-hover:scale-110"><Expand className="h-5 w-5" /></span>
        </button>
        <div className="relative flex flex-col justify-between border-t border-white/[.08] p-6 lg:border-l lg:border-t-0 lg:p-8">
          <div className="flex justify-between gap-5 label-font text-[9px] text-nd-textSecondary"><span className="text-nd-accent">PROYECTO DESTACADO</span><span>{project.year}</span></div>
          <div className="my-8 lg:my-0"><p className="text-[10px] font-medium uppercase tracking-[.18em] text-nd-textSecondary">{project.category}</p><h3 className="display-font mt-3 text-5xl font-medium leading-none tracking-[-.06em] text-nd-textDisplay lg:text-6xl">{project.title}</h3><p className="mt-5 text-sm leading-6 text-nd-textSecondary">{project.description}</p><p className="label-font mt-4 text-[8px] text-nd-textDisabled">{project.stack}</p></div>
          <div className="flex flex-col gap-3"><a href={project.url} target="_blank" rel="noreferrer" className="frost-button">Abrir proyecto <ArrowUpRight className="h-4 w-4" /></a><button onClick={onOpen} className="ghost-button">Explorar capturas <Expand className="h-4 w-4" /></button></div>
        </div>
      </article>
    );
  }

  return (
    <article className={`${span} glass-edge group overflow-hidden rounded-[30px] [content-visibility:auto]`}>
      <button onClick={onOpen} className={`relative block h-[250px] w-full overflow-hidden bg-[#070913] text-left ${medium ? "md:h-[330px]" : "md:h-[270px]"}`} aria-label={`Abrir galería de ${project.title}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,103,255,.11),transparent_65%)]" />
        <div className="absolute left-[8%] right-[8%] top-[13%] h-[76%] rotate-[3deg] overflow-hidden rounded-[20px] border border-white/10 opacity-35 transition-transform duration-700 group-hover:translate-x-4 group-hover:rotate-[6deg]"><img src={project.images[1] ?? project.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-top" /></div>
        <div className="absolute left-[5%] right-[5%] top-[10%] h-[78%] overflow-hidden rounded-[21px] border border-white/[.14] bg-[#0a0c14] p-1.5 shadow-2xl transition-transform duration-700 group-hover:-translate-y-3 group-hover:-rotate-[1deg]"><img src={project.image} alt={`Vista de ${project.title}`} loading="lazy" decoding="async" className="h-full w-full rounded-[16px] object-cover object-top" /></div>
        <span className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-nd-textDisplay text-nd-black opacity-0 shadow-2xl transition-all duration-300 group-hover:opacity-100"><Expand className="h-4 w-4" /></span>
      </button>
      <div className="border-t border-white/[.08] p-5 md:p-6">
        <div className="flex items-center justify-between gap-4 label-font text-[8px] text-nd-textSecondary"><span className="text-nd-accent">{project.category}</span><span>{project.year}</span></div>
        <h3 className={`display-font mt-4 font-medium leading-none tracking-[-.055em] text-nd-textDisplay ${medium ? "text-4xl md:text-5xl" : "text-4xl"}`}>{project.title}</h3>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-nd-textSecondary md:line-clamp-3">{project.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/[.07] pt-4"><span className="label-font text-[8px] text-nd-textDisabled">{project.stack}</span><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar ${project.title}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-nd-textDisplay transition-colors hover:bg-nd-accent hover:text-nd-black"><ArrowUpRight className="h-4 w-4" /></a></div>
      </div>
    </article>
  );
};

const ProjectsCarousel = () => {
  const [gallery, setGallery] = useState<number | null>(null);
  const [shot, setShot] = useState(0);
  const selected = gallery === null ? null : projects[gallery];

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setGallery(null); if (event.key === "ArrowRight") setShot((value) => (value + 1) % selected.images.length); if (event.key === "ArrowLeft") setShot((value) => (value - 1 + selected.images.length) % selected.images.length); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [selected]);

  const openGallery = (index: number) => { setGallery(index); setShot(0); };

  return (
    <section id="proyectos" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-x-0 top-[34rem] h-[48rem] bg-[radial-gradient(ellipse_at_center,rgba(108,105,255,.13),transparent_67%)]" />
      <div className="page-shell relative">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_.65fr] md:items-end">
          <div><p className="section-kicker mb-3">Proyectos realizados / {String(projects.length).padStart(2, "0")}</p><h2 className="display-font ice-text text-balance text-5xl font-medium leading-none tracking-[-.05em] md:text-7xl">Proyectos realizados.</h2></div>
          <p className="max-w-md text-base leading-7 text-nd-textSecondary md:justify-self-end">No son conceptos ni mockups. Son aplicaciones, tiendas, sistemas y experiencias publicadas que puedes abrir, recorrer y probar.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} onOpen={() => openGallery(index)} />)}</div>
      </div>

      <AnimatePresence>
        {selected ? <motion.div role="dialog" aria-modal="true" aria-label={`Galería de ${selected.title}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-[#03040a]/96 p-4 backdrop-blur-xl" onClick={() => setGallery(null)}>
          <button onClick={() => setGallery(null)} className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white" aria-label="Cerrar galería"><X /></button>
          <div className="absolute left-5 top-6 label-font text-[9px] text-nd-textSecondary">{selected.title} · {String(shot + 1).padStart(2, "0")} / {String(selected.images.length).padStart(2, "0")}</div>
          <motion.img key={selected.images[shot]} initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} src={selected.images[shot]} alt={`${selected.title}, captura ${shot + 1}`} className="max-h-[82vh] max-w-[92vw] rounded-[20px] border border-white/10 object-contain shadow-2xl" onClick={(event) => event.stopPropagation()} />
          {selected.images.length > 1 ? <><button onClick={(event) => { event.stopPropagation(); setShot((value) => (value - 1 + selected.images.length) % selected.images.length); }} className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md" aria-label="Captura anterior"><ArrowLeft /></button><button onClick={(event) => { event.stopPropagation(); setShot((value) => (value + 1) % selected.images.length); }} className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md" aria-label="Captura siguiente"><ArrowRight /></button></> : null}
        </motion.div> : null}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsCarousel;
