import type { Game } from "@/types/game";

import GamesCard from "./GamesCard";
type Props = {
  games: Game[];
};

const GamesList = ({ games }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {games.map((product) => (
        <GamesCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default GamesList;
