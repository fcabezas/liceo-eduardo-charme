import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Liceo Eduardo Charme | San Fernando, Chile",
    template: "%s | Liceo Eduardo Charme",
  },
  description:
    "Liceo de Educación Media Técnico Profesional en San Fernando, Región de O'Higgins. 121 años formando profesionales con excelencia humana y académica. Especialidades: Administración, Enfermería, Programación y Turismo.",
  keywords: [
    "Liceo Eduardo Charme",
    "San Fernando",
    "educación técnico profesional",
    "liceo técnico profesional",
    "SLEP Colchagua",
    "liceo San Fernando",
    "educación media",
    "técnico en programación",
    "técnico en enfermería",
    "técnico en administración",
    "técnico en turismo",
  ],
  authors: [{ name: "Liceo Eduardo Charme" }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Liceo Eduardo Charme",
    title: "Liceo Eduardo Charme | San Fernando, Chile",
    description:
      "121 años formando profesionales. Educación Técnico Profesional en San Fernando.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liceo Eduardo Charme",
    description:
      "121 años formando profesionales. Educación Técnico Profesional en San Fernando.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
