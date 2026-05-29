import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metalúrgica Eduardo Lobato e Hijos | Piezas Mecanizadas de Precisión",
  description:
    "Especialistas en fabricación de piezas mecanizadas de alta precisión desde 1986. Servicios CAD/CAM, CNC, overhauling y reparaciones industriales.",
  keywords:
    "mecanizado, precisión, CNC, overhauling, repuestos industriales, CAD, CAM, torneado, fresado",
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
