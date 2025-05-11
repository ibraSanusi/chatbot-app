// app/chats/[chatId]/page.tsx

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import ChatbotResponse from "../components/ChatbotResponse";
import { fetchChatById } from "@/app/lib/api/sidebar";

export default async function ChatPage({
  params,
}: {
  params: { chatId: string };
}) {
  const { chatId } = await params;
  const chat = await fetchChatById(chatId);

  if (!chat || !chat.messages) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No se encontró el chat.
      </div>
    );
  }

  // TODO: Mejora --> anadir la respuesta del bot a la lista de chats. Una vez se actualice se rerenderizara
  return (
    <ul className="flex flex-col gap-2 overflow-auto w-full h-full max-w-2xl m-auto p-10">
      {chat.messages.map(({ role, content }, index) => (
        <li key={index} className="p-2 text-black flex flex-col gap-4">
          {role === "user" && (
            <div className="flex flex-row gap-2 items-center">
              <RxAvatar className="size-6 rounded-full" />
              <span>{content}</span>
            </div>
          )}
          {role === "assistant" && (
            <div className="flex flex-col gap-2">
              <span className="flex flex-row gap-2 text-sm text-blue-700 items-center">
                CHAT A.I+ <IoArrowForwardCircleOutline />
              </span>
              <span>{content}</span>
            </div>
          )}
        </li>
      ))}
      <ChatbotResponse />
    </ul>
  );
}
