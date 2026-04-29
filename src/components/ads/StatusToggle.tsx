"use client";

import React from "react";
import clsx from "clsx";

export type AdStatus = "Active" | "Paused" | "Scheduled";

interface StatusToggleProps {
  status: AdStatus;
  setStatus: (status: AdStatus) => void;
}

export function StatusToggle({ status, setStatus }: StatusToggleProps) {
  const options: AdStatus[] = ["Active", "Paused", "Scheduled"];

  const getStatusColor = (s: AdStatus) => {
    switch (s) {
      case "Active": return "bg-green-500";
      case "Paused": return "bg-amber-500";
      case "Scheduled": return "bg-blue-500";
      default: return "bg-gray-300";
    }
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center gap-[8px]">
        <h3 className="text-[14px] font-bold text-dashboard-dark">Status</h3>
        <div className={clsx("w-[8px] h-[8px] rounded-full", getStatusColor(status))} />
      </div>

      <div className="flex bg-gray-50 p-[4px] rounded-[12px] w-fit">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setStatus(option)}
            className={clsx(
              "px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all",
              status === option
                ? "bg-white text-dashboard-dark shadow-sm"
                : "text-dashboard-gray hover:text-dashboard-dark"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
