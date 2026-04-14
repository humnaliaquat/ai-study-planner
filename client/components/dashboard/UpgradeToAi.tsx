import React from "react";
import { Sparkles } from "lucide-react";

export default function UpgradeToAi() {
  return (
    <div className="flex justify-center">
      <div
        className="w-full max-w-md p-8 rounded-2xl border border-[#DDD9D0] shadow-md flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-lg "
        style={{
          background: "linear-gradient(135deg, #AFC4D1, #6C8FA3)",
          borderRadius: "12px",
        }}
      >
        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold text-[#2F3A40]">
            Upgrade to AI Planner
          </h3>
          <p className="text-sm text-[#5F6B73] mt-1">
            Get smart study plans, insights, and automation
          </p>
        </div>

        {/* CTA Button */}
        <button className="mt-2 w-full px-5 py-2 rounded-lg  text-white text-sm font-medium bg-[#5A7C90] cursor-pointer shadow-md hover:bg-[#618092] transition">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
