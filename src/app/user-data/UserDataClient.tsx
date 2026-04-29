"use client";

import React from "react";
import { UserTable } from "@/components/users/UserTable";
import { User } from "lucide-react";

export function UserDataClient() {
  return (
    <div className="flex flex-col min-h-screen bg-dashboard-bg">
      {/* Header */}
      <div className="bg-white border-b border-dashboard-border px-[32px] py-[32px] shrink-0">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[28px] font-bold text-dashboard-dark">User Data</h1>
            <p className="text-[14px] text-dashboard-gray mt-[4px]">
              Manage and analyze your participant database.
            </p>
          </div>
          
          <div className="flex items-center gap-[24px]">
             <div className="flex flex-col items-end">
                <span className="text-[11px] font-bold text-dashboard-gray uppercase tracking-widest">Total Active Users</span>
                <span className="text-[24px] font-black text-dashboard-dark">24,830</span>
             </div>
             <div className="w-[48px] h-[48px] rounded-[16px] bg-dashboard-accent flex items-center justify-center shadow-lg">
                <User size={24} className="text-dashboard-dark" />
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-[32px] py-[32px] no-scrollbar">
        <div className="max-w-[1400px] mx-auto">
          <UserTable />
        </div>
      </div>
    </div>
  );
}
