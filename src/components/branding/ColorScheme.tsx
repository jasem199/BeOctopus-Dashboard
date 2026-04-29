"use client";

import React from "react";

interface ColorSchemeProps {
  accentColor: string;
  setAccentColor: (color: string) => void;
}

const presets = [
  { main: "#D2FB6A", sub: "#1A1A1A" }, // Default
  { main: "#3498DB", sub: "#F0F4FF" },
  { main: "#2ECC71", sub: "#F0FBF0" },
  { main: "#9B59B6", sub: "#F5F0FF" },
  { main: "#F39C12", sub: "#FFFBF0" },
  { main: "#E74C3C", sub: "#FDF0F0" },
  { main: "#1A1A1A", sub: "#F7F7F7" },
  { main: "#6366F1", sub: "#EEF2FF" },
];

export function ColorScheme({ accentColor, setAccentColor }: ColorSchemeProps) {
  return (
    <div className="flex flex-col gap-[12px]">
      <h2 className="text-[14px] font-bold text-dashboard-dark">Color Scheme</h2>
      
      <div className="bg-white p-[24px] border border-dashboard-border rounded-[16px] flex flex-col gap-[24px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold text-dashboard-dark">Primary Accent Color</span>
            <span className="text-[12px] text-dashboard-gray">Used for bottom Nav</span>
          </div>
          
          <div className="flex items-center gap-[12px]">
            <input 
              type="color" 
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-[40px] h-[40px] rounded-[8px] cursor-pointer border-none bg-transparent"
            />
            <input 
              type="text" 
              value={accentColor.toUpperCase()}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-[120px] h-[40px] px-[12px] border border-dashboard-border rounded-[8px] text-[14px] font-medium text-dashboard-dark uppercase focus:outline-none focus:border-dashboard-dark transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <span className="text-[12px] font-semibold text-dashboard-gray uppercase tracking-wider">Suggested Combinations</span>
          <div className="flex flex-wrap gap-[12px]">
            {presets.map((preset) => (
              <button
                key={preset.main}
                onClick={() => setAccentColor(preset.main)}
                className="w-[48px] h-[48px] rounded-[12px] border border-dashboard-border overflow-hidden flex flex-col hover:scale-105 transition-transform"
                title={`${preset.main} combo`}
              >
                <div className="flex-1 w-full" style={{ backgroundColor: preset.main }} />
                <div className="flex-1 w-full" style={{ backgroundColor: preset.sub }} />
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => setAccentColor("#D2FB6A")}
          className="text-[12px] text-dashboard-gray hover:text-dashboard-dark transition-colors self-start"
        >
          Reset to default
        </button>
      </div>
    </div>
  );
}
