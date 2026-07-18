import { useEffect, useState } from "react";
import { minPrice, maxPrice } from "@/utils/filters";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilterContext } from "@/hooks/useFilter";

const PriceFilter = () => {
  const [min, setMin] = useState(String(minPrice));
  const [max, setMax] = useState(String(maxPrice));

  const { setPrice } = useFilterContext();

  const debouncedPrice = useDebounce(
    {
      min,
      max,
    },
    500,
  );

  useEffect(() => {
    const minValue = Number(debouncedPrice.min);
    const maxValue = Number(debouncedPrice.max);

    if (!isNaN(minValue) && !isNaN(maxValue) && minValue <= maxValue) {
      setPrice({
        min: minValue,
        max: maxValue,
      });
    }
  }, [debouncedPrice, setPrice]);

  return (
    <div className="py-5">
      <div className="flex justify-between mb-5">
        <h3>Price</h3>
      </div>

      <div className="flex gap-3">
        <input
          type="number"
          value={min}
          min={minPrice}
          max={maxPrice}
          onChange={(e) => setMin(e.target.value)}
          className="w-full bg-transparent border rounded-lg px-3 py-2"
        />

        <input
          type="number"
          value={max}
          min={minPrice}
          max={maxPrice}
          onChange={(e) => setMax(e.target.value)}
          className="w-full bg-transparent border rounded-lg px-3 py-2"
        />
      </div>

      <div className="flex justify-between text-cyan-600 text-sm mt-2">
        <span>Minimum price: {minPrice}€</span>

        <span>Maximum price: {maxPrice}€</span>
      </div>
    </div>
  );
};

export default PriceFilter;
