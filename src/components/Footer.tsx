import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="border-t border-cyan-500/10 py-16 text-slate-400" style={{ backgroundColor: '#0a0a1f' }}>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/logo.png"
                  alt="WebCody Logo"
                  className="w-12 h-12"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(0, 242, 255, 0.4))' }}
                />
                <h3 className="text-2xl font-bold gradient-text">WebCody</h3>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Desarrollamos soluciones web innovadoras que transforman ideas en experiencias digitales excepcionales.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-300">Mantente Actualizado</h4>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Tu email"
                    className="bg-white/5 border-cyan-500/20 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 backdrop-blur-sm"
                  />
                  <Button className="btn-hero">
                    Suscribirse
                  </Button>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-slate-300">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                {['Landing Pages', 'E-commerce', 'Sistemas de Ventas', 'Apps Móviles'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-cyan-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-slate-300">Contacto</h4>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" style={{ filter: 'drop-shadow(0 0 4px rgba(0, 242, 255, 0.6))' }} />
                  <span>alvarowebcody@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" style={{ filter: 'drop-shadow(0 0 4px rgba(0, 242, 255, 0.6))' }} />
                  <span>+591 63970427</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-purple-400" style={{ filter: 'drop-shadow(0 0 4px rgba(189, 0, 255, 0.6))' }} />
                  <span>Edificio Skybox Piso7, Oficina 9,<br />Avenida Heroinas y Calle Antezana</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-cyan-500/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-500 text-sm">
                © 2024 WebCody. Todos los derechos reservados.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]"
                    >
                      <Icon className="w-4 h-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;