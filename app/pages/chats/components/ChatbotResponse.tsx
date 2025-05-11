"use client";

import { useChatStore } from "@/store/chatStore";
import React from "react";

export default function ChatbotResponse() {
  const { messages } = useChatStore();

  return (
    <ul>
      {messages.length > 0 ? (
        messages.map(({ role, content }, index) => (
          <li key={index} className="p-2 text-black flex flex-col gap-4">
            {role === "user" && (
              <div className="flex flex-row gap-2 items-center">
                <span>{content}</span>
              </div>
            )}
            {role === "assistant" && (
              <div className="flex flex-col gap-2">
                <span className="flex flex-row gap-2 text-sm text-blue-700 items-center">
                  CHAT A.I+
                </span>
                <span>{content}</span>
              </div>
            )}
          </li>
        ))
      ) : (
        <span className="p-2 rounded-md bg-blue-200 text-blue-500">
          Preguntale algo al bot para que te responda
        </span>
      )}
    </ul>
  );
}
