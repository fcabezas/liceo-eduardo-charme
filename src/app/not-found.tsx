import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-9xl font-bold text-primary/10 mb-2 select-none">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3 -mt-12">
          Página no encontrada
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary gap-2">
            <Home size={16} />
            Ir al inicio
          </Link>
          <Link href="/contacto" className="btn-outline gap-2">
            <ArrowLeft size={16} />
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
