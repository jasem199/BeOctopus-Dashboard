"use client";

import React from "react";
import { matchesByDate } from "@/lib/adBannerMockData";

interface CompactMatchListProps {
  selectedDay: string;
}

export function CompactMatchList({ selectedDay }: CompactMatchListProps) {
  const matches = matchesByDate[selectedDay] || [];

  return (
    <div className="flex flex-col gap-[12px]">
      <h3 className="text-[13px] font-bold text-dashboard-dark">Matches on {selectedDay}</h3>
      <div className="flex flex-wrap gap-[12px]">
        {matches.length > 0 ? (
          matches.map((match, i) => (
            <div 
              key={i} 
              className="bg-white border border-dashboard-border rounded-[12px] p-[12px] flex flex-col items-center justify-center gap-[2px] min-w-[160px] flex-1"
            >
              <div className="flex items-center gap-[8px] text-[14px] font-bold text-dashboard-dark">
                <span>{match.teamA}</span>
                <span className="text-[10px] text-dashboard-gray font-normal">vs</span>
                <span>{match.teamB}</span>
              </div>
              <span className="text-[11px] text-dashboard-gray font-bold uppercase tracking-wider">
                {match.time}
              </span>
            </div>
          ))
        ) : (
          <div className="w-full bg-gray-50 border border-dashed border-dashboard-border rounded-[12px] p-[20px] text-center text-[12px] text-dashboard-gray italic">
            No matches scheduled for this date.
          </div>
        )}
      </div>
    </div>
  );
}
