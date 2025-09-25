import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ConcursoProg",
  description: "Banco de preguntas de programación",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <header className="border-b bg-white dark:bg-gray-800 shadow-sm">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap gap-4">
            <Link href="/" className="font-semibold hover:underline">
              Inicio
            </Link>
            <Link href="/banco/inicial" className="hover:underline">
              Banco de Preguntas
            </Link>
            
            <Link href="/banco/bases" className="hover:underline">
              Bases
            </Link>
          </nav>
        </header>

        {/* Contenido principal */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="border-t bg-white dark:bg-gray-800 py-4 mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Concurso Interno de Programación UPeU Lima
        </footer>
      </body>
    </html>
  );
}