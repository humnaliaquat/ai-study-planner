import React from "react";
import { ArrowUpFromLine } from "lucide-react";
export default function PrivateNavbar() {
  return (
    <div className="flex fixed top-0 right-0 items-center justify-between p-4  ">
      {/* upgrade btn */}
      <button className="bg-[#6C8FA3] text-white py-1.5 px-4 rounded-lg hover:bg-[#789eb4] text-xs flex items-center transition cursor-pointer">
        <ArrowUpFromLine className="w-4 h-4 mr-2" />
        Upgrade
      </button>
    </div>
  );
}
