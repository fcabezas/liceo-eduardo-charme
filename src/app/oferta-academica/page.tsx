"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  GraduationCap,
  ArrowRight,
  Music,
  Dumbbell,
  Brain,
  Radio,
  Swords,
  BookHeart,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import { talleres } from "@/lib/data";

const tallerIcons: Record<string, React.ElementType> = {
  "Comprensión lectora": BookHeart,
  "Pensamiento crítico": Brain,
  "Deportes y recreación": Dumbbell,
  "Fútbol": Dumbbell,
  "Vóleibol": Dumbbell,
  "Básquetbol": Dumbbell,
  "Música y grupo instrumental": Music,
  "Radio escolar": Radio,
  "Yoga": Dumbbell,
  "Banda de guerra": Swords,
  "Folklore": Music,
  "Taller de filosofía": Brain,
};

export default function OfertaAcademicaPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Oferta Académica
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl">
              Educación integral que combina formación Científico Humanista y
              Técnico Profesional para preparar a nuestros estudiantes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modalidades */}
      <Section
        title="Modalidades de Enseñanza"
        subtitle="Dos caminos de formación para el futuro de nuestros estudiantes"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                  <BookOpen size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Científico Humanista
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                  1° a 4° Medio
                </span>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Formación general que prepara a los estudiantes para continuar
                  estudios superiores en universidades, institutos profesionales o
                  centros de formación técnica. Los estudiantes reciben una base
                  sólida en ciencias, humanidades, matemáticas, lenguaje e idiomas.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Lenguaje y Comunicación
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Matemáticas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Ciencias (Biología, Física, Química)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Historia y Ciencias Sociales
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Inglés
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Educación Física y Artes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full border-2 border-gold/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  <GraduationCap size={32} className="text-gold-dark" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Técnico Profesional
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4">
                  3° y 4° Medio
                </span>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Formación especializada que prepara a los estudiantes para
                  insertarse al mundo laboral con competencias técnicas, además
                  de poder continuar estudios superiores. Incluye práctica
                  profesional obligatoria.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Administración mención RRHH
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Atención de Enfermería
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Programación
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Servicios de Turismo
                  </li>
                </div>
                <Link
                  href="/especialidades"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Ver especialidades en detalle
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Jornada escolar */}
      <Section
        title="Jornada Escolar"
        subtitle="Horarios de nuestra jornada escolar completa"
        className="bg-gray-50"
      >
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Lunes a Viernes
                  </h3>
                  <p className="text-gray-500">Jornada Escolar Completa</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium text-gray-700">Entrada</span>
                  <span className="font-bold text-primary text-lg">08:00 hrs</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium text-gray-700">Primer bloque</span>
                  <span className="text-gray-600">08:00 - 09:30</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium text-gray-700">Segundo bloque</span>
                  <span className="text-gray-600">09:45 - 11:15</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gold/10 rounded-xl">
                  <span className="font-medium text-gray-700">Almuerzo</span>
                  <span className="text-gray-600">13:00 - 13:45</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium text-gray-700">Bloque tarde</span>
                  <span className="text-gray-600">14:00 - 16:25</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl">
                  <span className="font-medium text-gray-700">Salida</span>
                  <span className="font-bold text-primary text-lg">16:25 hrs</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Talleres */}
      <Section
        title="Talleres Extraprogramáticos"
        subtitle="Actividades complementarias para el desarrollo integral de nuestros estudiantes"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {talleres.map((taller, index) => {
            const Icon = tallerIcons[taller] || BookOpen;
            return (
              <motion.div
                key={taller}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors"
              >
                <Icon size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium text-gray-700">{taller}</span>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
