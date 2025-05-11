import { Message } from "@/store/chatStore";

export function getTitleFromMessages(messages: Message[]) {
  const lastMessage = messages.pop()?.content;

  if (!lastMessage) return "";
  const title = lastMessage.split(" ").slice(0, 3).join(" ");

  return title;
}
