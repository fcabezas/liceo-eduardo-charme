"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Section from "@/components/ui/Section";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { newsItems } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function NoticiaDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const news = newsItems.find((n) => n.id === id);

  if (!news) {
    return (
      <Section>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Noticia no encontrada
          </h1>
          <Link href="/noticias" className="btn-primary">
            Volver a noticias
          </Link>
        </div>
      </Section>
    );
  }

  const otherNews = newsItems.filter((n) => n.id !== id).slice(0, 3);

  return (
    <>
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Volver a noticias
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                {news.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-blue-200">
                <Calendar size={14} />
                {formatDate(news.date)}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
              {news.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {news.image && !news.image.includes("placeholder") ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <ImagePlaceholder alt={news.title} aspectRatio="video" />
              )}
              <div className="mt-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {news.excerpt}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h3 className="font-bold text-gray-900 mb-4">Otras noticias</h3>
              <div className="space-y-4">
                {otherNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/noticias/${item.id}`}
                    className="block p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                      <Tag size={10} />
                      {item.category}
                    </span>
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {formatDate(item.date)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
