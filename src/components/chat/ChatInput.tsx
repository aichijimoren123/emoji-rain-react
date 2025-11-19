import React, { useState } from "react";
import {
  Mic,
  Image as ImageIcon,
  Camera,
  Smile,
  PlusCircle,
  Phone,
  Video,
  MapPin,
  Folder,
  Bookmark,
  CreditCard,
  Share2,
  Scissors,
} from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue("");
      // Keep panel state as is
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const hasText = inputValue.trim().length > 0;

  return (
    <div className="flex flex-col w-full bg-[#F7F7F7] border-[#E5E5E5] pb-safe">
      {/* Top Row: Input and Send Button */}
      <div className="flex items-center px-3 py-2 gap-3">
        <input
          type="text"
          className="flex-1 bg-white rounded-[6px] px-3 py-2 text-[16px] text-[#1A1A1A] outline-none placeholder-gray-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder=""
        />
        <button
          className={`bg-[#0099FF] text-white px-4 py-1.5 rounded-[6px] text-[14px] font-medium transition-opacity duration-200 whitespace-nowrap ${
            hasText ? "opacity-100" : "opacity-60"
          }`}
          onClick={handleSend}
          disabled={!hasText}
        >
          发送
        </button>
      </div>

      {/* Bottom Row: Function Icons */}
      <div className="flex items-center justify-between px-6 pb-2">
        <button className="p-1 text-[#1A1A1A] active:text-[#0099FF] transition-colors">
          <Mic size={28} strokeWidth={1.5} />
        </button>
        <button className="p-1 text-[#1A1A1A] active:text-[#0099FF] transition-colors">
          <ImageIcon size={28} strokeWidth={1.5} />
        </button>
        <button className="p-1 text-[#1A1A1A] active:text-[#0099FF] transition-colors">
          <Camera size={28} strokeWidth={1.5} />
        </button>
        <button className="p-1 text-[#1A1A1A] active:text-[#0099FF] transition-colors">
          <Smile size={28} strokeWidth={1.5} />
        </button>
        <button
          className={`p-1 transition-colors ${
            isPanelOpen ? "text-[#0099FF]" : "text-[#1A1A1A]"
          }`}
          onClick={togglePanel}
        >
          <PlusCircle size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Expandable Panel */}
      {isPanelOpen && (
        <div className="grid grid-cols-4 gap-y-6 gap-x-4 p-6 bg-[#F7F7F7] border-t border-[#E5E5E5]">
          <PanelItem icon={<Phone size={24} />} label="语音通话" />
          <PanelItem icon={<Video size={24} />} label="视频通话" />
          <PanelItem icon={<MapPin size={24} />} label="位置" />
          <PanelItem icon={<Folder size={24} />} label="文件" />
          <PanelItem icon={<Bookmark size={24} />} label="收藏" />
          <PanelItem icon={<CreditCard size={24} />} label="转账" />
          <PanelItem icon={<Share2 size={24} />} label="屏幕分享" />
          <PanelItem icon={<Scissors size={24} />} label="截一截" />
        </div>
      )}
    </div>
  );
};

const PanelItem: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-14 h-14 bg-white rounded-[12px] flex items-center justify-center text-[#4A4A4A] shadow-sm">
      {icon}
    </div>
    <span className="text-[12px] text-[#888888]">{label}</span>
  </div>
);
