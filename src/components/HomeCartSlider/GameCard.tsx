import React from "react";

type GameCard = {
  title: string;
  price: string;
  image: string;
  edition: string;
};

const games: GameCard[] = [
  {
    title: "Assassin's Creed Shadows",
    edition: "Standard Edition",
    price: "€69.99",
    image: "https://images.unsplash.com/photo-1608889175638-9b1b8b5f6c6a?w=800",
  },
  {
    title: "Anno 117: Pax Romana",
    edition: "Standard Edition",
    price: "€59.99",
    image: "https://images.unsplash.com/photo-1520697222865-7b3f1b8a2a2f?w=800",
  },
  {
    title: "Star Wars Outlaws",
    edition: "Standard Edition",
    price: "€69.99",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
  },
  {
    title: "Assassin's Creed Mirage",
    edition: "Standard Edition",
    price: "€49.99",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
  },
  {
    title: "Ghost Recon Breakpoint",
    edition: "Standard Edition",
    price: "€59.99",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800",
  },
  {
    title: "Anno 1800",
    edition: "Standard Edition",
    price: "€59.99",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
];
const GameCard: React.FC = () => {
  return (
    <>
      {games.map((game, i) => (
        <div
          key={i}
          className="group bg-white/5 backdrop-blur-md hover:bg-white/20 border border-[hsla(0,0%,100%,.15)] rounded-[8px] transition-all duration-300 ease-out overflow-hidden duration-300"
        >
          <div className="relative h-[340px] overflow-hidden">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>

          <div className="p-4 flex flex-col gap-1">
            <h3 className="text-white text-sm font-semibold leading-tight">
              {game.title}
            </h3>

            <p className="text-gray-400 text-xs">{game.edition}</p>

            <div className="mt-3 flex justify-between items-center">
              <span className="text-white font-bold text-sm">{game.price}</span>

              <button className="text-xs px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition">
                Buy
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GameCard;
