import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import giftBoxImg from "../../assets/gift_box.png";
import { useStore } from "../../store/useStore";
import { StickerSVG } from "../settings/StickerSVG";
import { BubbleLeftBottomSVG } from "../settings/BubbleLeftBottomSvg";
import { WinningPopupImage } from "./WinningImage";
import { GiftSVG } from "./GiftSVG";

interface WinningPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onEquip: () => void;
}

export const WinningPopup: React.FC<WinningPopupProps> = ({
  isOpen,
  onClose,
  onEquip,
}) => {
  const { bubbleColor } = useStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Popup Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            className="relative w-full max-w-[320px] bg-white rounded-[24px] pt-[80px] pb-6 px-6 text-center shadow-2xl overflow-visible"
          >
            {/* Gift Box Header Image */}
            <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 z-20 bg-transparent">
              <WinningPopupImage />
              {/* Simple Confetti Particles (CSS/SVG) */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Add some decorative particles here if needed */}
              </div>
            </div>

            {/* Light Glow behind Gift */}
            <div className="absolute -top-[40px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-orange-300/30 blur-[40px] rounded-full -z-10" />

            {/* Title */}
            <h2 className="text-[16px] font-bold text-[#FF9F43] mb-6 leading-relaxed">
              恭喜你获得「圣诞姜饼人」聊天气泡
            </h2>

            {/* Prize Preview */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <GiftSVG />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 rounded-[20px] bg-[#F5F5F5] text-[#999999] text-[14px] font-medium active:scale-95 transition-transform"
              >
                稍后再说
              </button>
              <button
                onClick={onEquip}
                className="flex-1 py-2.5 rounded-[20px] bg-gradient-to-r from-[#FFB75E] to-[#ED8F03] text-white text-[14px] font-medium shadow-md active:scale-95 transition-transform"
              >
                一键装扮
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
