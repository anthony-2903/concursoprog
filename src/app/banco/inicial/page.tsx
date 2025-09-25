import { QuestionList } from "@/components/QuestionCard";
import { inicial } from "@/data/inicial";

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Nivel Inicial</h1>
      <QuestionList items={inicial as any} />
    </section>
  );
}
