import { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// 1. Define message type
type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWindow({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex flex-col gap-2 p-4 pb-28 overflow-y-auto h-[calc(100vh-80px)] no-scrollbar">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`max-w-3xl px-6 py-3 mb-4 rounded-[10px] text-sm ${
            msg.role === "user" ? "bg-[#ece7da]  self-end" : "  self-start"
          }`}
        >
          <div className="prose prose-sm max-w-none text-sm ">
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
