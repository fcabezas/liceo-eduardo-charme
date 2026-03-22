import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Especialidades Técnico Profesionales",
  description:
    "Especialidades TP: Administración RRHH, Atención de Enfermería, Programación y Servicios de Turismo. Liceo Eduardo Charme, San Fernando.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
