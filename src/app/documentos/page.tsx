"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, HardDrive } from "lucide-react";
import Section from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import { documents } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const categories = ["Todos", "Institucional", "Normativo", "Académico"];

export default function DocumentosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredDocs = documents.filter(
    (doc) => activeCategory === "Todos" || doc.category === activeCategory
  );

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
              Documentos Institucionales
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl">
              Accede a los documentos oficiales del liceo: PEI, reglamentos,
              protocolos y más.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Documents grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredDocs.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <FileText size={24} className="text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {doc.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mt-2 mb-1">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {doc.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <HardDrive size={12} />
                          {doc.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(doc.date)}
                        </span>
                      </div>
                      {doc.downloadUrl ? (
                        <a
                          href={doc.downloadUrl}
                          download
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                        >
                          <Download size={16} />
                          Descargar PDF
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                          <Download size={16} />
                          Próximamente
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
