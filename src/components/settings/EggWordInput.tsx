import React from 'react';
import { useStore } from '../../store/useStore';

export const EggWordInput: React.FC = () => {
    const { eggWord, setEggWord } = useStore();

    return (
        <div className="p-4">
            <div className="text-[16px] font-semibold mb-3 text-[#333333]">设置彩蛋词</div>
            <div className="bg-white rounded-[12px] p-4 w-full box-border">
                <textarea
                    className="w-full border-none resize-none text-[16px] outline-none min-h-[100px] text-[#333333] placeholder-[#CCCCCC]"
                    value={eggWord}
                    onChange={(e) => setEggWord(e.target.value)}
                    placeholder="填写彩蛋词，1-50字"
                    maxLength={50}
                />
            </div>
        </div>
    );
};
