import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta al Liceo Eduardo Charme. Argomedo 485, San Fernando. Teléfono, email, formulario de contacto y mapa de ubicación.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
