import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
}

export default function CustomLink({ children }: LinkProps) {
  return (
    <a
      href="#"
      className="w-full flex flex-row gap-4 rounded-full p-2 items-center bg-transparent text-black py-2 rounded-4x cursor-pointer border-gray-500 border"
    >
      {children}
    </a>
  );
}
