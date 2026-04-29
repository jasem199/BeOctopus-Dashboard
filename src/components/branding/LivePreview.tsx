"use client";

import React from "react";

interface LivePreviewProps {
  logo: { url: string; name: string; size: string } | null;
  accentColor: string;
}

export function LivePreview({ logo, accentColor }: LivePreviewProps) {
  return (
    <div className="sticky top-[88px] flex flex-col items-center gap-[12px]">
      <span className="text-[12px] font-semibold text-dashboard-gray uppercase tracking-wider">
        Live Preview
      </span>

      {/* Mobile Device Frame */}
      <div className="w-[280px] h-[560px] bg-[#1A1A1A] rounded-[40px] p-[12px] shadow-[0_24px_48px_rgba(0,0,0,0.15)] relative overflow-hidden ring-8 ring-gray-800">
        {/* Notch */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-[#1A1A1A] rounded-b-[16px] z-20" />

        {/* Screen Area */}
        <div className="w-full h-full bg-white rounded-[28px] relative overflow-hidden flex flex-col">
          {/* Header Area */}
          <div className="h-[60px] border-b border-dashboard-border flex items-center justify-center px-[16px]">
            {logo ? (
              <div className="w-[32px] h-[32px] rounded-full overflow-hidden border border-dashboard-border">
                <img src={logo.url} alt="Logo" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-[32px] h-[32px] bg-gray-100 rounded-full" />
            )}
          </div>

          {/* Content area - intentionally empty */}
          <div className="flex-1 p-[16px] flex flex-col gap-[16px]">
            <div className="h-[120px] w-full bg-gray-50 rounded-[16px]" />
            <div className="h-[40px] w-[60%] bg-gray-50 rounded-[8px]" />
            <div className="h-[40px] w-[80%] bg-gray-50 rounded-[8px]" />
          </div>

          {/* Bottom Nav - reactive to accent color */}
          <div 
            className="h-[64px] w-full flex items-center justify-around px-[12px]"
            style={{ backgroundColor: accentColor }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-[24px] h-[24px] rounded-full bg-dashboard-dark opacity-20" 
              />
            ))}
          </div>
        </div>
      </div>

      <span className="text-[12px] text-dashboard-gray">
        Preview updates as you make changes
      </span>
    </div>
  );
}
