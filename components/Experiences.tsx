import React from "react";

import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";

type Props = {};

export default function Experiences({}: Props) {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      className="h-screen  flex flex-col  relative text-center md:text-center md:flex-row max-w-7xl px-18 justify-evenly items-center "
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full mt-10   flex space-x-5 overflow-x-scroll p-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4a0f0fac]/80">
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
      </div>
    </motion.div>
  );
}
