import { NextRequest, NextResponse } from "next/server";
import userChats from "../../../../server/data/chats.json";

// Recupera todos los chats del ususario
export async function POST(req: NextRequest) {
  const body = await req.json();
  const userId = body.userId?.toString() || "";

  if (!userId) {
    return NextResponse.json({ error: "Chat ID is required" }, { status: 400 });
  }

  const chat = userChats.find((chats) => chats.userId === userId);

  if (!chat) {
    return NextResponse.json({ error: "Chat not found" }, { status: 404 });
  }

  const userChatsResponse = chat.chats;

  return NextResponse.json(
    { success: true, res: userChatsResponse },
    { status: 200 }
  );
}
