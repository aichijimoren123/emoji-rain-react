import React from "react";
import { useStore } from "../../store/useStore";
import { BubbleLeftBottomSVG } from "./BubbleLeftBottomSvg";
import { StickerSVG } from "./StickerSVG";

export const BubblePreview: React.FC = () => {
  const { bubbleColor, bubbleSticker } = useStore();

  return (
    <div className="p-4 pt-0">
      <div className="text-[14px] text-[#999999] mb-3">预览气泡样式</div>
      <div className="bg-white rounded-[12px] p-8 flex justify-center items-center min-h-[160px]">
        <div className="relative max-w-full w-full">
          {/* Sticker - Outside the clipped container */}
          <div className="absolute top-[-20px] left-0 w-[61px] h-[61px] flex justify-center items-center z-20">
            <StickerSVG />
            <div className="text-[32px] z-2 mb-[5px]">{bubbleSticker}</div>
          </div>

          {/* Bubble Container - Clipped */}
          <div className="bg-[#ff9f43] mt-[20px] text-white text-[18px] relative  rounded-[30.5px] h-[61px] flex justify-center items-center z-1 overflow-hidden">
            <span className="relative z-2">预览彩蛋词样式</span>

            {/* SVG Pattern in bottom left */}
            <div className="absolute bottom-[-10px] left-0 z-1 pointer-events-none">
              <BubbleLeftBottomSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
