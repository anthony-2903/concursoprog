import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ConcursoProg",
  description: "Banco de preguntas de programación",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex gap-4">
            <Link href="/" className="font-semibold">Inicio</Link>
            <Link href="/banco/inicial">Inicial</Link>
            <Link href="/banco/intermedio">Intermedio</Link>
            <Link href="/banco/avanzado">Avanzado</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
