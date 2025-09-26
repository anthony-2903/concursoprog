"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [open, setOpen] = useState(false);

  const toc = (
    <>
      <h2 className="font-semibold mb-3">Contenido</h2>
      <nav className="flex flex-col gap-2 text-sm">
        <a href="#introduccion" className="hover:underline text-slate-700 dark:text-slate-300">1. Introducción</a>
        <a href="#alcance" className="hover:underline text-slate-700 dark:text-slate-300">2. Alcance</a>
        <a href="#fecha-duracion" className="hover:underline text-slate-700 dark:text-slate-300">3. Fecha y Duración</a>
        <a href="#etapas" className="hover:underline text-slate-700 dark:text-slate-300">4. Etapas</a>
        <a href="#equipos" className="hover:underline text-slate-700 dark:text-slate-300">5. Formación de Equipos</a>
        <a href="#caracteristicas" className="hover:underline text-slate-700 dark:text-slate-300">6. Acerca del Concurso</a>
        <a href="#criterios" className="hover:underline text-slate-700 dark:text-slate-300">7. Criterios de Evaluación</a>
        <a href="#premiacion" className="hover:underline text-slate-700 dark:text-slate-300">8. Premiación</a>
        <a href="#inscripcion" className="hover:underline text-slate-700 dark:text-slate-300">9. Requisitos de Inscripción</a>
        <a href="#finales" className="hover:underline text-slate-700 dark:text-slate-300">10. Disposiciones Finales</a>
      </nav>

      <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        <p><strong>Lenguaje oficial:</strong> Java 17+</p>
        <p><strong>Tiempo por problema:</strong> 5 minutos</p>
        <p><strong>Material permitido:</strong> papel y lápiz</p>
      </div>
    </>
  );

  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Bases del Concurso Interno de Programación — UPeU Lima 2025-2
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Fecha: <strong>01 de octubre de 2025</strong> · Horario: <strong>17:00 — 18:40</strong>
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            {/* Botón móvil */}
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="lg:hidden flex items-center gap-2 p-2 border rounded-md mb-3 text-slate-700 dark:text-slate-300"
            >
              <Menu size={20} />
              <span>Contenido</span>
            </button>

            {/* Sidebar estático para desktop (siempre visible en lg) */}
            <div className="hidden lg:block sticky top-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-4 shadow-sm">
              {toc}
            </div>

            {/* Sidebar animado sólo para móvil */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="mobile-toc"
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="lg:hidden overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-4 shadow-sm"
                >
                  {toc}
                </motion.div>
              )}
            </AnimatePresence>
          </aside>

          {/* Contenido principal: mantuve exactamente tu contenido y animaciones */}
          <article className="lg:col-span-3 space-y-6">
            <motion.section
              id="introduccion"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>1. Introducción</h2>
              <p>
                El Concurso Interno de Programación UPeU Lima 2025-2 tiene como objetivo promover el desarrollo de habilidades en lógica,
                algoritmos y resolución de problemas en estudiantes de Ingeniería de Sistemas, Ingeniería de Software y carreras afines.
                Es un espacio para aplicar conocimientos en situaciones competitivas y formativas.
              </p>
              <p>
                El evento fomenta el pensamiento lógico, la creatividad y el trabajo en equipo, además de identificar y reconocer el talento estudiantil en programación. Se rige por principios de orden y disciplina, en armonía con: <em>“Pero hágase todo decentemente y con orden”</em> (1 Corintios 14:40).
              </p>
            </motion.section>

            <motion.section
              id="alcance"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2>2. Alcance del Concurso</h2>
              <p>Dirigido a estudiantes de Ingeniería de Sistemas, Ingeniería de Software o carreras afines de la UPeU.</p>
            </motion.section>

            <motion.section
              id="fecha-duracion"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>3. Fecha y Duración</h2>
              <p><strong>01 de octubre de 2025</strong>, de <strong>5:00 pm a 6:40 pm</strong>.</p>
            </motion.section>

            <motion.section
              id="etapas"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2>4. Etapas del Concurso</h2>
              <p>El certamen se desarrollará mediante eliminaciones simples: el equipo ganador avanza a la siguiente ronda hasta definir al campeón.</p>
            </motion.section>

            <motion.section
              id="equipos"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2>5. Formación de Equipos</h2>
              <ul>
                <li>Cada equipo estará compuesto por <strong>2 a 3 participantes</strong>.</li>
                <li>Todos los miembros deben ser estudiantes de las carreras indicadas.</li>
              </ul>
            </motion.section>

            <motion.section
              id="caracteristicas"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>6. Acerca del Concurso</h2>
              <ul>
                <li>Se desarrollará en tiempo real; <strong>límite de 5 minutos</strong> por algoritmo/problema.</li>
                <li>Lenguaje oficial: <strong>Java (v17 o superior)</strong>, preferentemente usando Apache NetBeans o IDE equivalente.</li>
                <li>Las salidas deben mostrarse en consola.</li>
                <li>Se exige trabajo colaborativo y soluciones originales.</li>
                <li>Queda <strong>prohibido</strong> el uso de internet, herramientas de IA y material bibliográfico.</li>
                <li>Se permite el uso de papel y lápiz/lapicero para bosquejar soluciones.</li>
              </ul>
            </motion.section>

            <motion.section
              id="criterios"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>7. Criterios de Evaluación</h2>
              <ul>
                <li><strong>Eficiencia:</strong> tiempo de ejecución y uso razonable de recursos.</li>
                <li><strong>Exactitud:</strong> la solución debe ser correcta y superar los casos de prueba definidos por el jurado.</li>
                <li>Se podrá otorgar puntuación por claridad del código, comentarios y estrategia empleada.</li>
              </ul>
            </motion.section>

            <motion.section
              id="premiacion"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>8. Premiación</h2>
              <ul>
                <li>Primer Lugar: <strong>S/ 300.00</strong> (sujeto a comprobante fiscal según indicaciones de la comisión organizadora).</li>
                <li>Segundo Lugar: <strong>Mención honrosa</strong>.</li>
              </ul>
            </motion.section>

            <motion.section
              id="inscripcion"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>9. Requisitos de Inscripción</h2>
              <p>Los equipos deben completar el formulario oficial proporcionado por la Escuela Profesional de Ingeniería de Sistemas antes de la fecha límite indicada por la organización.</p>
            </motion.section>

            <motion.section
              id="finales"
              className="prose prose-slate dark:prose-invert p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-slate-800 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h2>10. Disposiciones Finales</h2>
              <ul>
                <li>El jurado estará compuesto por el docente responsable de Programación Orientada a Objetos y/o por la comisión designada.</li>
                <li>El fallo del jurado será <strong>inapelable y definitivo</strong>.</li>
                <li>Los participantes están obligados a acatar todas las normas establecidas en estas bases.</li>
              </ul>
            </motion.section>
          </article>
        </div>
      </div>
    </main>
  );
}
