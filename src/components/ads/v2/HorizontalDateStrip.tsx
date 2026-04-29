"use client";

import React from "react";
import clsx from "clsx";
import { tournamentDays } from "@/lib/adBannerMockData";

interface HorizontalDateStripProps {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  assignedDays: string[];
  isRangeMode: boolean;
  setIsRangeMode: (mode: boolean) => void;
  rangeStart: string | null;
  rangeEnd: string | null;
  onRangeSelect: (day: string) => void;
}

export function HorizontalDateStrip({
  selectedDay,
  setSelectedDay,
  assignedDays,
  isRangeMode,
  setIsRangeMode,
  rangeStart,
  rangeEnd,
  onRangeSelect,
}: HorizontalDateStripProps) {
  
  const isInRange = (dayFullDate: string) => {
    if (!rangeStart || !rangeEnd) return false;
    const startIndex = tournamentDays.findIndex(d => d.fullDate === rangeStart);
    const endIndex = tournamentDays.findIndex(d => d.fullDate === rangeEnd);
    const currentIndex = tournamentDays.findIndex(d => d.fullDate === dayFullDate);
    
    const min = Math.min(startIndex, endIndex);
    const max = Math.max(startIndex, endIndex);
    return currentIndex >= min && currentIndex <= max;
  };

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-dashboard-border py-[12px] flex items-center gap-[12px] overflow-hidden">
      <div className="flex-1 overflow-x-auto no-scrollbar flex gap-[8px] px-[2px]">
        {tournamentDays.map((day) => {
          const isCurrent = selectedDay === day.fullDate;
          const isStart = rangeStart === day.fullDate;
          const isEnd = rangeEnd === day.fullDate;
          const isBetween = isInRange(day.fullDate);
          const isAssigned = assignedDays.includes(day.fullDate);

          const isActive = isCurrent || isStart || isEnd || isBetween;

          return (
            <button
              key={day.fullDate}
              onClick={() => isRangeMode ? onRangeSelect(day.fullDate) : setSelectedDay(day.fullDate)}
              className={clsx(
                "min-w-[64px] h-[72px] rounded-[12px] flex flex-col items-center justify-center gap-[2px] transition-all shrink-0 border",
                isActive 
                  ? "bg-dashboard-accent border-dashboard-accent text-dashboard-dark" 
                  : "bg-white border-dashboard-border text-dashboard-gray hover:border-dashboard-gray"
              )}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider">{day.day}</span>
              <span className="text-[18px] font-black leading-none">{day.date}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">{day.month}</span>
              
              {isAssigned && (
                <div className={clsx(
                  "w-[5px] h-[5px] rounded-full mt-[2px]",
                  isActive ? "bg-dashboard-dark" : "bg-dashboard-accent"
                )} />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-[4px] pr-[4px]">
        <button 
          onClick={() => setIsRangeMode(!isRangeMode)}
          className={clsx(
            "px-[12px] py-[6px] rounded-[8px] text-[12px] font-bold transition-colors whitespace-nowrap",
            isRangeMode 
              ? "bg-dashboard-dark text-white shadow-md" 
              : "border border-dashboard-dark text-dashboard-dark hover:bg-gray-50"
          )}
        >
          {isRangeMode ? "Cancel Range" : "Select Range"}
        </button>
        {isRangeMode && !rangeStart && (
          <span className="text-[9px] text-dashboard-gray font-bold text-center">Click start date</span>
        )}
        {isRangeMode && rangeStart && !rangeEnd && (
          <span className="text-[9px] text-dashboard-gray font-bold text-center">Click end date</span>
        )}
      </div>
    </div>
  );
}
