import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt="WebCody Logo"
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-bold text-slate-200">WebCody</h3>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Desarrollamos soluciones web innovadoras que transforman ideas en experiencias digitales excepcionales.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-200">Mantente Actualizado</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="Tu email"
                  className="bg-slate-900/50 border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-primary/50 focus:ring-primary/20"
                />
                <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Servicios</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sistemas de Ventas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Apps Móviles</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Contacto</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>alvarowebcody@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+591 63970427</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Edificio Skybox Piso7, Oficina 9,<br />Avenida Heroinas y Calle Antezana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © 2024 WebCody. Todos los derechos reservados.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-primary hover:bg-primary/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-primary hover:bg-primary/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-primary hover:bg-primary/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-primary hover:bg-primary/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;