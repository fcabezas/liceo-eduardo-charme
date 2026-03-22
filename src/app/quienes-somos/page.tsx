"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Handshake,
  GraduationCap,
  Lightbulb,
  Heart,
  Shield,
  Star,
  Clock,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import { sealItems, values, teamMembers } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Handshake,
  GraduationCap,
  Lightbulb,
};

const timelineEvents = [
  { year: "1905", title: "Fundación", description: "El senador Eduardo Charme Fernández funda el liceo en mayo de 1905, con la visión de brindar educación de calidad a la juventud de San Fernando." },
  { year: "1950s", title: "Consolidación", description: "El liceo se consolida como referente educativo de la Región de O'Higgins, ampliando su oferta académica." },
  { year: "1990s", title: "Modalidad TP", description: "Se incorporan las especialidades Técnico Profesionales, ampliando las oportunidades de formación para los estudiantes." },
  { year: "2000s", title: "Modernización", description: "Actualización de infraestructura, laboratorios y talleres para responder a las demandas del siglo XXI." },
  { year: "2020s", title: "SLEP Colchagua", description: "El liceo pasa a depender del Servicio Local de Educación Pública Colchagua, fortaleciendo la educación pública." },
  { year: "2026", title: "121 años", description: "Celebramos 121 años de trayectoria formando profesionales con excelencia humana y académica." },
];

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero banner */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
            <p className="text-lg text-blue-200 max-w-2xl">
              Conoce la historia, misión, visión y valores que nos definen como
              institución educativa desde 1905.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Historia */}
      <Section
        title="Nuestra Historia"
        subtitle="Más de un siglo formando generaciones de profesionales"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                El Liceo Eduardo Charme fue fundado en mayo de 1905 por iniciativa
                del senador <strong>Eduardo Charme Fernández</strong>, quien vio la
                necesidad de crear un centro educativo que brindara formación de
                calidad a la juventud de San Fernando y la Región de O&apos;Higgins.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A lo largo de sus 121 años de historia, el liceo ha formado a miles
                de profesionales que se han destacado en distintos ámbitos del
                quehacer nacional. Hoy, como establecimiento dependiente del SLEP
                Colchagua, continuamos nuestro compromiso con la excelencia
                educativa, ofreciendo formación Técnico Profesional de excelencia.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/images/somos.jpg"
                alt="Comunidad del Liceo Eduardo Charme"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 hidden md:block ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    {index % 2 === 0 && (
                      <div className="bg-white rounded-xl p-5 card-shadow">
                        <h4 className="font-bold text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    )}
                    {index % 2 !== 0 && <div />}
                  </div>

                  <div className="relative z-10 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Clock size={14} className="text-white" />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-primary whitespace-nowrap">
                      {event.year}
                    </span>
                  </div>

                  <div className="flex-1">
                    {/* Mobile always shows content, desktop alternates */}
                    <div className="md:hidden bg-white rounded-xl p-5 card-shadow">
                      <h4 className="font-bold text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    </div>
                    {index % 2 !== 0 && (
                      <div className="hidden md:block bg-white rounded-xl p-5 card-shadow">
                        <h4 className="font-bold text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Misión y Visión */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 card-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
              <Star size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser una institución de sólida formación humana y profesional, que se
              oriente en la preparación de estudiantes en la dimensión de
              perfeccionar sus competencias en la continuación de estudios superiores
              y en la preparación de jóvenes que ingresan al mundo laboral, centrando
              su acción en equipos de trabajo multi e interdisciplinario para el
              mejoramiento continuo de la educación en el liceo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 card-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-5">
              <Shield size={28} className="text-gold-dark" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Transformar nuestra institución educativa en un liceo universal de
              excelencia, en la formación humana como en lo profesional, con el
              objeto de preparar a nuestros estudiantes para enfrentar con éxito la
              vida y el mundo del trabajo.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Sellos educativos */}
      <Section
        title="Sellos Educativos"
        subtitle="Los pilares que guían nuestra labor educativa"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sealItems.map((seal, index) => {
            const Icon = iconMap[seal.icon];
            return (
              <motion.div
                key={seal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="flex flex-col items-center pt-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      {Icon && <Icon size={30} className="text-primary" />}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{seal.title}</h3>
                    <p className="text-sm text-gray-600">{seal.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Valores */}
      <Section
        title="Valores Institucionales"
        subtitle="Los valores que promueven nuestra identidad como comunidad educativa"
        className="bg-primary text-white"
        dark
      >
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {values.map((value, index) => (
            <motion.span
              key={value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-gold/20 hover:border-gold/40 transition-colors cursor-default"
            >
              {value}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* Equipo directivo */}
      <Section
        title="Equipo Directivo"
        subtitle="Profesionales comprometidos con la educación de calidad"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center">
                <div className="pt-6 px-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto flex items-center justify-center">
                    <Users size={32} className="text-primary/40" />
                  </div>
                </div>
                <CardContent>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
