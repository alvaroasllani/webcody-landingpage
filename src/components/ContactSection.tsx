import { ArrowUpRight, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contacto" className="relative px-4 py-16 md:px-6 md:py-24">
    <div className="page-shell relative overflow-hidden rounded-[30px] border border-white/10 bg-[#d9f8ff] px-6 py-14 text-[#071019] md:px-12 md:py-20 lg:px-16">
      <div className="absolute -right-20 -top-48 h-[38rem] w-[38rem] rounded-full border border-[#071019]/10" />
      <div className="absolute -right-6 -top-20 h-[24rem] w-[24rem] rounded-full border border-[#071019]/10" />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>
          <p className="label-font mb-4 text-[9px] uppercase text-[#344d5b]">Disponible para proyectos</p>
          <h2 className="display-font max-w-3xl text-balance text-4xl font-medium leading-[.95] tracking-[-.05em] md:text-6xl lg:text-7xl">¿Tienes un proyecto en mente?</h2>
        </div>
        <div className="lg:pb-3">
          <p className="max-w-md text-base leading-7 text-[#344d5b]">Cuéntanos qué quieres cambiar, lanzar o mejorar. Nosotros encontramos la forma más clara —y más interesante— de construirlo.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a href="https://wa.me/59172234501" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#071019] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-1">Empezar por WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
            <a href="mailto:alvarowebcody@gmail.com" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#071019]/20 px-6 text-sm font-semibold transition-colors hover:bg-[#071019]/5"><Mail className="h-4 w-4" /> Enviar email</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
