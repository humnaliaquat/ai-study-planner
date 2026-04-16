"use client";

import React from "react";
import { ArrowUpFromLine } from "lucide-react";

export default function PrivateNavbar() {
  return (
    <div
      className="fixed top-0 left-64 right-0 z-50 
      bg-[#F8F7F4]  backdrop-blur-md 
      "
    >
      <div className="flex items-center justify-end px-6 py-3">
        {/* Upgrade Button */}
        <button
          className="flex items-center gap-2 
          bg-[#E4E3BC] text-[#2F3A40] 
          px-4 py-1.5 rounded-lg text-sm font-medium 
          hover:bg-[#d6d4a8] hover:text-[#344945] 
          transition shadow-sm hover:shadow-md cursor-pointer"
        >
          <ArrowUpFromLine className="w-4 h-4" />
          Upgrade
        </button>
      </div>
    </div>
  );
}
