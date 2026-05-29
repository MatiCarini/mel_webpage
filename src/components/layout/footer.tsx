import { SITE_CONFIG } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#01021d] border-t border-[#132253]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 ">
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight logo-font">
                MEL
              </p>
            </Link>
            <p className="text-[#848dbf] text-sm leading-relaxed max-w-md">
              Especialistas en fabricación de piezas mecanizadas de alta
              precisión desde {SITE_CONFIG.founded}. Atención personalizada a
              todo tipo de industrias.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-[#c2cef2] font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Galería", href: "#galeria" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#848dbf] hover:text-[#2aaf62] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[#c2cef2] font-semibold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-[#848dbf]">
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.phones[0].number}`}
                  target="_blank"
                  className="hover:text-[#2aaf62] transition-colors"
                >
                  {SITE_CONFIG.phones[0].name}: {SITE_CONFIG.phones[0].number}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.phones[1].number}`}
                  target="_blank"
                  className="hover:text-[#2aaf62] transition-colors"
                >
                  {SITE_CONFIG.phones[1].name}: {SITE_CONFIG.phones[1].number}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#2aaf62] transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[#132253]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#848dbf]">
            Metalúrgica Eduardo Lobato e hijos. © {currentYear}
          </p>
          <div className="flex gap-4">
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              className="text-[#848dbf] hover:text-[#2aaf62] transition-colors"
            >
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a
              href="#"
              className="text-[#848dbf] hover:text-[#2aaf62] transition-colors"
            >
              <i className="fa-brands fa-linkedin text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
