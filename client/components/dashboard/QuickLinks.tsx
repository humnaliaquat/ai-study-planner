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
      className="bg-[#F5F3EE]  p-5 shadow-sm hover:shadow-md transition"
      style={{
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        borderRadius: "10px",
      }}
    >
      {/* Header */}
      <h2 className="text-lg font-semibold text-[#344945] mb-4">Quick Links</h2>

      {/* Grid - 2 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {quickLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <Link
              key={index}
              href={link.href}
              className="flex items-center gap-2 p-3 rounded-[10px]   hover:bg-[#f0eeeb] cursor-pointer  bg-white border border-[#E5E2DA] 
hover:border-[#344945]/30 hover:shadow-sm
hover:-translate-y-0.5 transition"
            >
              <Icon size={18} className="text-[#344945]" />
              <span className="text-[#1F2933] text-sm font-medium">
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
