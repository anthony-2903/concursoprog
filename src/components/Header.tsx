"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white dark:bg-gray-800 shadow-sm">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
       <div className="h-12 sm:h-14 md:h-16 flex items-center px-2">
  <Image
    src="/images/lgsistemas.png"
    alt="Logo ConcursoProg"
    width={200}
    height={200}
    priority
    className="h-full w-auto rounded"
  />
</div>



        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex gap-6">
          <a href="/" className="font-semibold hover:text-blue-500">
            Inicio
          </a>
          <a href="/banco/inicial" className="hover:text-blue-500">
            Banco de Preguntas
          </a>
          <a href="/banco/bases" className="hover:text-blue-500">
            Bases
          </a>
        </div>

        {/* Botón menú hamburguesa (solo móvil) */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 py-4 gap-4 bg-white dark:bg-gray-800 border-t">
          <a href="/" className="font-semibold hover:text-blue-500 w-full">
            Inicio
          </a>
          <a href="/banco/inicial" className="hover:text-blue-500 w-full">
            Banco de Preguntas
          </a>
          <a href="/banco/bases" className="hover:text-blue-500 w-full">
            Bases
          </a>
        </div>
      )}
    </header>
  );
}
