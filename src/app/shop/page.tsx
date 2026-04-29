"use client";

import React from "react";
import { ShoppingBag, Package, Tag, Clock } from "lucide-react";

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dashboard-bg">
      {/* Header */}
      <div className="bg-white border-b border-dashboard-border px-[32px] py-[32px] shrink-0">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[28px] font-bold text-dashboard-dark">Shop Management</h1>
            <p className="text-[14px] text-dashboard-gray mt-[4px]">
              Manage your product catalog, pricing, and inventory.
            </p>
          </div>
          
          <div className="w-[48px] h-[48px] rounded-[16px] bg-dashboard-dark flex items-center justify-center shadow-lg">
             <ShoppingBag size={24} className="text-dashboard-accent" />
          </div>
        </div>
      </div>

      {/* Placeholder Content */}
      <div className="flex-1 overflow-y-auto px-[32px] py-[32px] no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center py-[100px] gap-[24px] bg-white border border-dashed border-dashboard-border rounded-[24px]">
          <div className="w-[80px] h-[80px] rounded-full bg-gray-50 flex items-center justify-center">
             <Package size={40} className="text-dashboard-gray opacity-20" />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[20px] font-bold text-dashboard-dark">Shop Module Under Construction</h2>
            <p className="text-[14px] text-dashboard-gray mt-[8px] max-w-[400px]">
              We're currently building the inventory and order management system. Check back soon for full catalog control.
            </p>
          </div>
          <div className="flex gap-[16px]">
             <div className="px-[16px] py-[8px] bg-gray-100 rounded-[12px] flex items-center gap-[8px] text-[12px] font-bold text-dashboard-gray">
                <Tag size={14} />
                Products
             </div>
             <div className="px-[16px] py-[8px] bg-gray-100 rounded-[12px] flex items-center gap-[8px] text-[12px] font-bold text-dashboard-gray">
                <Clock size={14} />
                Orders
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
