"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white dark:bg-gray-800 shadow-sm">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="h-12 sm:h-14 md:h-16 flex items-center px-2">
          <Link href="/">
            <Image
              src="/images/lgsistemas.png"
              alt="Logo ConcursoProg"
              width={200}
              height={200}
              priority
              className="h-full w-auto rounded"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-6">
          <Link href="/" className="font-semibold hover:text-blue-500">
            Inicio
          </Link>
          <Link href="/banco/inicial" className="hover:text-blue-500">
            Banco de Preguntas
          </Link>
          <Link href="/banco/bases" className="hover:text-blue-500">
            Bases
          </Link>
        </div>

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
          <Link href="/" className="font-semibold hover:text-blue-500 w-full">
            Inicio
          </Link>
          <Link
            href="/banco/inicial"
            className="hover:text-blue-500 w-full"
          >
            Banco de Preguntas
          </Link>
          <Link href="/banco/bases" className="hover:text-blue-500 w-full">
            Bases
          </Link>
        </div>
      )}
    </header>
  );
}
