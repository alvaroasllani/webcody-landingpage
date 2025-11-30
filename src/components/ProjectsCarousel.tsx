import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, BarChart3, Smartphone } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma de ventas online completa con carrito de compras, gestión de productos y pagos integrados",
    icon: ShoppingCart,
    color: "bg-secondary",
    image: "/img/ecomerce/0.PNG",
    tags: ["React", "Node.js", "PayPal", "Stripe"],
    url: "https://plantilla-e-comerce.vercel.app/"
  },
  {
    id: 2,
    title: "Sistema de Gestión Sayqa",
    description: "Sistema integral de gestión empresarial con dashboard analytics y control de inventarios",
    icon: BarChart3,
    color: "bg-accent",
    image: "/img/sayqa/1.PNG",
    tags: ["Vue.js", "Chart.js", "MySQL", "API REST"],
    url: "https://sayqa-medicina-natural.netlify.app/"
  },
  {
    id: 3,
    title: "App90 - Aplicación Móvil",
    description: "Aplicación móvil nativa con funcionalidades avanzadas y experiencia de usuario optimizada",
    icon: Smartphone,
    color: "bg-gradient-primary",
    image: "/img/app90/1.PNG",
    tags: ["React Native", "Firebase", "Push Notifications", "Offline"]
  }
];

const ProjectsCarousel = () => {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="gradient-text">Nuestros Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre algunos de los proyectos reales que hemos desarrollado con tecnologías modernas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;

            const isFullWidth = index === 0;

            return (
              <div key={project.id} className={`group ${isFullWidth ? 'col-span-1 md:col-span-2' : 'col-span-1'} relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 hover:shadow-vibrant cursor-pointer`}>
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Side - Alternating */}
                  <div className={`relative w-full h-64 md:h-auto md:w-1/2 overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
                    <div className={`w-12 h-12 rounded-xl ${project.color} flex items-center justify-center mb-6`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {project.url ? (
                        <Button
                          className="w-full sm:w-auto"
                          onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                        >
                          Ver Proyecto
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      ) : (
                        <Button disabled variant="secondary">
                          Próximamente
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;