"use client";

import React, { useEffect, useState } from "react";
import { Chat } from "../interfaces/chat";
import Link from "next/link";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { useChatStore } from "@/store/chatStore";
import { getTitleFromMessages } from "../helpers/chatlist";

interface ChatListProps {
  list: Chat[];
}

export default function ChatList({ list }: ChatListProps) {
  const [chatList, setChatList] = useState<Chat[]>(list);
  const { messages } = useChatStore();

  // 1. Obtener el slug de la url para saber que chat es el activo
  const pathName = usePathname();
  const path = pathName.split("/").slice(0, 4).join("/");
  const chatId = path.split("/").pop() || "";
  const isActive = chatList.some((chat) => chat.chatId === chatId);

  // Si se ha creado un nuevo chat se debe anadir a la lista de chats
  useEffect(() => {
    if (!messages || messages.length === 0) return;

    // Crea el titulo del chat
    const title = getTitleFromMessages(messages);

    if (!title) return;

    // Solo añadir el chat si es el primer mensaje
    if (messages.length === 1) {
      setChatList((prev) => [
        ...prev,
        {
          chatId: "chat_" + Date.now(),
          createdAt: new Date().toISOString(),
          title: title,
          messages: messages.map((msg) => ({
            ...msg,
            timestamp: new Date().toISOString(),
          })),
        },
      ]);
    }
  }, [messages]);

  return (
    <ul className="flex flex-col gap-4 px-6 py-4 overflow-y-auto h-full text-black">
      {chatList &&
        chatList.map((chat) => (
          <li
            key={chat.chatId}
            className={`flex flex-row gap-6 items-center rounded-full hover:bg-gray-100 cursor-pointer ${
              isActive && chat.chatId === chatId
                ? "bg-blue-100 pl-2"
                : "bg-white p-2"
            }`}
          >
            <Link
              href={`/pages/chats/${chat.chatId}`}
              className="flex flex-row gap-4 items-center w-full"
            >
              <LiaCommentDotsSolid />
              <span className="text-md text-gray-800 text-ellipsis overflow-hidden whitespace-nowrap">
                {chat.title}
              </span>

              {isActive && chat.chatId === chatId && (
                <div className="flex flex-row gap-2 rounded-full p-4 items-center bg-blue-200 relative">
                  <FiTrash2 />
                  <FaRegEdit />
                </div>
              )}
            </Link>
          </li>
        ))}
    </ul>
  );
}
