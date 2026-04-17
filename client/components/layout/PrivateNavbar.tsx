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
          bg-[#e0dfad] text-[#2F3A40] 
          px-4 py-2 rounded-lg text-xs font-medium 
          hover:bg-[#d6d4a8] hover:text-[#1F2933] 
          transition shadow-sm hover:shadow-md cursor-pointer"
        >
          <ArrowUpFromLine className="w-4 h-4" />
          Upgrade
        </button>
        {/* User Avatar */}
        <div className="ml-4 w-8 h-8 rounded-full bg-[#683618] flex items-center justify-center">
          <span className="text-white text-sm font-medium">JD</span>
        </div>
      </div>
    </div>
  );
}
