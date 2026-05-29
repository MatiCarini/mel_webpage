export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.metalurgicalobato.com.ar/#business",
    name: "Metalúrgica Eduardo Lobato e Hijos",
    alternateName: "Metalúrgica Lobato",
    description:
      "Especialistas en fabricación de piezas mecanizadas de alta precisión. Servicios CAD/CAM, CNC, torneado, fresado, rectificado y overhauling de maquinaria industrial desde 1986.",
    url: "https://www.metalurgicalobato.com.ar",
    telephone: ["+5492324541053", "+5492324673966"],
    email: "metalurgicalobato@gmail.com",
    foundingDate: "1986",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle 15 y 102",
        addressLocality: "Mercedes",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 15 y 102",
      addressLocality: "Mercedes",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.661861,
      longitude: -59.429919,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Mercedes",
      },
      {
        "@type": "City",
        name: "Buenos Aires",
      },
      {
        "@type": "State",
        name: "Provincia de Buenos Aires",
      },
    ],
    knowsAbout: [
      "Mecanizado de precisión",
      "Torneado CNC",
      "Fresado industrial",
      "CAD CAM",
      "Overhauling de maquinaria industrial",
      "Rectificado de cilindros",
      "Electroerosión",
      "Fabricación de repuestos industriales",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Mecanizado",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Planificación y Diseño CAD/CAM",
            description:
              "Soluciones integrales en diseño y desarrollo de piezas personalizadas con tecnología CAD/CAM.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maquinados y Repuestos",
            description:
              "Fabricación de repuestos en aluminio, bronce, hierro y plástico. Rectificado de cilindros.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Equipamiento y Manufactura CNC",
            description:
              "Maquinaria CNC, convencional, electroerosión y rectificadoras. Series cortas y medias de alta precisión.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Overhauling y Reparaciones Industriales",
            description:
              "Restauración integral de extrusores, empaquetadoras, amasadoras para industria alimenticia.",
          },
        },
      ],
    },
    image: "https://www.metalurgicalobato.com.ar/images/og-image.jpg",
    sameAs: ["https://www.instagram.com/metalurgicalobato/"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
