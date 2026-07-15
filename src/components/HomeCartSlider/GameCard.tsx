import type { Games } from "@/types/games";

type GameCardProps = {
  games: Games;
};

const GameCard = ({ games }: GameCardProps) => {
  return (
    <div className="group bg-white/5 backdrop-blur-md hover:bg-white/20 border border-[hsla(0,0%,100%,.15)] rounded-[8px] transition-all duration-300 overflow-hidden">
      <div className="relative h-[340px] overflow-hidden">
        <img
          src={games.image}
          alt={games.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-white text-sm font-semibold">{games.title}</h3>

        <p className="text-gray-400 text-xs">{games.edition}</p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-white font-bold text-sm">{games.price}</span>

          <button className="text-xs px-3 py-1 rounded-md bg-white/10 text-white">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
