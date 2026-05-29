import { ABOUT_TEXT } from "@/lib/constants";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="section-container bg-[#01021d] bg-noise "
      style={{
        background:
          "linear-gradient(90deg ,  rgba(0, 0, 0, 255) 40%, rgba(0, 0, 0, 0)), url('/images/about/taller.jpg') no-repeat center center/cover",
      }}
    >
      {/* Contenido */}
      <div className="max-w-2xl px-8 text-center md:text-left mt-10 md:mt-0">
        <span className="text-[#2aaf62] text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
          Nuestra Empresa
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#c2cef2] mb-6 leading-tight text-balance">
          Más de{" "}
          <span className="text-[#2aaf62] relative">
            35 años
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#2aaf62]/30 rounded-full" />
          </span>{" "}
          de experiencia
        </h2>
        <p className="text-[#848dbf] leading-relaxed mb-8 text-base md:text-lg">
          {ABOUT_TEXT}
        </p>

        <div className="space-y-4">
          {[
            "Torneado y fresado CNC de alta precisión",
            "Reparación integral de maquinaria industrial",
            "Fabricación bajo plano o diseño personalizado CAD/CAM",
          ].map((item) => (
            <div
              key={item}
              className="flex md:max-w-100% lg:max-w-[80%] items-start gap-4 p-4 rounded-xl bg-[#0d172d] border border-[#132253] hover:border-[#2aaf62]/30 transition-all duration-300 group"
            >
              <CheckCircle2 className="h-5 w-5 text-[#2aaf62] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base text-[#c2cef2] group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
