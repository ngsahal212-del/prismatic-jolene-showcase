import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GameCard } from "@/components/site/GameCard";
import { GAMES } from "@/lib/games";
import { loadScores, type ScoreEntry } from "@/lib/leaderboard";
import { useFavorites } from "@/hooks/useFavorites";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Khalid Entertiming India Pvt Ltd — Free Browser Games",
      },
      {
        name: "description",
        content:
          "Play Neon Snake, Tic-Tac-Toe, Memory Match, Rock Paper Scissors and Neon Jump free in your browser. No accounts, no payments — just games.",
      },
      { property: "og:title", content: "Khalid Entertiming India Pvt Ltd" },
      {
        property: "og:description",
        content: "Your next favorite game starts here — five free browser games, no login required.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const FLOATERS = [
  { emoji: "🐍", className: "top-16 left-[6%] text-5xl", delay: "0s" },
  { emoji: "👾", className: "top-24 right-[8%] text-6xl", delay: "0.8s" },
  { emoji: "🕹️", className: "bottom-16 left-[12%] text-6xl", delay: "1.6s" },
  { emoji: "⭐", className: "bottom-24 right-[14%] text-5xl", delay: "2.4s" },
  { emoji: "🎲", className: "top-1/2 left-[3%] text-4xl", delay: "3.2s" },
];

function HomePage() {
  const { favs, toggleFav } = useFavorites();
  const [top, setTop] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    setTop(loadScores().slice(0, 3));
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-nebula relative overflow-hidden px-4 py-20 text-center md:py-28">
          {FLOATERS.map((f) => (
            <span
              key={f.emoji}
              aria-hidden="true"
              className={`animate-float pointer-events-none absolute opacity-70 ${f.className}`}
              style={{ animationDelay: f.delay }}
            >
              {f.emoji}
            </span>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-fit rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-xs font-bold tracking-wide text-neon-cyan md:text-sm"
          >
            🎮 5 FREE GAMES · NO LOGIN · NO ADS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto mt-6 max-w-3xl font-display text-4xl font-black leading-tight md:text-6xl"
          >
            Your Next <span className="text-glow text-neon-cyan">Favorite Game</span> Starts Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Bright, bouncy browser games from Khalid Entertiming India Pvt Ltd. Pick one and play instantly — right
            here, right now.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/games"
              className="rounded-full bg-primary px-8 py-3.5 font-display text-sm font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_-6px_var(--neon-cyan)] transition-transform hover:scale-105 active:scale-95 md:text-base"
            >
              ▶ Play Now
            </Link>
            <Link
              to="/leaderboard"
              className="rounded-full border border-border px-8 py-3.5 font-display text-sm font-bold tracking-wide text-foreground transition-colors hover:border-neon-magenta/60 hover:text-neon-magenta md:text-base"
            >
              🏆 See Leaderboard
            </Link>
          </motion.div>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>🕹️ 5 Original Games</span>
            <span aria-hidden="true">·</span>
            <span>⚡ Instant Play</span>
            <span aria-hidden="true">·</span>
            <span>🏆 Demo Leaderboard</span>
          </div>
        </section>

        {/* Featured games */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-extrabold md:text-3xl">
                Featured <span className="text-neon-lime">Games</span>
              </h2>
              <p className="mt-2 text-muted-foreground">Tap play — every game runs right in your browser.</p>
            </div>
            <Link to="/games" className="text-sm font-bold text-neon-cyan hover:underline">
              View all games →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GAMES.map((g, i) => (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              >
                <GameCard game={g} isFav={favs.includes(g.id)} onToggleFav={toggleFav} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Leaderboard preview */}
        <section className="mx-auto max-w-4xl px-4 pb-20 md:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-xl font-extrabold md:text-2xl">
                🏆 Top <span className="text-neon-orange">Scores</span>
              </h2>
              <span className="rounded-full bg-neon-orange/15 px-2.5 py-1 text-xs font-bold text-neon-orange">
                DEMO DATA
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {top.map((s, i) => (
                <li
                  key={`${s.game}-${s.player}-${s.score}`}
                  className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background/60 px-4 py-3"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {["🥇", "🥈", "🥉"][i]}
                  </span>
                  <span className="flex-1 font-semibold">
                    {s.player}
                    <span className="block text-xs font-normal text-muted-foreground">{s.game}</span>
                  </span>
                  <span className="font-display text-lg font-bold text-neon-cyan">{s.score}</span>
                </li>
              ))}
              {top.length === 0 && (
                <li className="py-6 text-center text-muted-foreground">Loading demo scores…</li>
              )}
            </ul>

            <div className="mt-6 text-center">
              <Link
                to="/leaderboard"
                className="text-sm font-bold text-neon-cyan hover:underline"
              >
                See the full leaderboard →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
