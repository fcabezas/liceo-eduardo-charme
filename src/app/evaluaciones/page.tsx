"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { BookOpen, Filter, Search, Calendar, User, GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const API_URL = "/api/evaluaciones";

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

interface Evaluacion {
  curso: string;
  asignatura: string;
  tipo: string;
  unidad: string;
  docente: string;
  fecha: string;
  fechaStr: string;
  mes: number;
  año: number;
  timestamp: number;
}

interface ApiResponse {
  cursos: string[];
  evaluaciones: Evaluacion[];
}

const tipoBorderColor: Record<string, string> = {
  "Prueba Escrita": "border-l-blue-500",
  "Prueba escrita": "border-l-blue-500",
  "Trabajo Práctico": "border-l-emerald-500",
  "Trabajo práctico": "border-l-emerald-500",
  "Exposición": "border-l-amber-500",
  "Taller": "border-l-purple-500",
  "Proyecto": "border-l-cyan-500",
};

const tipoBadgeColor: Record<string, string> = {
  "Prueba Escrita": "bg-blue-50 text-blue-700",
  "Prueba escrita": "bg-blue-50 text-blue-700",
  "Trabajo Práctico": "bg-emerald-50 text-emerald-700",
  "Trabajo práctico": "bg-emerald-50 text-emerald-700",
  "Exposición": "bg-amber-50 text-amber-700",
  "Taller": "bg-purple-50 text-purple-700",
  "Proyecto": "bg-cyan-50 text-cyan-700",
};

export default function EvaluacionesPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cursoFilter, setCursoFilter] = useState("");
  const [mesFilter, setMesFilter] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar evaluaciones");
        return res.json();
      })
      .then((json: ApiResponse) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const mesesDisponibles = useMemo(() => {
    if (!data) return [];
    const unique = new Map<string, { mes: number; año: number }>();
    data.evaluaciones.forEach((e) => {
      const key = `${e.mes}-${e.año}`;
      if (!unique.has(key)) unique.set(key, { mes: e.mes, año: e.año });
    });
    return Array.from(unique.values()).sort(
      (a, b) => a.año - b.año || a.mes - b.mes
    );
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.evaluaciones.filter((e) => {
      const matchCurso = !cursoFilter || e.curso === cursoFilter;
      const matchMes = !mesFilter || `${e.mes}-${e.año}` === mesFilter;
      return matchCurso && matchMes;
    });
  }, [data, cursoFilter, mesFilter]);

  const grouped = useMemo(() => {
    const map = new Map<string, Evaluacion[]>();
    filtered.forEach((e) => {
      const key = `${e.mes}-${e.año}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(e);
    });
    return Array.from(map.entries()).sort((a, b) => {
      const [am, ay] = a[0].split("-").map(Number);
      const [bm, by] = b[0].split("-").map(Number);
      return ay - by || am - bm;
    });
  }, [filtered]);

  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={40} className="text-gold" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Calendario de Evaluaciones
              </h1>
            </div>
            <p className="text-lg text-blue-200 max-w-2xl">
              Consulta las fechas de pruebas y trabajos organizados por curso y
              asignatura. Los datos se actualizan automáticamente desde UTP.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={18} className="text-primary" />
                <h2 className="font-bold text-gray-900">Filtrar evaluaciones</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="curso"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Curso
                  </label>
                  <select
                    id="curso"
                    value={cursoFilter}
                    onChange={(e) => setCursoFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Todos los cursos</option>
                    {data?.cursos.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="mes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mes
                  </label>
                  <select
                    id="mes"
                    value={mesFilter}
                    onChange={(e) => setMesFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Todos los meses</option>
                    {mesesDisponibles.map(({ mes, año }) => (
                      <option key={`${mes}-${año}`} value={`${mes}-${año}`}>
                        {MESES[mes]} {año}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results count */}
          {!loading && !error && (
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-primary">
                  {filtered.length}
                </span>{" "}
                {filtered.length === 1 ? "evaluación encontrada" : "evaluaciones encontradas"}
              </p>
              {(cursoFilter || mesFilter) && (
                <button
                  onClick={() => {
                    setCursoFilter("");
                    setMesFilter("");
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
              <p className="text-gray-500">Cargando evaluaciones...</p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-16">
              <p className="text-red-500 font-medium mb-2">
                No se pudieron cargar las evaluaciones
              </p>
              <p className="text-sm text-gray-500">{error}</p>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-16">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 font-medium">
                No hay evaluaciones para los filtros seleccionados
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Prueba seleccionando otro curso o mes
              </p>
            </div>
          )}

          {/* Grouped results */}
          {!loading &&
            !error &&
            grouped.map(([key, evals]) => {
              const [m, a] = key.split("-").map(Number);
              return (
                <div key={key} className="mb-8">
                  <h3 className="text-lg font-bold text-primary mb-4 pb-2 border-b-2 border-primary">
                    {MESES[m]} {a}
                  </h3>
                  <div className="space-y-3">
                    {evals.map((ev, i) => {
                      const borderColor =
                        tipoBorderColor[ev.tipo] || "border-l-gray-400";
                      const badgeColor =
                        tipoBadgeColor[ev.tipo] || "bg-gray-100 text-gray-700";
                      return (
                        <motion.div
                          key={`${ev.curso}-${ev.asignatura}-${ev.timestamp}-${i}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Card
                            className={cn(
                              "border-l-4 hover:shadow-md transition-shadow",
                              borderColor
                            )}
                          >
                            <CardContent className="p-4">
                              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                                {/* Date */}
                                <div className="sm:w-44 shrink-0">
                                  <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                                    <Calendar size={14} />
                                    <span className="capitalize">
                                      {ev.fechaStr}
                                    </span>
                                  </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-bold text-gray-900">
                                    {ev.asignatura}
                                  </h4>
                                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <User size={13} />
                                      {ev.docente}
                                    </span>
                                    {ev.unidad && (
                                      <span className="flex items-center gap-1">
                                        <BookOpen size={13} />
                                        {ev.unidad}
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 sm:shrink-0">
                                  {!cursoFilter && (
                                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                                      <GraduationCap size={12} />
                                      {ev.curso}
                                    </span>
                                  )}
                                  <span
                                    className={cn(
                                      "text-xs font-bold px-2.5 py-1 rounded-full",
                                      badgeColor
                                    )}
                                  >
                                    {ev.tipo}
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </Section>
    </>
  );
}
