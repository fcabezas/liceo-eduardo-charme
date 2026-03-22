import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admisión",
  description:
    "Proceso de admisión 2026 del Liceo Eduardo Charme. Postula a través del SAE. Requisitos, fechas y formulario de consulta.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
