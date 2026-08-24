import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["inicio", "Inicio"], ["tecnologias", "Stack"], ["proyectos", "Proyectos"], ["contacto", "Contacto"],
];

const Header = () => {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60%", threshold: [0, .2, .6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className="page-shell glass-edge flex h-16 items-center justify-between rounded-full px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="WebCody, inicio">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-nd-textDisplay text-[11px] font-extrabold text-nd-black">WC</span>
          <span className="display-font text-sm font-semibold text-nd-textDisplay">WebCody</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-black/20 p-1 md:flex" aria-label="Navegación principal">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`rounded-full px-4 py-2 text-xs transition-colors ${active === id ? "bg-white/10 text-white" : "text-nd-textSecondary hover:text-white"}`}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="ghost-button hidden min-h-10 px-4 text-xs sm:inline-flex">Crear algo <ArrowUpRight className="h-4 w-4" /></a>
        <button onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="page-shell glass-edge mt-2 rounded-[24px] p-3 md:hidden" aria-label="Navegación móvil">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm text-nd-textPrimary hover:bg-white/5">{label}</a>)}
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
