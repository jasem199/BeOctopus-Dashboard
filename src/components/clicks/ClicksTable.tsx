"use client";

import React from "react";
import { TrendingUp, MousePointer2, Eye, BarChart3 } from "lucide-react";
import { clicksMockData } from "@/lib/clicksMockData";
import clsx from "clsx";

export function ClicksTable() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center justify-between bg-white border border-dashboard-border rounded-[16px] px-[20px] py-[14px]">
        <h3 className="text-[14px] font-bold text-dashboard-dark uppercase tracking-wider">Ad Performance Breakdown</h3>
        <div className="flex items-center gap-[8px]">
           <span className="text-[12px] text-dashboard-gray font-medium italic">Last updated: Just now</span>
        </div>
      </div>

      <div className="bg-white border border-dashboard-border rounded-[20px] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-dashboard-border">
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Banner Campaign</th>
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider text-center">Position</th>
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider text-center">Impressions</th>
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider text-center">Clicks</th>
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider text-right">CTR</th>
            </tr>
          </thead>
          <tbody>
            {clicksMockData.map((ad, i) => (
              <tr 
                key={ad.id} 
                className={clsx(
                  "border-b border-dashboard-border last:border-none hover:bg-gray-50/50 transition-colors",
                  i % 2 !== 0 && "bg-gray-50/20"
                )}
              >
                <td className="px-[24px] py-[18px]">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-dashboard-dark">{ad.bannerName}</span>
                    <span className="text-[12px] text-dashboard-gray italic">{ad.lastUpdated}</span>
                  </div>
                </td>
                <td className="px-[24px] py-[18px] text-center">
                   <span className="px-[10px] py-[4px] bg-gray-100 rounded-[8px] text-[12px] font-medium text-dashboard-gray whitespace-nowrap">
                      {ad.position}
                   </span>
                </td>
                <td className="px-[24px] py-[18px] text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] font-bold text-dashboard-dark">{ad.impressions.toLocaleString()}</span>
                    <div className="w-[40px] h-[3px] bg-gray-100 rounded-full mt-[4px]">
                      <div className="h-full bg-blue-400 rounded-full" style={{ width: `${(ad.impressions / 50000) * 100}%` }} />
                    </div>
                  </div>
                </td>
                <td className="px-[24px] py-[18px] text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] font-bold text-dashboard-dark">{ad.clicks.toLocaleString()}</span>
                    <div className="w-[40px] h-[3px] bg-gray-100 rounded-full mt-[4px]">
                      <div className="h-full bg-dashboard-accent rounded-full" style={{ width: `${(ad.clicks / 1500) * 100}%` }} />
                    </div>
                  </div>
                </td>
                <td className="px-[24px] py-[18px] text-right">
                  <span className="text-[15px] font-black text-dashboard-dark">{ad.ctr}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
