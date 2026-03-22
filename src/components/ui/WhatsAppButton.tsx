"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "56958137970";
  const message = "Hola, me comunico desde el sitio web del Liceo Eduardo Charme. Quisiera información sobre...";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#1ebe5d] hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}
