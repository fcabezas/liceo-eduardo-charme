import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendario de Eventos",
  description:
    "Calendario escolar del Liceo Eduardo Charme. Eventos académicos, deportivos, culturales, evaluaciones y fechas importantes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
