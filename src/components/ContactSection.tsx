import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a1f' }}>
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              ¿Hablamos de tu <span className="gradient-text">proyecto</span>?
            </h2>

            <p className="text-xl text-slate-300 mb-12">
              Estoy disponible para nuevos retos. Si tienes una idea o necesitas ayuda con tu desarrollo web, ¡escríbeme!
            </p>

            <div className="flex flex-col items-center gap-8">
              {/* Neon WhatsApp Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="relative overflow-hidden text-xl px-8 py-6 rounded-full font-bold transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #00f2ff 0%, #bd00ff 100%)',
                    boxShadow: '0 0 30px rgba(0, 242, 255, 0.4), 0 0 60px rgba(189, 0, 255, 0.2)',
                  }}
                >
                  <a
                    href="https://wa.me/59163970427"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white"
                  >
                    <WhatsAppIcon />
                    Hablemos por WhatsApp
                  </a>
                </Button>
              </motion.div>

              <div className="text-slate-400">
                <p className="mb-4">O envíame un correo a</p>
                <a
                  href="mailto:alvarowebcody@gmail.com"
                  className="text-lg font-medium neon-text-cyan hover:underline"
                >
                  alvarowebcody@gmail.com
                </a>
              </div>

              {/* Social Links with Neon Hover */}
              <div className="flex gap-6 mt-4">
                {[
                  { href: "https://github.com", icon: Github, color: "hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" },
                  { href: "https://linkedin.com", icon: Linkedin, color: "hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]" },
                  { href: "https://twitter.com", icon: Twitter, color: "hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(189,0,255,0.6)]" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-500 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
