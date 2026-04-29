"use client";

import React from "react";
import clsx from "clsx";
import { leaderboardPositions } from "@/lib/adBannerMockData";

interface PositionSelectorProps {
  selectedPosition: string;
  setSelectedPosition: (pos: string) => void;
  assignments: Record<string, { bannerName: string; status: "Active" | "Paused" }>;
}

export function PositionSelector({ selectedPosition, setSelectedPosition, assignments }: PositionSelectorProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col">
        <h2 className="text-[14px] font-bold text-dashboard-dark">Leaderboard Positions</h2>
        <p className="text-[12px] text-dashboard-gray">Select a position to assign a banner.</p>
      </div>

      <div className="flex flex-col gap-[8px]">
        {leaderboardPositions.map((pos) => {
          const isActive = selectedPosition === pos.id;
          const assignment = assignments[pos.id];

          return (
            <button
              key={pos.id}
              onClick={() => setSelectedPosition(pos.id)}
              className={clsx(
                "px-[24px] py-[20px] rounded-[16px] flex items-center justify-between transition-all border",
                isActive 
                  ? "bg-dashboard-accent border-dashboard-accent text-dashboard-dark" 
                  : "bg-white border-dashboard-border hover:border-dashboard-gray"
              )}
            >
              <span className="text-[16px] font-bold">{pos.label}</span>
              
              <div className="flex items-center gap-[16px]">
                <span className={clsx(
                  "text-[14px] font-medium",
                  isActive ? "text-dashboard-dark/60" : "text-dashboard-gray"
                )}>
                  {assignment?.bannerName || "No banner"}
                </span>
                
                {assignment && (
                  <div className={clsx(
                    "w-[8px] h-[8px] rounded-full",
                    assignment.status === "Active" ? "bg-green-500" : "bg-amber-500"
                  )} />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
