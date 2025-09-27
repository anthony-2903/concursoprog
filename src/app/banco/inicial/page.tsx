"use client";

import { motion } from "framer-motion";
import { QuestionList } from "@/components/QuestionCard";
import { inicial } from "@/data/inicial";

export default function Page() {
  return (
    <section className="space-y-6 max-w-3xl mx-auto px-4">
      {/* Título animado */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-extrabold text-center text-slate-900 dark:text-slate-100"
      >
        Banco de Preguntas
      </motion.h1>

      {/* Lista de preguntas */}
      <QuestionList items={inicial} />
    </section>
  );
}
