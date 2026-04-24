"use client";
import React from "react";
import ExampleInput from "./ExampleInput";

export default function BeforeSendingTextWindow() {
  const [input, setInput] = React.useState<string>("");
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-3xl font-semibold mb-2 text-[#1F2937]">
        Learn Smarter with AI
      </h1>

      <p className="text-base text-[#6B7280] mb-6">
        Get explanations, summaries, and quizzes in seconds
      </p>

      <ExampleInput setInput={setInput} />
    </div>
  );
}
