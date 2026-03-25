export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Liceo Eduardo Charme",
    alternateName: "Liceo TP Eduardo Charme San Fernando",
    url: "https://liceoeduardocharme.cl",
    logo: "https://liceoeduardocharme.cl/android-chrome-512x512.png",
    image: "https://liceoeduardocharme.cl/images/hero-liceo.jpg",
    description:
      "Liceo de Educación Media Técnico Profesional en San Fernando, Región de O'Higgins, Chile. 121 años formando profesionales con excelencia humana y académica. Especialidades en Administración, Enfermería, Programación y Turismo.",
    foundingDate: "1905",
    telephone: "+56958137970",
    email: "contacto@liceoeduardocharme.cl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Argomedo 485",
      addressLocality: "San Fernando",
      addressRegion: "Región de O'Higgins",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.5839,
      longitude: -71.0011,
    },
    sameAs: [
      "https://instagram.com/liceocharme",
      "https://www.facebook.com/liceo.eduardo.charme.2025",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "SLEP Colchagua",
      description: "Servicio Local de Educación Pública Colchagua",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Título Técnico de Nivel Medio",
        name: "Técnico en Administración mención Recursos Humanos",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Título Técnico de Nivel Medio",
        name: "Técnico en Atención de Enfermería",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Título Técnico de Nivel Medio",
        name: "Técnico en Programación",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Título Técnico de Nivel Medio",
        name: "Técnico en Servicios de Turismo",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "San Fernando",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Región de O'Higgins",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
