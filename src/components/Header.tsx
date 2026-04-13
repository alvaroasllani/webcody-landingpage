import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'proyectos', 'contacto'];
      // The trigger point is 1/3 down the viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nd-black/70 backdrop-blur-md border-b border-nd-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="WebCody Logo"
            className="w-8 h-8 grayscale"
          />
          <span className="label-font text-nd-textDisplay font-bold text-sm hover:text-nd-accent transition-colors cursor-pointer">
            [ WEBCODY ]
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 label-font text-xs">
          {['Inicio', 'Servicios', 'Proyectos', 'Contacto'].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`${isActive ? 'text-nd-textDisplay' : 'text-nd-textSecondary'} hover:text-nd-textDisplay transition-colors duration-200`}
              >
                {isActive ? `[ ${item.toUpperCase()} ]` : item.toUpperCase()}
              </a>
            );
          })}
        </nav>

        <div>
          <button
            className="nothing-btn-secondary h-10 px-6 text-[11px] bg-nd-black/50"
            onClick={() => {
              const contactoSection = document.getElementById('contacto');
              contactoSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            CONTÁCTANOS
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;