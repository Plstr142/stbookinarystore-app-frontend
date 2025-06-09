import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import events1 from "../../assets/events/DaniDiazDreamover.jpg";
import events2 from "../../assets/events/JackFordBeyondThisPlaceofWrathAndTears.jpg";
import events3 from "../../assets/events/JonMcGoranThePriceofEverything.jpg";
import events4 from "../../assets/events/LauraLippmanMurderTakesAVacation.jpg";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "@/global.css";

const events = [
  {
    id: 1,
    title: "Dani Diaz | Dreamover",
    description:
      "A heartfelt YA graphic novel about two best friends whose first love and shared dreams blur the line between reality and fantasy—until one magical sleepover changes everything.",
    image: events1,
  },
  {
    id: 2,
    title: "Jack Ford | Beyond This Place of Wrath And Tears",
    description:
      "A gripping dual-timeline novel following fearless journalist Lee Carson as she breaks barriers reporting from WWII front lines and uncovers Cold War espionage, blending historical drama and suspense for fans of Kate Quinn and Ariel Lawhon.",
    image: events2,
  },
  {
    id: 3,
    title: "Jon McGoran | The Price of Everything",
    description:
      "A high-octane cyberpunk thriller where elite courier Armand Pierce must outrun his own ruthless Guild after a missing package puts him at the center of a deadly conspiracy that could shatter the post-internet world order.",
    image: events3,
  },
  {
    id: 4,
    title: "Laura Lippman | Murder Takes A Vacation",
    description:
      "Join bestselling author Laura Lippman for a lively discussion of Murder Takes a Vacation, a witty mystery where a Paris river cruise turns deadly and only retired PI Muriel Blossom can crack the case.",
    image: events4,
  },
];

const Featuredevents = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 1],
        opacity: [1, 0.5, 1],
        transition: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop(); // หยุดเมื่อไม่อยู่ใน viewport
    }
  }, [inView, controls]);

  return (
    <>
      <div className="py-16 px-15 bg-[#bcc4a1] border border-transparent rounded-none">
        <h2 className="text-3xl font-semibold mb-6 text-black dark:white">
          Featured Events
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {events.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12 bg-[#bcc4a1]">
                {/* content */}
                <div className="py-4">
                  <Link to={`/events/${item.id}`}>
                    <h3 className="text-lg font-medium hover:text-blue-500 mb-4 dark:text-black">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="w-8 h-[2px] bg-[#808570] mb-5"></div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="h-100 flex items-center justify-center relative overflow-hidden bg-black text-white">
        {/* Gradient background animated */}
        {/* <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-70 blur-2xl" /> */}
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-[#808570] via-[#000000] to-[#bcc4a1] opacity-70 blur-2xl" />

        {/* Content on top */}
        <div className="relative z-10 p-10 rounded-xl backdrop-blur-md bg-white/10 shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-4">
            Elevate Your Brain with Every Page 🧠
          </h1>
          <p className="text-center text-lg text-white/80">
            Find Your Next Obsession Between the Covers
          </p>
        </div>
      </div>

      {/* Cyberpunk Glow */}
      {/* <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-purple-600 opacity-30 blur-3xl" />
        <div className="relative z-10 p-10 rounded-xl bg-white/10 backdrop-blur-md shadow-xl border border-pink-500/30">
          <h1 className="text-4xl font-bold text-pink-400 text-center">
            Cyberpunk Glow
          </h1>
        </div>
      </div> */}

      {/* Liquid Wave */}
      {/* <div className="relative min-h-screen bg-indigo-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold z-10">🌊 Liquid Wave</h1>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="#4f46e5"
            fillOpacity="1"
            d="M0,160L60,170C120,180,240,200,360,208C480,216,600,212,720,197C840,182,960,156,1080,144C1200,132,1320,134,1380,136L1440,138L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div> */}

      {/*  Noise Background Canvas */}
      {/* <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white relative flex items-center justify-center">
        <div className="relative z-10 text-4xl font-bold">
          🖌️ Noise Texture + Gradient
        </div>
      </div> */}

      {/* Glassmorphism */}
      {/* <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 p-10 max-w-md shadow-xl">
          <h1 className="text-3xl font-bold text-white text-center">
            🧊 Glassmorphism
          </h1>
          <p className="text-white/80 mt-4 text-center">
            Soft blur, translucent effect.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Featuredevents;
