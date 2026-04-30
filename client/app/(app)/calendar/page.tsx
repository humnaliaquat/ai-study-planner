"use client";

import DayView from "@/components/calendar/DayView";
import TasksView from "@/components/calendar/TasksView";
import WeekView from "@/components/calendar/WeekView";
import YearView from "@/components/calendar/YearView";
import { Plus, Search } from "lucide-react";
import React, { useState } from "react";

export default function page() {
  const tabs = ["Tasks", "Day", "Week", "Year"] as const;
  type TabType = (typeof tabs)[number];
  const [tab, setTab] = useState<TabType>("Tasks");
  return (
    <div className="h-screen flex flex-col overflow-hidden pt-16 px-6">
      {/* Header */}
      <div className="flex items-center justify-between px-2 pt-6 pb-4 border-b border-[#E5E2DA]">
        <div className="flex flex-col items-start ">
          <h1 className="text-2xl font-medium tracking-tight text-[#1F2933]">
            Calender
          </h1>
          {/* tabs */}
          <div className="flex items-center rounded-[10px] bg-[#ece7da] mt-2">
            {tabs.map((item, index) => (
              <div key={index}>
                <button
                  className={`flex items-center justify-center py-1.5 text-sm  px-3 rounded-[10px] cursor-pointer ${tab === item ? "border border-[#dddbd6] bg-[#F8F7F4]" : "border-none text-[#52585c]"}`}
                  onClick={() => setTab(item)}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center">
          <input
            type="search"
            name="search"
            className="py-1.5 px-7 border border-[#E5E2DA] rounded-[10px] text-sm focus:outline-[#dad6cb] "
            placeholder="Search"
          />
          <Search className="w-4 h-4 absolute left-2 text-[#52585c]" />
        </div>
      </div>
      {/* views */}
      {tab === "Tasks" && <TasksView />}
      {tab === "Day" && <DayView />}
      {tab === "Week" && <WeekView />}
      {tab === "Year" && <YearView />}
    </div>
  );
}
