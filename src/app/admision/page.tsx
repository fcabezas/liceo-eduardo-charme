"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Calendar,
  FileText,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Mail,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/lib/data";

export default function AdmisionPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admisión 2026</h1>
            <p className="text-lg text-blue-200 max-w-2xl">
              Únete a nuestra comunidad educativa. Conoce el proceso de admisión
              y los requisitos para ser parte del Liceo Eduardo Charme.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SAE Info */}
      <Section
        title="Sistema de Admisión Escolar (SAE)"
        subtitle="La postulación al Liceo Eduardo Charme se realiza a través del Sistema de Admisión Escolar del Ministerio de Educación"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertCircle size={24} className="text-gold-dark shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Importante</h3>
              <p className="text-gray-600 text-sm">
                La admisión a establecimientos públicos en Chile se realiza
                exclusivamente a través del Sistema de Admisión Escolar (SAE).
                Las postulaciones se abren generalmente entre agosto y noviembre
                de cada año.
              </p>
            </div>
          </div>

          <a
            href="https://www.sistemadeadmisionescolar.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary gap-2 w-full sm:w-auto justify-center text-base mb-12 block sm:inline-flex text-center"
          >
            Ir al Sistema de Admisión Escolar
            <ExternalLink size={18} />
          </a>
        </div>
      </Section>

      {/* Proceso */}
      <Section
        title="Proceso de Admisión"
        subtitle="Pasos para postular al Liceo Eduardo Charme"
        className="bg-gray-50"
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: ClipboardList,
              step: "01",
              title: "Postulación SAE",
              description:
                "Ingresa al sistema SAE (www.sistemadeadmisionescolar.cl) y selecciona el Liceo Eduardo Charme (RBD 2448-1) como opción.",
            },
            {
              icon: Calendar,
              step: "02",
              title: "Resultados",
              description:
                "Los resultados de asignación se publican en el sistema SAE. Si eres aceptado, deberás matricularte en las fechas indicadas.",
            },
            {
              icon: FileText,
              step: "03",
              title: "Matrícula",
              description:
                "Presenta la documentación requerida en el liceo para formalizar tu matrícula. Recuerda que es completamente gratuito.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon size={28} className="text-primary" />
                  </div>
                  <span className="text-sm font-bold text-gold">
                    Paso {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Documentos necesarios */}
      <Section
        title="Documentos para Matrícula"
        subtitle="Documentación necesaria al momento de formalizar la matrícula"
      >
        <div className="max-w-2xl mx-auto">
          <div className="space-y-3">
            {[
              "Certificado de nacimiento del estudiante",
              "Certificado de estudios del año anterior",
              "Informe de notas parciales (si corresponde)",
              "Cédula de identidad del estudiante",
              "Cédula de identidad del apoderado",
              "Certificado de residencia (opcional)",
              "Informe de personalidad (si viene de otro establecimiento)",
              "Ficha de matrícula completada",
            ].map((doc, index) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                <span className="text-gray-700">{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Consultas */}
      <Section
        title="¿Tienes dudas?"
        subtitle="Contáctanos directamente para resolver tus consultas sobre admisión"
        className="bg-gray-50"
      >
        <div className="max-w-xl mx-auto text-center">
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`https://wa.me/56958137970?text=${encodeURIComponent("Hola, tengo una consulta sobre admisión al Liceo Eduardo Charme.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-5 bg-[#25D366]/10 border-2 border-[#25D366]/30 rounded-2xl hover:bg-[#25D366]/20 transition-all font-semibold text-gray-900"
            >
              <MessageCircle size={22} className="text-[#25D366]" />
              WhatsApp
            </a>
            <a
              href="mailto:ledocharme@yahoo.es?subject=Consulta%20Admisión%20Liceo%20Eduardo%20Charme"
              className="flex items-center justify-center gap-3 p-5 bg-primary/5 border-2 border-primary/20 rounded-2xl hover:bg-primary/10 transition-all font-semibold text-gray-900"
            >
              <Mail size={22} className="text-primary" />
              Email
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Preguntas Frecuentes"
        subtitle="Respuestas a las dudas más comunes sobre admisión y el liceo"
      >
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
