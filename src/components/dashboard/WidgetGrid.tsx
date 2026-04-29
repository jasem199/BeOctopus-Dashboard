import React from "react";
import { MetricCard } from "./MetricCard";
import { UserPlus, Sparkles, Target, MousePointerClick } from "lucide-react";
import { mockData } from "@/lib/mockData";

export function WidgetGrid() {
  const { signups, newSignups, predictions, clicks } = mockData.widgets;

  return (
    <div className="flex flex-row gap-[16px] w-full">
      <MetricCard
        title={signups.label}
        value={signups.total}
        trend={signups.trend}
        supportText={signups.supportText}
        icon={<UserPlus size={20} />}
        iconBgColor="var(--color-bg-green)"
        iconColor="var(--color-icon-green)"
      />
      <MetricCard
        title={newSignups.label}
        value={newSignups.total}
        trend={newSignups.trend}
        supportText={newSignups.supportText}
        icon={<Sparkles size={20} />}
        iconBgColor="var(--color-bg-yellow)"
        iconColor="var(--color-icon-yellow)"
      />
      <MetricCard
        title={predictions.label}
        value={predictions.total}
        trend={predictions.trend}
        supportText={predictions.supportText}
        icon={<Target size={20} />}
        iconBgColor="var(--color-bg-blue)"
        iconColor="var(--color-icon-blue)"
      />
      <MetricCard
        title={clicks.label}
        value={clicks.total}
        trend={clicks.trend}
        supportText={clicks.supportText}
        icon={<MousePointerClick size={20} />}
        iconBgColor="var(--color-bg-purple)"
        iconColor="var(--color-icon-purple)"
      />
    </div>
  );
}
