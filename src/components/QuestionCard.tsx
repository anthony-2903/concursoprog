type Question = { id: number; title: string; body: string };

export function QuestionCard({ q }: { q: Question }) {
  return (
    <article className="rounded-xl border bg-white p-4 hover:shadow-sm transition">
      <h3 className="font-semibold">#{q.id} — {q.title}</h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed">{q.body}</p>
    </article>
  );
}

export function QuestionList({ items }: { items: Question[] }) {
  return (
    <div className="grid gap-4">
      {items.map((q) => <QuestionCard key={q.id} q={q} />)}
    </div>
  );
}
