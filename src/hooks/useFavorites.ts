import { useCallback, useEffect, useState } from "react";

const KEY = "ke-favorites-v1";

/** Favorite game ids persisted in localStorage (shared across pages). */
export function useFavorites() {
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setFavs(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleFav = useCallback((id: string) => {
    setFavs((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return { favs, toggleFav };
}
