"use client";

import { useInputBox } from "@/app/hooks/useInputBox";
import { sendRequestToChatbot } from "@/app/lib/api/chat";
import { useChatStore } from "@/store/chatStore";
import { LuBrain, LuSend } from "react-icons/lu";

type Props = {
  className?: string;
};

export default function InputBox({ className }: Props) {
  const { clientRequest, setClientRequest } = useInputBox();
  const { addMessage } = useChatStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input") as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return; // No enviar si el campo está vacío

    // Se le pasan los seteadores de estado porque guardan el estado en el store (estado global de la app)
    sendRequestToChatbot({ value, addMessage, setClientRequest });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-row items-center w-3/5 mt-20 p-1 gap-4 bg-white rounded-full shadow-2xl ${className}`}
    >
      <LuBrain className="size-6" />

      <input
        name="message"
        className="w-full focus:outline-none resize-none placeholder:text-gray-500"
        placeholder="Whats in your mind?..."
        value={clientRequest}
        onChange={(e) => setClientRequest(e.target.value)}
      />
      <button className="flex items-center justify-center p-2 rounded-full bg-blue-700 hover:bg-gray-300 transition duration-200 ease-in-out">
        <LuSend className="size-5" />
      </button>
    </form>
  );
}
