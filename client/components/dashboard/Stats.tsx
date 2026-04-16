import { Timer, CheckCircle, Flame } from "lucide-react";
import React from "react";

export default function Stats() {
  const statsData = [
    {
      name: "Total Study Hours",
      value: 7,
      unit: "hrs",
      trend: "+2.3 this week",
      icon: Timer,
    },
    {
      name: "Tasks Completed",
      value: 12,
      unit: "tasks",
      trend: "+4 this week",
      icon: CheckCircle,
    },
    {
      name: "Current Streak",
      value: 5,
      unit: "days",
      trend: "+2 days",
      icon: Flame,
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl ">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className=" border border-[#E5E2DA] p-5 rounded-[10px] flex items-center gap-4 shadow-sm  transition-all duration-200   "
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#E4E3BC]/40">
                <Icon size={20} className="text-[#344945]" />
              </div>

              {/* Text */}
              <div>
                <p className="text-xs font-medium text-[#1F2933]">
                  {stat.name}
                </p>

                <p className="text-xl font-semibold text-[#1F2933]">
                  {stat.value}{" "}
                  <span className="text-sm font-normal text-[#4B5563]">
                    {stat.unit}
                  </span>
                </p>

                <p className="text-xs text-[#467a71] mt-1">{stat.trend}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
