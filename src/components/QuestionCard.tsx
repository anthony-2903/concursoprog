"use client";
import { motion } from "framer-motion";
import type { Question } from "@/types/question";

export function QuestionCard({ q, index }: { q: Question; index: number }) {
  const direction = index % 2 === 0 ? -100 : 100;

  return (
    <motion.article
      initial={{ opacity: 0, x: direction }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 my-[10px] shadow-sm hover:shadow-md transition"
    >
      <h3 className="font-semibold">
        #{q.id} — {q.title}
      </h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed">{q.body}</p>
    </motion.article>
  );
}

export function QuestionList({ items }: { items: Question[] }) {
  return (
    <div>
      {items.map((q, idx) => (
        <QuestionCard key={q.id} q={q} index={idx} />
      ))}
    </div>
  );
}
