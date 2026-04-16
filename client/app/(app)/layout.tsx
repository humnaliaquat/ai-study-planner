import PrivateNavbar from "@/components/layout/PrivateNavbar";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ventage",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`min-h-screen flex bg-[#F8F7F4] text-[#2F3A40]`}
      style={{ fontFamily: inter.style.fontFamily }}
    >
      {/* Sidebar */}
      <div className="w-64 fixed left-0 top-0 h-full">
        <Sidebar />
      </div>

      {/* Main area */}
      <div className="flex-1 ml-64 relative min-h-screen">
        <PrivateNavbar />

        <main className="pt-16 pb-24">{children}</main>
      </div>
    </div>
  );
}
