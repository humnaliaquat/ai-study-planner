import { BookOpen, Bot, CalendarDays, Upload } from "lucide-react";

import Link from "next/link";

export default function QuickLinks() {
  const quickLinks = [
    {
      name: "Upload PDF",
      href: "/dashboard/tasks",
      icon: Upload,
    },
    {
      name: "Study Plan",
      href: "/study-plan",
      icon: BookOpen,
    },
    {
      name: "AI Chat",
      href: "/chat",
      icon: Bot,
    },
    {
      name: "Calendar",
      href: "/calendar",
      icon: CalendarDays,
    },
  ];

  return (
    <div
      className="bg-[#ebe9e5] border border-[#DDD9D0] p-5 "
      style={{
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        borderRadius: "12px",
      }}
    >
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#2F3A40] mb-4">Quick Links</h2>

      {/* Grid - 2 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {quickLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <Link
              key={index}
              href={link.href}
              className="flex items-center gap-2 p-3 rounded-lg border border-[#DDD9D0]   bg-[#F5F3EE] hover:bg-[#E3DFD6] hover:shadow-sm transition"
            >
              <Icon size={18} className="text-[#537483]" />
              <span className="text-[#2F3A40] font-medium">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
