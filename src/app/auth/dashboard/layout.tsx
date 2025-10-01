"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-6">Panel</h2>
        <Link href="/dashboard/activate" className="hover:text-blue-400">
          Activate
        </Link>
        <Link href="/dashboard/cultura" className="hover:text-blue-400">
          Cultura
        </Link>
        <Link href="/dashboard/proyeccion-social" className="hover:text-blue-400">
          Proyección Social
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            router.push("/auth/login");
          }}
          className="mt-auto py-2 px-4 bg-red-600 hover:bg-red-700 rounded"
        >
          Cerrar Sesión
        </button>
      </aside>

      {/* Contenido */}
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800">{children}</main>
    </div>
  );
}
