"use client";

import React from "react";

export function SaveControls() {
  return (
    <div className="flex flex-col gap-[16px] mt-auto pt-[24px]">
      <div className="flex gap-[12px]">
        <button className="flex-1 px-[24px] py-[12px] border border-dashboard-dark rounded-[12px] text-[14px] font-bold text-dashboard-dark hover:bg-dashboard-dark hover:text-white transition-colors">
          Save Changes
        </button>
        <button className="flex-1 px-[24px] py-[12px] bg-dashboard-accent border border-dashboard-accent rounded-[12px] text-[14px] font-bold text-dashboard-dark hover:opacity-90 transition-opacity">
          Publish Live
        </button>
      </div>
      <span className="text-[12px] text-dashboard-gray">
        Last published: 29 April 2026 at 10:42 AM
      </span>
    </div>
  );
}
