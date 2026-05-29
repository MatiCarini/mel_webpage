import { HeroSection } from "@/modules/hero/hero-section";
import { ServicesSection } from "@/modules/services/services-section";
import { IndustriesSection } from "@/modules/industries/industries-section";
import { AboutSection } from "@/modules/about/about-section";
import { GallerySection } from "@/modules/gallery/gallery-section";
import { ContactSection } from "@/modules/contact/contact-section";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <GallerySection images={GALLERY_IMAGES} />
      <ContactSection />
    </>
  );
}
