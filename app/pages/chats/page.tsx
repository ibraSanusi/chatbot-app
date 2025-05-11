"use client";

import { useChatStore } from "@/store/chatStore";
import Suggestion from "./components/Suggestion";
import ChatbotResponse from "./components/ChatbotResponse";
import { useEffect } from "react";

export default function ChatPage() {
  const { messages, clearMessages } = useChatStore();

  useEffect(() => {
    clearMessages(); // Clear messages when the component mounts
  }, []);

  return (
    <>
      <span className="px-3 py-2 bg-white text-black text-2xl rounded-4xl">
        CHAT A.I+
      </span>
      <h1 className="text-3xl font-bold text-black p-4">
        Good day! How may I assist you today?
      </h1>

      <div className={`${messages.length ? "flex" : "hidden"}`}>
        <ChatbotResponse />
      </div>
      {!messages.length && <Suggestion />}
    </>
  );
}
