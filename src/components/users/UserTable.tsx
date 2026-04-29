"use client";

import React, { useState } from "react";
import { Search, Download, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import clsx from "clsx";
import { usersMockData } from "@/lib/userDataMockData";

export function UserTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const filteredUsers = usersMockData.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-white border border-dashboard-border rounded-[16px] px-[24px] py-[16px]">
        <div className="flex items-center gap-[12px]">
          <span className="text-[14px] font-bold text-dashboard-dark">All Users</span>
          <div className="px-[8px] py-[2px] bg-gray-100 rounded-full text-[12px] font-bold text-dashboard-gray">
            {filteredUsers.length} users
          </div>
        </div>
        
        <div className="flex items-center gap-[16px]">
          <div className="relative">
            <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 text-dashboard-gray" size={16} />
            <input 
              type="text" 
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-[36px] pr-[16px] py-[8px] border border-dashboard-border rounded-[10px] text-[14px] w-[280px] focus:outline-none focus:border-dashboard-dark transition-colors"
            />
          </div>
          <button className="flex items-center gap-[8px] px-[16px] py-[8px] border border-dashboard-border rounded-[10px] text-[14px] font-bold text-dashboard-dark hover:bg-gray-50 transition-colors">
            <Download size={16} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-dashboard-border rounded-[20px] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-dashboard-border">
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">User Name</th>
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Contact Info</th>
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider text-center">Joined Date</th>
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider text-center">Predictions</th>
              <th className="px-[24px] py-[16px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider text-right">Points</th>
              <th className="px-[24px] py-[16px] w-[60px]"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr 
                key={user.id} 
                className={clsx(
                  "border-b border-dashboard-border last:border-none hover:bg-gray-50/50 transition-colors",
                  i % 2 !== 0 && "bg-gray-50/20"
                )}
              >
                <td className="px-[24px] py-[18px]">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-dashboard-dark">{user.name}</span>
                    <span className="text-[12px] text-dashboard-gray italic">#{user.id}</span>
                  </div>
                </td>
                <td className="px-[24px] py-[18px]">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-dashboard-dark">{user.email}</span>
                    <span className="text-[12px] text-dashboard-gray">{user.phone}</span>
                  </div>
                </td>
                <td className="px-[24px] py-[18px] text-[13px] text-dashboard-dark text-center font-medium">{user.joinedDate}</td>
                <td className="px-[24px] py-[18px] text-center">
                   <div className="inline-flex items-center justify-center px-[10px] py-[2px] bg-dashboard-accent/10 border border-dashboard-accent/30 rounded-full">
                      <span className="text-[13px] font-bold text-dashboard-dark">{user.predictionCount}</span>
                   </div>
                </td>
                <td className="px-[24px] py-[18px] text-[14px] font-black text-dashboard-dark text-right">{user.points.toLocaleString()}</td>
                <td className="px-[24px] py-[18px]">
                  <button className="p-[6px] hover:bg-gray-100 rounded-lg text-dashboard-gray transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-[12px] py-[8px]">
        <span className="text-[13px] text-dashboard-gray font-medium">
          Showing 1 – {filteredUsers.length} of {filteredUsers.length} users
        </span>

        <div className="flex items-center gap-[12px]">
          <button className="p-[8px] rounded-[10px] border border-dashboard-border text-dashboard-gray disabled:opacity-30" disabled>
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-[4px]">
            <button className="w-[36px] h-[36px] rounded-[10px] bg-dashboard-dark text-white text-[13px] font-bold">1</button>
          </div>
          <button className="p-[8px] rounded-[10px] border border-dashboard-border text-dashboard-gray disabled:opacity-30" disabled>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex items-center gap-[12px]">
          <span className="text-[13px] text-dashboard-gray font-medium">Rows per page</span>
          <select 
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="px-[12px] py-[8px] border border-dashboard-border rounded-[10px] text-[13px] font-bold bg-white focus:outline-none focus:border-dashboard-dark transition-all cursor-pointer"
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
