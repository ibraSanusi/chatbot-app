import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

type User = {
  id: string;
  email: string;
  password: string;
  name: string;
};

// Recupera el objeto del ususario con el token del usuario en sesion
export async function POST(req: NextRequest) {
  const body = await req.json();
  const token = body.token.value;

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  try {
    // Aquí podrías usar jwt.verify si tienes una clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as User;

    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }

    return NextResponse.json({ user: decoded }, { status: 200 });
  } catch (error) {
    console.error("Error decoding token:", error);
    return NextResponse.json(
      { error: "Failed to decode token" },
      { status: 500 }
    );
  }
}
