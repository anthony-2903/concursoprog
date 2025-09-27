"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-shadow duration-300">
      <nav className="mx-auto max-w-5xl px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <div className="h-8 sm:h-10 md:h-12 flex items-center px-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/lgsistemas.png"
              alt="Logo ConcursoProg"
              width={120}
              height={120}
              priority
              className="h-full w-auto rounded"
            />
          </Link>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden md:flex gap-6">
          <Link
            href="/"
            className="font-semibold hover:text-blue-500 transform transition duration-200 hover:scale-105"
          >
            Inicio
          </Link>
          <Link
            href="/banco/inicial"
            className="hover:text-blue-500 transform transition duration-200 hover:scale-105"
          >
            Banco de Preguntas
          </Link>
          <Link
            href="/banco/bases"
            className="hover:text-blue-500 transform transition duration-200 hover:scale-105"
          >
            Bases
          </Link>
        </div>

        {/* Botón menú hamburguesa (solo móviles) */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 py-4 gap-4 bg-white dark:bg-gray-800 border-t shadow-sm">
          <Link
            href="/"
            className="font-semibold hover:text-blue-500 w-full transform transition duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/banco/inicial"
            className="hover:text-blue-500 w-full transform transition duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Banco de Preguntas
          </Link>
          <Link
            href="/banco/bases"
            className="hover:text-blue-500 w-full transform transition duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Bases
          </Link>
        </div>
      )}
    </header>
  );
}
