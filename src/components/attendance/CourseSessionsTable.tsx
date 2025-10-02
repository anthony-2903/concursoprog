// src/components/attendance/CourseSessionsTable.tsx
"use client";
import { useMemo } from "react";

// ── Tipos exportables ────────────────────────────────────────
export type SessionType = "Teoría" | "Práctica" | "Laboratorio";
export type SessionState = "SIN_MARCACION" | "TEORIA_OK" | "PRACTICA_OK";

export interface Session {
  id: number;
  tipo: SessionType;
  fecha: string;        // DD/MM/YYYY
  estado: SessionState;
}

export interface CourseSessionsTableProps {
  title?: string;                     // "Sesiones de clase" por defecto
  sessions: Session[];                // filas
  highlightIds?: number[] | Set<number>; // sombreado opcional
  showActions?: boolean;              // mostrar/ocultar columna de acciones
  onToggleEstado?(id: number): void;  // callback para cambiar estado (opcional)
  onClickJustificaciones?(): void;    // botón de justificaciones (opcional)
}

// ── UI helpers ───────────────────────────────────────────────
function Badge({ estado }: { estado: SessionState }) {
  if (estado === "SIN_MARCACION") {
    return (
      <span className="inline-flex items-center rounded-md border px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-100">
        SIN MARCACIÓN..
      </span>
    );
  }
  const label = estado === "TEORIA_OK" ? "TEORÍA ✓" : "PRÁCTICA ✓";
  return (
    <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
      {label}
    </span>
  );
}

// ── Componente principal ─────────────────────────────────────
export default function CourseSessionsTable({
  title = "Sesiones de clase",
  sessions,
  highlightIds,
  showActions = true,
  onToggleEstado,
  onClickJustificaciones,
}: CourseSessionsTableProps) {
  const highlight = useMemo(
    () => (highlightIds instanceof Set ? highlightIds : new Set(highlightIds ?? [])),
    [highlightIds]
  );

  return (
    <div className="rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm">
      {/* Header */}
      <div className="border-b dark:border-gray-800 p-4 sm:p-6 flex items-center justify-between">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        {onClickJustificaciones && (
          <button
            type="button"
            className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
            onClick={onClickJustificaciones}
          >
            JUSTIFICACIONES
          </button>
        )}
      </div>

      {/* Tabla */}
      <div className="px-4 sm:px-6 py-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 dark:text-gray-300">
              <th className="py-3 pr-4">Sesiones de clase</th>
              <th className="py-3 pr-4">Fecha de Registro</th>
              <th className="py-3 pr-4">Marcaciones</th>
              {showActions && <th className="py-3 pr-4"></th>}
            </tr>
          </thead>
          <tbody className="align-top">
            {sessions.map((s) => {
              const sombrear = highlight.has(s.id);
              return (
                <tr
                  key={s.id}
                  className={
                    sombrear
                      ? "bg-gray-50 dark:bg-gray-800/60"
                      : "bg-white dark:bg-gray-900"
                  }
                >
                  <td className="py-3 pr-4">{`Sesión ${s.id}: ${s.tipo}`}</td>
                  <td className="py-3 pr-4">{s.fecha}</td>
                  <td className="py-3 pr-4">
                    <Badge estado={s.estado} />
                  </td>
                  {showActions && (
                    <td className="py-3 pr-4">
                      {onToggleEstado && (
                        <button
                          className="rounded-md border px-2.5 py-1.5 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                          onClick={() => onToggleEstado(s.id)}
                          title="Cambiar estado"
                        >
                          Alternar estado
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
