"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";
import { LotterySection } from "@/components/leaderboard/LotterySection";
import { X, Trophy } from "lucide-react";

type Tab = "Daily" | "Weekly" | "All Time";

export function LeaderboardClient() {
  const [activeTab, setActiveTab] = useState<Tab>("Daily");
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isLotteryDrawerOpen, setIsLotteryDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-dashboard-bg overflow-hidden h-[calc(100vh-64px)]">
      {/* Header & Tabs */}
      <div className="bg-white border-b border-dashboard-border px-[32px] pt-[32px] shrink-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between mb-[24px]">
            <div className="flex flex-col">
              <h1 className="text-[28px] font-bold text-dashboard-dark">Leaderboard</h1>
              <p className="text-[14px] text-dashboard-gray mt-[4px]">
                View rankings, export data, and pick winners.
              </p>
            </div>
            
            <button 
              onClick={() => setIsLotteryDrawerOpen(true)}
              className="flex items-center gap-[10px] px-[20px] py-[12px] bg-dashboard-accent text-dashboard-dark rounded-[16px] font-black uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Trophy size={20} />
              Open Lottery Draw
            </button>
          </div>

          <div className="flex gap-[32px]">
            {(["Daily", "Weekly", "All Time"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "pb-[16px] text-[15px] font-bold transition-all border-b-[3px]",
                  activeTab === tab 
                    ? "border-dashboard-dark text-dashboard-dark" 
                    : "border-transparent text-dashboard-gray hover:text-dashboard-dark"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden flex">
        {/* Left Side - Table (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[32px] no-scrollbar">
          <div className="max-w-[1400px] mx-auto">
            <LeaderboardTable onExportClick={() => setIsExportModalOpen(true)} />
          </div>
        </div>

        {/* Right Drawer - Lottery Section */}
        <div 
          className={clsx(
            "fixed inset-y-0 right-0 z-50 w-[500px] bg-white border-l border-dashboard-border shadow-2xl transition-transform duration-500 ease-in-out transform",
            isLotteryDrawerOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-full flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-[32px] py-[24px] border-b border-dashboard-border bg-gray-50/50">
               <div className="flex items-center gap-[12px]">
                 <div className="w-[40px] h-[40px] rounded-[12px] bg-dashboard-dark flex items-center justify-center">
                    <Trophy size={20} className="text-dashboard-accent" />
                 </div>
                 <h2 className="text-[20px] font-bold text-dashboard-dark">Lottery Draw</h2>
               </div>
               <button 
                 onClick={() => setIsLotteryDrawerOpen(false)}
                 className="p-[8px] hover:bg-gray-200 rounded-full transition-colors"
               >
                 <X size={24} className="text-dashboard-gray" />
               </button>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-[32px] py-[32px] no-scrollbar">
               <LotterySection />
            </div>
          </div>
        </div>

        {/* Overlay for Drawer */}
        {isLotteryDrawerOpen && (
          <div 
            className="fixed inset-0 bg-dashboard-dark/20 backdrop-blur-[2px] z-40 transition-opacity" 
            onClick={() => setIsLotteryDrawerOpen(false)}
          />
        )}
      </div>

      {/* Export Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-[24px]">
          <div className="absolute inset-0 bg-dashboard-dark/40 backdrop-blur-sm" onClick={() => setIsExportModalOpen(false)} />
          <div className="relative w-[500px] bg-white rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-[32px] py-[24px] border-b border-dashboard-border">
              <h2 className="text-[20px] font-bold text-dashboard-dark">Export Leaderboard</h2>
              <button onClick={() => setIsExportModalOpen(false)} className="p-[8px] hover:bg-gray-100 rounded-full">
                <X size={20} className="text-dashboard-gray" />
              </button>
            </div>
            <div className="px-[32px] py-[32px] flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[12px]">
                <span className="text-[14px] font-bold text-dashboard-dark">Select export range</span>
                <div className="flex items-center gap-[12px]">
                  <input type="number" defaultValue={1} className="flex-1 px-[16px] py-[10px] border border-dashboard-border rounded-[10px] text-[14px]" />
                  <input type="number" defaultValue={100} className="flex-1 px-[16px] py-[10px] border border-dashboard-border rounded-[10px] text-[14px]" />
                </div>
              </div>
              <button className="w-full py-[12px] bg-dashboard-dark rounded-[12px] text-[14px] font-bold text-white">Download CSV</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
