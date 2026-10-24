import { Link } from "@tanstack/react-router";
import { GAMES } from "@/lib/games";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
        <div>
          <p className="flex items-center gap-2 font-display text-sm font-extrabold tracking-wider">
            <span className="text-xl" aria-hidden="true">
              🕹️
            </span>
            <span>
              KHALID <span className="text-neon-cyan">ENTERTIMING</span>
            </span>
          </p>
          <p className="mt-1 text-[10px] font-medium tracking-[0.35em] text-muted-foreground">INDIA PVT LTD</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Bright, bouncy browser games for everyone. Play instantly — no downloads, no accounts, no payments.
          </p>
        </div>

        <nav aria-label="Games">
          <h3 className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground">GAMES</h3>
          <ul className="mt-3 space-y-2">
            {GAMES.map((g) => (
              <li key={g.id}>
                <Link
                  to="/games"
                  search={{ game: g.id }}
                  className="text-sm text-foreground/90 transition-colors hover:text-neon-cyan"
                >
                  {g.emoji} {g.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site">
          <h3 className="font-display text-xs font-bold tracking-[0.2em] text-muted-foreground">SITE</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/" className="text-sm text-foreground/90 transition-colors hover:text-neon-cyan">
                Home
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className="text-sm text-foreground/90 transition-colors hover:text-neon-cyan">
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm text-foreground/90 transition-colors hover:text-neon-cyan">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground md:px-8">
        © 2026 Khalid Entertiming India Pvt Ltd · Free demo games — no accounts, no payments · Made with 💜 in India
      </div>
    </footer>
  );
}
