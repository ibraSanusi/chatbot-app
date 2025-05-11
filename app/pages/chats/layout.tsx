import React from "react";
import SideBar from "../../components/SideBar";
import InputBox from "./components/InputBox";

export default function ChatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-full h-screen bg-gray-400 overflow-hidden flex flex-row gap-4 p-4">
      <SideBar />
      <div className="flex flex-col justify-between w-screen items-center">
        {children}
        <InputBox />
      </div>
    </div>
  );
}
