import { QuestionList } from "@/components/QuestionCard";
import { intermedio } from "@/data/intermedio";

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Nivel Intermedio</h1>
      <QuestionList items={intermedio} />
    </section>
  );
}
