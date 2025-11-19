import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../store/useStore";

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

const NUMBER_OF_DROPS = 15;

export const EmojiRain: React.FC<EmojiRainProps> = ({ active, onComplete }) => {
  const { rainEmojis } = useStore();
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    if (active) {
      // Generate drops
      const newDrops: Drop[] = [];
      const count = NUMBER_OF_DROPS; // Number of emojis
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
      const maxDuration = Math.max(
        ...newDrops.map((d) => d.delay + d.duration)
      );
      const timer = setTimeout(() => {
        onComplete();
        setDrops([]);
      }, maxDuration * 1000);

      return () => clearTimeout(timer);
    }
  }, [active, rainEmojis, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 100,
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {active &&
          drops.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{
                y: -100, // Start further up off-screen
                x: `${drop.x}vw`,
                opacity: 0, // Invisible initially
                rotate: drop.rotation,
              }}
              animate={{
                y: "85vh",
                opacity: [0, 1, 1, 0], // Fade in, stay visible, fade out at end
              }}
              transition={{
                duration: drop.duration,
                delay: drop.delay,
                ease: "linear",
                times: [0, 0.1, 0.9, 1], // Control opacity timing
              }}
              style={{
                position: "absolute",
                fontSize: "48px",
              }}
            >
              {drop.emoji}
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};
