import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "./contact-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  MessageSquareText,
  Star,
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="section-container bg-white">
      <h2 className="section-title">
        Contacta<span className="text-[#2aaf62]">nos</span>
      </h2>
      <p className="section-subtitle">
        Esperamos con interés saber más sobre tu proyecto. Respondemos en un día
        hábil.
      </p>

      {/* Grid principal: Mapa + Formulario */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden border border-[#e0e2ed] shadow-lg h-[400px] lg:h-full min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.2290397987514!2d-59.42850517764196!3d-34.66201569614791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc73dcc59c1895%3A0x4b6db7e57d9d7041!2sMetal%C3%BArgica%20Eduardo%20Lobato%20e%20Hijos!5e0!3m2!1ses!2sar!4v1780090310976!5m2!1ses!2sar"
            title="Ubicación Metalúrgica Lobato"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Formulario + Datos */}
        <div className="flex flex-col gap-8">
          {/* Banner de reseña para clientes */}
          <a
            href={SITE_CONFIG.resena_link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#f8f9fc] rounded-2xl p-5 border border-[#e0e2ed] hover:border-[#2aaf62]/40 hover:shadow-lg hover:shadow-[#2aaf62]/5 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2aaf62]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2aaf62]/20 transition-colors duration-300">
                <Star className="h-5 w-5 text-[#2aaf62]" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#01021d] text-sm mb-1 group-hover:text-[#2aaf62] transition-colors duration-300">
                  ¿Ya trabajaste con nosotros?
                </h4>
                <p className="text-[#4a4f6a] text-xs leading-relaxed">
                  Tu opinión ayuda a que más industrias confíen en nuestro
                  trabajo. Dejanos tu reseña en Google.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#2aaf62]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2aaf62] transition-colors duration-300">
                <MessageSquareText className="h-4 w-4 text-[#2aaf62] group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </a>
          {/* Formulario */}
          <div className="bg-[#f8f9fc] rounded-2xl p-6 md:p-8 border border-[#e0e2ed]">
            <h3 className="text-lg font-bold text-[#01021d] mb-5">
              Envianos tu consulta
            </h3>
            <ContactForm />
          </div>

          {/* Datos de contacto compactos */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Phone,
                title: "Teléfono",
                content: SITE_CONFIG.phones.map((p) => p.number).join(" / "),
                href: `https://wa.me/${SITE_CONFIG.phones[0].number}`,
              },
              {
                icon: Mail,
                title: "Email",
                content: SITE_CONFIG.email,
                href: `mailto:${SITE_CONFIG.email}`,
              },
              {
                icon: MapPin,
                title: "Dirección",
                content: "Calle 15 y 102, Mercedes, BA",
                href: null,
              },
              {
                icon: Clock,
                title: "Horario",
                content: "Lun a Vie, 8-17h",
                href: null,
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href || "#"}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f8f9fc] transition-all duration-300 group border border-transparent hover:border-[#e0e2ed]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2aaf62]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2aaf62]/20 transition-colors duration-300">
                  <item.icon className="h-4 w-4 text-[#2aaf62]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-[#01021d] text-xs mb-0.5 group-hover:text-[#2aaf62] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-[#4a4f6a] text-xs break-words leading-tight">
                    {item.content}
                  </p>
                </div>
                {item.href && (
                  <ArrowUpRight className="h-3 w-3 text-[#4a4f6a] group-hover:text-[#2aaf62] transition-colors duration-300 flex-shrink-0 mt-0.5" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
