"use client";

import React, { useState } from "react";
import { SpinWheel } from "./SpinWheel";
import { leaderboardParticipants, getCountryFlag, Participant } from "@/lib/leaderboardMockData";
import { Download, RefreshCw } from "lucide-react";
import clsx from "clsx";

export function LotterySection() {
  const [fromRank, setFromRank] = useState(1);
  const [toRank, setToRank] = useState(10);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<Participant | null>(null);
  const [history, setHistory] = useState<any[]>([]);

  const poolSize = Math.max(0, toRank - fromRank + 1);

  const handleSpin = () => {
    if (poolSize <= 0) return;
    
    setIsSpinning(true);
    setWinner(null);

    // Simulate 5 seconds spin
    setTimeout(() => {
      const pool = leaderboardParticipants.filter(p => p.rank >= fromRank && p.rank <= toRank);
      const actualWinner = pool.length > 0 
        ? pool[Math.floor(Math.random() * pool.length)] 
        : leaderboardParticipants[Math.floor(Math.random() * leaderboardParticipants.length)];

      setWinner(actualWinner);
      setIsSpinning(false);
      
      const newEntry = {
        id: history.length + 1,
        name: actualWinner.displayName,
        rank: actualWinner.rank,
        points: actualWinner.points,
        range: `Rank ${fromRank}-${toRank}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setHistory([newEntry, ...history]);
    }, 5000);
  };

  const resetWheel = () => {
    setWinner(null);
  };

  return (
    <div className="flex flex-col gap-[32px] pb-[48px]">
      <div className="flex flex-col">
        <h2 className="text-[18px] font-bold text-dashboard-dark uppercase tracking-wider">Lottery Draw</h2>
        <p className="text-[13px] text-dashboard-gray mt-[4px]">
          Define a range and spin to pick a winner.
        </p>
      </div>

      {/* Range Selector */}
      <div className="bg-white border border-dashboard-border rounded-[24px] p-[32px] flex flex-col gap-[20px]">
        <div className="flex items-center gap-[16px]">
          <span className="text-[14px] font-bold text-dashboard-dark whitespace-nowrap">Pick winner from rank</span>
          <div className="flex items-center gap-[8px]">
            <input 
              type="number" 
              value={fromRank}
              onChange={(e) => setFromRank(Number(e.target.value))}
              className="w-[80px] px-[12px] py-[10px] border border-dashboard-border rounded-[10px] text-[14px] font-bold focus:outline-none focus:border-dashboard-dark"
            />
            <span className="text-dashboard-gray font-medium">to</span>
            <input 
              type="number" 
              value={toRank}
              onChange={(e) => setToRank(Number(e.target.value))}
              className="w-[80px] px-[12px] py-[10px] border border-dashboard-border rounded-[10px] text-[14px] font-bold focus:outline-none focus:border-dashboard-dark"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="text-[12px] text-dashboard-gray">
            The wheel will randomly select one participant from within this rank range.
          </p>
          <p className="text-[14px] font-bold text-dashboard-dark">
            Pool size: <span className="text-dashboard-accent bg-dashboard-dark px-[8px] py-[2px] rounded-[6px] ml-[4px]">{poolSize} participants</span>
          </p>
        </div>
      </div>

      {/* Wheel Area */}
      <div className="flex flex-col items-center gap-[40px]">
        <SpinWheel isSpinning={isSpinning} />
        
        <div className="w-[300px] flex flex-col items-center gap-[12px]">
          <button 
            onClick={handleSpin}
            disabled={isSpinning || poolSize <= 0}
            className={clsx(
              "w-full py-[16px] rounded-[16px] text-[16px] font-black uppercase tracking-widest transition-all shadow-lg",
              isSpinning 
                ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                : "bg-dashboard-dark text-white hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            {isSpinning ? "Selecting..." : "Spin Now"}
          </button>
          <p className="text-[11px] text-dashboard-gray font-bold text-center uppercase tracking-wider">
            Results are randomly selected from the defined rank range.
          </p>
        </div>

        {/* Result Card */}
        {winner && (
          <div className="w-[400px] bg-white border-2 border-dashboard-accent rounded-[24px] p-[32px] shadow-2xl animate-in slide-in-from-bottom-8 fade-in duration-500 flex flex-col gap-[24px]">
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-bold text-dashboard-gray uppercase tracking-widest">Winner Selected</span>
              <span className="text-[48px] font-black text-dashboard-dark mt-[8px]">#{winner.rank}</span>
              <h3 className="text-[24px] font-bold text-dashboard-dark mt-[4px]">{winner.displayName}</h3>
              <div className="flex items-center gap-[8px] mt-[8px] px-[12px] py-[6px] bg-gray-50 rounded-full">
                <span className="text-[16px]">{getCountryFlag(winner.country)}</span>
                <span className="text-[14px] font-bold text-dashboard-gray uppercase">{winner.country}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[12px]">
              <div className="bg-gray-50 p-[16px] rounded-[16px] flex flex-col items-center">
                <span className="text-[10px] font-bold text-dashboard-gray uppercase tracking-wider">Total Points</span>
                <span className="text-[18px] font-black text-dashboard-dark">{winner.points.toLocaleString()}</span>
              </div>
              <div className="bg-gray-50 p-[16px] rounded-[16px] flex flex-col items-center">
                <span className="text-[10px] font-bold text-dashboard-gray uppercase tracking-wider">Predictions</span>
                <span className="text-[18px] font-black text-dashboard-dark">{winner.predictions}</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-[4px] py-[12px] border-y border-dashboard-border border-dashed">
               <span className="text-[10px] font-bold text-dashboard-gray uppercase">Contact Email</span>
               <span className="text-[14px] font-medium text-dashboard-dark">{winner.email}</span>
            </div>

            <div className="grid grid-cols-2 gap-[16px]">
              <button 
                onClick={resetWheel}
                className="flex items-center justify-center gap-[8px] py-[12px] border border-dashboard-dark rounded-[12px] text-[14px] font-bold text-dashboard-dark hover:bg-gray-50 transition-all"
              >
                <RefreshCw size={16} />
                Re-spin
              </button>
              <button className="flex items-center justify-center gap-[8px] py-[12px] bg-dashboard-dark rounded-[12px] text-[14px] font-bold text-white hover:bg-opacity-90 transition-all">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        )}
      </div>

      {/* History */}
      <div className="flex flex-col gap-[20px] mt-[48px]">
        <div className="flex flex-col">
          <h2 className="text-[18px] font-bold text-dashboard-dark">Spin History</h2>
          <p className="text-[13px] text-dashboard-gray">A record of all winners drawn in this session.</p>
        </div>

        <div className="flex flex-col gap-[12px]">
          {history.length > 0 ? (
            history.map((entry) => (
              <div key={entry.id} className="bg-white border border-dashboard-border rounded-[16px] p-[20px] flex items-center justify-between group hover:border-dashboard-gray transition-colors">
                <div className="flex items-center gap-[24px]">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-dashboard-gray uppercase">Draw #{entry.id}</span>
                    <span className="text-[13px] text-dashboard-gray">{entry.timestamp}</span>
                  </div>
                  <div className="h-[32px] w-[1px] bg-dashboard-border" />
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold text-dashboard-dark">{entry.name}</span>
                    <span className="text-[12px] text-dashboard-gray">Rank #{entry.rank} • {entry.points.toLocaleString()} pts</span>
                  </div>
                  <div className="h-[32px] w-[1px] bg-dashboard-border" />
                  <span className="text-[12px] text-dashboard-gray font-medium italic">{entry.range}</span>
                </div>
                <button className="text-[13px] font-bold text-dashboard-dark hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                  Export
                </button>
              </div>
            ))
          ) : (
            <div className="bg-gray-50 border border-dashed border-dashboard-border rounded-[16px] py-[48px] text-center">
              <p className="text-[14px] text-dashboard-gray italic">No draws yet. Set a range and spin to select a winner.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
