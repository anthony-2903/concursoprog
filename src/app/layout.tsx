import Header from "@/components/Header";
import "./globals.css";


export const metadata = {
  title: "ConcursoProg",
  description: "Banco de preguntas de programación",
  icons: {
    icon: "/images/lgsistemas.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <Header />

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
