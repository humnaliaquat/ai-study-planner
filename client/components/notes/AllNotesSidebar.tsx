import React from "react";
import { Plus } from "lucide-react";

export default function AllNotesSidebar() {
  return (
    <div className="w-72 h-full border-r  border-[#E5E2DA] bg-[#FAF9F6] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-5 pt-2 pb-1.5 border-b border-[#E5E2DA]">
        <h2 className="text-lg font-semibold text-[#1F2933]">All Notes</h2>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="group p-3 rounded-xl cursor-pointer 
            hover:bg-[#F1EFEA] transition"
          >
            <p className="text-sm font-medium text-[#1F2933] truncate">
              Note {index + 1}
            </p>
            <p className="text-xs text-[#6B7280] truncate">
              Last edited just now
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
