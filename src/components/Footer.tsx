import { ArrowUp, Facebook, Github, MapPin } from "lucide-react";

const TiktokIcon = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>;

const Footer = () => (
  <footer className="pb-8 pt-10">
    <div className="page-shell">
      <div className="grid gap-12 border-t border-white/[.08] py-12 md:grid-cols-3">
        <div><p className="display-font text-xl font-semibold text-nd-textDisplay">WebCody</p><p className="mt-3 max-w-xs text-sm leading-6 text-nd-textSecondary">Productos digitales diseñados y construidos desde Cochabamba para cualquier lugar.</p></div>
        <div className="text-sm text-nd-textSecondary"><p className="section-kicker mb-4">Contacto</p><a href="mailto:alvarowebcody@gmail.com" className="block hover:text-white">alvarowebcody@gmail.com</a><p className="mt-2 flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Cochabamba, Bolivia</p></div>
        <div className="md:text-right"><p className="section-kicker mb-4">Encuéntranos</p><div className="flex gap-2 md:justify-end">{[{ href: "https://github.com/alvaroasllani", icon: Github, label: "GitHub" }, { href: "https://www.facebook.com/profile.php?id=61576187071181", icon: Facebook, label: "Facebook" }, { href: "https://www.tiktok.com/@web.cody", icon: TiktokIcon, label: "TikTok" }].map(({ href, icon: Icon, label }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-nd-textSecondary transition-colors hover:bg-white/10 hover:text-white"><Icon className="h-4 w-4" /></a>)}</div></div>
      </div>
      <div className="flex flex-col justify-between gap-4 border-t border-white/[.08] pt-7 label-font text-[9px] text-nd-textDisabled sm:flex-row sm:items-center"><span>© {new Date().getFullYear()} WEBCODY · TODOS LOS DERECHOS RESERVADOS</span><a href="#inicio" className="flex items-center gap-2 text-nd-textSecondary hover:text-white">VOLVER ARRIBA <ArrowUp className="h-3.5 w-3.5" /></a></div>
    </div>
  </footer>
);

export default Footer;
