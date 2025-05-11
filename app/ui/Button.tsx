import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 rounded-4xl hover:bg-indigo-700 cursor-pointer"
    >
      {children}
    </button>
  );
}
