import React, { useEffect, useState } from "react";

import bannerImg from "../../assets/JSGuidelearntoprofessional.png";
import bannerImg1 from "../../assets/EffectiveJs.png";
import bannerImg2 from "../../assets/YouDon'tKnowJS.jpg";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "@/global.css";

const Banner = () => {
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
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">
        {/* Gradient background animated */}
        {/* <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-70 blur-2xl" /> */}
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-[#808570] via-[#000000] to-[#bcc4a1] opacity-70 blur-2xl" />

        {/* Content on top */}
        <div className="relative z-10 p-10 rounded-xl backdrop-blur-md bg-white/10 shadow-xl m-10">
          {/* <h1 className="text-4xl font-bold text-center mb-4">
            🚀 Cool Animated Gradient
          </h1>
          <p className="text-center text-lg text-white/80">
            This background moves & glows like a neon light.
          </p> */}
          <div className="flex flex-col md:flex-row-reverse px-15 items-center py-16 gap-12 font-primary text-4xl text-bold">
            <div className="flex md:w-1/2 max-w-fit items-center md:justify-end">
              <img src={bannerImg2} alt="" className="object-cover w-40" />
            </div>

            <div className="flex md:w-1/2 max-w-fit items-center md:justify-end">
              <img src={bannerImg} alt="" className="object-cover w-45" />
            </div>

            <div className="flex md:w-1/2 max-w-fit items-center md:justify-end">
              <img src={bannerImg1} alt="" className="object-cover w-50" />
            </div>

            <div className="w-full">
              <h1 className="md:text-3xl text-2xl mb-7 font-bold">
                Hot Off the Press
              </h1>
              <p className="mb-10 text-lg">
                Update your reading list to stay on trend with the latest books
                everyone's talking about! Whether it's a dramatic novel or a
                thought-provoking documentary, get ready because you won't be
                able to stop reading!
              </p>
              <button className="bton btn-primary text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
