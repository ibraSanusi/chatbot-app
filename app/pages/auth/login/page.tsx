"use client";

import Badge from "../ui/Badge";
import InputBox from "@/app/components/InputBox";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import Button from "@/app/ui/Button";

export default function SignupPage() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = await fetch("/api/login", {
      method: "POST",
      body: formData,
      credentials: "include",
    }).then((response) => {
      return response.json();
    });

    if (data.error) setError(data.error);
    if (data.success) router.push("/chats");
  };

  return (
    <div className="w-full max-w-full h-screen bg-white shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
      {/* Left Side */}
      <div className="p-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col gap-18">
        <header>
          <h1 className="text-3xl">CHAT A.I +</h1>
        </header>

        <section>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Learn, Discover & <br />{" "}
            <span className="ml-30">Automate in One Place.</span>
          </h1>
        </section>

        <div className="w-3/4 mx-auto flex flex-col gap-6">
          <h3 className="font-bold">
            Create a chatbot gpt using python language what will be step for
            that
          </h3>

          <Badge>CHAT A.I+</Badge>
          <p>
            Sure, I can help you get started with creating a chatbot using GPT
            in Python. Here are the basic steps you’ll need to follow:
          </p>

          <ol className="list-decimal list-inside flex gap-6 flex-col indent-2">
            <li>
              Install the required libraries: You’ll need to install the
              transformers library from Hugging Face to use GPT. You can install
              it using pip.
            </li>
            <li>
              Load the pre-trained model: GPT comes in several sizes and
              versions, so you’ll need to choose the one that fits your needs.
              You can load a pre-trained GPT model.
            </li>
          </ol>

          <p>
            These are just the basic steps to get started with a GPT chatbot in
            Python. Depending on your requirements, you may need to add more
            features or complexity to the chatbot. Good luck!
          </p>
          <InputBox />
        </div>
      </div>

      {/* Right Side */}
      <div className="py-10 px-60 flex flex-col items-center justify-center bg-white text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Sign up with free trail</h2>
        <p className="mb-6 text-sm text-gray-600">
          Empower your experience, sign up for a free account today
        </p>

        <form className="space-y-4" onSubmit={handleSubmit} method="POST">
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address*
            </label>
            <input
              required
              value={"user1@example.com"}
              name="email"
              type="email"
              placeholder="ex. email@domain.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password*</label>
            <input
              required
              value={"password123"}
              name="password"
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <p className="text-xs text-gray-500">
            By registering for an account, you are consenting to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            and confirming that you have reviewed and accepted the{" "}
            <a href="#" className="text-blue-600 underline">
              Global Privacy Statement
            </a>
            .
          </p>

          <Button>Get started free</Button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:underline">
            Login
          </a>
        </p>

        <div className="mt-6 text-center text-sm text-gray-500">
          Or better yet…
        </div>

        <div className="mt-4 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
            <FcGoogle />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
            <IoLogoApple />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
