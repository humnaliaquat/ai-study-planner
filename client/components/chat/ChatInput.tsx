"use client";
import axios from "axios";
import { ArrowUp, AudioLines, Paperclip } from "lucide-react";
import React, { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (msg: string) => void;
}) {
  const [input, setInput] = useState<string>("");
  const handleSend = async () => {
    if (!input.trim()) return;
    setInput("");
    onSend(input.trim());
    setInput("");
  };

  return (
    <div className="w-full px-6 mt-6">
      <div
        className="flex items-center gap-2 
        bg-[#F5F3EE] border border-[#D1CCC0] 
        rounded-2xl px-3 py-6 shadow-sm  transition"
      >
        {/* Attach */}
        <button className="p-2 rounded-lg hover:bg-[#e9e8cc] transition">
          <Paperclip size={18} className="text-[#6B7280] cursor-pointer" />
        </button>

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Ask anything to study..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
        />

        {/* Voice */}
        <button className="p-2 rounded-lg hover:bg-[#e9e8cc]  cursor-pointer transition">
          <AudioLines size={18} className="text-[#6B7280]" />
        </button>

        {/* Send */}
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-[#344945] text-[#F8F7F4] px-2 py-2 rounded-full text-sm 
          hover:bg-[#2F3A40] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed "
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
