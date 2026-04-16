"use client";
import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  MessageCircle,
  Settings,
  LogOut,
  Notebook,
  NotebookPen,
  FileText,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type MenuItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export default function Sidebar(): JSX.Element {
  const pathname = usePathname();

  const topMenuItems: MenuItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Study Plan", href: "/study-plan", icon: BookOpen },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "Chat", href: "/chat", icon: MessageCircle },
    { name: "Notes", href: "/notes", icon: FileText },
  ];

  const bottomMenuItems: MenuItem[] = [
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Logout", href: "/logout", icon: LogOut },
  ];

  const getLinkClasses = (isActive: boolean): string =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
      isActive
        ? "bg-[#344945] text-[#F9FAF7] shadow-sm"
        : "text-[#6B7280] hover:bg-[#E7E5DE] hover:text-[#344945]"
    }`;

  const getIconClasses = (isActive: boolean): string =>
    isActive ? "text-[#F9FAF7]" : "text-[#9CA3AF] group-hover:text-[#344945]";

  return (
    <div className="w-64 h-screen fixed left-0 flex flex-col justify-between border-r border-[#E5E2DA] p-5 bg-[#F5F3EE] shadow-sm">
      {/* TOP */}
      <div>
        <h1 className="text-2xl font-semibold tracking-wider text-[#1F2933] mb-10">
          VANTAGE
        </h1>

        <nav>
          <ul className="space-y-2">
            {topMenuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${getLinkClasses(isActive)} group`}
                  >
                    <Icon size={18} className={getIconClasses(isActive)} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* BOTTOM */}
      <nav>
        <ul className="space-y-2">
          {bottomMenuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${getLinkClasses(isActive)} group`}
                >
                  <Icon size={18} className={getIconClasses(isActive)} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
