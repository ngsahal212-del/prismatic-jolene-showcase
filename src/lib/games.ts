export type Accent = "cyan" | "magenta" | "lime" | "orange";

export interface GameMeta {
  id: string;
  name: string;
  emoji: string;
  category: string;
  tagline: string;
  howto: string;
  accent: Accent;
}

export const GAMES: GameMeta[] = [
  {
    id: "snake",
    name: "Neon Snake",
    emoji: "🐍",
    category: "Arcade",
    tagline: "Eat the glowing pellets, grow long, and don't crash.",
    howto: "Arrow keys / WASD, or the on-screen pad.",
    accent: "lime",
  },
  {
    id: "tictactoe",
    name: "Tic-Tac-Toe",
    emoji: "⭕",
    category: "Strategy",
    tagline: "Outsmart the CPU in the classic three-in-a-row duel.",
    howto: "Tap a square — you play X, the CPU plays O.",
    accent: "cyan",
  },
  {
    id: "memory",
    name: "Memory Match",
    emoji: "🧠",
    category: "Puzzle",
    tagline: "Flip cards and pair every emoji in as few moves as you can.",
    howto: "Turn over two cards at a time to find matching pairs.",
    accent: "magenta",
  },
  {
    id: "rps",
    name: "Rock Paper Scissors",
    emoji: "✊",
    category: "Classic",
    tagline: "The timeless showdown — beat the CPU and build a streak.",
    howto: "Pick rock, paper or scissors each round.",
    accent: "orange",
  },
  {
    id: "jump",
    name: "Neon Jump",
    emoji: "🦘",
    category: "Arcade",
    tagline: "Bounce up an endless neon tower. Don't fall off the bottom!",
    howto: "Hold ← / → (or A / D), or the on-screen buttons.",
    accent: "cyan",
  },
];

export const CATEGORIES = ["All", "Arcade", "Puzzle", "Strategy", "Classic"];

export const accentClasses: Record<Accent, { text: string; pill: string; hoverBorder: string }> = {
  cyan: {
    text: "text-neon-cyan",
    pill: "bg-neon-cyan/15 text-neon-cyan",
    hoverBorder: "group-hover:border-neon-cyan/60",
  },
  magenta: {
    text: "text-neon-magenta",
    pill: "bg-neon-magenta/15 text-neon-magenta",
    hoverBorder: "group-hover:border-neon-magenta/60",
  },
  lime: {
    text: "text-neon-lime",
    pill: "bg-neon-lime/15 text-neon-lime",
    hoverBorder: "group-hover:border-neon-lime/60",
  },
  orange: {
    text: "text-neon-orange",
    pill: "bg-neon-orange/15 text-neon-orange",
    hoverBorder: "group-hover:border-neon-orange/60",
  },
};
