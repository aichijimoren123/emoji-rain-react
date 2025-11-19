import { create } from 'zustand';

interface AppState {
  eggWord: string;
  bubbleColor: string;
  bubbleSticker: string;
  rainEmojis: string[];
  setEggWord: (word: string) => void;
  setBubbleColor: (color: string) => void;
  setBubbleSticker: (sticker: string) => void;
  setRainEmojis: (emojis: string[]) => void;
}

export const useStore = create<AppState>((set) => ({
  eggWord: '圣诞快乐',
  bubbleColor: '#FF9F43', // Default orange-ish color from design
  bubbleSticker: '😎',
  rainEmojis: ['🎄', '🎁', '🍪'],
  setEggWord: (word) => set({ eggWord: word }),
  setBubbleColor: (color) => set({ bubbleColor: color }),
  setBubbleSticker: (sticker) => set({ bubbleSticker: sticker }),
  setRainEmojis: (emojis) => set({ rainEmojis: emojis }),
}));
