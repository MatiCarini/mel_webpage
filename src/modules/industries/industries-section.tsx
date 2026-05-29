import { INDUSTRIES } from "@/lib/constants";
import Image from "next/image";

export function IndustriesSection() {
  return (
    <section id="industrias" className="section-container bg-[#f8f9fc]">
      <h2 className="section-title">
        Industrias que{" "}
        <span className="text-[#2aaf62] relative">
          Atendemos
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#2aaf62]/30 rounded-full" />
        </span>
      </h2>
      <p className="section-subtitle">
        Más de tres décadas de experiencia en diversos sectores industriales
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {INDUSTRIES.map((industry) => (
          <div
            key={industry.name}
            className="group relative bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-xl hover:shadow-[#2aaf62]/5 border border-transparent hover:border-[#e0e2ed]"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 mb-6 relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-[#2aaf62]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-contain relative z-10"
              />
            </div>

            <h3 className="text-sm md:text-base font-semibold text-[#01021d] group-hover:text-[#2aaf62] transition-colors duration-300">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
