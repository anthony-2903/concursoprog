"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Users, Trophy, FileText, Database } from "lucide-react";

export default function Page() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      {/* Portada ancho completo */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/portada.png"
            alt="Portada del Concurso de Programación"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </motion.div>

        {/* Degradado en la parte inferior */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
      </div>

      {/* Bienvenida */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 py-12 text-center"
      >
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold mb-4"
        >
          Bienvenido
        </motion.h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
          Explora el <strong>banco de preguntas</strong> por niveles y prepárate
          para el Concurso Interno de Programación UPeU Lima 2025-2.
        </p>

        {/* Frase motivadora */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="italic text-slate-500 dark:text-slate-400 mb-8"
        >
       &quot;La programación no es solo código, es creatividad y lógica en acción.&quot;

        </motion.p>

        {/* Botones con animación */}
        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/banco/bases"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FileText size={20} />
            Ver Bases
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/banco/inicial"
            className="flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition"
          >
            <Database size={20} />
            Banco de Preguntas
          </motion.a>
           <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/banco/crud"
            className="flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition"
          >
            <Database size={20} />
            crud
          </motion.a>
        </div>
      </motion.section>

      {/* Objetivos con animación */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: <Rocket className="mx-auto mb-3 text-blue-600" size={36} />,
            title: "Potencia tus habilidades",
            text: "Mejora tu lógica, pensamiento algorítmico y capacidad de resolución de problemas.",
          },
          {
            icon: <Users className="mx-auto mb-3 text-green-600" size={36} />,
            title: "Trabajo en equipo",
            text: "Colabora con tus compañeros, comparte ideas y resuelve desafíos juntos.",
          },
          {
            icon: <Trophy className="mx-auto mb-3 text-yellow-500" size={36} />,
            title: "Reconocimiento académico",
            text: "Destaca tu talento en programación y gana premios por tu esfuerzo.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 shadow-lg cursor-pointer"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{item.text}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
