import { useState, type ReactNode } from "react";

import { FilterContext, type SelectedFilters } from "./FilterContext";

import { minPrice, maxPrice } from "@/utils/filters";

export const Provider = ({ children }: { children: ReactNode }) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const [price, setPrice] = useState({
    min: minPrice,
    max: maxPrice,
  });

  const setFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || [];

      if (current.includes(value)) {
        return {
          ...prev,
          [category]: current.filter((item) => item !== value),
        };
      }

      return {
        ...prev,
        [category]: [...current, value],
      };
    });
  };

  return (
    <FilterContext.Provider
      value={{
        selectedFilters,
        setFilter,
        price,
        setPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
