import { Link } from "@tanstack/react-router";
import { accentClasses, type GameMeta } from "@/lib/games";
import { cn } from "@/lib/utils";

export function GameCard({
  game,
  isFav,
  onToggleFav,
}: {
  game: GameMeta;
  isFav: boolean;
  onToggleFav: (id: string) => void;
}) {
  const a = accentClasses[game.accent];

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-3xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1",
        a.hoverBorder,
        isFav && "border-neon-orange/50",
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn("text-5xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110")}
          aria-hidden="true"
        >
          {game.emoji}
        </span>
        <button
          type="button"
          onClick={() => onToggleFav(game.id)}
          aria-pressed={isFav}
          aria-label={isFav ? `Remove ${game.name} from favorites` : `Add ${game.name} to favorites`}
          className={cn(
            "rounded-full border border-border p-2 text-lg leading-none transition-colors",
            isFav ? "border-neon-orange/60 text-neon-orange" : "text-muted-foreground hover:text-neon-orange",
          )}
        >
          {isFav ? "★" : "☆"}
        </button>
      </div>

      <h3 className="mt-4 font-display text-lg font-bold">{game.name}</h3>
      <span className={cn("mt-1 w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold", a.pill)}>
        {game.category}
      </span>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{game.tagline}</p>

      <Link
        to="/games"
        search={{ game: game.id }}
        className="mt-4 rounded-xl bg-primary px-4 py-2.5 text-center font-bold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
      >
        ▶ Play {game.name}
      </Link>
    </div>
  );
}
