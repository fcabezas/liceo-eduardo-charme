import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evaluaciones",
  description:
    "Calendario de evaluaciones del Liceo Eduardo Charme. Consulta las fechas de pruebas y trabajos por curso y asignatura.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
