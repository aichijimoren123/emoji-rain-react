import React from "react";
import { useNavigate } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { EggWordInput } from "./settings/EggWordInput";
import { BubbleStyle } from "./settings/BubbleStyle";
import { BubblePreview } from "./settings/BubblePreview";
import { RainSelector } from "./settings/RainSelector";

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] bg-[#F5F6FA] text-[#333333] font-sans">
      <div className="flex justify-between items-center px-4 py-3 bg-white text-[18px] font-medium border-b border-[#E5E5E5]">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.history.back()}
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </div>
        <div className="font-semibold">编辑彩蛋词</div>
        <div
          className="text-[#999999] text-[16px] cursor-pointer font-normal"
          onClick={() => navigate({ to: "/chat" })}
        >
          确定
        </div>
      </div>

      <div className="pb-10">
        <EggWordInput />
        <BubbleStyle />
        <BubblePreview />
        <RainSelector />
      </div>
    </div>
  );
};
