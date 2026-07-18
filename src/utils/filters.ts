import { games } from "@/data/games";

export const getFilterItems = (items: string[]) => {
  const counts: Record<string, number> = {};

  items.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  return Object.entries(counts).map(([name, count]) => ({
    name,
    count,
  }));
};

export const minPrice = Math.min(...games.map((g) => g.price));

export const maxPrice = Math.max(...games.map((g) => g.price));
