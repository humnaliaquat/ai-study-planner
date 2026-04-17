import AllNotesSidebar from "@/components/notes/AllNotesSidebar";
import Editor from "@/components/notes/Editor";
import { Plus } from "lucide-react";
import React from "react";

export default function Page() {
  return (
    <div className="  h-screen px-6 flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-2 pt-6 pb-4 border-b border-[#E5E2DA]">
        <h1 className="text-3xl font-medium tracking-tight text-[#1F2933]">
          Notes
        </h1>

        <button className="bg-[#344945] text-white px-4 py-2.5 rounded-[10px] text-sm hover:bg-[#2F3A40] transition flex items-center ">
          <Plus className="w-4 h-4 mr-2" />
          New Note
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="shrink-0">
          <AllNotesSidebar />
        </div>

        {/* Editor */}
        <div className="flex-1 shrink-0  ">
          <Editor />
        </div>
      </div>
    </div>
  );
}
