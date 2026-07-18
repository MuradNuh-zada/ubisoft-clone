import { filters } from "@/data/filters";

import FilterSection from "./FilterSection";
import PriceFilter from "./PriceFilter";

const Filter = () => {
  return (
    <aside className="h-fit w-80 bg-white p-5">
      <h2 className="text-xl font-bold mb-3">Filter</h2>

      <PriceFilter />

      {filters.map((filter) => (
        <FilterSection key={filter.title} filter={filter} />
      ))}
    </aside>
  );
};

export default Filter;
