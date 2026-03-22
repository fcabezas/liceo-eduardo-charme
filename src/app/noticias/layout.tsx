import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Últimas noticias y novedades del Liceo Eduardo Charme. Actividades académicas, deportivas, culturales e institucionales.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
