"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#01021d]/90 backdrop-blur-xl  shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 ">
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight logo-font">
              MEL
            </p>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-sm text-[#c2cef2] hover:text-white transition-colors duration-300 font-medium py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2aaf62] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Button
              size="sm"
              className="bg-[#2aaf62] text-white hover:bg-[#2aaf62]/90 font-semibold px-5 py-2 h-auto transition-all duration-300 hover:shadow-lg hover:shadow-[#2aaf62]/25"
              asChild
            >
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
              >
                Solicitar Presupuesto
              </a>
            </Button>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#c2cef2] hover:text-white hover:bg-white/5"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#01021d] border-l border-[#132253] w-[280px] sm:w-[320px]"
              >
                <div className="flex flex-col gap-1 mt-12">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-base text-[#c2cef2] hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                  <div className="mt-4 px-4">
                    <SheetClose asChild>
                      <Button
                        className="bg-[#2aaf62] text-white w-full font-semibold hover:bg-[#2aaf62]/90"
                        asChild
                      >
                        <a
                          href="#contacto"
                          onClick={(e) => handleNavClick(e, "#contacto")}
                        >
                          Solicitar Presupuesto
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
