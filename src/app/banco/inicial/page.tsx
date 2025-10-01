"use client";

import { motion } from "framer-motion";
import { QuestionList } from "@/components/QuestionCard";
import { inicial } from "@/data/inicial";

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4">
      {/* Título animado */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-extrabold text-center text-slate-900 dark:text-slate-100 mb-8"
      >
        Banco de Preguntas
      </motion.h1>

      {/* Animación para el listado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <QuestionList items={inicial} />
      </motion.div>
    </main>
  );
}
