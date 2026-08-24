import { ArrowDown, ArrowUpRight, Github, MapPin } from "lucide-react";
import { lazy, Suspense, useState } from "react";

const AsciiObject = lazy(() => import("./canvasui/AsciiObject"));

const focusStack = ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL"];

const PikachuAscii = () => {
  const [ready, setReady] = useState(false);
  return (
    <>
      <pre aria-hidden className={`absolute inset-0 grid place-items-center whitespace-pre font-mono text-[10px] leading-[1.05] text-nd-accent transition-opacity duration-700 sm:text-sm ${ready ? "opacity-0" : "opacity-55"}`}>{`       /\\     /\\
      /  \\___/  \\
     /           \\
    |  ●       ●  |
    |      ᴗ      |
    |  ◉       ◉  |
     \\    ⚡    /
      \\_______/
       /|     |\\`}</pre>
      <Suspense fallback={null}><AsciiObject onLoad={() => setReady(true)} src="/ascii/pikachu.svg" className={`h-full w-full transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`} ascii cellSize={8} cellAspect={0.58} charset=" .:-=+*#%@" colored={false} color="#8cf5ff" contrast={1.8} edgeContrast={4} exposure={1.15} background="" highlight="#988cff" scale={3.3} yOffset={-0.05} floatIntensity={1.2} rotationIntensity={0.6} floatSpeed={1.4} orbit zoom={false} autoRotate autoRotateSpeed={0.7} /></Suspense>
    </>
  );
};

const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden pb-14 pt-24 md:pb-20 md:pt-28">
    <div className="blueprint-grid absolute inset-0 opacity-60" />
    <div className="absolute -right-[26rem] -top-[32rem] h-[68rem] w-[68rem] rounded-full border border-white/[.06]" />

    <div className="page-shell relative z-10">
      <div className="grid items-center gap-8 pt-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 lg:pt-8">
        <div className="order-2 lg:order-1">
          <div className="glass-edge relative h-[280px] overflow-hidden rounded-[26px] sm:h-[340px] lg:h-[500px]">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/[.08] px-4 py-3 label-font text-[8px] text-nd-textDisabled"><span>ASCII_OBJECT / 025</span><span className="text-nd-accent">DRAG TO ROTATE</span></div>
            <PikachuAscii />
            <div className="pointer-events-none absolute bottom-4 left-4 z-10 label-font text-[8px] text-nd-textSecondary">PIKACHU.SVG → ASCII</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 label-font text-[8px] text-nd-textSecondary md:mb-7">
            <span className="flex items-center gap-2 text-nd-accent"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-nd-accent shadow-[0_0_14px_#8cf5ff]" /> DISPONIBLE PARA PROYECTOS</span>
            <span className="flex items-center gap-2"><MapPin className="h-3 w-3" /> COCHABAMBA, BOLIVIA</span>
          </div>
          <p className="text-sm font-medium text-nd-textSecondary md:text-base">Hola, soy</p>
          <h1 className="display-font ice-text mt-1 text-[clamp(3.6rem,7vw,7rem)] font-medium leading-[.9] tracking-[-.065em]">Alvaro Asllani.</h1>
          <p className="display-font mt-3 text-2xl font-medium tracking-[-.035em] text-nd-accent md:text-4xl">Desarrollador full-stack.</p>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-nd-textSecondary md:text-base md:leading-7">Desarrollo aplicaciones web, sistemas de negocio, e-commerce y experiencias móviles. Trabajo desde la interfaz hasta la base de datos y el deploy.</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#proyectos" className="frost-button">Ver proyectos <ArrowDown className="h-4 w-4" /></a>
            <a href="https://github.com/alvaroasllani" target="_blank" rel="noreferrer" className="ghost-button"><Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-4 w-4" /></a>
          </div>

          <div className="mt-7 rounded-[22px] border border-white/[.08] bg-white/[.025] p-4 md:p-5">
            <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><Github className="h-5 w-5 text-nd-accent" /><div><p className="text-sm font-semibold text-nd-textDisplay">github.com/alvaroasllani</p><p className="mt-0.5 text-[10px] text-nd-textSecondary">Repositorios y código de proyectos</p></div></div><ArrowUpRight className="h-4 w-4 text-nd-textSecondary" /></div>
            <div className="mt-4 flex flex-wrap gap-2">{focusStack.map((tech) => <span key={tech} className="rounded-full border border-white/[.08] bg-white/[.035] px-3 py-1.5 text-[9px] font-medium text-nd-textPrimary">{tech}</span>)}</div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4 border-t border-white/[.08] pt-4 label-font text-[8px] text-nd-textDisabled"><span>SCROLL PARA EXPLORAR</span><span className="h-px flex-1 origin-left bg-gradient-to-r from-nd-accent/60 to-transparent [animation:pulse-line_2.5s_ease-in-out_infinite]" /></div>
    </div>
  </section>
);

export default HeroSection;
