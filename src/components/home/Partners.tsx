"use client";

import { useRef, useState, useEffect } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for infinite feel
  const doubled = [...partners, ...partners, ...partners];

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused || isDragging) return;

    const interval = setInterval(() => {
      el.scrollLeft += 1;
      // Reset to beginning seamlessly
      const singleWidth = el.scrollWidth / 3;
      if (el.scrollLeft >= singleWidth * 2) {
        el.scrollLeft -= singleWidth;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <Section
      title="Instituciones y empresas colaboradoras"
      subtitle="Trabajamos junto a importantes organizaciones para fortalecer la formación de nuestros estudiantes"
      className="bg-gray-50 overflow-hidden"
    >
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track - draggable */}
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto scrollbar-hide ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {doubled.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center select-none"
              style={{ minWidth: "140px" }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                title={partner.name}
                draggable={false}
                className="h-14 md:h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Hint for mobile */}
        <p className="text-center text-xs text-gray-400 mt-4 md:hidden">
          Desliza para ver más →
        </p>
      </div>
    </Section>
  );
}
