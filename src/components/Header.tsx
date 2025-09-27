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
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/images/lgsistemas.png"
                alt="Logo ConcursoProg"
                width={120}
                height={120}
                priority
                className="h-full w-auto rounded"
              />
            </a>
          </Link>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden md:flex gap-6">
          <Link href="/" legacyBehavior>
            <a className="font-semibold hover:text-blue-500 transform transition duration-200 hover:scale-105">
              Inicio
            </a>
          </Link>
          <Link href="/banco/inicial" legacyBehavior>
            <a className="hover:text-blue-500 transform transition duration-200 hover:scale-105">
              Banco de Preguntas
            </a>
          </Link>
          <Link href="/banco/bases" legacyBehavior>
            <a className="hover:text-blue-500 transform transition duration-200 hover:scale-105">
              Bases
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
