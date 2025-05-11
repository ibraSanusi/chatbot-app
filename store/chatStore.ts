// store/chatStore.ts
import { create } from "zustand";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export type ChatStore = {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
};

// TODO: Generar estado global del usuario
export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
}));
