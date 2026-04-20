"use client";
import ExampleInput from "@/components/chat/ExampleInput";
import ChatInput from "@/components/chat/ChatInput";
import React, { useState } from "react";

export default function Page() {
  const [input, setInput] = useState<string>("");
  return (
    <div className="flex flex-col items-center justify-center pt-16 px-6 ">
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-3xl font-semibold mb-2 text-[#1F2937]">
          Learn Smarter with AI
        </h1>

        <p className="text-base text-[#6B7280] mb-6">
          Get explanations, summaries, and quizzes in seconds
        </p>

        <ExampleInput setInput={setInput} />
      </div>

      <div className="fixed bottom-7 left-64 right-0 flex justify-center px-4">
        <div className="w-full max-w-3xl">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}
