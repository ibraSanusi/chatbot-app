import { NextRequest, NextResponse } from "next/server";
import usersChat from "../../../../server/data/chats.json";

// Recupera el chat del usuario con el Id del Chat

export async function POST(req: NextRequest) {
  const body = await req.json();
  const id = body.chatId?.toString() || "";

  if (!id) {
    return NextResponse.json({ error: "Chat ID is required" }, { status: 400 });
  }

  const chat = usersChat
    .flatMap((userChats) => userChats.chats)
    .find((c) => c.chatId === id);

  if (!chat) {
    return NextResponse.json({ error: "Chat not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, chat });
}
