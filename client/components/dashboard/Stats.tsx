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
              className=" border border-[#DDD9D0] p-5 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer  "
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#C7D7E2]">
                <Icon size={20} className="text-[#537483]" />
              </div>

              {/* Text */}
              <div>
                <p className="text-xs text-[#5F6B73]">{stat.name}</p>

                <p className="text-xl font-semibold text-[#2F3A40]">
                  {stat.value}{" "}
                  <span className="text-sm font-normal text-[#5F6B73]">
                    {stat.unit}
                  </span>
                </p>

                <p className="text-xs text-[#6C8FA3] mt-1">{stat.trend}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
