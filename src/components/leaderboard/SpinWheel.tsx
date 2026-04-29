"use client";

import React from "react";
import clsx from "clsx";

interface SpinWheelProps {
  isSpinning: boolean;
}

export function SpinWheel({ isSpinning }: SpinWheelProps) {
  // Symbolic segments
  const segments = Array.from({ length: 12 });

  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      {/* Pointer */}
      <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-dashboard-dark shadow-lg" />

      {/* Outer Glow */}
      <div className={clsx(
        "absolute inset-0 rounded-full transition-all duration-1000",
        isSpinning ? "bg-dashboard-accent/20 blur-2xl scale-110 animate-pulse" : "bg-transparent"
      )} />

      {/* The Wheel */}
      <div 
        className={clsx(
          "relative w-full h-full rounded-full border-8 border-dashboard-dark bg-white overflow-hidden shadow-2xl transition-all",
          isSpinning ? "animate-spin-wheel" : "rotate-0"
        )}
      >
        {segments.map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 left-1/2 w-1 h-1/2 origin-bottom bg-dashboard-border"
            style={{ transform: `translateX(-50%) rotate(${i * 30}deg)` }}
          >
            <div 
              className={clsx(
                "absolute top-0 left-[-60px] w-[120px] h-full origin-bottom flex flex-col items-center pt-[20px]",
                i % 2 === 0 ? "bg-gray-50/50" : "bg-white"
              )}
              style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
            >
               <span className="text-[10px] font-bold text-dashboard-gray mt-[20px] select-none">
                 P-{i + 1}
               </span>
            </div>
          </div>
        ))}

        {/* Center Point */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-dashboard-dark border-4 border-dashboard-accent shadow-inner flex items-center justify-center">
             <div className="w-[12px] h-[12px] rounded-full bg-white shadow-glow" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-wheel {
          0% { transform: rotate(0deg); animation-timing-function: ease-in; }
          20% { transform: rotate(1080deg); animation-timing-function: linear; }
          80% { transform: rotate(2880deg); animation-timing-function: ease-out; }
          100% { transform: rotate(3600deg); }
        }
        .animate-spin-wheel {
          animation: spin-wheel 5s infinite;
        }
        .shadow-glow {
          box-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(210,251,106,0.5);
        }
      `}</style>
    </div>
  );
}
