"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simula tu verificación de auth en el cliente
    const auth = typeof window !== "undefined" ? localStorage.getItem("auth") : null;
    if (!auth) {
      router.replace("/auth/login"); // replace evita que el usuario vuelva al dashboard con back
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) return null; // o un spinner

  return <>{children}</>;
}
