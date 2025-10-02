// app/dashboard/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";
import AuthGuard from "./_components/AuthGuard";


export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-6">Panel</h2>
        <Link href="/auth/dashboard/activate" className="hover:text-blue-400">
          Activate
        </Link>
        <Link href="/auth/dashboardcultura" className="hover:text-blue-400">
          Cultura
        </Link>
        <Link href="/auth/dashboard/proyeccion-social" className="hover:text-blue-400">
          Proyección Social
        </Link>
      </aside>

      {/* Contenido principal + guard */}
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800">
        <AuthGuard>
          {children}
        </AuthGuard>
      </main>
    </div>
  );
}
