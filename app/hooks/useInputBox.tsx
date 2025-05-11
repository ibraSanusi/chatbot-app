import { useState } from "react";

export function useInputBox() {
  const [clientRequest, setClientRequest] = useState<string>("");

  return {
    clientRequest,
    setClientRequest,
  };
}
