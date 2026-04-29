"use client";

import React from "react";
import clsx from "clsx";
import { X } from "lucide-react";
import { tournamentDays } from "@/lib/adBannerMockData";

interface Assignment {
  bannerName: string;
  status: "Active" | "Paused";
}

interface MatchdaySummaryTableProps {
  assignments: Record<string, Assignment[]>;
  onRowClick: (fullDate: string) => void;
  onStatusToggle: (fullDate: string, bannerName: string) => void;
  onRemove: (fullDate: string, bannerName: string) => void;
}

export function MatchdaySummaryTable({ assignments, onRowClick, onStatusToggle, onRemove }: MatchdaySummaryTableProps) {
  return (
    <div className="flex flex-col gap-[12px] mt-[16px]">
      <h3 className="text-[13px] font-bold text-dashboard-dark uppercase tracking-wider">Tournament Day Overview</h3>
      <div className="bg-white border border-dashboard-border rounded-[16px] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-dashboard-border">
              <th className="px-[20px] py-[12px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Date</th>
              <th className="px-[20px] py-[12px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Day</th>
              <th className="px-[20px] py-[12px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Banners</th>
              <th className="px-[20px] py-[12px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Status/Actions</th>
            </tr>
          </thead>
          <tbody>
            {tournamentDays.map((day) => {
              const list = assignments[day.fullDate] || [];
              return (
                <tr 
                  key={day.fullDate} 
                  onClick={() => onRowClick(day.fullDate)}
                  className="border-b border-dashboard-border last:border-none hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <td className="px-[20px] py-[12px] text-[13px] font-bold text-dashboard-dark">{day.date} {day.month}</td>
                  <td className="px-[20px] py-[12px] text-[13px] text-dashboard-gray font-medium">{day.day}</td>
                  <td className="px-[20px] py-[12px] align-top">
                    {list.length > 0 ? (
                      <div className="flex flex-col gap-[4px]">
                        {list.map((a) => (
                          <div key={a.bannerName} className="text-[13px] text-dashboard-dark font-medium truncate max-w-[150px]">
                            {a.bannerName}
                          </div>
                        ))}
                      </div>
                    ) : <span className="text-[13px] text-dashboard-gray italic">No banner</span>}
                  </td>
                  <td className="px-[20px] py-[12px] align-top">
                    {list.length > 0 ? (
                      <div className="flex flex-col gap-[8px]">
                        {list.map((a) => (
                          <div key={a.bannerName} className="flex items-center gap-[8px]">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onStatusToggle(day.fullDate, a.bannerName);
                              }}
                              className={clsx(
                                "px-[8px] py-[2px] rounded-[12px] text-[10px] font-bold transition-all flex items-center gap-[4px]",
                                a.status === "Active" 
                                  ? "bg-green-100 text-green-700" 
                                  : "bg-amber-100 text-amber-700"
                              )}
                            >
                              <div className={clsx("w-[4px] h-[4px] rounded-full", a.status === "Active" ? "bg-green-700" : "bg-amber-700")} />
                              {a.status}
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onRemove(day.fullDate, a.bannerName);
                              }}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-dashboard-gray">—</span>
                    )}
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
