import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce la historia, misión, visión, sellos educativos y equipo directivo del Liceo Eduardo Charme de San Fernando. Fundado en 1905.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
