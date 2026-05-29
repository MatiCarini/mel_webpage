"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import type { GalleryImage } from "@/types";

interface GallerySectionProps {
  images: GalleryImage[];
}

export function GallerySection({ images }: GallerySectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="galeria" className="section-container bg-[#f8f9fc]">
        <h2 className="section-title">
          Trabajos <span className="text-[#2aaf62]">Realizados</span>
        </h2>
        <p className="section-subtitle">
          Algunos de nuestros proyectos recientes
        </p>
        <div className="h-[400px]" />
      </section>
    );
  }

  return (
    <section id="galeria" className="section-container bg-[#f8f9fc]">
      <h2 className="section-title">
        Trabajos{" "}
        <span className="text-[#2aaf62] relative">
          Realizados
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#2aaf62]/30 rounded-full" />
        </span>
      </h2>
      <p className="section-subtitle">
        Algunos de nuestros proyectos recientes
      </p>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full max-w-6xl mx-auto mt-8"
      >
        <CarouselContent className="-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-2/3 lg:basis-1/2"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl group cursor-pointer shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#01021d] via-[#01021d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {image.caption && (
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                          {image.caption}
                        </h3>
                      )}
                      {image.subcaption && (
                        <p className="text-sm text-[#c2cef2] leading-relaxed max-w-md">
                          {image.subcaption}
                        </p>
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#2aaf62]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2aaf62] transition-colors duration-300">
                      <ArrowUpRight className="h-5 w-5 text-[#2aaf62] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-white border-[#e0e2ed] text-[#01021d] hover:text-white hover:bg-[#2aaf62] hover:border-[#2aaf62] transition-all duration-300" />
        <CarouselNext className="hidden md:flex bg-white border-[#e0e2ed] text-[#01021d] hover:text-white hover:bg-[#2aaf62] hover:border-[#2aaf62] transition-all duration-300" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-[#e0e2ed] hover:bg-[#2aaf62]/50 transition-colors duration-300 cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}
