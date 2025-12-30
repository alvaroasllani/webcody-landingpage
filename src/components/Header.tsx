import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-cyan-500/10"
      style={{ backgroundColor: 'rgba(10, 10, 31, 0.8)' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/logo.png"
            alt="WebCody Logo"
            className="w-12 h-12"
            style={{ filter: 'drop-shadow(0 0 8px rgba(0, 242, 255, 0.4))' }}
          />
          <h1 className="text-2xl font-bold gradient-text">WebCody</h1>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {['Inicio', 'Servicios', 'Proyectos', 'Contacto'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className="btn-hero"
            onClick={() => {
              const contactoSection = document.getElementById('contacto');
              contactoSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contáctanos
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;