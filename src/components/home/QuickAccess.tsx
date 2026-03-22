"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Newspaper,
  FileText,
  Calendar,
  Camera,
} from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Especialidades TP",
    description: "Conoce nuestras 4 carreras técnicas",
    href: "/especialidades",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Oferta Académica",
    description: "Planes de estudio y talleres",
    href: "/oferta-academica",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Newspaper,
    title: "Noticias",
    description: "Últimas novedades del liceo",
    href: "/noticias",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: FileText,
    title: "Documentos",
    description: "PEI, reglamentos y protocolos",
    href: "/documentos",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Calendar,
    title: "Calendario",
    description: "Eventos y fechas importantes",
    href: "/calendario",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Camera,
    title: "Galería",
    description: "Fotos de nuestra comunidad",
    href: "/galeria",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function QuickAccess() {
  return (
    <section className="py-12 relative z-10 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white card-shadow hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-sm text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
