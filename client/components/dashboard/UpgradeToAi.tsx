import React from "react";
import { Sparkles } from "lucide-react";

export default function UpgradeToAi() {
  return (
    <div className="flex justify-center">
      <div
        className="relative w-full max-w-xs p-5 rounded-[10px] border border-white/20 
        bg-linear-to-br from-[#5f726e] to-[#a3c2bd]
        text-white shadow-md hover:shadow-lg transition-all duration-300
        overflow-hidden"
      >
        {/* subtle glow */}
        <div className="absolute inset-0 bg-white/5 blur-2xl" />

        {/* icon */}
        <div className="relative flex justify-center mb-3">
          <div className="p-2 rounded-full bg-white/10">
            <Sparkles className="text-[#F8F7F4]" size={18} />
          </div>
        </div>

        {/* Text */}
        <div className="relative text-center">
          <h3 className="text-base font-semibold text-[#F8F7F4]/90">
            Upgrade to AI Planner
          </h3>

          <p className="text-xs text-[#F8F7F4]/70 mt-1.5 leading-snug">
            Smart study plans and personalized insights for your learning flow.
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="relative mt-4 w-full px-4 py-2 rounded-[10px]
          bg-[#F8F7F4] text-[#2F3A40] font-semibold text-xs
          hover:scale-[1.02] hover:shadow-md transition"
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
