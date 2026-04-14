import React from "react";
import { Brain } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="w-full max-w-md">
      <div className="p-5 rounded-xl border border-l-4 border-[#6C8FA3] shadow-sm flex flex-col gap-4 transition-all duration-200 hover:shadow-md">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#6C8FA3] text-white">
            <Brain size={18} />
          </div>
          <h3 className="text-sm font-semibold text-[#2F3A40]">AI Insights</h3>
        </div>

        {/* Insight Text */}
        <p className="text-sm text-[#2F3A40] leading-relaxed">
          You study more effectively in the evening. Consider scheduling your
          hardest topics after 6 PM for better focus.
        </p>

        {/* Footer Tip */}
        <div className="text-xs text-[#5F6B73]">
          Based on your last 7 days activity
        </div>
      </div>
    </div>
  );
}
