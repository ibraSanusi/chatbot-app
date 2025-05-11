import React from "react";
import { CiSearch } from "react-icons/ci";
import CustomLink from "../ui/CustomLink";
import { FiSettings } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { Chat } from "../interfaces/chat";
import ChatList from "./ChatList";
import Link from "next/link";
import { getUserChats } from "../lib/api/sidebar";

function InterLines({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row justify-between gap-8 px-6 py-4 border-b border-t border-gray-300">
      {children}
    </div>
  );
}

export default async function SideBar() {
  const chatList: Chat[] = await getUserChats();

  return (
    <aside className="w-1/6 h-full bg-white rounded-4xl overflow-hidden flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-black p-4">CHAT A.I+</h1>
      <section className="flex flex-row gap-2 p-4">
        <Link
          className="w-full bg-indigo-600 text-center text-white py-2 rounded-4xl hover:bg-indigo-700 cursor-pointer"
          href={"/pages/chats"}
        >
          + New chat
        </Link>
        <button className="rounded-full p-3 bg-black hover:bg-gray-800 transition duration-300 ease-in-out flex items-center justify-center cursor-pointer">
          <CiSearch className="size-5 stroke-1 text-white" />
        </button>
      </section>

      <InterLines>
        <span className="text-sm text-gray-600">Your conversations</span>
        <button className="text-blue-600 text-sm">Clear All</button>
      </InterLines>

      {/* TODO: clasificar por fecha y mostrar el chat más reciente primero
      TODO: Si no hay chats, mostrar un mensaje de "No hay chats" */}

      <ChatList list={chatList} />

      <InterLines>Last 7 days</InterLines>

      <div className="flex flex-col gap-4 px-6 overflow-y-auto h-full text-black">
        <CustomLink>
          <i className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out flex items-center justify-center cursor-pointer">
            <FiSettings />
          </i>
          Settings
        </CustomLink>

        <CustomLink>
          {/* // TODO : Cambiar el icono de avatar por la imagen del usuario */}
          {/* <Image
            src={`/${}`}
            alt="AI"
            className="w-full h-1/2 rounded-3xl max-w-8 max-h-8"
            width={10}
            height={10}
          /> */}
          <RxAvatar className="size-6 rounded-full" />
          {/* {session?.user?.name} */}
          Ibrahim Sanusi
        </CustomLink>
      </div>
    </aside>
  );
}
