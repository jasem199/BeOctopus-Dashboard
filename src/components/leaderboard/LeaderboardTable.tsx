"use client";

import React, { useState } from "react";
import { Search, Download, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { Participant, leaderboardParticipants } from "@/lib/leaderboardMockData";

interface LeaderboardTableProps {
  onExportClick: () => void;
}

export function LeaderboardTable({ onExportClick }: LeaderboardTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const filteredData = leaderboardParticipants.filter(p => 
    p.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalParticipants = 24830; // Mock total from spec

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-medium text-dashboard-gray">
          {totalParticipants.toLocaleString()} participants
        </span>
        
        <div className="flex items-center gap-[16px]">
          <div className="relative">
            <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 text-dashboard-gray" size={16} />
            <input 
              type="text" 
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-[36px] pr-[16px] py-[8px] border border-dashboard-border rounded-[10px] text-[14px] w-[240px] focus:outline-none focus:border-dashboard-dark transition-colors"
            />
          </div>
          <button 
            onClick={onExportClick}
            className="flex items-center gap-[8px] px-[16px] py-[8px] border border-dashboard-border rounded-[10px] text-[14px] font-bold text-dashboard-dark hover:bg-gray-50 transition-colors"
          >
            <Download size={16} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-dashboard-border rounded-[16px] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-dashboard-border">
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider w-[80px]">Rank</th>
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Display Name</th>
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider text-center w-[120px]">Predictions</th>
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider text-right w-[120px]">Points</th>
              <th className="px-[24px] py-[16px] text-[12px] font-bold text-dashboard-gray uppercase tracking-wider text-right w-[140px]">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((p, i) => (
              <tr 
                key={p.rank} 
                className={clsx(
                  "border-b border-dashboard-border last:border-none hover:bg-gray-50/50 transition-colors",
                  i % 2 !== 0 && "bg-gray-50/30"
                )}
              >
                <td className="px-[24px] py-[16px]">
                  {p.rank <= 3 ? (
                    <div className={clsx(
                      "w-[28px] h-[28px] rounded-full flex items-center justify-center text-[13px] font-black shadow-sm",
                      p.rank === 1 && "bg-[#FFD700] text-white",
                      p.rank === 2 && "bg-[#C0C0C0] text-white",
                      p.rank === 3 && "bg-[#CD7F32] text-white"
                    )}>
                      {p.rank}
                    </div>
                  ) : (
                    <span className="text-[14px] text-dashboard-dark font-medium pl-[8px]">{p.rank}</span>
                  )}
                </td>
                <td className="px-[24px] py-[16px] text-[14px] font-medium text-dashboard-dark">{p.displayName}</td>
                <td className="px-[24px] py-[16px] text-[14px] text-dashboard-dark text-center">{p.predictions}</td>
                <td className="px-[24px] py-[16px] text-[14px] font-bold text-dashboard-dark text-right">{p.points.toLocaleString()}</td>
                <td className="px-[24px] py-[16px] text-[14px] text-dashboard-gray text-right">{p.submitted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-[8px]">
        <span className="text-[13px] text-dashboard-gray">
          Showing 1 – {filteredData.length} of {totalParticipants.toLocaleString()}
        </span>

        <div className="flex items-center gap-[12px]">
          <button className="p-[8px] rounded-[8px] border border-dashboard-border text-dashboard-gray disabled:opacity-30" disabled>
            <ChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-[4px]">
            {[1, 2, 3].map(n => (
              <button 
                key={n} 
                className={clsx(
                  "w-[32px] h-[32px] rounded-[8px] text-[13px] font-bold transition-all",
                  n === 1 ? "bg-dashboard-dark text-white" : "hover:bg-gray-100 text-dashboard-gray"
                )}
              >
                {n}
              </button>
            ))}
            <span className="text-dashboard-gray px-[4px]">...</span>
            <button className="w-[32px] h-[32px] rounded-[8px] text-[13px] font-bold text-dashboard-gray hover:bg-gray-100">496</button>
          </div>
          <button className="p-[8px] rounded-[8px] border border-dashboard-border text-dashboard-gray hover:border-dashboard-gray">
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex items-center gap-[8px]">
          <span className="text-[13px] text-dashboard-gray">Rows per page</span>
          <select 
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="px-[8px] py-[6px] border border-dashboard-border rounded-[8px] text-[13px] font-medium bg-white focus:outline-none"
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </div>
  );
}
