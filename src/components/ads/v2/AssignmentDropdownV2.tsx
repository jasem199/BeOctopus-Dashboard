"use client";

import React, { useState } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import clsx from "clsx";

interface Creative {
  url: string;
  name: string;
}

interface AssignmentDropdownV2Props {
  label: string;
  creatives: Creative[];
  selectedBanners: string[]; // pending selections
  assignedBanners: string[]; // already assigned
  onToggle: (bannerName: string) => void;
  onRemove: (bannerName: string) => void;
  onAssign: () => void;
  supportingNote?: string;
}

export function AssignmentDropdownV2({ 
  label, 
  creatives, 
  selectedBanners, 
  assignedBanners,
  onToggle, 
  onRemove,
  onAssign,
  supportingNote 
}: AssignmentDropdownV2Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Combine both for the preview strip, but only assigned ones can be "removed" from the day
  // Actually, user wants to delete from the thumbnail area.
  
  return (
    <div className="flex flex-col gap-[16px] bg-white border border-dashboard-border rounded-[20px] p-[20px]">
      <h3 className="text-[12px] font-bold text-dashboard-dark uppercase tracking-wider">{label}</h3>
      
      <div className="relative">
        <label className="text-[11px] font-bold text-dashboard-gray uppercase tracking-wider block mb-[6px]">Select banners</label>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-[16px] py-[10px] border border-dashboard-border rounded-[10px] text-[13px] font-medium text-dashboard-dark bg-white hover:border-dashboard-gray transition-colors"
        >
          <span className="truncate">
            {selectedBanners.length === 0 
              ? "No banner selected" 
              : `${selectedBanners.length} banner(s) selected`}
          </span>
          <ChevronDown size={16} className={clsx("transition-transform", isOpen && "rotate-180")} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-[4px] bg-white border border-dashboard-border rounded-[10px] shadow-lg z-20 max-h-[200px] overflow-y-auto p-[6px] flex flex-col gap-[2px]">
            {creatives.map((c) => {
              const isSelected = selectedBanners.includes(c.name);
              const isAlreadyAssigned = assignedBanners.includes(c.name);
              
              return (
                <button
                  key={c.name}
                  onClick={() => onToggle(c.name)}
                  className={clsx(
                    "flex items-center gap-[10px] px-[12px] py-[8px] rounded-[6px] text-left transition-colors",
                    isSelected ? "bg-dashboard-accent/10 text-dashboard-dark" : "hover:bg-gray-50 text-dashboard-gray"
                  )}
                >
                  <div className={clsx(
                    "w-[16px] h-[16px] rounded border flex items-center justify-center transition-colors",
                    isSelected ? "bg-dashboard-dark border-dashboard-dark" : "border-dashboard-border bg-white"
                  )}>
                    {isSelected && <Check size={12} className="text-white" />}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-medium truncate">{c.name}</span>
                    {isAlreadyAssigned && (
                      <span className="text-[10px] text-green-600 font-bold uppercase">Already Assigned</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Preview Strip - Shows Assigned Banners */}
      <div className="flex flex-col gap-[8px]">
        <span className="text-[11px] font-bold text-dashboard-gray uppercase tracking-wider">Current Assignments</span>
        <div className="flex flex-wrap gap-[12px]">
          {assignedBanners.map(name => {
            const c = creatives.find(x => x.name === name);
            if (!c) return null;
            return (
              <div key={name} className="relative group">
                <div className="w-[80px] aspect-[1080/300] rounded-[6px] overflow-hidden border border-dashboard-border bg-gray-50">
                  <img src={c.url} alt={name} className="w-full h-full object-cover" />
                </div>
                <button 
                  onClick={() => onRemove(name)}
                  className="absolute -top-[6px] -right-[6px] w-[20px] h-[20px] bg-red-500 text-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={12} />
                </button>
                <div className="mt-[2px] text-[9px] text-dashboard-gray font-medium truncate max-w-[80px] text-center">
                  {name}
                </div>
              </div>
            );
          })}
          {assignedBanners.length === 0 && (
            <div className="text-[12px] text-dashboard-gray italic py-[8px]">No banners assigned yet.</div>
          )}
        </div>
      </div>

      {supportingNote && (
        <p className="text-[11px] text-dashboard-gray italic">{supportingNote}</p>
      )}

      <button 
        onClick={() => { onAssign(); setIsOpen(false); }}
        disabled={selectedBanners.length === 0}
        className="w-full py-[10px] border border-dashboard-dark rounded-[10px] text-[13px] font-bold text-dashboard-dark hover:bg-dashboard-dark hover:text-white transition-colors uppercase tracking-wider disabled:opacity-50 disabled:pointer-events-none"
      >
        Assign Selected {selectedBanners.length > 0 ? `(${selectedBanners.length})` : ""}
      </button>
    </div>
  );
}
