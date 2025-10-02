// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Proteger /auth/dashboard y subrutas
  if (pathname.startsWith("/auth/dashboard")) {
    const auth = req.cookies.get("auth")?.value;
    if (!auth) {
      const loginUrl = new URL("/auth/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/dashboard/:path*"],
};
