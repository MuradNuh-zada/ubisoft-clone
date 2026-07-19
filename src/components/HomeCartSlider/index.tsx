import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import  { sliderGames } from "@/data/slidergames";
import "swiper/css";
import "./homecartslider.css";
import GameCard from "./GameCard";

const Index: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activePage, setActivePage] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const totalPages = Math.ceil(sliderGames.length / 6);
  return (
    <section className="my-[64px]">
      <div className="flex justify-between items-center py-[24px]">
        <h2 className="text-2xl text-[hsla(0,0%,100%,0.975)] font-bold">
          Games to discover
        </h2>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activePage === index ? "w-4 bg-white" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1 text-white">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition
                ${isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer  hover:bg-white/10"}
              `}
            >
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

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition
                  ${isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100 hov cursor-pointer hover:bg-white/10"}
                `}
            >
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

      <Swiper
        slidesPerView={6}
        spaceBetween={16}
        modules={[Navigation]}
        slidesPerGroup={6}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setActivePage(swiper.snapIndex);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {sliderGames.map((sliderGames, i) => (
          <SwiperSlide key={i}>
            <GameCard games={sliderGames} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
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
  );
};

export default Index;
