"use client";

import Section from "@/components/ui/Section";

const partners = [
  { name: "Universidad de Chile", logo: "/images/partners/uchile.jpg" },
  { name: "Universidad de O'Higgins", logo: "/images/partners/uoh.png" },
  { name: "Municipalidad de San Fernando", logo: "/images/partners/muni.png" },
  { name: "Fundación Luksic", logo: "/images/partners/luksic.png" },
  { name: "CPECH", logo: "/images/partners/cpech.png" },
  { name: "Agrosuper", logo: "/images/partners/agrosuper.png" },
];

export default function Partners() {
  // Duplicate the list for seamless infinite scroll
  const doubled = [...partners, ...partners];

  return (
    <Section
      title="Instituciones y empresas colaboradoras"
      subtitle="Trabajamos junto a importantes organizaciones para fortalecer la formación de nuestros estudiantes"
      className="bg-gray-50 overflow-hidden"
    >
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {doubled.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ minWidth: "160px" }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
