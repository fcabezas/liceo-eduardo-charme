"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";
import { siteConfig } from "@/lib/data";

const quickLinks = [
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/oferta-academica", label: "Oferta Académica" },
  { href: "/especialidades", label: "Especialidades TP" },
  { href: "/admision", label: "Admisión" },
  { href: "/contacto", label: "Contacto" },
];

const resourceLinks = [
  { href: "/documentos", label: "Documentos Institucionales" },
  { href: "/noticias", label: "Noticias" },
  { href: "/calendario", label: "Calendario Escolar" },
  { href: "/galeria", label: "Galería" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/favicon-32x32.png"
                alt="Logo Liceo Eduardo Charme"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-white font-bold text-lg">
                  Liceo Eduardo Charme
                </h3>
                <p className="text-xs text-gray-400">San Fernando, Chile</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              121 años formando profesionales con excelencia humana y académica.
              Educación Técnico Profesional y Científico Humanista al servicio de
              la comunidad.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="shrink-0 text-gold" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="shrink-0 text-gold" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  Lunes a Viernes
                  <br />
                  8:00 - 16:25 hrs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Liceo Eduardo Charme. Todos los
            derechos reservados. SLEP Colchagua.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gold transition-colors"
            aria-label="Volver arriba"
          >
            Volver arriba
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
