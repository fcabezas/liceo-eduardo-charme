"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Calendar,
  FileText,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Send,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/lib/data";

export default function AdmisionPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    currentLevel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      currentLevel: "",
      message: "",
    });
  };

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

      {/* Formulario de consulta */}
      <Section
        title="Formulario de Consulta"
        subtitle="¿Tienes dudas sobre el proceso de admisión? Escríbenos"
        className="bg-gray-50"
      >
        <div className="max-w-2xl mx-auto">
          {submitted && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
              <CheckCircle size={20} className="text-emerald-500" />
              <p className="text-emerald-700 font-medium">
                ¡Consulta enviada con éxito! Te responderemos a la brevedad.
              </p>
            </div>
          )}

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del estudiante *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({ ...formData, studentName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del apoderado *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nivel al que postula
                  </label>
                  <select
                    value={formData.currentLevel}
                    onChange={(e) =>
                      setFormData({ ...formData, currentLevel: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="">Selecciona un nivel</option>
                    <option value="1-medio">1° Medio</option>
                    <option value="2-medio">2° Medio</option>
                    <option value="3-medio">3° Medio</option>
                    <option value="4-medio">4° Medio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Escribe tu consulta sobre el proceso de admisión..."
                  />
                </div>

                <button type="submit" className="btn-primary gap-2 w-full sm:w-auto">
                  <Send size={16} />
                  Enviar consulta
                </button>
              </form>
            </CardContent>
          </Card>
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
