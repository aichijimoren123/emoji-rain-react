import React, { useState } from 'react';
import { useStore } from '../../store/useStore';

const EMOJIS = ['❄️', '🍬', '🍭', '🍪', '🎁', '🎈', '🎉', '✨', '🌟', '💫', '🌸', '🌹', '🌺', '🌻', '🌼'];

export const RainSelector: React.FC = () => {
    const { rainEmojis, setRainEmojis } = useStore();
    const [activeSlot, setActiveSlot] = useState<number | null>(null);

    const handleEmojiSelect = (emoji: string) => {
        if (activeSlot !== null) {
            const newEmojis = [...rainEmojis];
            newEmojis[activeSlot] = emoji;
            setRainEmojis(newEmojis);
            setActiveSlot(null);
        }
    };

    return (
        <div className="p-4 pt-0">
            <div className="text-[16px] font-semibold mb-2 text-[#333333]">彩蛋词触发表情雨样式</div>
            <div className="text-[14px] text-[#999999] mb-3">设置表情（最多选择3个，仅对本群有效）</div>
            <div className="flex gap-4 relative">
                {[0, 1, 2].map((index) => (
                    <div
                        key={index}
                        className="w-[60px] h-[60px] bg-white rounded-[16px] flex justify-center items-center text-[32px] cursor-pointer"
                        onClick={() => setActiveSlot(activeSlot === index ? null : index)}
                    >
                        {rainEmojis[index] || '+'}
                    </div>
                ))}

                {activeSlot !== null && (
                    <div className="absolute top-full left-0 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-2 z-10 grid grid-cols-5 gap-2 mt-2">
                        {EMOJIS.map((emoji) => (
                            <div
                                key={emoji}
                                className="text-2xl cursor-pointer p-1 hover:bg-[#f0f0f0] hover:rounded"
                                onClick={() => handleEmojiSelect(emoji)}
                            >
                                {emoji}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
