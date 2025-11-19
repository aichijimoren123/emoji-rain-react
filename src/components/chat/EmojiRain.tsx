import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';

interface EmojiRainProps {
    active: boolean;
    onComplete: () => void;
}

interface Drop {
    id: number;
    emoji: string;
    x: number; // percentage 0-100
    delay: number;
    duration: number;
    rotation: number;
}

export const EmojiRain: React.FC<EmojiRainProps> = ({ active, onComplete }) => {
    const { rainEmojis } = useStore();
    const [drops, setDrops] = useState<Drop[]>([]);

    useEffect(() => {
        if (active) {
            // Generate drops
            const newDrops: Drop[] = [];
            const count = 30; // Number of emojis
            for (let i = 0; i < count; i++) {
                newDrops.push({
                    id: i,
                    emoji: rainEmojis[Math.floor(Math.random() * rainEmojis.length)],
                    x: Math.random() * 100,
                    delay: Math.random() * 2, // Spread over 2 seconds
                    duration: 2 + Math.random() * 1.5, // Fall duration 2-3.5s
                    rotation: Math.random() * 360, // Random fixed rotation
                });
            }
            setDrops(newDrops);

            // Reset after animation
            const maxDuration = Math.max(...newDrops.map(d => d.delay + d.duration));
            const timer = setTimeout(() => {
                onComplete();
                setDrops([]);
            }, maxDuration * 1000);

            return () => clearTimeout(timer);
        }
    }, [active, rainEmojis, onComplete]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 100,
            overflow: 'hidden'
        }}>
            <AnimatePresence>
                {active && drops.map((drop) => (
                    <motion.div
                        key={drop.id}
                        initial={{ y: -50, x: `${drop.x}vw`, opacity: 1, rotate: drop.rotation }}
                        animate={{ y: '85vh', opacity: 0 }} // Fall to near bottom (input area)
                        transition={{
                            duration: drop.duration,
                            delay: drop.delay,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            fontSize: '32px',
                        }}
                    >
                        {drop.emoji}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
