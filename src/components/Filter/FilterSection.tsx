import { useState } from "react";
import { ChevronDown } from "lucide-react";

import FilterCheckbox from "./FilterCheckbox";
import type { FilterGroup } from "@/types/filter";

type Props = {
  filter: FilterGroup;
};

const FilterSection = ({ filter }: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5"
      >
        <span>{filter.title}</span>

        <ChevronDown
          size={18}
          className={`
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <div className="pb-5 space-y-3 max-h-60 overflow-y-auto">
          {filter.items.map((item) => (
            <FilterCheckbox
              key={item.name}
              item={item}
              category={filter.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
