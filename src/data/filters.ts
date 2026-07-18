import { getFilterItems } from "@/utils/filters";
import { games } from "./games";
import type { FilterGroup } from "@/types/filter";

export const filters: FilterGroup[] = [
  {
    title: "Type",
    items: getFilterItems(games.map((p) => p.type)),
  },

  {
    title: "Genre",
    items: getFilterItems(games.flatMap((p) => p.genre)),
  },

  {
    title: "Brand",
    items: getFilterItems(games.map((p) => p.brand)),
  },

  {
    title: "Game",
    items: getFilterItems(games.map((p) => p.game)),
  },

  {
    title: "DLC Type",
    items: getFilterItems(
      games.map((p) => p.dlcType).filter((x): x is string => x !== null),
    ),
  },

  {
    title: "Product Edition",
    items: getFilterItems(
      games.map((p) => p.edition).filter((x): x is string => x !== null),
    ),
  },
];
