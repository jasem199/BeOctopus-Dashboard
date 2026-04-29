"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { mockData } from "@/lib/mockData";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ScriptableContext,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

type Filter = "7 Days" | "30 Days" | "All Time";
const filters: Filter[] = ["7 Days", "30 Days", "All Time"];

export function SignupGraph() {
  const [activeFilter, setActiveFilter] = useState<Filter>("7 Days");
  const { labels, data: chartData, highestDay } = mockData.signupGraph;

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        borderColor: "#D2FB6A",
        borderWidth: 2.5,
        tension: 0.4, // Smooth curve
        fill: true,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(210, 251, 106, 0.2)"); // #D2FB6A 20%
          gradient.addColorStop(1, "rgba(210, 251, 106, 0)"); // Transparent
          return gradient;
        },
        pointBackgroundColor: "#D2FB6A",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 0, // Hidden by default
        pointHoverRadius: 5, // Visible on hover
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#FFFFFF",
        titleColor: "#9A9A9A",
        titleFont: { size: 12, weight: "normal" as const, family: "var(--font-sans)" },
        bodyColor: "#1A1A1A",
        bodyFont: { size: 14, weight: "bold" as const, family: "var(--font-sans)" },
        borderColor: "rgba(0,0,0,0.06)",
        borderWidth: 1,
        padding: { top: 8, right: 12, bottom: 8, left: 12 },
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          title: (tooltipItems: any) => tooltipItems[0].label,
          label: (context: any) => `${context.parsed.y.toLocaleString()} signups`,
        },
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false, // Updated to new ChartJS 4.x syntax? actually display: false removes all. 
        },
        border: { display: false },
        ticks: {
          color: "#9A9A9A",
          font: { size: 12, family: "var(--font-sans)" },
        },
      },
      y: {
        border: { display: false },
        grid: {
          color: "rgba(0,0,0,0.06)",
          lineWidth: 1,
          borderDash: [5, 5],
          drawTicks: false,
        },
        ticks: {
          color: "#9A9A9A",
          font: { size: 12, family: "var(--font-sans)" },
          padding: 8,
          maxTicksLimit: 6,
        },
        beginAtZero: true,
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
  };

  return (
    <div className="bg-white rounded-[16px] p-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-[8px]">
        <h2 className="text-[16px] font-semibold text-dashboard-dark">
          Signup Growth
        </h2>
        <div className="flex gap-[8px]">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                "px-[12px] py-[4px] rounded-[20px] text-[12px] font-semibold transition-colors",
                activeFilter === filter
                  ? "bg-dashboard-accent text-dashboard-dark"
                  : "bg-transparent text-dashboard-gray hover:bg-gray-50"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Chart area */}
      <div className="flex-grow w-full min-h-[280px] relative mt-[8px]">
        <Line data={data} options={options} />
      </div>

      {/* Bottom text */}
      <div className="mt-[8px] text-center text-[12px] text-dashboard-gray">
        Highest day: <span className="font-semibold text-dashboard-dark">1,240</span> signups on <span className="font-semibold text-dashboard-dark">14 June</span>
      </div>
    </div>
  );
}
