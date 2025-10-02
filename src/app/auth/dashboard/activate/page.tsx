"use client";

import { useEffect, useState } from "react";
import CourseSessionsTable, {
  Session,
} from "@/components/attendance/CourseSessionsTable";

const LS_KEY = "activate/sesiones";
const MOCK: Session[] = [
  { id: 1, tipo: "Teoría", fecha: "14/08/2025", estado: "SIN_MARCACION" },
  { id: 2, tipo: "Teoría", fecha: "21/08/2025", estado: "TEORIA_OK" },
  { id: 3, tipo: "Teoría", fecha: "28/08/2025", estado: "TEORIA_OK" },
];

export default function ActivatePage() {
  const [rows, setRows] = useState<Session[]>(MOCK);

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Session[];
        if (Array.isArray(parsed)) setRows(parsed);
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(rows));
  }, [rows]);

  const toggle = (id: number) => {
    setRows((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, estado: s.estado === "SIN_MARCACION" ? "TEORIA_OK" : "SIN_MARCACION" }
          : s
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* …tu tarjeta superior con info del curso… */}

      <CourseSessionsTable
        title="Sesiones de clase"
        sessions={rows}
        highlightIds={[1]}                         // sombreado inicial
        onToggleEstado={toggle}                    // acción (opcional)
        onClickJustificaciones={() => alert("Abrir modal de justificaciones")}
      />
    </div>
  );
}
