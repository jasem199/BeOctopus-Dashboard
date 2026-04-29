"use client";

import React, { useState } from "react";
import { LogoUpload } from "@/components/branding/LogoUpload";
import { ColorScheme } from "@/components/branding/ColorScheme";
import { SaveControls } from "@/components/branding/SaveControls";
import { LivePreview } from "@/components/branding/LivePreview";

export function BrandingClient() {
  const [logo, setLogo] = useState<{ url: string; name: string; size: string } | null>(null);
  const [accentColor, setAccentColor] = useState("#D2FB6A");

  return (
    <div className="max-w-[1280px] mx-auto px-[32px] py-[24px] grid grid-cols-[1fr_400px] gap-[24px]">
      {/* Left Column - Controls */}
      <div className="flex flex-col gap-[32px]">
        <div>
          <h1 className="text-[24px] font-bold text-dashboard-dark">Branding</h1>
          <p className="text-[14px] text-dashboard-gray mt-[4px]">
            Customise how your app looks for your users.
          </p>
        </div>

        <LogoUpload logo={logo} setLogo={setLogo} />
        
        <ColorScheme 
          accentColor={accentColor} 
          setAccentColor={setAccentColor} 
        />

        <SaveControls />
      </div>

      {/* Right Column - Live Preview */}
      <div className="relative">
        <LivePreview logo={logo} accentColor={accentColor} />
      </div>
    </div>
  );
}
