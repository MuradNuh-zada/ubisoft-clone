import type { Game } from "@/types/game";

type Props = {
  product: Game;
};

const GamesCard = ({ product }: Props) => {
  const discountPrice = product.price,
    oldPrice = (product.price / (1 - product.discount / 100)).toFixed(2);

  return (
    <div className="group bg-white">
      <div className="relative bg-gray-100">
        <img
          src={product.img}
          alt={product.title}
          className="h-full w-full object-cover"
        />

        <span className="absolute top-[-15px] left-3 bg-[#ff8300] text-white px-3 py-1 rounded-full font-bold text-l">
          -{product.discount}%
        </span>
        <button
          className="
          absolute 
          right-3 
          top-3
          rounded-full
          bg-white
          px-3
          py-2
          opacity-0
          group-hover:opacity-100
          transition
          text-xl
          cursor-pointer
          "
        >
          ♡
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2">{product.title}</h3>

        <p className="mt-2 text-sm text-gray-500">{product.edition}</p>

        <div className="mt-4 flex items-center justify-between">
          <button
            className="
            rounded-full
            bg-black
            text-white
            px-5
            py-2
            text-sm
            cursor-pointer
            "
          >
            Add
          </button>
          <div className="flex gap-2">
            <p className="text-[22px] text-[#ec7013] font-bold">
              € {discountPrice.toFixed(2)}
            </p>
            <span className="text-[18px] text-[#676767] line-through">
              € {oldPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
