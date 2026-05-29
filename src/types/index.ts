// src/types/index.ts

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  mensaje: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  subcaption: string;
}
