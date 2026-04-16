import {
  BookOpen,
  Code2,
  ClipboardList,
  Target,
  Brain,
  Rocket,
} from "lucide-react";

import QuickLinks from "@/components/dashboard/QuickLinks";
import Stats from "@/components/dashboard/Stats";
import UpgradeToAi from "@/components/dashboard/UpgradeToAi";
import AIInsights from "@/components/dashboard/AIInsights";
import TodaysFocus from "@/components/dashboard/Todaysfocus";
import ContinueLearning from "@/components/dashboard/ContinueLearning";

export default function Dashboard() {
  return (
    <div className="p-6 px-15 mt-15  min-h-screen">
      {/* Greeting */}
      <h1 className=" mb-2 text-4xl font-semibold tracking-tight  text-[#1F2933]">
        Evening Hani!
      </h1>
      <p className="text-[#344945] mb-8 text-xs sm:text-sm">
        Here's a quick overview of your study progress and insights for today.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT - bigger section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <QuickLinks />

          <Stats />
          <ContinueLearning />
        </div>

        {/* RIGHT */}
        <div className="  lg:col-span-1 flex flex-col gap-6">
          <UpgradeToAi />
          <TodaysFocus />
        </div>
      </div>
    </div>
  );
}
