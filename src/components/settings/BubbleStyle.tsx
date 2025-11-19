import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useStore } from '../../store/useStore';

const COLORS = ['#FF9F43', '#0099FF', '#2ECC71', '#9B59B6', '#E74C3C', '#34495E', '#F1C40F', '#1ABC9C', '#E67E22', '#95A5A6'];
const STICKERS = ['🐧', '🐱', '🐶', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'];

export const BubbleStyle: React.FC = () => {
    const { bubbleColor, setBubbleColor, bubbleSticker, setBubbleSticker } = useStore();
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showStickerPicker, setShowStickerPicker] = useState(false);

    const currentColorName = '活力橙'; // Simplified for demo, ideally mapped from color

    return (
        <div className="p-4 pt-0">
            <div className="text-[16px] font-semibold mb-2 text-[#333333]">彩蛋词气泡样式</div>

            <div className="mb-4">
                <div className="text-[14px] text-[#999999] mb-3">设置颜色（对本群全部彩蛋词气泡有效）</div>
                <div className="relative inline-block">
                    <button className="bg-white border-none rounded-[20px] px-4 py-2 flex items-center gap-2 text-[14px] cursor-pointer shadow-sm" onClick={() => setShowColorPicker(!showColorPicker)}>
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: bubbleColor }}></div>
                        <span className="text-[#333333]">{currentColorName}</span>
                        <ChevronDown size={16} className="text-[#999999]" />
                    </button>
                    {showColorPicker && (
                        <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-3 z-10 grid grid-cols-5 gap-3 mt-2 w-[200px]">
                            {COLORS.map((color) => (
                                <div
                                    key={color}
                                    className="w-8 h-8 rounded-full cursor-pointer border border-gray-100"
                                    style={{ backgroundColor: color }}
                                    onClick={() => {
                                        setBubbleColor(color);
                                        setShowColorPicker(false);
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div>
                <div className="text-[14px] text-[#999999] mb-3">设置气泡贴纸（对本人彩蛋词气泡有效）</div>
                <div className="relative inline-block">
                    <button className="bg-white border-none rounded-[20px] px-4 py-2 flex items-center gap-2 text-[14px] cursor-pointer shadow-sm" onClick={() => setShowStickerPicker(!showStickerPicker)}>
                        <span className="text-[20px]">{bubbleSticker}</span>
                        <ChevronDown size={16} className="text-[#999999]" />
                    </button>
                    {showStickerPicker && (
                        <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-3 z-10 grid grid-cols-5 gap-2 mt-2 w-[200px]">
                            {STICKERS.map((sticker) => (
                                <div
                                    key={sticker}
                                    className="text-2xl cursor-pointer p-2 hover:bg-[#f0f0f0] hover:rounded flex justify-center"
                                    onClick={() => {
                                        setBubbleSticker(sticker);
                                        setShowStickerPicker(false);
                                    }}
                                >
                                    {sticker}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
