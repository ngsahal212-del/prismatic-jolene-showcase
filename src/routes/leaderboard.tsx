import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GAMES } from "@/lib/games";
import { clearLocalScores, loadScores, type ScoreEntry } from "@/lib/leaderboard";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — Khalid Entertiming India Pvt Ltd" },
      {
        name: "description",
        content: "Demo leaderboard for the free Khalid Entertiming browser games. Local scores only — no accounts, no payments.",
      },
      { property: "og:title", content: "Leaderboard — Khalid Entertiming India Pvt Ltd" },
      {
        property: "og:description",
        content: "Demo scores for five free browser games — stored locally, no login required.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeaderboardPage,
});

const MEDALS = ["🥇", "🥈", "🥉"];

function LeaderboardPage() {
  const [scores, setScores] = useState<ScoreEntry[] | null>(null);

  useEffect(() => {
    setScores(loadScores());
  }, []);

  const refresh = () => setScores(loadScores());

  const groups = GAMES.map((g) => ({
    game: g,
    rows: (scores ?? [])
      .filter((s) => s.game === g.name)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5),
  })).filter((group) => group.rows.length > 0);

  const hasLocal = (scores ?? []).some((s) => !s.demo);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-4xl">
          <header className="bg-hero-nebula -mx-4 rounded-b-[3rem] px-4 pt-10 pb-12 text-center md:-mx-8 md:px-8">
            <h1 className="font-display text-3xl font-black md:text-5xl">
              🏆 <span className="text-glow text-neon-orange">Leaderboard</span>
            </h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-neon-orange/15 px-3 py-1 text-xs font-bold text-neon-orange">
                DEMO DATA
              </span>
              <span className="rounded-full bg-neon-cyan/15 px-3 py-1 text-xs font-bold text-neon-cyan">
                YOUR SCORES SAVED IN THIS BROWSER
              </span>
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              The marked rows are sample scores so the board is never empty. When you play, your own results are added
              here too — saved only in your browser. No accounts, no payments.
            </p>
          </header>

          <div className="mt-10 space-y-8">
            {scores === null && (
              <p className="py-10 text-center text-muted-foreground">Loading scores…</p>
            )}

            {scores !== null &&
              groups.map(({ game: g, rows }) => (
                <section key={g.id} className="rounded-3xl border border-border bg-card p-5 md:p-6">
                  <h2 className="flex items-center gap-3 font-display text-lg font-extrabold">
                    <span className="text-3xl" aria-hidden="true">
                      {g.emoji}
                    </span>
                    {g.name}
                  </h2>
                  <ol className="mt-4 space-y-2">
                    {rows.map((s, i) => (
                      <li
                        key={`${s.player}-${s.date}-${s.score}`}
                        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3"
                      >
                        <span className="w-7 text-center text-xl" aria-hidden="true">
                          {MEDALS[i] ?? `#${i + 1}`}
                        </span>
                        <span className="flex-1 font-semibold">
                          {s.player}
                          {s.demo && (
                            <span className="ml-2 rounded-full bg-neon-orange/15 px-2 py-0.5 align-middle text-[10px] font-bold text-neon-orange">
                              DEMO
                            </span>
                          )}
                        </span>
                        <span className="hidden text-xs text-muted-foreground sm:block">{s.date}</span>
                        <span className="w-14 text-right font-display text-lg font-bold text-neon-cyan">
                          {s.score}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-4 text-right">
                    <Link
                      to="/games"
                      search={{ game: g.id }}
                      className="text-sm font-bold text-neon-cyan hover:underline"
                    >
                      ▶ Beat this score
                    </Link>
                  </div>
                </section>
              ))}

            {scores !== null && groups.length === 0 && (
              <p className="py-10 text-center text-muted-foreground">No scores yet.</p>
            )}

            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  clearLocalScores();
                  refresh();
                }}
                disabled={!hasLocal}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:border-destructive hover:text-destructive disabled:cursor-not-allowed disabled:opacity-40"
              >
                🗑 Clear my local scores
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
