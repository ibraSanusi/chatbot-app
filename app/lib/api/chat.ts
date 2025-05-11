"use client";

import { Message } from "@/store/chatStore";

export async function sendRequestToChatbot({
  value,
  addMessage,
  setClientRequest,
}: {
  value: string;
  addMessage: (message: Message) => void;
  setClientRequest: (value: string) => void;
}) {
  try {
    await fetch("/api/chat/chatbot-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: value }), // Enviar el mensaje al servidor
    }).then(async (res) => {
      if (!res.ok)
        return console.log(
          "Error en la respuesta del servidor",
          res.statusText
        );
      const chatbotResponse = await res.json();

      if (chatbotResponse) addMessage(chatbotResponse); // Actualizar el estado con la respuesta del chatbot
    });
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
  } finally {
    setClientRequest(""); // Limpiar el campo de entrada después de enviar
  }
}
