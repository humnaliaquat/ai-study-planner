"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const topMenuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Study Plan", href: "/study-plan", icon: BookOpen },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "Chat", href: "/chat", icon: MessageCircle },
  ];

  const bottomMenuItems = [
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Logout", href: "/logout", icon: LogOut },
  ];

  return (
    <div
      className="w-64 h-screen fixed left-0 flex flex-col justify-between border-r border-[#DDD9D0] p-5 bg-[#F1EFE9]"
      style={{
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      {/* logo */}
      <div>
        <h1 className="text-2xl font-semibold tracking-widest text-[#344945] mb-10">
          VANTAGE
        </h1>

        {/* top menu */}
        <nav>
          <ul className="space-y-2">
            {topMenuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                      isActive
                        ? "bg-[#DDD9D0] text-[#2F3A40] font-medium"
                        : "text-[#8A959C] hover:bg-[#EDEAE3] hover:text-[#344945]"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`${isActive ? "text-[#6089a0]" : "text-[#8A959C]"}`}
                    />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* bottom menu */}
      <nav>
        <ul className="space-y-2">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-[#E4E3BC]/40 hover:text-[#344945] transition"
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
