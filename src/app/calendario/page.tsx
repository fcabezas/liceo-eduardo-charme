"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Bell } from "lucide-react";
import Section from "@/components/ui/Section";
import Card, { CardContent } from "@/components/ui/Card";
import { calendarEvents } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";

const GOOGLE_CALENDAR_ID = "c_7db55ac26706f107e6535a081c795fec66a05c856226ea3a94b150829d070bff@group.calendar.google.com";

const eventTypeColors: Record<string, { bg: string; text: string; dot: string }> = {
  academic: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  meeting: { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  evaluation: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  cultural: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  holiday: { bg: "bg-red-50", text: "text-red-700", dot: "bg-red-500" },
  sports: { bg: "bg-cyan-50", text: "text-cyan-700", dot: "bg-cyan-500" },
};

const eventTypeLabels: Record<string, string> = {
  academic: "Académico",
  meeting: "Reunión",
  evaluation: "Evaluación",
  cultural: "Cultural",
  holiday: "Feriado",
  sports: "Deportivo",
};

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export default function CalendarioPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // March 2026

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = (firstDay.getDay() + 6) % 7; // Monday = 0
    const daysInMonth = lastDay.getDate();

    const days: (number | null)[] = [];
    for (let i = 0; i < startDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  }, [year, month]);

  const getEventsForDay = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return calendarEvents.filter((e) => e.date === dateStr);
  };

  const monthEvents = useMemo(() => {
    return calendarEvents
      .filter((e) => {
        const d = new Date(e.date);
        return d.getFullYear() === year && d.getMonth() === month;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [year, month]);

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <>
      {/* Hero */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Calendario de Eventos
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mb-6">
              Fechas importantes, actividades académicas, deportivas, culturales
              y más.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(GOOGLE_CALENDAR_ID)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
              >
                <Bell size={18} />
                Suscribirme al calendario
              </a>
              <a
                href={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(GOOGLE_CALENDAR_ID)}&ctz=America/Santiago`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Calendar size={18} />
                Ver en Google Calendar
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {/* Month navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={goToPrevMonth}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Mes anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h2 className="text-xl font-bold text-gray-900">
                    {monthNames[month]} {year}
                  </h2>
                  <button
                    onClick={goToNextMonth}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Mes siguiente"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-semibold text-gray-500 py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => {
                    const events = day ? getEventsForDay(day) : [];
                    const isToday =
                      day === 21 && month === 2 && year === 2026;

                    return (
                      <div
                        key={index}
                        className={cn(
                          "min-h-[60px] md:min-h-[80px] p-1 rounded-lg text-sm",
                          day ? "hover:bg-gray-50" : "",
                          isToday && "bg-primary/5 ring-2 ring-primary"
                        )}
                      >
                        {day && (
                          <>
                            <span
                              className={cn(
                                "block text-center font-medium mb-1",
                                isToday
                                  ? "text-primary font-bold"
                                  : "text-gray-700"
                              )}
                            >
                              {day}
                            </span>
                            <div className="space-y-0.5">
                              {events.map((event) => {
                                const colors = eventTypeColors[event.type];
                                return (
                                  <div
                                    key={event.id}
                                    className={cn(
                                      "text-[10px] md:text-xs px-1 py-0.5 rounded truncate",
                                      colors?.bg,
                                      colors?.text
                                    )}
                                    title={event.title}
                                  >
                                    <span className="hidden md:inline">
                                      {event.title}
                                    </span>
                                    <span className="md:hidden">
                                      <span
                                        className={cn(
                                          "inline-block w-1.5 h-1.5 rounded-full",
                                          colors?.dot
                                        )}
                                      />
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t">
                  {Object.entries(eventTypeLabels).map(([type, label]) => {
                    const colors = eventTypeColors[type];
                    return (
                      <div key={type} className="flex items-center gap-1.5">
                        <span
                          className={cn(
                            "w-2.5 h-2.5 rounded-full",
                            colors?.dot
                          )}
                        />
                        <span className="text-xs text-gray-500">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming events */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Eventos de {monthNames[month]}
            </h3>
            {monthEvents.length > 0 ? (
              <div className="space-y-3">
                {monthEvents.map((event) => {
                  const colors = eventTypeColors[event.type];
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div
                              className={cn(
                                "w-2 h-full min-h-[40px] rounded-full shrink-0",
                                colors?.dot
                              )}
                            />
                            <div>
                              <span
                                className={cn(
                                  "text-xs font-medium px-2 py-0.5 rounded-full",
                                  colors?.bg,
                                  colors?.text
                                )}
                              >
                                {eventTypeLabels[event.type]}
                              </span>
                              <h4 className="font-semibold text-gray-900 mt-1">
                                {event.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {formatDate(event.date)}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                No hay eventos programados para este mes.
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* Google Calendar embed */}
      <Section
        title="Calendario Institucional en línea"
        subtitle="Los eventos se actualizan automáticamente. Suscríbete para recibirlos en tu Google Calendar."
        className="bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-2 md:p-4">
              <iframe
                src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(GOOGLE_CALENDAR_ID)}&ctz=America/Santiago&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&mode=MONTH&hl=es`}
                className="w-full rounded-lg"
                style={{ height: "600px", border: 0 }}
                title="Calendario Liceo Eduardo Charme"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </CardContent>
          </Card>
          <div className="text-center mt-6">
            <a
              href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(GOOGLE_CALENDAR_ID)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2"
            >
              <Bell size={18} />
              Suscribirme y recibir notificaciones
            </a>
            <p className="text-sm text-gray-500 mt-3">
              Al suscribirte, los eventos del liceo aparecerán automáticamente en tu calendario personal con notificaciones.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
