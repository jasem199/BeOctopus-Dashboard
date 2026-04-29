"use client";

import React from "react";
import clsx from "clsx";

interface SummaryBlockProps {
  creative: string;
  schedule: string;
  status: string;
}

export function SummaryBlock({ creative, schedule, status }: SummaryBlockProps) {
  return (
    <div className="bg-gray-50 border border-dashboard-border rounded-[12px] p-[16px] flex flex-col gap-[8px]">
      <div className="grid grid-cols-[100px_1fr] gap-[12px] items-baseline">
        <span className="text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Creative:</span>
        <span className={clsx("text-[14px] font-medium", creative === "Not uploaded" ? "text-dashboard-gray" : "text-dashboard-dark")}>
          {creative}
        </span>
      </div>
      <div className="grid grid-cols-[100px_1fr] gap-[12px] items-baseline">
        <span className="text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Schedule:</span>
        <span className={clsx("text-[14px] font-medium", schedule === "Not set" ? "text-dashboard-gray" : "text-dashboard-dark")}>
          {schedule}
        </span>
      </div>
      <div className="grid grid-cols-[100px_1fr] gap-[12px] items-baseline">
        <span className="text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Status:</span>
        <span className="text-[14px] font-semibold text-dashboard-dark">
          {status}
        </span>
      </div>
    </div>
  );
}
