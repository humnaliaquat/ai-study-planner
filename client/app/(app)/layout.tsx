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
      className={`flex min-h-screen bg-[#F5F3EE] text-[#2F3A40] `}
      style={{ fontFamily: inter.style.fontFamily }}
    >
      <Sidebar />
      <PrivateNavbar />

      {/* 👇 THIS IS THE FIX */}
      <main className="ml-64 flex-1 p-6">{children}</main>
    </div>
  );
}
