import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta Académica",
  description:
    "Modalidad Técnico Profesional, jornada escolar, talleres extraprogramáticos del Liceo Eduardo Charme.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
