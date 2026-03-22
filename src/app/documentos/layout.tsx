import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentos Institucionales",
  description:
    "Descarga documentos oficiales del Liceo Eduardo Charme: PEI, Reglamento Interno, Manual de Convivencia, Protocolos y más.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
