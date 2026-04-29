"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { mockData } from "@/lib/mockData";

type Tab = "Daily" | "Weekly" | "All Time";
const tabs: Tab[] = ["Daily", "Weekly", "All Time"];

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState<Tab>("Weekly");
  const data = mockData.leaderboard;

  return (
    <div className="bg-white rounded-[16px] p-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-[8px]">
        <h2 className="text-[16px] font-semibold text-dashboard-dark">Leaderboard - Top 10</h2>
        <div className="flex gap-[8px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "px-[12px] py-[4px] rounded-[20px] text-[12px] font-semibold transition-colors",
                activeTab === tab
                  ? "bg-dashboard-accent text-dashboard-dark"
                  : "bg-transparent text-dashboard-gray hover:bg-gray-50"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col">
        {data.map((user, index) => {
          const isTop3 = user.rank <= 3;
          const isLast = index === data.length - 1;

          return (
            <div
              key={user.rank}
              className={clsx(
                "flex items-center h-[48px]",
                !isLast && "border-b border-dashboard-border"
              )}
            >
              {/* Rank */}
              <div className="w-[32px] flex-shrink-0">
                {isTop3 ? (
                  <div className="w-[24px] h-[24px] rounded-[6px] bg-dashboard-accent text-dashboard-dark text-[12px] font-bold flex items-center justify-center">
                    {user.rank}
                  </div>
                ) : (
                  <div className="text-[14px] font-semibold text-dashboard-gray pl-[4px]">
                    {user.rank}
                  </div>
                )}
              </div>

              {/* Name */}
              <span className="text-[14px] font-normal text-dashboard-dark ml-[8px] truncate">
                {user.name}
              </span>

              {/* Points */}
              <div className="ml-auto flex items-baseline">
                <span className="text-[14px] font-semibold text-dashboard-dark">
                  {user.points.toLocaleString()}
                </span>
                <span className="text-[12px] font-normal text-dashboard-gray ml-[4px]">
                  pts
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
