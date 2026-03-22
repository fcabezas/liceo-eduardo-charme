import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Galería de imágenes del Liceo Eduardo Charme: infraestructura, actividades académicas, eventos, deportes y especialidades TP.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
