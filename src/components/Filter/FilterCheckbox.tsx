import type { FilterItem } from "@/types/filter";
import { useFilterContext } from "@/hooks/useFilter";
type Props = {
  category: string;
  item: FilterItem;
};

const FilterCheckbox = ({ item, category }: Props) => {
  const { selectedFilters, setFilter } = useFilterContext();
  const checked = selectedFilters[category]?.includes(item.name) || false;

  return (
    <label className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setFilter(category, item.name)}
          className="h-4 w-4"
        />

        <span className="text-sm">{item.name}</span>
      </div>

      <span className="text-sm text-gray-500">({item.count})</span>
    </label>
  );
};

export default FilterCheckbox;
