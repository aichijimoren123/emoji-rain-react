import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Menu, ChevronLeft } from "lucide-react";
import { MessageList } from "./chat/MessageList";
import { ChatInput } from "./chat/ChatInput";
import { EmojiRain } from "./chat/EmojiRain";
import { useStore } from "../store/useStore";
import { WinningPopup } from "./chat/WinningPopup";

// Mock avatars
const AVATARS = {
  me: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  other1: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
  other2: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
};

export const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  const { eggWord, rainEmojis, setBubbleColor, setBubbleSticker } = useStore();
  const [isRaining, setIsRaining] = useState(false);
  const [showWinningPopup, setShowWinningPopup] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "圣诞快乐!",
      isMe: false,
      sender: "nicklaus",
      avatar: AVATARS.other1,
    },
    {
      id: 2,
      text: "圣诞快乐",
      isMe: false,
      sender: "carolinezzz",
      avatar: AVATARS.other2,
    },
  ]);

  const handleSend = (text: string) => {
    const isEggWord = text === eggWord;

    const newMessage = {
      id: Date.now(),
      text,
      isMe: true,
      sender: "Me",
      avatar: AVATARS.me,
      isEggWord,
    };

    setMessages([...messages, newMessage]);

    if (isEggWord) {
      setIsRaining(true);
      // Check if rain contains gift emoji
      if (rainEmojis.includes("🎁")) {
        setTimeout(() => {
          setShowWinningPopup(true);
        }, 1500); // Show popup after 1.5s
      }
    }
  };

  const handleEquip = () => {
    setBubbleColor("#FF9F43"); // Orange
    setBubbleSticker("🍪"); // Gingerbread Man
    setShowWinningPopup(false);
  };

  return (
    <div className="flex flex-col h-dvh bg-[#F5F5F5]">
      <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] ">
        <div className="flex items-center gap-1">
          <button
            onClick={() => navigate({ to: "/" })}
            className="py-2 text-[#1A1A1A] active:text-[#0099FF] transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex flex-col items-center">
            <div className="text-[18px] font-semibold text-[#1A1A1A]">
              测试群(6)
            </div>
          </div>
        </div>
        <button className="p-2 text-[#1A1A1A] active:text-[#0099FF] transition-colors">
          <Menu size={24} />
        </button>
      </div>
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
      <EmojiRain active={isRaining} onComplete={() => setIsRaining(false)} />
      <WinningPopup
        isOpen={showWinningPopup}
        onClose={() => setShowWinningPopup(false)}
        onEquip={handleEquip}
      />
    </div>
  );
};
