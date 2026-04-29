"use client";

import React from "react";
import clsx from "clsx";
import { AdStatus } from "./StatusToggle";

interface PositionState {
  banner: { name: string } | null;
  startDate: string;
  endDate: string;
  status: AdStatus;
  type: string;
}

interface SummaryTableProps {
  data: Record<string, PositionState>;
}

export function SummaryTable({ data }: SummaryTableProps) {
  const getStatusColor = (s: AdStatus) => {
    switch (s) {
      case "Active": return "bg-green-500";
      case "Paused": return "bg-amber-500";
      case "Scheduled": return "bg-blue-500";
      default: return "bg-gray-300";
    }
  };

  const formatDate = (date: string) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

  const renderSchedule = (pos: PositionState) => {
    if (!pos.startDate) return "Not set";
    if (pos.type === "Single Day") return formatDate(pos.startDate);
    if (!pos.endDate) return formatDate(pos.startDate) + " – Not set";
    return `${formatDate(pos.startDate)} – ${formatDate(pos.endDate)}`;
  };

  const positions = [
    { id: "top", label: "Top" },
    { id: "after10", label: "After 10" },
    { id: "after15", label: "After 15" },
    { id: "after20", label: "After 20" },
  ];

  return (
    <div className="flex flex-col gap-[16px] mt-[32px]">
      <h3 className="text-[14px] font-bold text-dashboard-dark uppercase tracking-wider">All Positions At A Glance</h3>
      <div className="bg-white border border-dashboard-border rounded-[16px] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-dashboard-border">
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Position</th>
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Creative</th>
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Schedule</th>
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos) => {
              const state = data[pos.id];
              return (
                <tr key={pos.id} className="border-b border-dashboard-border last:border-none hover:bg-gray-50 transition-colors">
                  <td className="px-[24px] py-[16px] text-[14px] font-semibold text-dashboard-dark">{pos.label}</td>
                  <td className={clsx("px-[24px] py-[16px] text-[14px]", state.banner ? "text-dashboard-dark" : "text-dashboard-gray")}>
                    {state.banner?.name || "Not uploaded"}
                  </td>
                  <td className={clsx("px-[24px] py-[16px] text-[14px]", state.startDate ? "text-dashboard-dark" : "text-dashboard-gray")}>
                    {renderSchedule(state)}
                  </td>
                  <td className="px-[24px] py-[16px]">
                    <div className="flex items-center gap-[8px]">
                      <div className={clsx("w-[6px] h-[6px] rounded-full", getStatusColor(state.status))} />
                      <span className="text-[14px] font-medium text-dashboard-dark">{state.status}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
