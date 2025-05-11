"use server";

import { Chat } from "@/app/interfaces/chat";
import { cookies } from "next/headers";

async function getUserIdFromCookie() {
  // Lo extraigo ya que no se recoge la cookie en el servidor
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  // Recupera la informacion del usuario en sesion desde la api
  const res = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ token }),
  });
  const { user } = await res.json();

  if (!user) {
    throw new Error("User not found");
  }

  const userId = user.id;

  return userId;
}

export async function getUserChats() {
  const userId = await getUserIdFromCookie();

  // Recupera los chats del usuario en sesion desde la api
  const userChatsResponse = await fetch(
    "http://localhost:3000/api/chat/get_chats",
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ userId }),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await userChatsResponse.json();

  if (!data.success) {
    throw new Error("Failed to fetch user chats");
  }
  const chats: Chat[] = data.res;

  return chats;
}

export async function fetchChatById(chatId: string): Promise<Chat> {
  const res = await fetch("http://localhost:3000/api/chat/get_chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chatId }),
  });

  const { chat }: { chat: Chat } = await res.json();

  return chat as Chat;
}
