"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, BookOpen, Users } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-liceo.jpg"
        alt="Comunidad Liceo Eduardo Charme"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/80" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap size={16} />
              Educación TP y Científico Humanista
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Liceo
              <br />
              <span className="text-gold">Eduardo Charme</span>
            </h1>

            <p className="text-lg text-blue-100 max-w-lg mb-8 leading-relaxed">
              Formando profesionales con excelencia humana y académica desde 1905.
              Preparamos estudiantes para enfrentar con éxito la vida y el mundo
              del trabajo.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/admision" className="btn-gold gap-2 text-base px-8 py-4">
                Postula aquí
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/especialidades"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Ver especialidades
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">
                  <AnimatedCounter end={121} suffix="" />
                </div>
                <p className="text-sm text-blue-200 mt-1">Años de historia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">
                  <AnimatedCounter end={4} suffix="" />
                </div>
                <p className="text-sm text-blue-200 mt-1">Especialidades TP</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-sm text-blue-200 mt-1">Gratuito</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <BookOpen className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Formación Científico Humanista
                    </h3>
                    <p className="text-sm text-blue-200">1° a 4° Medio</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <GraduationCap className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Técnico Profesional
                    </h3>
                    <p className="text-sm text-blue-200">
                      4 especialidades en 3° y 4° Medio
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Users className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Comunidad inclusiva
                    </h3>
                    <p className="text-sm text-blue-200">
                      Formación integral y valores
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="relative mt-6 p-6 rounded-2xl bg-gradient-to-r from-gold/20 to-gold/5 border border-gold/20">
                <p className="text-gold-light font-medium text-lg">
                  &ldquo;121 años formando profesionales para Chile&rdquo;
                </p>
                <p className="text-blue-200 text-sm mt-2">Desde mayo de 1905</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
