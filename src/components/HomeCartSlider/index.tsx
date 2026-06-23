import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./homecartslider.css";

// import GameCard from "./GameCard";

// const games = [
//   {
//     id: 1,
//     title: "Assassin's Creed Shadows",
//     price: "€69.99",
//     image: "/games/1.jpg",
//   },
//   {
//     id: 2,
//     title: "Anno 117: Pax Romana",
//     price: "€59.99",
//     image: "/games/2.jpg",
//   },
//   {
//     id: 3,
//     title: "Star Wars Outlaws",
//     price: "€69.99",
//     image: "/games/3.jpg",
//   },
//   {
//     id: 4,
//     title: "Assassin's Creed Mirage",
//     price: "€49.99",
//     image: "/games/4.jpg",
//   },
//   {
//     id: 5,
//     title: "Assassin's Creed Mirage",
//     price: "€49.99",
//     image: "/games/4.jpg",
//   },
//   {
//     id: 6,
//     title: "Assassin's Creed Mirage",
//     price: "€49.99",
//     image: "/games/4.jpg",
//   },
//   {
//     id: 7,
//     title: "Assassin's Creed Mirage",
//     price: "€49.99",
//     image: "/games/4.jpg",
//   },
//   {
//     id: 8,
//     title: "Assassin's Creed Mirage",
//     price: "€49.99",
//     image: "/games/4.jpg",
//   },
// ];

const games = [
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
const Index: React.FC = () => {
  return (
    // <div className="min-h-screen bg-[#0f0f0f] text-white px-10 py-10">
    //   <div className="flex justify-between items-center mb-6">
    //     {/* LEFT TITLE */}
    //     <h2 className="text-2xl font-bold">Games to discover</h2>

    //     {/* RIGHT CONTROLS */}
    //     <div className="flex items-center gap-4">
    //       {/* DOTS */}
    //       <div className="flex items-center gap-1 mr-2">
    //         <span className="w-2 h-2 rounded-full bg-white/70"></span>
    //         <span className="w-2 h-2 rounded-full bg-white/20"></span>
    //       </div>

    //       {/* ARROWS */}
    //       <button className="swiper-button-prev w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10">
    //         ←
    //       </button>

    //       <button className="swiper-button-next w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10">
    //         →
    //       </button>
    //     </div>
    //   </div>

    //   {/* SWIPER */}
    //   <Swiper
    //     centeredSlides={false}
    //     modules={[Navigation, Pagination]}
    //     pagination={{
    //       clickable: true,
    //       dynamicBullets: true,
    //     }}
    //     navigation={{
    //       prevEl: ".swiper-button-prev",
    //       nextEl: ".swiper-button-next",
    //     }}
    //     slidesPerView={"auto"}
    //     spaceBetween={20}
    //     grabCursor={true}
    //   >
    //     {games.map((game) => (
    //       <SwiperSlide key={game.id} className="!w-auto">
    //         <GameCard {...game} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>

    <section className="mt-[64px]">
      <div className="flex justify-between items-center py-[24px]">
        <h2 className="text-2xl text-[hsla(0,0%,100%,0.975)] font-bold">
          Games to discover
        </h2>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>

          <div className="flex items-center gap-1 text-white">
            <button className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M31.897 1.569a2 2 0 0 1 .034 2.828L12.795 24l19.136 19.603a2 2 0 1 1-2.862 2.794l-20.5-21a2 2 0 0 1 0-2.794l20.5-21a2 2 0 0 1 2.828-.034"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <button className="cursor-pointer w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M16.62 1.552a2 2 0 0 1 2.828.069l20 21a2 2 0 0 1 0 2.758l-20 21a2 2 0 1 1-2.896-2.758L35.238 24 16.552 4.38a2 2 0 0 1 .069-2.828"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
                  <span className="text-white font-bold text-sm">
                    {game.price}
                  </span>

                  <button className="text-xs px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
