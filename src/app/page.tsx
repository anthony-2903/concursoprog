import Image from "next/image";


export default function Page() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      {/* Portada ancho completo */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
        <Image
          src="/images/portada.png"
          alt="Portada del Concurso de Programación"
          fill
          className="object-cover"
          priority
        />

        
      </div>

      {/* Contenido debajo */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Bienvenido</h2>
        <p>
          Explora el banco de preguntas por niveles: Inicial, Intermedio y Avanzado.
        </p>
      </section>
    </main>
  );
}
