export type Role = "user" | "assistant";

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: string; // ISO 8601 format
}

export interface Chat {
  chatId: string;
  createdAt: string; // ISO date string
  title: string;
  messages: Message[];
}

export interface UserChatHistory {
  userId: string;
  username: string;
  chats: Chat[];
}
