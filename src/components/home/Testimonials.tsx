"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/ui/Section";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <Section
      title="Lo que dicen nuestros egresados"
      subtitle="Historias de quienes se formaron en el Liceo Eduardo Charme"
      className="bg-primary text-white"
      dark
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative min-h-[220px] flex items-center">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8 md:px-16"
            >
              <Quote size={36} className="text-gold mx-auto mb-6 opacity-60" />
              <blockquote className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-white text-lg">
                  {testimonials[current].name}
                </p>
                <p className="text-blue-200 text-sm">
                  {testimonials[current].role} — Promoción{" "}
                  {testimonials[current].year}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Testimonio ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === current
                  ? "bg-gold w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
