import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/games", label: "Games", exact: false },
  { to: "/leaderboard", label: "Leaderboard", exact: false },
  { to: "/about", label: "About", exact: false },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl md:text-3xl" aria-hidden="true">
            🕹️
          </span>
          <span className="font-display text-sm font-extrabold tracking-wider md:text-base">
            <span className="text-foreground">
              KHALID <span className="text-neon-cyan">ENTERTIMING</span>
            </span>
            <span className="block text-[10px] font-medium tracking-[0.35em] text-muted-foreground">
              INDIA PVT LTD
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              activeProps={{ className: "text-neon-cyan" }}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-neon-cyan"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/games"
            className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-[0_0_18px_-4px_var(--neon-cyan)] transition-transform hover:scale-105 active:scale-95"
          >
            ▶ Play Now
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-border px-3 py-2 text-lg leading-none text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.exact }}
                  activeProps={{ className: "text-neon-cyan" }}
                  className="block rounded-lg px-3 py-2 font-semibold text-foreground hover:bg-card"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/games"
                className={cn(
                  "mt-1 block rounded-lg bg-primary px-3 py-2 text-center font-bold text-primary-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                ▶ Play Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
