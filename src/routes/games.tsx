import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GameCard } from "@/components/site/GameCard";
import { SnakeGame } from "@/components/games/SnakeGame";
import { TicTacToe } from "@/components/games/TicTacToe";
import { MemoryMatch } from "@/components/games/MemoryMatch";
import { RockPaperScissors } from "@/components/games/RockPaperScissors";
import { NeonJump } from "@/components/games/NeonJump";
import { CATEGORIES, GAMES } from "@/lib/games";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/games")({
  validateSearch: (search: Record<string, unknown>): { game?: string } => ({
    game: typeof search.game === "string" ? search.game : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Games — Khalid Entertiming India Pvt Ltd" },
      {
        name: "description",
        content:
          "Play all five free browser games: Neon Snake, Tic-Tac-Toe, Memory Match, Rock Paper Scissors and Neon Jump. Search, filter and favorite.",
      },
      { property: "og:title", content: "Games — Khalid Entertiming India Pvt Ltd" },
      {
        property: "og:description",
        content: "Five free browser games you can play instantly — no login, no payments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  const { game } = Route.useSearch();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [favsOnly, setFavsOnly] = useState(false);
  const { favs, toggleFav } = useFavorites();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (game) sectionRefs.current[game]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [game]);

  const q = query.trim().toLowerCase();
  const visible = GAMES.filter(
    (g) =>
      (cat === "All" || g.category === cat) &&
      (!favsOnly || favs.includes(g.id)) &&
      (g.name.toLowerCase().includes(q) || g.category.toLowerCase().includes(q)),
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="bg-hero-nebula -mx-4 rounded-b-[3rem] px-4 pt-10 pb-12 text-center md:-mx-8 md:px-8">
            <h1 className="font-display text-3xl font-black md:text-5xl">
              🎮 Game <span className="text-glow text-neon-magenta">Zone</span>
            </h1>
            <p className="mt-3 text-muted-foreground">Search, favorite, and play — all games are free.</p>
          </header>

          {/* Search & filters */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search games or categories…"
              aria-label="Search games"
              className="w-full max-w-md rounded-full border border-border bg-card px-5 py-3 text-sm outline-none transition-colors focus:border-neon-cyan"
            />
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
                    cat === c
                      ? "border-neon-cyan bg-neon-cyan/15 text-neon-cyan"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setFavsOnly((f) => !f)}
                aria-pressed={favsOnly}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
                  favsOnly
                    ? "border-neon-orange bg-neon-orange/15 text-neon-orange"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                ★ Favorites
              </button>
            </div>
          </div>

          {/* Cards grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((g) => (
              <GameCard key={g.id} game={g} isFav={favs.includes(g.id)} onToggleFav={toggleFav} />
            ))}
            {visible.length === 0 && (
              <p className="col-span-full rounded-2xl border border-dashed border-border py-10 text-center text-muted-foreground">
                No games match your filters. Try clearing the search or category.
              </p>
            )}
          </div>

          {/* Playable games */}
          <div className="mt-16 space-y-14">
            {GAMES.map((g) => (
              <section
                key={g.id}
                id={g.id}
                ref={(el) => {
                  sectionRefs.current[g.id] = el;
                }}
                className="scroll-mt-24"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {g.emoji}
                  </span>
                  <h2 className="font-display text-xl font-extrabold md:text-2xl">{g.name}</h2>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {g.category}
                  </span>
                  <span className="ml-auto hidden text-xs text-muted-foreground md:block">{g.howto}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4 }}
                >
                  {g.id === "snake" && <SnakeGame />}
                  {g.id === "tictactoe" && <TicTacToe />}
                  {g.id === "memory" && <MemoryMatch />}
                  {g.id === "rps" && <RockPaperScissors />}
                  {g.id === "jump" && <NeonJump />}
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
