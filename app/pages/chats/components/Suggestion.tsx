import Image from "next/image";
import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { RxColumns } from "react-icons/rx";

export default function Suggestion() {
  {
    /* TODO: refactor this to use a map function to create the articles */
  }
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row gap-4">
        <article className="w-1/4 flex flex-col gap-2 bg-black text-white rounded-3xl p-4 shadow-2xl">
          <IoEarthOutline />
          <h3 className="text-xl">Explore</h3>
          <p className="text-sm">
            Learn how to use chat ai platform for your needs
          </p>
        </article>

        <RxColumns className="size-10 my-auto" />

        <article className="w-2/4 flex flex-col gap-2 bg-white text-black rounded-3xl p-2 shadow-2xl">
          <Image
            src="/brain.jpg"
            alt="AI"
            className="w-full h-1/2 rounded-3xl max-w-8 max-h-8"
            width={10}
            height={10}
          />
          <h3 className="text-xl">“Explain”</h3>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Quantum computing is single terms</p>
            <LiaLongArrowAltRightSolid />
          </div>
        </article>

        <article className="w-2/4 flex flex-col gap-2 bg-white text-black rounded-3xl p-2 shadow-2xl">
          <Image
            src="/brain.jpg"
            alt="AI"
            className="w-full h-1/2 rounded-3xl max-w-8 max-h-8"
            width={10}
            height={10}
          />
          <h3 className="text-xl">“Explain”</h3>
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm">Quantum computing is single terms</p>
            <LiaLongArrowAltRightSolid />
          </div>
        </article>
      </div>

      <div className="flex flex-row gap-4">
        <article className="w-1/4 flex flex-col gap-2 bg-black text-white rounded-3xl p-4 shadow-2xl">
          <IoEarthOutline />
          <h3 className="text-xl">Explore</h3>
          <p className="text-sm">
            Learn how to use chat ai platform for your needs
          </p>
        </article>

        <RxColumns className="size-10 my-auto" />

        <article className="w-2/4 flex flex-col gap-2 bg-white text-black rounded-3xl p-2 shadow-2xl">
          <Image
            src="/brain.jpg"
            alt="AI"
            className="w-full h-1/2 rounded-3xl max-w-8 max-h-8"
            width={10}
            height={10}
          />
          <h3 className="text-xl">“Explain”</h3>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Quantum computing is single terms</p>
            <LiaLongArrowAltRightSolid />
          </div>
        </article>

        <article className="w-2/4 flex flex-col gap-2 bg-white text-black rounded-3xl p-2 shadow-2xl">
          <Image
            src="/brain.jpg"
            alt="AI"
            className="w-full h-1/2 rounded-3xl max-w-8 max-h-8"
            width={10}
            height={10}
          />
          <h3 className="text-xl">“Explain”</h3>
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm">Quantum computing is single terms</p>
            <LiaLongArrowAltRightSolid />
          </div>
        </article>
      </div>

      <div className="flex flex-row gap-4">
        <article className="w-1/4 flex flex-col gap-2 bg-black text-white rounded-3xl p-4 shadow-2xl">
          <IoEarthOutline />
          <h3 className="text-xl">Explore</h3>
          <p className="text-sm">
            Learn how to use chat ai platform for your needs
          </p>
        </article>

        <RxColumns className="size-10 my-auto" />

        <article className="w-2/4 flex flex-col gap-2 bg-white text-black rounded-3xl p-2 shadow-2xl">
          <Image
            src="/brain.jpg"
            alt="AI"
            className="w-full h-1/2 rounded-3xl max-w-8 max-h-8"
            width={10}
            height={10}
          />
          <h3 className="text-xl">“Explain”</h3>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Quantum computing is single terms</p>
            <LiaLongArrowAltRightSolid />
          </div>
        </article>

        <article className="w-2/4 flex flex-col gap-2 bg-white text-black rounded-3xl p-2 shadow-2xl">
          <Image
            src="/brain.jpg"
            alt="AI"
            className="w-full h-1/2 rounded-3xl max-w-8 max-h-8"
            width={10}
            height={10}
          />
          <h3 className="text-xl">“Explain”</h3>
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm">Quantum computing is single terms</p>
            <LiaLongArrowAltRightSolid />
          </div>
        </article>
      </div>
    </section>
  );
}
