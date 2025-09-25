"use client";
import { motion } from "framer-motion";

type Question = { id: number; title: string; body: string };

export function QuestionCard({ q, index }: { q: Question; index: number }) {
  const direction = index % 2 === 0 ? -100 : 100; // par: izquierda, impar: derecha
  return (
    <motion.article
      initial={{ opacity: 0, x: direction }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-4 shadow-sm hover:shadow-md transition text-black dark:text-white"
    >
      <h3 className="font-semibold">#{q.id} — {q.title}</h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed">{q.body}</p>
    </motion.article>
  );
}

export function QuestionList({ items }: { items: Question[] }) {
  return (
    <div className="grid gap-4">
      {items.map((q, idx) => (
        <QuestionCard key={q.id} q={q} index={idx} />
      ))}
    </div>
  );
}
