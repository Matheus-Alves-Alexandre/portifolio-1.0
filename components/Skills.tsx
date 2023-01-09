import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
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
      className="h-screen flex flex-col mr-5 ml-5 relative text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly items-center"
    >
      <h3 className="absolute   top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        Skill
      </h3>
      <h3 className=" absolute top-36 uppercase traking-[3px] text-gray-500 text-sm">
        Hover over skill for a currency proficiency
      </h3>
      <div className="mt-20 grid grid-cols-4 gap-5 ">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
