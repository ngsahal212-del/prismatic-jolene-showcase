import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Khalid Entertiming India Pvt Ltd" },
      {
        name: "description",
        content:
          "Khalid Entertiming India Pvt Ltd builds bright, bouncy free browser games. Instant play, no accounts, no payments — original artwork only.",
      },
      { property: "og:title", content: "About — Khalid Entertiming India Pvt Ltd" },
      {
        property: "og:description",
        content: "A small playful games studio making free browser games anyone can play instantly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    emoji: "⚡",
    title: "Instant Play",
    text: "Every game runs right in your browser. Click play and you're in — nothing to install, nothing to configure.",
  },
  {
    emoji: "🆓",
    title: "Free Forever",
    text: "No payments, no subscriptions, no ads. The games exist to make people smile, not to make a sale.",
  },
  {
    emoji: "🔒",
    title: "Privacy First",
    text: "Scores and favorites live in your own browser. We don't ask for logins and we don't collect your data.",
  },
];

const STATS = [
  { value: "5", label: "Original Games" },
  { value: "0", label: "Ads, Ever" },
  { value: "100%", label: "Free to Play" },
  { value: "🇮🇳", label: "Made in India" },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-4xl">
          <header className="bg-hero-nebula -mx-4 rounded-b-[3rem] px-4 pt-10 pb-12 text-center md:-mx-8 md:px-8">
            <p className="font-display text-xs font-bold tracking-[0.3em] text-neon-cyan">👾 ABOUT US</p>
            <h1 className="mt-3 font-display text-3xl font-black md:text-5xl">
              We Make <span className="text-glow text-neon-lime">Browsers</span> Fun
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Khalid Entertiming India Pvt Ltd is a small, playful games studio. We build bright, bouncy browser games
              that anyone can play instantly — no downloads, no accounts, no payments.
            </p>
          </header>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-3xl border border-border bg-card p-6 text-center"
              >
                <span className="text-4xl" aria-hidden="true">
                  {v.emoji}
                </span>
                <h2 className="mt-3 font-display text-base font-bold">{v.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-black text-neon-cyan">{s.value}</p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-lg font-extrabold">🎨 Original artwork only</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every character, icon and illustration on this site is original CSS and emoji artwork made by us. No
              copyrighted game assets, no licensed characters — just our own neon style.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/games"
              className="inline-block rounded-full bg-primary px-8 py-3.5 font-display text-sm font-bold tracking-wide text-primary-foreground shadow-[0_0_30px_-6px_var(--neon-cyan)] transition-transform hover:scale-105 active:scale-95 md:text-base"
            >
              ▶ Start Playing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
