"use client";

import React, { useRef } from "react";
import { Upload, X, RefreshCw } from "lucide-react";
import clsx from "clsx";

interface BannerUploadProps {
  banner: { url: string; name: string; size: string } | null;
  setBanner: (banner: { url: string; name: string; size: string } | null) => void;
  label?: string;
  recommendedSize?: string;
}

export function BannerUpload({ banner, setBanner, label, recommendedSize = "1080 × 300px" }: BannerUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBanner({
          url: reader.result as string,
          name: file.name,
          size: (file.size / 1024).toFixed(1) + " KB",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {!banner ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="h-[180px] border-2 border-dashed border-dashboard-border rounded-[16px] flex flex-col items-center justify-center gap-[12px] cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="w-[48px] h-[48px] rounded-full bg-gray-50 flex items-center justify-center border border-dashboard-border">
            <Upload className="text-dashboard-gray" size={20} />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[14px] font-semibold text-dashboard-dark">Upload banner creative</span>
            <span className="text-[12px] text-dashboard-gray">Recommended size: {recommendedSize}. PNG or JPG.</span>
          </div>
          <button className="px-[16px] py-[6px] border border-dashboard-dark rounded-[8px] text-[12px] font-semibold text-dashboard-dark hover:bg-dashboard-dark hover:text-white transition-colors">
            Browse file
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-[12px]">
          <div className="relative w-full rounded-[16px] overflow-hidden border border-dashboard-border aspect-[1080/300]">
            <img src={banner.url} alt="Banner preview" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <span className="text-[14px] font-semibold text-dashboard-dark truncate max-w-[300px]">
                {banner.name}
              </span>
              <span className="text-[14px] text-dashboard-gray">—</span>
              <span className="text-[14px] text-dashboard-gray">{banner.size}</span>
            </div>
            <div className="flex items-center gap-[16px]">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="text-[12px] font-semibold text-dashboard-dark flex items-center gap-[4px] hover:underline"
              >
                <RefreshCw size={14} />
                Replace
              </button>
              <button 
                onClick={() => setBanner(null)}
                className="text-[12px] font-semibold text-red-500 flex items-center gap-[4px] hover:underline"
              >
                <X size={14} />
                Remove
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
