import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta Académica",
  description:
    "Modalidades Científico Humanista y Técnico Profesional, jornada escolar, talleres extraprogramáticos del Liceo Eduardo Charme.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
