import { lazy, Suspense, useState } from "react";
import { ArrowUpRight, Boxes, ChartNoAxesCombined, PanelsTopLeft, Smartphone, ShoppingBag } from "lucide-react";

const AsciiObject = lazy(() => import("./canvasui/AsciiObject"));

const CodeAscii = ({ src }: { src: string }) => {
  const [ready, setReady] = useState(false);
  return (
    <>
      <pre aria-hidden className={`absolute inset-0 grid place-items-center font-mono text-5xl text-nd-accent transition-opacity duration-700 md:text-7xl ${ready ? "opacity-0" : "opacity-35"}`}>{`< / >`}</pre>
      <Suspense fallback={null}><AsciiObject onLoad={() => setReady(true)} src={src} className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${ready ? "opacity-90" : "opacity-0"}`} ascii cellSize={9} cellAspect={0.56} charset=" .:-=+*#%@" colored={false} color="#8cf5ff" contrast={1.7} edgeContrast={4} exposure={1.2} background="" highlight="#988cff" scale={2.8} floatIntensity={0.9} rotationIntensity={0.5} floatSpeed={1.2} orbit zoom={false} autoRotate autoRotateSpeed={0.55} /></Suspense>
    </>
  );
};

const services = [
  { icon: PanelsTopLeft, ascii: "/ascii/code-object.svg", title: "Experiencias web", short: "Web", text: "Landings y plataformas rápidas, claras y diseñadas para convertir atención en acción.", tags: ["UI/UX", "React", "SEO"] },
  { icon: Smartphone, ascii: "/ascii/mobile-object.svg", title: "Productos móviles", short: "Mobile", text: "Aplicaciones fluidas para cualquier pantalla, desde el prototipo hasta producción.", tags: ["iOS", "Android", "PWA"] },
  { icon: ChartNoAxesCombined, ascii: "/ascii/systems-object.svg", title: "Sistemas de negocio", short: "Sistemas", text: "ERP, CRM y herramientas internas que convierten procesos complejos en flujos simples.", tags: ["Dashboards", "Datos", "Automatización"] },
  { icon: ShoppingBag, ascii: "/ascii/commerce-object.svg", title: "Comercio digital", short: "Commerce", text: "Tiendas preparadas para catálogo, pagos, inventario y crecimiento continuo.", tags: ["E-commerce", "Pagos", "Operaciones"] },
  { icon: Boxes, ascii: "/ascii/custom-object.svg", title: "Soluciones a medida", short: "Custom", text: "Arquitectura y experiencia diseñadas alrededor de una necesidad específica del negocio.", tags: ["Discovery", "Arquitectura", "Escala"] },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const current = services[active];
  const ActiveIcon = current.icon;

  return (
    <section id="servicios" className="relative py-16 md:py-24">
      <div className="page-shell">
        <div className="mb-8 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
          <div><p className="section-kicker mb-3">Capacidades</p><h2 className="display-font ice-text text-balance text-4xl font-medium leading-none tracking-[-.045em] md:text-6xl">Qué puedo construir.</h2></div>
          <p className="max-w-md text-sm leading-6 text-nd-textSecondary md:justify-self-end">Diseño, frontend y backend conectados en un mismo proceso.</p>
        </div>

        <div className="glass-edge overflow-hidden rounded-[26px]">
          <div className="no-scrollbar flex overflow-x-auto border-b border-white/[.08] p-2">
            {services.map((service, index) => <button key={service.title} onClick={() => setActive(index)} className={`min-w-max flex-1 rounded-full px-4 py-2.5 text-[11px] transition-all ${active === index ? "bg-white/10 text-white" : "text-nd-textSecondary hover:text-white"}`}><span className="label-font mr-2 text-[8px] text-nd-accent">0{index + 1}</span>{service.short}</button>)}
          </div>

          <div className="relative grid overflow-hidden md:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-[300px] overflow-hidden border-b border-white/[.08] md:min-h-[360px] md:border-b-0 md:border-r">
              <CodeAscii key={current.ascii} src={current.ascii} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090b15] via-[#090b15]/85 to-transparent p-6 pt-20 md:p-8 md:pt-24">
                <div className="flex items-end justify-between gap-4"><div><p className="label-font mb-2 text-[8px] text-nd-textSecondary">CAPACIDAD / 0{active + 1}</p><h3 className="display-font text-3xl font-medium tracking-[-.04em] text-nd-textDisplay md:text-4xl">{current.title}</h3></div><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-nd-accent text-nd-black"><ActiveIcon className="h-5 w-5" /></span></div>
              </div>
            </div>

            <div className="flex min-h-[300px] flex-col justify-between p-6 md:min-h-[360px] md:p-9 lg:p-12">
              <p key={active} className="max-w-xl text-balance text-xl leading-snug text-nd-textPrimary md:text-2xl">{current.text}</p>
              <div className="mt-12 flex flex-wrap items-end justify-between gap-6"><div className="flex flex-wrap gap-2">{current.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-2 label-font text-[8px] text-nd-textSecondary">{tag}</span>)}</div><a href="#contacto" className="group flex items-center gap-2 text-xs font-semibold text-nd-textDisplay">Hablar del proyecto <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
