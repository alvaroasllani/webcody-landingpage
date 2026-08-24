import { ArrowUpRight, Github } from "lucide-react";

const technologies = [
  ["typescript", "3178C6", "TypeScript", "Lenguaje"], ["react", "61DAFB", "React", "Frontend"], ["nextdotjs", "F4F8FF", "Next.js", "Framework"],
  ["nodedotjs", "5FA04E", "Node.js", "Runtime"], ["nestjs", "E0234E", "NestJS", "Backend"], ["postgresql", "4169E1", "PostgreSQL", "Datos"],
  ["mysql", "4479A1", "MySQL", "Datos"], ["tailwindcss", "06B6D4", "Tailwind", "UI"], ["laravel", "FF2D20", "Laravel", "Backend"],
  ["python", "3776AB", "Python", "Lenguaje"], ["unity", "F4F8FF", "Unity", "Games"], ["docker", "2496ED", "Docker", "Infra"],
];

const TechStackSection = () => (
  <section id="tecnologias" className="relative py-16 md:py-24">
    <div className="page-shell">
      <div className="mb-8 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
        <div><p className="section-kicker mb-3">Stack de trabajo</p><h2 className="display-font text-balance text-4xl font-medium leading-none tracking-[-.045em] text-nd-textDisplay md:text-6xl">Mi caja de herramientas.</h2></div>
        <a href="https://github.com/alvaroasllani" target="_blank" rel="noreferrer" className="ghost-button min-h-11 w-fit px-5 text-xs"><Github className="h-4 w-4" /> GitHub / alvaroasllani <ArrowUpRight className="h-4 w-4" /></a>
      </div>
      <div className="grid grid-cols-3 overflow-hidden rounded-[24px] border border-white/[.09] bg-white/[.02] sm:grid-cols-4 lg:grid-cols-6">
        {technologies.map(([slug, color, name, role]) => (
          <div key={name} className="group min-h-[108px] border-b border-r border-white/[.08] p-4 transition-colors hover:bg-nd-accent/[.065] md:min-h-[132px] md:p-5">
            <div className="flex h-full flex-col justify-between gap-5">
              <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" loading="lazy" decoding="async" className="h-7 w-7 object-contain transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 md:h-9 md:w-9" />
              <div><p className="text-[11px] font-semibold text-nd-textDisplay md:text-sm">{name}</p><p className="label-font mt-1 hidden text-[7px] text-nd-textDisabled sm:block">{role}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
