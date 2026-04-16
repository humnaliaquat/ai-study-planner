import React from "react";
import { CheckCircle2, Circle } from "lucide-react";

export default function TodaysFocus() {
  const tasks = [
    { title: "Revise React Hooks", done: false },
    { title: "Complete DSA Day 3", done: false },
    { title: "Take JavaScript Quiz", done: true },
  ];

  return (
    <div className="bg-[#F9F8F4] rounded-xl border border-[#E5E2DA] p-6 shadow-sm hover:shadow-md transition">
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#344945] mb-4">
        Today’s Focus
      </h2>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F2F1EC] transition"
          >
            {task.done ? (
              <CheckCircle2 className="text-[#344945]" size={18} />
            ) : (
              <Circle className="text-[#4B5563]" size={18} />
            )}

            <p
              className={`text-sm ${
                task.done ? "line-through text-[#4B5563]" : "text-[#1F2933]"
              }`}
            >
              {task.title}
            </p>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <button className="mt-5 text-sm text-[#344945] hover:underline">
        Plan your day →
      </button>
    </div>
  );
}
