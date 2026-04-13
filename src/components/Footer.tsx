import { Mail, Phone, MapPin, Facebook } from "lucide-react";

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="border-t border-nd-border bg-transparent pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/logo.png"
                alt="WebCody Logo"
                className="w-10 h-10 grayscale"
              />
              <h3 className="label-font text-nd-textDisplay font-bold text-lg">
                [ WEBCODY ]
              </h3>
            </div>
            <p className="text-nd-textSecondary text-sm max-w-sm mb-8">
              Constructores de sistemas web. Arquitectura, funcionalidad y rendimiento superior. 
            </p>

            <div className="flex flex-col gap-3">
              <label className="label-font text-[10px] text-nd-textSecondary">SUSCRIPCIÓN_SISTEMA</label>
              <div className="flex h-11 w-full max-w-md border border-nd-border-visible focus-within:border-nd-textPrimary transition-colors">
                <input
                  type="email"
                  placeholder="CORREO ELECTRÓNICO"
                  className="bg-transparent text-nd-textDisplay placeholder:text-nd-textDisabled border-none outline-none px-4 flex-grow font-mono text-xs w-full"
                />
                <button className="bg-nd-textDisplay text-nd-black label-font px-6 text-xs hover:opacity-90 transition-opacity whitespace-nowrap">
                  SUSCRIBIR
                </button>
              </div>
            </div>
          </div>

          <div>
            <h4 className="label-font text-[11px] text-nd-textSecondary mb-6 border-b border-nd-border pb-2 w-max">
              / SERVICIOS /
            </h4>
            <ul className="space-y-4">
              {['Landing Pages', 'E-commerce', 'Sistemas ERP', 'Apps Móviles', '+ Soluciones a Medida'].map((item) => (
                <li key={item}>
                  <a href="#" className="label-font text-xs text-nd-textPrimary hover:text-nd-accent transition-colors">
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-font text-[11px] text-nd-textSecondary mb-6 border-b border-nd-border pb-2 w-max">
              / CONTACTO /
            </h4>
            <div className="space-y-4 text-nd-textPrimary text-xs font-mono">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-nd-textSecondary" strokeWidth={1.5} />
                <span>alvarowebcody@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-nd-textSecondary" strokeWidth={1.5} />
                <span>+591 72234501</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-nd-textSecondary shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-snug">
                  Edif. Skybox Piso 7, Of 9<br/>
                  Cochabamba, Bolivia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-nd-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="label-font text-[10px] text-nd-textDisabled">
            © 2024 WEBCODY SYSTEMS. TODOS LOS DERECHOS RESERVADOS.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61576187071181"
              target="_blank" rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-nd-border text-nd-textSecondary hover:text-nd-textDisplay hover:border-nd-border-visible transition-colors"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.tiktok.com/@web.cody"
              target="_blank" rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-nd-border text-nd-textSecondary hover:text-nd-textDisplay hover:border-nd-border-visible transition-colors"
            >
              <TiktokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;