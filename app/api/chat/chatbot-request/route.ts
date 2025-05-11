// app/api/chat/request/route.ts
import { NextRequest, NextResponse } from "next/server";

// Simula la respuesta del bot al mensaje del usuario (en un futuro se conectara con el API de un modulo generador de texto)
export async function POST(req: NextRequest) {
  const { message } = await req.json();

  // Simulación de respuesta (o aquí puedes conectar con OpenAI u otro bot)
  const botReply = `Respuesta simulada a: "${message}"`;

  return NextResponse.json({
    role: "assistant",
    content: botReply,
  });
}
