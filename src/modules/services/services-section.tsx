import { SERVICES } from "@/lib/constants";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section id="servicios" className="section-container bg-white">
      <h2 className="section-title">
        Servicios de{" "}
        <span className="text-[#2aaf62] relative">
          Mecanizado de Precisión
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#2aaf62]/30 rounded-full" />
        </span>
      </h2>
      <p className="section-subtitle">
        Soluciones integrales en fabricación y reparación de piezas industriales
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className="group relative bg-[#f8f9fc] p-8 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-[#2aaf62]/5 border border-transparent hover:border-[#e0e2ed]"
          >
            <span className="absolute top-6 right-6 text-6xl font-bold text-[#848dbf] group-hover:text-[#2aaf62] transition-colors duration-500 select-none">
              0{index + 1}
            </span>

            <div className="relative z-10">
              <div className="w-14 h-14 mb-6 relative transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-[#01021d] mb-3 group-hover:text-[#2aaf62] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-sm text-[#4a4f6a] leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2aaf62] group-hover:w-full transition-all duration-500 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
