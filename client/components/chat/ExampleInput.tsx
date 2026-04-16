import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export default function ExampleInput({ setInput }: Props) {
  const examples: string[] = [
    "Explain this topic",
    "Explain like I'm 5",
    "Summarize notes",
    "Make flashcards",
    "Create a quiz",
    "What is ",
  ];
  return (
    <div className="w-full  mt-6">
      <div className="grid grid-cols-2 gap-3">
        {examples.map((text, index) => (
          <button
            key={index}
            onClick={() => setInput(text)}
            className="group flex items-center justify-between 
            bg-[#F5F3EE] border border-[#D1CCC0] 
            hover:bg-[#E7E5DE] hover:border-[#B8B0A0]
            rounded-xl px-4 py-2 text-sm text-[#1F2937]
            transition"
          >
            {text}

            <ChevronRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
