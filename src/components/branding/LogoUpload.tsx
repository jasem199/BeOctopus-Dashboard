"use client";

import React, { useRef } from "react";
import { Upload, X } from "lucide-react";

interface LogoUploadProps {
  logo: { url: string; name: string; size: string } | null;
  setLogo: (logo: { url: string; name: string; size: string } | null) => void;
}

export function LogoUpload({ logo, setLogo }: LogoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo({
          url: reader.result as string,
          name: file.name,
          size: (file.size / 1024).toFixed(1) + " KB",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-[12px]">
      <h2 className="text-[14px] font-bold text-dashboard-dark">Logo</h2>
      
      {!logo ? (
        <div className="flex items-center gap-[24px]">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-[96px] h-[96px] border-2 border-dashed border-gray-300 rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
          >
            <Upload className="text-dashboard-gray" size={20} />
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-[14px] font-semibold text-dashboard-dark">Upload your logo</span>
            <span className="text-[12px] text-dashboard-gray">PNG or SVG recommended</span>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="mt-[8px] px-[16px] py-[6px] border border-dashboard-dark rounded-[8px] text-[12px] font-semibold text-dashboard-dark hover:bg-dashboard-dark hover:text-white transition-colors self-start"
            >
              Browse file
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-[12px]">
          <div className="p-[8px] bg-white border border-dashboard-border rounded-full flex items-center justify-center">
            <div className="w-[80px] h-[80px] bg-gray-50 rounded-full flex items-center justify-center overflow-hidden border border-dashboard-border">
              <img src={logo.url} alt="Logo preview" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[14px] font-semibold text-dashboard-dark truncate max-w-[200px]">
              {logo.name}
            </span>
            <span className="text-[12px] text-dashboard-gray">{logo.size}</span>
            <button 
              onClick={() => setLogo(null)}
              className="mt-[4px] text-[12px] font-semibold text-red-500 hover:text-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
