"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/lib/data";

export default function ContactoPage() {
  const whatsappUrl = `https://wa.me/56958137970?text=${encodeURIComponent("Hola, me comunico desde el sitio web del Liceo Eduardo Charme.")}`;

  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-lg text-blue-200 max-w-2xl">
              Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros
              canales de comunicación.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* CTA principal: WhatsApp y Email */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#25D366]/10 border-2 border-[#25D366]/30 rounded-2xl hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={28} className="text-white fill-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
                <p className="text-sm text-gray-600">Respuesta rápida</p>
                <p className="text-sm font-semibold text-[#25D366]">+56 9 5813 7970</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-6 bg-primary/5 border-2 border-primary/20 rounded-2xl hover:bg-primary/10 hover:border-primary/40 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                <p className="text-sm text-gray-600">Consultas formales</p>
                <p className="text-sm font-semibold text-primary">{siteConfig.email}</p>
              </div>
            </a>
          </div>

          {/* Info cards */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Información de Contacto
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Dirección</h3>
                <p className="text-sm text-gray-600">{siteConfig.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Teléfono</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Horario de Atención</h3>
                <p className="text-sm text-gray-600">Lunes a Viernes, 8:00 - 16:25 hrs</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Instagram size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Redes Sociales</h3>
                <div className="flex items-center gap-3 mt-1">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    @liceo.eduardocharme
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    @liceoech
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section title="Ubicación" className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.8!2d-70.9897!3d-34.5847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966413e5e1b5c7c1%3A0x5e0f1f5c5e0f1f5c!2sArgomedo%20485%2C%20San%20Fernando%2C%20O&#39;Higgins!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Liceo Eduardo Charme"
              className="w-full"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://www.google.com/maps/search/Argomedo+485+San+Fernando+Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-medium hover:text-secondary transition-colors"
            >
              Abrir en Google Maps →
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
