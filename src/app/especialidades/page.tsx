"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  Code,
  MapPin,
  ArrowRight,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import { specialties } from "@/lib/data";

const specialtyImages: Record<string, string> = {
  administracion: "/images/adm.jpg",
  enfermeria: "/images/enf.jpg",
  programacion: "/images/prg.jpg",
  turismo: "/images/turismo.jpg",
};

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Heart,
  Code,
  MapPin,
};

export default function EspecialidadesPage() {
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
              Especialidades Técnico Profesionales
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl">
              Cuatro especialidades diseñadas para formar técnicos de nivel medio
              con las competencias que demanda el mercado laboral actual.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Las especialidades se cursan en <strong>3° y 4° Medio</strong>. Los
            estudiantes eligen su especialidad al finalizar 2° Medio, pudiendo
            orientar su formación hacia el área de su interés. Al egresar,
            obtienen el título de <strong>Técnico de Nivel Medio</strong> y
            realizan una <strong>práctica profesional</strong> obligatoria.
          </p>
        </div>
      </Section>

      {/* Especialidades detalladas */}
      {specialties.map((specialty, index) => {
        const Icon = iconMap[specialty.icon];
        return (
          <Section
            key={specialty.id}
            id={specialty.id}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Info */}
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${specialty.color} flex items-center justify-center`}
                    >
                      {Icon && <Icon size={32} className="text-white" />}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {specialty.title}
                      </h2>
                      {specialty.mention && (
                        <p className="text-primary font-medium">
                          {specialty.mention}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {specialty.description}
                  </p>

                  {/* Campo laboral */}
                  <div className="mb-8">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                      <Briefcase size={20} className="text-primary" />
                      Campo Laboral
                    </h3>
                    <ul className="space-y-2">
                      {specialty.fieldWork.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <CheckCircle
                            size={16}
                            className="text-emerald-500 shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Continuidad de estudios */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                      <BookOpen size={20} className="text-primary" />
                      Continuidad de Estudios
                    </h3>
                    <ul className="space-y-2">
                      {specialty.continuity.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <ArrowRight
                            size={16}
                            className="text-primary shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  {specialtyImages[specialty.id] ? (
                    <div className="relative aspect-square rounded-2xl overflow-hidden">
                      <Image
                        src={specialtyImages[specialty.id]}
                        alt={`Estudiantes de ${specialty.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-400 text-sm">Imagen próximamente</p>
                    </div>
                  )}
                  <div className="mt-4 p-4 bg-primary/5 rounded-xl">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">
                      Requisitos de ingreso
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Postulación durante 2° Medio</li>
                      <li>• Entrevista de orientación vocacional</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </Section>
        );
      })}

      {/* Práctica profesional */}
      <Section
        title="Práctica Profesional"
        subtitle="El paso final antes de obtener el título de Técnico de Nivel Medio"
        className="bg-primary text-white"
        dark
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/10" hover={false}>
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold text-gold mb-2">450+</div>
                <p className="text-blue-200 text-sm">
                  Horas mínimas de práctica profesional
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/10" hover={false}>
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold text-gold mb-2">100%</div>
                <p className="text-blue-200 text-sm">
                  De colocación en centros de práctica
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/10" hover={false}>
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold text-gold mb-2">Título</div>
                <p className="text-blue-200 text-sm">
                  Técnico de Nivel Medio reconocido por MINEDUC
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-blue-200 mt-8 max-w-2xl mx-auto">
            Al finalizar 4° Medio, los estudiantes realizan su práctica profesional
            en empresas e instituciones del rubro, aplicando los conocimientos
            adquiridos durante su formación.
          </p>
        </div>
      </Section>
    </>
  );
}
