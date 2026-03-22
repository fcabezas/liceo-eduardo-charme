"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { newsItems } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function NewsHighlights() {
  const latestNews = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <Section
      title="Últimas Noticias"
      subtitle="Mantente informado sobre las actividades y novedades del Liceo Eduardo Charme"
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestNews.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              {news.image && (
                <div className="relative aspect-video">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
              )}
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {news.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} />
                    {formatDate(news.date)}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {news.excerpt}
                </p>
                <Link
                  href={`/noticias/${news.id}`}
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Leer más →
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/noticias"
          className="btn-outline gap-2"
        >
          Ver todas las noticias
          <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
