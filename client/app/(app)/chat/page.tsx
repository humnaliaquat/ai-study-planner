"use client";
import ExampleInput from "@/components/chat/ExampleInput";
import ChatInput from "@/components/chat/ChatInput";
import React, { useState } from "react";
import BeforeSendingTextWindow from "@/components/chat/BeforeSendingTextWindow";
import ChatWindow from "@/components/chat/ChatWindow";
import axios from "axios";
type Message = {
  role: "user" | "assistant";
  content: string;
};
export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const handleSend = async (userMessage: string) => {
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: userMessage,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: res.data.reply },
      ]);
    } catch (error: any) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error" }]);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center pt-16 px-6 ">
      {messages.length > 0 ? (
        <ChatWindow messages={messages} />
      ) : (
        <BeforeSendingTextWindow />
      )}
      <div className="fixed bottom-7 left-64 right-0 flex justify-center px-4">
        <div className="w-full max-w-3xl">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
