"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LayoutDashboard, Palette, ImagePlus, Trophy, User, MousePointer2, ShoppingBag } from "lucide-react";

const sidebarItems = [
  { name: "Overview", icon: LayoutDashboard, href: "/" },
  { name: "Branding", icon: Palette, href: "/branding" },
  { name: "Ad Banner Setup", icon: ImagePlus, href: "/ad-banner-setup" },
  { name: "Leaderboard", icon: Trophy, href: "/leaderboard" },
  { name: "User Data", icon: User, href: "/user-data" },
  { name: "Clicks", icon: MousePointer2, href: "/clicks" },
  { name: "Shop Management", icon: ShoppingBag, href: "/shop" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-[64px] left-0 w-[240px] h-[calc(100vh-64px)] bg-white border-r border-dashboard-border p-[24px] overflow-y-auto z-40">
      <nav className="flex flex-col gap-[4px]">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "h-[44px] px-[12px] rounded-[12px] flex items-center gap-[12px] text-[14px] font-semibold transition-colors",
                isActive
                  ? "bg-dashboard-accent text-dashboard-dark"
                  : "bg-transparent text-dashboard-gray hover:bg-gray-50 hover:text-dashboard-dark"
              )}
            >
              {item.icon && <item.icon size={20} className={isActive ? "text-dashboard-dark" : "text-dashboard-gray group-hover:text-dashboard-dark"} />}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
