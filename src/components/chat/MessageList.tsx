import React from "react";
import { useStore } from "../../store/useStore";
import { StickerSVG } from "../settings/StickerSVG";

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
          className={`flex mb-4 gap-2 ${msg.isMe ? "flex-row-reverse" : ""}`}
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
                  ? "pl-[50px] rounded-[50px] min-h-[40px] flex items-center overflow-visible text-white shadow-sm"
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
                  <div className="absolute w-[42px] h-[42px] -top-[30px] left-[0px] flex justify-center items-center z-20">
                    <StickerSVG />
                    <div className="z-20 text-[28px] mb-[5px]">
                      {bubbleSticker}
                    </div>
                  </div>
                  <span className="relative z-20 px-2">{msg.text}</span>
                  <div className="absolute bottom-0 left-0 z-10 pointer-events-none overflow-hidden w-full h-full rounded-bl-[50px] rounded-tl-[50px]">
                    <svg
                      width="42"
                      height="36"
                      viewBox="0 0 56 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-0 left-0 opacity-50"
                    >
                      <circle
                        cx="46.6821"
                        cy="4.88079"
                        r="4.88079"
                        fill="#FFE6DA"
                      />
                      <circle
                        cx="37.8988"
                        cy="19.1322"
                        r="1.8458"
                        fill="#FFE6DA"
                      />
                      <circle
                        cx="15.1751"
                        cy="3.00544"
                        r="1.23053"
                        fill="#FFE6DA"
                      />
                      <path
                        d="M44.8499 32.4519C58.6317 44.7954 59.7977 65.9742 47.4542 79.756C35.1107 93.5378 13.932 94.7038 0.150127 82.3603C-13.6317 70.0168 -14.7977 48.8381 -2.4542 35.0562C3.46599 28.4462 11.4186 24.7382 19.6128 24.031C21.5199 23.8664 23.0922 22.3396 23.0885 20.4253L23.0871 19.6748C23.0854 18.7572 22.4982 17.965 21.806 17.3627C19.8179 15.6323 19.6089 12.6179 21.3392 10.6298C23.0695 8.64168 26.0839 8.43267 28.0721 10.163C30.0602 11.8933 30.2692 14.9077 28.5389 16.8958C28.3915 17.0651 28.2349 17.2216 28.0703 17.365C26.895 18.3892 25.6388 19.6403 25.6417 21.1993C25.6448 22.8171 26.881 24.1516 28.4732 24.4385C34.3714 25.5013 40.0578 28.16 44.8499 32.4519Z"
                        fill="#FFE6DA"
                      />
                    </svg>
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
