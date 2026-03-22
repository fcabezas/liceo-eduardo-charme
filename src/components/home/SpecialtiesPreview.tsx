"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  Code,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Section from "@/components/ui/Section";
import { specialties } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Heart,
  Code,
  MapPin,
};

export default function SpecialtiesPreview() {
  return (
    <Section
      title="Especialidades Técnico Profesionales"
      subtitle="Formamos técnicos de nivel medio preparados para el mundo laboral y la educación superior"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialties.map((specialty, index) => {
          const Icon = iconMap[specialty.icon];
          return (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/especialidades#${specialty.id}`}
                className="group block p-6 rounded-2xl border border-gray-100 hover:border-primary/20 card-shadow hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${specialty.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {Icon && <Icon size={28} className="text-white" />}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {specialty.title}
                </h3>
                {specialty.mention && (
                  <p className="text-xs text-primary font-medium mb-2">
                    {specialty.mention}
                  </p>
                )}
                <p className="text-sm text-gray-600 line-clamp-3">
                  {specialty.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 group-hover:gap-2 transition-all">
                  Ver más <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
