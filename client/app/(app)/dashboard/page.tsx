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

export default function Dashboard() {
  return (
    <div className="p-6 mt-15  min-h-screen">
      {/* Greeting */}
      <h1 className="text-3xl font-semibold text-[#2F3A40] mb-8">
        Evening Hani!
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT - bigger section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <QuickLinks />

          <Stats />
        </div>

        {/* RIGHT */}
        <div className="  lg:col-span-1 flex flex-col gap-6">
          <UpgradeToAi />

          <AIInsights />
        </div>
      </div>
    </div>
  );
}
