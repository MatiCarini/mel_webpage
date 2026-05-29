import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
import { StructuredData } from "@/components/seo/structured-data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Metalúrgica Eduardo Lobato e Hijos | Piezas Mecanizadas de Precisión en Mercedes, Buenos Aires",
    template: "%s | Metalúrgica Lobato",
  },
  description:
    "Fabricación de piezas mecanizadas de alta precisión desde 1986. Servicios de torneado CNC, fresado, rectificado, CAD/CAM y overhauling de maquinaria industrial. Atención personalizada a industrias alimenticias, farmacéuticas, gráficas y de envasado en la Provincia de Buenos Aires.",
  keywords: [
    "mecanizado de precisión",
    "piezas mecanizadas",
    "torneado CNC",
    "fresado industrial",
    "CAD CAM",
    "overhauling maquinaria",
    "repuestos industriales",
    "metalúrgica Mercedes Buenos Aires",
    "rectificado de cilindros",
    "electroerosión",
    "fabricación bajo plano",
  ],
  authors: [{ name: "Metalúrgica Eduardo Lobato e Hijos" }],
  creator: "Metalúrgica Eduardo Lobato e Hijos",
  publisher: "Metalúrgica Eduardo Lobato e Hijos",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://www.metalurgicalobato.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.metalurgicalobato.com.ar",
    siteName: "Metalúrgica Eduardo Lobato e Hijos",
    title:
      "Metalúrgica Eduardo Lobato e Hijos | Piezas Mecanizadas de Precisión",
    description:
      "Especialistas en fabricación de piezas mecanizadas de alta precisión desde 1986. Servicios CAD/CAM, CNC y overhauling industrial.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metalúrgica Lobato - Taller de mecanizado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Metalúrgica Eduardo Lobato e Hijos | Piezas Mecanizadas de Precisión",
    description:
      "Especialistas en fabricación de piezas mecanizadas de alta precisión desde 1986.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "TU-CODIGO-DE-GOOGLE-SEARCH-CONSOLE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-[--background]`}
      >
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "hsl(var(--card))",
              color: "hsl(var(--foreground))",
              border: "1px solid hsl(var(--border))",
            },
          }}
        />
      </body>
    </html>
  );
}
