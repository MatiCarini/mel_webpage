import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className=" min-h-screen flex items-center justify-center overflow-hidden bg-[#01021d] bg-grid">
      {/* Overlay con gradiente más dramático */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(13,23,45,0.4) 0%, rgba(1,2,29,0.95) 70%), url('/images/hero/hero-bg.jpg') no-repeat center center/cover",
        }}
      />

      {/* Líneas decorativas sutiles */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#848dbf] to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#848dbf] to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-6">
          <span className="text-[#2aaf62] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase bg-[#2aaf62]/10 px-5 py-2 rounded-full border border-[#2aaf62]/20">
            Desde 1986
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white mb-8 leading-[1.1] font-extrabold text-balance">
          <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            Metalúrgica
          </span>
          <br />
          <span>Eduardo Lobato</span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            e Hijos
          </span>
        </h1>

        <div className="space-y-3 mb-12">
          <p className="text-lg md:text-2xl text-[#c2cef2] max-w-3xl mx-auto font-medium leading-relaxed text-balance">
            Especialistas en fabricación de piezas mecanizadas de alta
            precisión.
          </p>
          <p className="text-base md:text-lg text-[#848dbf] max-w-2xl mx-auto text-balance">
            Atención personalizada a todo tipo de industrias desde 1986.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#2aaf62] text-white hover:bg-[#2aaf62]/90 text-base font-semibold px-8 py-4 h-auto accent-glow-sm transition-all duration-300 hover:accent-glow"
            asChild
          >
            <a href="#contacto">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#848dbf]/30 text-[#c2cef2] hover:bg-[#c2cef2]/5 hover:border-[#848dbf]/60 text-base px-8 py-4 h-auto transition-all duration-300"
            asChild
          >
            <a href="#servicios">Conocer Servicios</a>
          </Button>
        </div>
      </div>
      {/* Indicador de scroll mejorado */}
      <div className="absolute bottom-6">
        <div className=" relative left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-5 h-7 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-2 bg-muted-foreground rounded-full mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
