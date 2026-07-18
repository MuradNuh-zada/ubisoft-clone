import { createContext } from "react";

export type SelectedFilters = {
  [key: string]: string[];
};

export type FilterContextType = {
  selectedFilters: SelectedFilters;

  setFilter: (category: string, value: string) => void;

  price: {
    min: number;
    max: number;
  };

  setPrice: (value: { min: number; max: number }) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined,
);
