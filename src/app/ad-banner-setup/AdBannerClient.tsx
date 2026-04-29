"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { HorizontalDateStrip } from "@/components/ads/v2/HorizontalDateStrip";
import { CompactMatchList } from "@/components/ads/v2/CompactMatchList";
import { MatchdaySummaryTable } from "@/components/ads/v2/MatchdaySummaryTable";
import { PositionSelector } from "@/components/ads/v2/PositionSelector";
import { CreativeLibraryV2 } from "@/components/ads/v2/CreativeLibraryV2";
import { AssignmentDropdownV2 } from "@/components/ads/v2/AssignmentDropdownV2";
import { SaveControls } from "@/components/branding/SaveControls";
import { tournamentDays } from "@/lib/adBannerMockData";

type Tab = "Matchday Banner" | "Leaderboard Banner";

interface Creative {
  url: string;
  name: string;
  size: string;
}

interface Assignment {
  bannerName: string;
  status: "Active" | "Paused";
}

export function AdBannerV2Client() {
  const [activeTab, setActiveTab] = useState<Tab>("Matchday Banner");
  
  // State for Matchday Tab
  const [selectedDay, setSelectedDay] = useState(tournamentDays[0].fullDate);
  const [isRangeMode, setIsRangeMode] = useState(false);
  const [rangeStart, setRangeStart] = useState<string | null>(null);
  const [rangeEnd, setRangeEnd] = useState<string | null>(null);
  const [matchdayCreatives, setMatchdayCreatives] = useState<Creative[]>([]);
  const [matchdayAssignments, setMatchdayAssignments] = useState<Record<string, Assignment[]>>({});
  const [selectedMatchdayBanners, setSelectedMatchdayBanners] = useState<string[]>([]);

  // State for Leaderboard Tab
  const [selectedPosition, setSelectedPosition] = useState("top");
  const [leaderboardCreatives, setLeaderboardCreatives] = useState<Creative[]>([]);
  const [leaderboardAssignments, setLeaderboardAssignments] = useState<Record<string, Assignment[]>>({});
  const [selectedLeaderboardBanners, setSelectedLeaderboardBanners] = useState<string[]>([]);
  const [leaderboardStatus, setLeaderboardStatus] = useState<"Active" | "Paused">("Active");

  // Helper: Get range days
  const getRangeDays = (start: string, end: string) => {
    const startIndex = tournamentDays.findIndex(d => d.fullDate === start);
    const endIndex = tournamentDays.findIndex(d => d.fullDate === end);
    const min = Math.min(startIndex, endIndex);
    const max = Math.max(startIndex, endIndex);
    return tournamentDays.slice(min, max + 1).map(d => d.fullDate);
  };

  const handleRangeSelect = (day: string) => {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(day);
      setRangeEnd(null);
    } else {
      setRangeEnd(day);
    }
  };

  const toggleMatchdayBannerSelect = (name: string) => {
    setSelectedMatchdayBanners(prev => 
      prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]
    );
  };

  const toggleLeaderboardBannerSelect = (name: string) => {
    setSelectedLeaderboardBanners(prev => 
      prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]
    );
  };

  const assignMatchdayBanner = () => {
    if (selectedMatchdayBanners.length === 0) return;

    if (isRangeMode && rangeStart && rangeEnd) {
      const days = getRangeDays(rangeStart, rangeEnd);
      const newAssignments = { ...matchdayAssignments };
      days.forEach(d => {
        const existing = newAssignments[d] || [];
        selectedMatchdayBanners.forEach(name => {
          if (!existing.some(a => a.bannerName === name)) {
            existing.push({ bannerName: name, status: "Active" });
          }
        });
        newAssignments[d] = [...existing];
      });
      setMatchdayAssignments(newAssignments);
      setIsRangeMode(false);
      setRangeStart(null);
      setRangeEnd(null);
      setSelectedMatchdayBanners([]);
    } else if (!isRangeMode) {
      const existing = [...(matchdayAssignments[selectedDay] || [])];
      selectedMatchdayBanners.forEach(name => {
        if (!existing.some(a => a.bannerName === name)) {
          existing.push({ bannerName: name, status: "Active" });
        }
      });
      setMatchdayAssignments({
        ...matchdayAssignments,
        [selectedDay]: existing
      });
      setSelectedMatchdayBanners([]);
    }
  };

  const assignLeaderboardBanner = () => {
    if (selectedLeaderboardBanners.length === 0) return;
    const existing = [...(leaderboardAssignments[selectedPosition] || [])];
    selectedLeaderboardBanners.forEach(name => {
      if (!existing.some(a => a.bannerName === name)) {
        existing.push({ bannerName: name, status: leaderboardStatus });
      }
    });
    setLeaderboardAssignments({
      ...leaderboardAssignments,
      [selectedPosition]: existing
    });
    setSelectedLeaderboardBanners([]);
  };

  const toggleMatchdayStatus = (day: string, bannerName: string) => {
    const existing = matchdayAssignments[day] || [];
    setMatchdayAssignments({
      ...matchdayAssignments,
      [day]: existing.map(a => a.bannerName === bannerName ? { ...a, status: a.status === "Active" ? "Paused" : "Active" } : a)
    });
  };

  const removeMatchdayBanner = (day: string, bannerName: string) => {
    const existing = matchdayAssignments[day] || [];
    setMatchdayAssignments({
      ...matchdayAssignments,
      [day]: existing.filter(a => a.bannerName !== bannerName)
    });
  };

  const toggleLeaderboardStatus = (pos: string, bannerName: string) => {
    const existing = leaderboardAssignments[pos] || [];
    setLeaderboardAssignments({
      ...leaderboardAssignments,
      [pos]: existing.map(a => a.bannerName === bannerName ? { ...a, status: a.status === "Active" ? "Paused" : "Active" } : a)
    });
  };

  const removeLeaderboardBanner = (pos: string, bannerName: string) => {
    const existing = leaderboardAssignments[pos] || [];
    setLeaderboardAssignments({
      ...leaderboardAssignments,
      [pos]: existing.filter(a => a.bannerName !== bannerName)
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-dashboard-bg pb-[60px]">
      {/* Header & Tabs */}
      <div className="bg-white border-b border-dashboard-border px-[32px] pt-[20px]">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-[22px] font-bold text-dashboard-dark">Ad Banner Setup</h1>
          <p className="text-[13px] text-dashboard-gray mt-[2px]">
            Manage and schedule your ad banners across the app.
          </p>

          <div className="flex gap-[28px] mt-[16px]">
            {(["Matchday Banner", "Leaderboard Banner"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "pb-[10px] text-[13px] font-bold transition-all border-b-[2px]",
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

      {/* Main Content - Two Column Layout */}
      <div className="max-w-[1280px] mx-auto px-[32px] py-[24px] grid grid-cols-[1fr_400px] gap-[24px] flex-1 overflow-hidden h-[calc(100vh-140px)]">
        
        {/* Left Column - Assignment Controls */}
        <div className="overflow-y-auto pr-[8px] no-scrollbar flex flex-col gap-[24px]">
          {activeTab === "Matchday Banner" ? (
            <>
              <HorizontalDateStrip 
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                assignedDays={Object.keys(matchdayAssignments)}
                isRangeMode={isRangeMode}
                setIsRangeMode={setIsRangeMode}
                rangeStart={rangeStart}
                rangeEnd={rangeEnd}
                onRangeSelect={handleRangeSelect}
              />

              <CompactMatchList selectedDay={selectedDay} />

              <AssignmentDropdownV2 
                label={isRangeMode && rangeStart && rangeEnd ? `Assign Banners for ${rangeStart.split(' ')[0]}-${rangeEnd.split(' ')[0]} ${rangeEnd.split(' ')[1]}` : `Assign Banners for ${selectedDay.split(' ')[0]} ${selectedDay.split(' ')[1]}`}
                creatives={matchdayCreatives}
                selectedBanners={selectedMatchdayBanners}
                assignedBanners={(matchdayAssignments[selectedDay] || []).map(a => a.bannerName)}
                onToggle={toggleMatchdayBannerSelect}
                onRemove={(name) => removeMatchdayBanner(selectedDay, name)}
                onAssign={assignMatchdayBanner}
                supportingNote={isRangeMode ? "This will add all selected banners to the range." : "You can assign multiple banners to a single day."}
              />

              <MatchdaySummaryTable 
                assignments={matchdayAssignments}
                onRowClick={(d) => {
                  setSelectedDay(d);
                  setIsRangeMode(false);
                }}
                onStatusToggle={toggleMatchdayStatus}
                onRemove={removeMatchdayBanner}
              />
            </>
          ) : (
            <>
              <PositionSelector 
                selectedPosition={selectedPosition}
                setSelectedPosition={setSelectedPosition}
                assignments={Object.fromEntries(
                  Object.entries(leaderboardAssignments).map(([key, val]) => [key, val[0] || null])
                )}
              />

              <div className="flex flex-col gap-[20px]">
                <AssignmentDropdownV2 
                  label={`Assign Banners for ${selectedPosition.replace("after", "After ")}`}
                  creatives={leaderboardCreatives}
                  selectedBanners={selectedLeaderboardBanners}
                  assignedBanners={(leaderboardAssignments[selectedPosition] || []).map(a => a.bannerName)}
                  onToggle={toggleLeaderboardBannerSelect}
                  onRemove={(name) => removeLeaderboardBanner(selectedPosition, name)}
                  onAssign={assignLeaderboardBanner}
                  supportingNote="Select one or more banners to assign to this position."
                />
                
                <div className="bg-white border border-dashboard-border rounded-[20px] p-[20px] flex flex-col gap-[12px]">
                  <h3 className="text-[12px] font-bold text-dashboard-gray uppercase tracking-wider">Default Status for New Assignments</h3>
                  <div className="flex bg-gray-50 p-[4px] rounded-[10px] w-fit">
                    {["Active", "Paused"].map((s) => (
                      <button
                        key={s}
                        onClick={() => setLeaderboardStatus(s as any)}
                        className={clsx(
                          "px-[14px] py-[6px] rounded-[6px] text-[12px] font-semibold transition-all",
                          leaderboardStatus === s 
                            ? "bg-white text-dashboard-dark shadow-sm" 
                            : "text-dashboard-gray hover:text-dashboard-dark"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Leaderboard Summary Table */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="text-[13px] font-bold text-dashboard-dark uppercase tracking-wider">All Positions Summary</h3>
                <div className="bg-white border border-dashboard-border rounded-[16px] overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-dashboard-border">
                        <th className="px-[20px] py-[12px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Position</th>
                        <th className="px-[20px] py-[12px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Banners</th>
                        <th className="px-[20px] py-[12px] text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Status/Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {["top", "after10", "after15", "after20"].map((id) => {
                        const list = leaderboardAssignments[id] || [];
                        return (
                          <tr 
                            key={id} 
                            onClick={() => setSelectedPosition(id)}
                            className="border-b border-dashboard-border last:border-none hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            <td className="px-[20px] py-[12px] text-[13px] font-bold text-dashboard-dark capitalize align-top">{id.replace("after", "After ")}</td>
                            <td className="px-[20px] py-[12px] align-top">
                              {list.length > 0 ? (
                                <div className="flex flex-col gap-[4px]">
                                  {list.map((a) => (
                                    <div key={a.bannerName} className="text-[13px] text-dashboard-dark font-medium">{a.bannerName}</div>
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
                                        onClick={(e) => { e.stopPropagation(); toggleLeaderboardStatus(id, a.bannerName); }}
                                        className={clsx(
                                          "px-[8px] py-[2px] rounded-[12px] text-[10px] font-bold",
                                          a.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                                        )}
                                      >
                                        {a.status}
                                      </button>
                                      <button
                                        onClick={(e) => { e.stopPropagation(); removeLeaderboardBanner(id, a.bannerName); }}
                                        className="text-red-500 hover:text-red-700 transition-colors"
                                      >
                                        <X size={14} />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              ) : "—"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Column - Creative Library (Sticky/Fixed) */}
        <div className="bg-white border border-dashboard-border rounded-[24px] p-[20px] relative flex flex-col h-full overflow-hidden">
          <CreativeLibraryV2 
            creatives={activeTab === "Matchday Banner" ? matchdayCreatives : leaderboardCreatives}
            onUpload={(c) => {
              if (activeTab === "Matchday Banner") setMatchdayCreatives([...matchdayCreatives, c]);
              else setLeaderboardCreatives([...leaderboardCreatives, c]);
            }}
            onRemove={(name) => {
              if (activeTab === "Matchday Banner") setMatchdayCreatives(matchdayCreatives.filter(c => c.name !== name));
              else setLeaderboardCreatives(leaderboardCreatives.filter(c => c.name !== name));
            }}
            assignments={Object.fromEntries(
              Object.entries(activeTab === "Matchday Banner" ? matchdayAssignments : leaderboardAssignments)
                .map(([key, val]) => [key, (val as any[]).map(a => a.bannerName).join(", ")])
            )}
          />
        </div>
      </div>

      {/* Save Controls - Fixed Bottom (Compact) */}
      <div className="fixed bottom-0 left-[240px] right-0 bg-white border-t border-dashboard-border py-[12px] px-[32px] z-50">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-dashboard-gray font-bold uppercase tracking-wider">Unsaved changes</span>
            <span className="text-[12px] text-dashboard-dark font-medium italic">Click publish to go live</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <button className="px-[16px] py-[8px] border border-dashboard-dark rounded-[10px] text-[12px] font-bold text-dashboard-dark hover:bg-gray-50 transition-colors">
              Save Changes
            </button>
            <button className="px-[24px] py-[8px] bg-dashboard-dark border border-dashboard-dark rounded-[10px] text-[12px] font-bold text-white hover:bg-opacity-90 transition-all shadow-sm">
              Publish Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
