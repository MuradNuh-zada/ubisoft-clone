import React from "react";

type GameCardProps = {
  title: string;
  price: string;
  image: string;
};

const GameCard: React.FC<GameCardProps> = ({ title, price, image }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#1a1a1a] text-white shadow-lg w-[260px]">
      <img src={image} className="h-[320px] w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">Standard Edition</p>
        <div className="mt-3 font-bold">{price}</div>
      </div>
    </div>
  );
};

export default GameCard;
