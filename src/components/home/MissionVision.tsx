"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Section from "@/components/ui/Section";

export default function MissionVision() {
  return (
    <Section className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 card-shadow"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
            <Target size={28} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
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
            <Eye size={28} className="text-gold-dark" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
          <p className="text-gray-600 leading-relaxed">
            Transformar nuestra institución educativa en un liceo universal de
            excelencia, en la formación humana como en lo profesional, con el
            objeto de preparar a nuestros estudiantes para enfrentar con éxito la
            vida y el mundo del trabajo.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
