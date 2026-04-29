"use client";

import React from "react";
import { Eye, MousePointer2, TrendingUp, BarChart3 } from "lucide-react";
import { summaryStats } from "@/lib/clicksMockData";

export function ClicksSummary() {
  return (
    <div className="grid grid-cols-4 gap-[24px]">
      <div className="bg-white border border-dashboard-border rounded-[24px] p-[24px] shadow-sm flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <div className="w-[48px] h-[48px] rounded-[14px] bg-blue-50 flex items-center justify-center">
            <Eye className="text-blue-500" size={24} />
          </div>
          <span className="text-[11px] font-bold text-green-500 bg-green-50 px-[8px] py-[4px] rounded-full">+12.5%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-dashboard-gray uppercase tracking-widest">Total Impressions</span>
          <span className="text-[32px] font-black text-dashboard-dark">{summaryStats.totalImpressions.toLocaleString()}</span>
        </div>
      </div>

      <div className="bg-white border border-dashboard-border rounded-[24px] p-[24px] shadow-sm flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <div className="w-[48px] h-[48px] rounded-[14px] bg-dashboard-accent/10 flex items-center justify-center">
            <MousePointer2 className="text-dashboard-dark" size={24} />
          </div>
          <span className="text-[11px] font-bold text-green-500 bg-green-50 px-[8px] py-[4px] rounded-full">+8.2%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-dashboard-gray uppercase tracking-widest">Total Ad Clicks</span>
          <span className="text-[32px] font-black text-dashboard-dark">{summaryStats.totalClicks.toLocaleString()}</span>
        </div>
      </div>

      <div className="bg-white border border-dashboard-border rounded-[24px] p-[24px] shadow-sm flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <div className="w-[48px] h-[48px] rounded-[14px] bg-purple-50 flex items-center justify-center">
            <TrendingUp className="text-purple-500" size={24} />
          </div>
          <span className="text-[11px] font-bold text-red-500 bg-red-50 px-[8px] py-[4px] rounded-full">-0.4%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-dashboard-gray uppercase tracking-widest">Average CTR</span>
          <span className="text-[32px] font-black text-dashboard-dark">{summaryStats.averageCtr}</span>
        </div>
      </div>

      <div className="bg-white border border-dashboard-border rounded-[24px] p-[24px] shadow-sm flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <div className="w-[48px] h-[48px] rounded-[14px] bg-amber-50 flex items-center justify-center">
            <BarChart3 className="text-amber-500" size={24} />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-dashboard-gray uppercase tracking-widest">Top Performing Campaign</span>
          <span className="text-[14px] font-bold text-dashboard-dark mt-[4px] truncate">{summaryStats.topBanner}</span>
          <span className="text-[12px] text-dashboard-gray italic">Highest Click-Through Rate</span>
        </div>
      </div>
    </div>
  );
}
