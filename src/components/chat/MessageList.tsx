import React from "react";
import { useStore } from "../../store/useStore";
import { StickerSVG } from "../settings/StickerSVG";
import { BubbleLeftBottomSVG } from "../settings/BubbleLeftBottomSvg";

interface Message {
  id: number;
  text: string;
  isMe: boolean;
  sender: string;
  avatar: string;
  isEggWord?: boolean;
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const { bubbleColor, bubbleSticker } = useStore();

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-[#F5F5F5]">
      <div className="text-center text-[#999999] text-[12px] mb-4">13:33</div>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex mb-4 gap-2 ${
            msg.isMe ? "flex-row-reverse box-content" : ""
          }`}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={msg.avatar}
              alt={msg.sender}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`flex flex-col max-w-[70%] relative ${
              msg.isMe ? "items-end" : "items-start"
            }`}
          >
            {!msg.isMe && (
              <span className="text-[12px] text-[#999999] mb-1 ml-1">
                {msg.sender}
              </span>
            )}
            <div
              className={`px-3 py-2 relative break-words text-[16px] leading-relaxed ${
                msg.isEggWord
                  ? "pl-[50px] rounded-[50px] min-h-[40px] flex items-center overflow-visible text-white shadow-sm mt-[30px]"
                  : `${
                      msg.isMe
                        ? "bg-[#0099FF] text-white rounded-tr-[2px] rounded-tl-[12px] rounded-bl-[12px] rounded-br-[12px]"
                        : "bg-white text-[#333333] rounded-tl-[2px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[12px]"
                    }`
              }`}
              style={
                msg.isEggWord
                  ? {
                      backgroundColor: bubbleColor,
                    }
                  : {}
              }
            >
              {msg.isEggWord && (
                <>
                  <div className="absolute w-[42px] h-[42px] -top-[30px] left-0 flex justify-center items-center z-20">
                    <StickerSVG />
                    <div className="z-20 text-[28px] mb-[5px]">
                      {bubbleSticker}
                    </div>
                  </div>
                  <span className="relative z-20 px-2">{msg.text}</span>
                  <div className="absolute bottom-0 left-0 z-10 pointer-events-none overflow-hidden w-full h-full rounded-bl-[50px] rounded-tl-[50px]">
                    <BubbleLeftBottomSVG />
                  </div>
                </>
              )}
              {!msg.isEggWord && msg.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
