import React from "react";
import { BiSmile } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { TbLibraryPhoto } from "react-icons/tb";

export default function InputBox() {
  return (
    <div className="w-full max-w-full flex gap-4 py-1 px-4 border border-white bg-white/20 rounded-4xl items-center">
      <BiSmile className="size-8" />
      <textarea
        placeholder="Reply..."
        className="w-full focus:outline-none resize-none flex align-middle"
      />
      <TbLibraryPhoto className="size-8" />
      <button className="bg-blue-600 rounded-full p-1 flex items-center justify-center hover:bg-blue-700 transition duration-200 ease-in-out">
        <IoIosArrowForward className="size-8" />
      </button>
    </div>
  );
}
