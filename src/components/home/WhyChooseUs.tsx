"use client";

import { motion } from "framer-motion";
import { Code, MapPin, Users, DollarSign } from "lucide-react";
import Section from "@/components/ui/Section";

const reasons = [
  {
    icon: Code,
    title: "Única especialidad de Programación en San Fernando",
    description:
      "Somos el único liceo de la comuna que ofrece formación en desarrollo de software y tecnología. Preparamos a nuestros estudiantes para la industria digital.",
    highlight: "Exclusivo",
    color: "bg-emerald-500",
  },
  {
    icon: MapPin,
    title: "Única especialidad de Turismo en la provincia",
    description:
      "Aprovechamos el potencial turístico de Colchagua y la Ruta del Vino para formar técnicos en servicios turísticos con prácticas en terreno.",
    highlight: "Exclusivo",
    color: "bg-amber-500",
  },
  {
    icon: DollarSign,
    title: "Educación 100% gratuita",
    description:
      "Como establecimiento público dependiente del SLEP Colchagua, no cobramos matrícula ni mensualidad. Acceso a beneficios JUNAEB.",
    highlight: "Sin costo",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Liceo mixto con 4 especialidades diversas",
    description:
      "Administración, Enfermería, Programación y Turismo. Cuatro caminos profesionales para todos los estudiantes, sin importar género.",
    highlight: "Diversidad",
    color: "bg-purple-500",
  },
];

export default function WhyChooseUs() {
  return (
    <Section
      title="¿Por qué elegir el Liceo Eduardo Charme?"
      subtitle="Lo que nos hace únicos en San Fernando"
    >
      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-6 rounded-2xl bg-white border border-gray-100 card-shadow hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-xl ${reason.color} flex items-center justify-center shrink-0`}
              >
                <reason.icon size={24} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-white bg-gold px-2 py-0.5 rounded-full">
                    {reason.highlight}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
