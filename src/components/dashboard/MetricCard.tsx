import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import clsx from "clsx";

interface TrendProps {
  value: number;
  isPositive: boolean;
}

interface MetricCardProps {
  title: string;
  value: string | number;
  trend: TrendProps;
  supportText: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
}

export function MetricCard({
  title,
  value,
  trend,
  supportText,
  icon,
  iconBgColor,
  iconColor,
}: MetricCardProps) {
  // Trend pill styling based on whether it's positive or negative
  const trendBgColor = trend.isPositive ? "bg-bg-green" : "bg-red-50";
  const trendTextColor = trend.isPositive ? "text-icon-green" : "text-icon-red";
  const TrendIcon = trend.isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="bg-white rounded-[16px] p-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex flex-col w-full">
      {/* Row 1: Title and Icon */}
      <div className="flex justify-between items-center mb-[16px]">
        <div className="text-[14px] font-semibold text-dashboard-dark">
          {title}
        </div>
        <div
          className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: iconBgColor, color: iconColor }}
        >
          {icon}
        </div>
      </div>

      {/* Row 2: Number and Trend */}
      <div className="flex justify-between items-end">
        <div className="text-[32px] font-semibold text-dashboard-dark leading-none">
          {typeof value === "number" ? value.toLocaleString() : value}
        </div>
        <div
          className={clsx(
            "flex items-center gap-[2px] px-[6px] py-[2px] rounded-[6px] mb-[4px] shrink-0",
            trendBgColor,
            trendTextColor
          )}
        >
          <TrendIcon size={10} strokeWidth={3} />
          <span className="text-[12px] font-semibold">
            {trend.isPositive ? "+" : ""}
            {trend.value}%
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-dashboard-border my-[12px]"></div>

      {/* Supporting Text */}
      <div className="text-[12px] font-normal text-dashboard-gray">
        {supportText}
      </div>
    </div>
  );
}
