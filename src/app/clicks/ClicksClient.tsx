"use client";

import React from "react";
import { ClicksSummary } from "@/components/clicks/ClicksSummary";
import { ClicksTable } from "@/components/clicks/ClicksTable";
import { MousePointer2, Calendar } from "lucide-react";

export function ClicksClient() {
  return (
    <div className="flex flex-col min-h-screen bg-dashboard-bg">
      {/* Header */}
      <div className="bg-white border-b border-dashboard-border px-[32px] py-[32px] shrink-0">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[28px] font-bold text-dashboard-dark">Clicks & Impressions</h1>
            <p className="text-[14px] text-dashboard-gray mt-[4px]">
              Track and analyze the performance of your ad campaigns.
            </p>
          </div>
          
          <div className="flex items-center gap-[16px]">
             <button className="flex items-center gap-[10px] px-[16px] py-[10px] bg-white border border-dashboard-border rounded-[12px] text-[13px] font-bold text-dashboard-dark hover:bg-gray-50 transition-all">
                <Calendar size={18} />
                Last 30 Days
             </button>
             <div className="w-[48px] h-[48px] rounded-[16px] bg-dashboard-dark flex items-center justify-center shadow-lg">
                <MousePointer2 size={24} className="text-dashboard-accent" />
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-[32px] py-[32px] no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <ClicksSummary />
          <ClicksTable />
        </div>
      </div>
    </div>
  );
}
