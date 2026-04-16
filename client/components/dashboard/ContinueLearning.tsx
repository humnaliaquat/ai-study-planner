import React from "react";
import { PlayCircle, FileText, BookOpen } from "lucide-react";

export default function ContinueLearning() {
  const items = [
    {
      title: "React Hooks Deep Dive",
      type: "PDF",
      progress: "65%",
      icon: FileText,
    },
    {
      title: "DSA Study Plan - Day 3",
      type: "Plan",
      progress: "40%",
      icon: BookOpen,
    },
    {
      title: "JavaScript Closures (Video)",
      type: "Video",
      progress: "12 min left",
      icon: PlayCircle,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-[#E5E2DA] p-6 shadow-sm hover:shadow-md transition">
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#344945] mb-4">
        Continue Learning
      </h2>

      {/* Items */}
      <div className="space-y-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg 
              hover:bg-[#F2F1EC] transition cursor-pointer"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="p-2 rounded-lg bg-[#E4E3BC]/40">
                  <Icon className="text-[#344945]" size={18} />
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.type}</p>
                </div>
              </div>

              {/* Right */}
              <div className="text-xs text-gray-500">{item.progress}</div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <button className="mt-5 text-sm text-[#344945] hover:underline">
        View all →
      </button>
    </div>
  );
}
