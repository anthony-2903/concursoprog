"use client";

import { motion } from "framer-motion";
import { QuestionList } from "@/components/QuestionCard";
import { inicial } from "@/data/inicial";
import SplineScene from "@/components/SplineScene";

export default function Page() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-extrabold text-center md:text-left text-slate-900 dark:text-slate-100"
        >
          Banco de Preguntas
        </motion.h1>

        <QuestionList items={inicial} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[600px] md:h-[700px]"
      >
        <div className="w-full h-[600px] flex items-center justify-center">
      <SplineScene />
    </div>
      </motion.div>
    </section>
  );
}
