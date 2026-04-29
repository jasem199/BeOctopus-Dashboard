"use client";

import React from "react";
import clsx from "clsx";

type ScheduleType = "Single Day" | "Multiple Days";

interface DateSchedulerProps {
  type: ScheduleType;
  setType: (type: ScheduleType) => void;
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

export function DateScheduler({
  type,
  setType,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: DateSchedulerProps) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col">
        <h3 className="text-[14px] font-bold text-dashboard-dark">Schedule</h3>
        <p className="text-[12px] text-dashboard-gray">Choose when this banner runs.</p>
      </div>

      <div className="flex bg-gray-50 p-[4px] rounded-[12px] w-fit">
        {(["Single Day", "Multiple Days"] as ScheduleType[]).map((option) => (
          <button
            key={option}
            onClick={() => setType(option)}
            className={clsx(
              "px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all",
              type === option
                ? "bg-white text-dashboard-dark shadow-sm"
                : "text-dashboard-gray hover:text-dashboard-dark"
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-[12px]">
        {type === "Single Day" ? (
          <div className="flex flex-col gap-[6px]">
            <label className="text-[12px] font-bold text-dashboard-dark uppercase tracking-wider">Run on</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-[240px] px-[16px] py-[10px] border border-dashboard-border rounded-[12px] text-[14px] focus:outline-none focus:border-dashboard-dark transition-colors"
            />
            <p className="text-[12px] text-dashboard-gray italic">Banner will appear all day on this date.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-[6px]">
            <div className="flex gap-[16px]">
              <div className="flex flex-col gap-[6px] flex-1">
                <label className="text-[12px] font-bold text-dashboard-dark uppercase tracking-wider">From</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-[16px] py-[10px] border border-dashboard-border rounded-[12px] text-[14px] focus:outline-none focus:border-dashboard-dark transition-colors"
                />
              </div>
              <div className="flex flex-col gap-[6px] flex-1">
                <label className="text-[12px] font-bold text-dashboard-dark uppercase tracking-wider">To</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-[16px] py-[10px] border border-dashboard-border rounded-[12px] text-[14px] focus:outline-none focus:border-dashboard-dark transition-colors"
                />
              </div>
            </div>
            <p className="text-[12px] text-dashboard-gray italic">Banner will appear every day within this range.</p>
          </div>
        )}
      </div>
    </div>
  );
}
