import React from "react";

export function TopNav() {
  const currentDate = "29 April 2026"; // Hardcoded as per spec example

  return (
    <header className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-dashboard-border flex items-center justify-between px-[32px] z-50">
      <div className="flex items-center h-full">
        {/* Placeholder for Brand Logo */}
        <div className="h-[32px] flex items-center font-bold text-lg tracking-tight text-dashboard-dark">
          Be octopus
        </div>
      </div>

      <div className="flex items-center gap-[16px]">
        <span className="text-[13px] font-normal text-dashboard-gray">
          {currentDate}
        </span>
        <div className="w-[36px] h-[36px] rounded-full bg-dashboard-accent flex items-center justify-center text-[14px] font-semibold text-dashboard-dark shadow-sm">
          JD
        </div>
      </div>
    </header>
  );
}
