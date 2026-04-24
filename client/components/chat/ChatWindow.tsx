import { useState } from "react";

// 1. Define message type
type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWindow({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col h-full">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={msg.role === "user" ? "text-right" : "text-left"}
        >
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
}
