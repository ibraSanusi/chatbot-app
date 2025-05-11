import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("token");

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/pages/auth/login", request.url));
  }

  return NextResponse.next();
}

// Solo proteger la ruta /chats
export const config = {
  matcher: ["/pages/chats", "/pages/chats/:path*"],
};
