"use client";

import React, { useRef } from "react";
import { Upload, X } from "lucide-react";
import clsx from "clsx";

interface Creative {
  url: string;
  name: string;
  size: string;
}

interface CreativeLibraryV2Props {
  creatives: Creative[];
  onUpload: (creative: Creative) => void;
  onRemove: (name: string) => void;
  assignments: Record<string, string>; // Maps day/position to bannerName
}

export function CreativeLibraryV2({ creatives, onUpload, onRemove, assignments }: CreativeLibraryV2Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload({
          url: reader.result as string,
          name: file.name,
          size: (file.size / 1024).toFixed(1) + " KB",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const getAssignedToText = (bannerName: string) => {
    const assignedKeys = Object.entries(assignments)
      .filter(([_, val]) => val === bannerName)
      .map(([key, _]) => key);

    if (assignedKeys.length === 0) return "Not assigned to any day";
    
    // Sort and format (simplified for now, ideally would group ranges)
    return `Assigned to: ${assignedKeys.join(", ")}`;
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col mb-[24px]">
        <h2 className="text-[16px] font-bold text-dashboard-dark">Creative Library</h2>
        <p className="text-[12px] text-dashboard-gray mt-[2px]">
          Upload all banner creatives here. Assign them to days on the left.
        </p>
      </div>

      {/* Upload Zone */}
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="h-[140px] border-2 border-dashed border-dashboard-border rounded-[16px] flex flex-col items-center justify-center gap-[8px] cursor-pointer hover:bg-gray-50 transition-colors mb-[24px]"
      >
        <Upload className="text-dashboard-gray" size={20} />
        <div className="flex flex-col items-center">
          <span className="text-[14px] font-semibold text-dashboard-dark">Upload banner creative</span>
          <span className="text-[12px] text-dashboard-gray">1080 × 300px. PNG or JPG.</span>
        </div>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
          accept="image/*"
        />
      </div>

      {/* Creative List */}
      <div className="flex flex-col gap-[20px] overflow-y-auto pr-[4px] flex-1 pb-[100px]">
        {creatives.map((creative) => (
          <div key={creative.name} className="flex flex-col gap-[8px] group">
            <div className="relative rounded-[12px] overflow-hidden border border-dashboard-border aspect-[1080/300] bg-gray-50">
              <img src={creative.url} alt={creative.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[6px] min-w-0">
                <span className="text-[13px] font-semibold text-dashboard-dark truncate">{creative.name}</span>
                <span className="text-[13px] text-dashboard-gray shrink-0">{creative.size}</span>
              </div>
              <button 
                onClick={() => onRemove(creative.name)}
                className="text-[12px] font-bold text-red-500 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
              >
                Remove
              </button>
            </div>
            <span className="text-[11px] font-medium text-dashboard-gray italic">
              {getAssignedToText(creative.name)}
            </span>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-[24px] bg-white border-t border-dashboard-border flex flex-col gap-[4px] text-[12px] font-medium text-dashboard-gray">
        <div className="flex justify-between">
          <span>Total creatives uploaded:</span>
          <span className="text-dashboard-dark font-bold">{creatives.length}</span>
        </div>
        <div className="flex justify-between">
          <span>Days with banner assigned:</span>
          <span className="text-dashboard-dark font-bold">
            {new Set(Object.keys(assignments)).size}
          </span>
        </div>
      </div>
    </div>
  );
}
