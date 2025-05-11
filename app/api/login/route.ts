import { NextRequest, NextResponse } from "next/server";
import { generateToken, validateCredentials } from "@/server/auth";

// Inicio de sesion
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const user = validateCredentials(email, password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = generateToken(user);

  // Puedes guardar el token en cookies si lo deseas
  const response = NextResponse.json({ success: true, user });
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60, // 1 hora
  });

  return response;
}
