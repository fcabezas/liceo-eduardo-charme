"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Lightbox from "@/components/ui/Lightbox";
import { galleryImages } from "@/lib/data";

const categories = [
  "Todas",
  "Infraestructura",
  "Actividades académicas",
  "Eventos y ceremonias",
  "Deportes",
  "Especialidades TP",
];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === "Todas" || img.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [filteredImages.length]);

  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería</h1>
            <p className="text-lg text-blue-200 max-w-2xl">
              Imágenes de nuestra comunidad educativa, infraestructura,
              actividades y eventos.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-xs p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredImages}
        currentIndex={currentImageIndex}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  );
}
