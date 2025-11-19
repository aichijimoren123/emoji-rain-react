import React from 'react';
import { useStore } from '../../store/useStore';
import { BubbleLeftBottomSVG } from './BubbleLeftBottomSvg';

export const BubblePreview: React.FC = () => {
    const { bubbleColor, bubbleSticker } = useStore();

    return (
        <div className="p-4 pt-0">
            <div className="text-[14px] text-[#999999] mb-3">预览气泡样式</div>
            <div className="bg-white rounded-[12px] p-8 flex justify-center items-center min-h-[160px]">
                <div className="relative max-w-full w-full">
                    {/* Sticker - Outside the clipped container */}
                    <div className='absolute top-[-20px] left-0 w-[61px] h-[61px] flex justify-center items-center z-20' >
                        <svg width="100%" height="100%" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0 }}>
                            <path d="M26.8398 0C41.663 0.000168794 53.6796 12.0167 53.6797 26.8398C53.6797 41.6631 41.663 53.6795 26.8398 53.6797C26.4256 53.6797 26.0134 53.6696 25.6038 53.6509C25.5924 53.6504 25.5887 53.666 25.5991 53.6706C25.607 53.6742 25.6072 53.6855 25.5993 53.6893L13.6687 59.4491C11.0127 60.7313 7.92969 58.7962 7.92969 55.8469V47.5509C7.92969 46.4851 7.49353 45.4729 6.78492 44.6768C2.56443 39.9351 0 33.6872 0 26.8398C8.45279e-05 12.0166 12.0166 0 26.8398 0Z" fill="#CC561E" />
                        </svg>
                        <div className='text-[32px] z-2 mb-[5px]'>{bubbleSticker}</div>
                    </div>

                    {/* Bubble Container - Clipped */}
                    <div
                        style={{
                            backgroundColor: bubbleColor,
                            color: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            height: '61px',
                            borderRadius: '30.5px',
                            fontSize: '18px',
                            position: 'relative',
                            zIndex: 1,
                            marginTop: '20px',
                            overflow: 'hidden' // Clip the SVG
                        }}
                    >
                        <span style={{ zIndex: 2, position: 'relative' }}>预览彩蛋词样式</span>

                        {/* SVG Pattern in bottom left */}
                        <div style={{
                            position: 'absolute',
                            bottom: "-10px",
                            left: 0,
                            zIndex: 1,
                            pointerEvents: 'none'
                        }}>
                            <BubbleLeftBottomSVG />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
