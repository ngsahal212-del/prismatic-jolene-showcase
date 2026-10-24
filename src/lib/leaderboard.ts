export interface ScoreEntry {
  game: string;
  player: string;
  score: number;
  date: string;
  /** true = bundled sample data so the board is never empty */
  demo?: boolean;
}

const KEY = "ke-leaderboard-v1";

/** Clearly-marked sample rows so the leaderboard always has content. */
const DEMO_SCORES: ScoreEntry[] = [
  { game: "Neon Snake", player: "PixelRani", score: 34, date: "2026-10-18", demo: true },
  { game: "Neon Snake", player: "CobraX", score: 27, date: "2026-10-12", demo: true },
  { game: "Neon Snake", player: "ZigZagZoe", score: 19, date: "2026-10-05", demo: true },
  { game: "Tic-Tac-Toe", player: "GrandmaGrind", score: 18, date: "2026-10-20", demo: true },
  { game: "Tic-Tac-Toe", player: "TicTacTitan", score: 12, date: "2026-10-14", demo: true },
  { game: "Memory Match", player: "NeoNina", score: 96, date: "2026-10-15", demo: true },
  { game: "Memory Match", player: "QuizzyRaja", score: 84, date: "2026-10-09", demo: true },
  { game: "Rock Paper Scissors", player: "LuckyLion", score: 9, date: "2026-10-19", demo: true },
  { game: "Neon Jump", player: "SkyHopper", score: 41, date: "2026-10-21", demo: true },
  { game: "Neon Jump", player: "BounceBhai", score: 33, date: "2026-10-11", demo: true },
];

export function loadScores(): ScoreEntry[] {
  let mine: ScoreEntry[] = [];
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) mine = JSON.parse(raw) as ScoreEntry[];
  } catch {
    /* corrupted storage — fall back to demo rows only */
  }
  return [...mine, ...DEMO_SCORES].sort((a, b) => b.score - a.score);
}

export function addScore(entry: ScoreEntry) {
  try {
    const raw = localStorage.getItem(KEY);
    const mine: ScoreEntry[] = raw ? JSON.parse(raw) : [];
    mine.push(entry);
    localStorage.setItem(KEY, JSON.stringify(mine.slice(-100)));
  } catch {
    /* storage unavailable — score is simply not persisted */
  }
}

export function clearLocalScores() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
