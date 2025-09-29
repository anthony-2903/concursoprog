
import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";


export const metadata = {
  title: "Concurso de Programación",
  description: "Banco de preguntas UPeU",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
   
        <Header />

      
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
