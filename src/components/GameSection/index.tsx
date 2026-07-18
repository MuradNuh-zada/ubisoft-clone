import { useState } from "react";
import Filter from "@/components/Filter/Filter";
import GamesList from "../Games/GamesList";
import { games } from "@/data/games";
import { useFilterContext } from "@/hooks/useFilter";

const Index = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);

  const { selectedFilters, price } = useFilterContext();
  console.log(selectedFilters);
  
  const filteredGames = games.filter((game) => {
    const filterMatches = Object.entries(selectedFilters).every(
      ([key, values]) => {
        if (values.length === 0) return true;

        switch (key) {
          case "Type":
            return values.includes(game.type);

          case "Genre":
            return game.genre.some((genre) => values.includes(genre));

          case "Brand":
            return values.includes(game.brand);

          case "Game":
            return values.includes(game.game);

          case "DLC Type":
            return game.dlcType !== null && values.includes(game.dlcType);

          case "Product Edition":
            return game.edition !== null && values.includes(game.edition);

          default:
            return true;
        }
      },
    );

    const priceMatch = game.price >= price.min && game.price <= price.max;

    return filterMatches && priceMatch;
  });

  const visibleGames = filteredGames.slice(0, visibleCount);

  const handleLoadMore = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 12);
      setLoading(false);
    }, 2000);
  };

  const showLoadMore = visibleCount < filteredGames.length;

  return (
    <section className="flex gap-10 my-5 container xl:px-[72px] max-w-[1776px] mx-auto px-4">
      <Filter  />

      <div className="flex-1 flex flex-col items-center">
        <GamesList games={visibleGames} />

        {showLoadMore &&
          (loading ? (
            <div className="my-8">
              <div
                className="
                    w-10
                    h-10
                    border-4
                    border-white
                    border-t-transparent
                    rounded-full
                    animate-spin
                  "
              />
            </div>
          ) : (
            <button
              onClick={handleLoadMore}
              className="mt-8 border-white border-2 rounded-3xl text-white py-[12px] px-[48px] uppercase font-bold bg-transparent cursor-pointer "
            >
              Load more
            </button>
          ))}

        <p className="text-white mt-8">
          Showing {visibleGames.length} of {filteredGames.length} items
        </p>
      </div>
    </section>
  );
};

export default Index;
