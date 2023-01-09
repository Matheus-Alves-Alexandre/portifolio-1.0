import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
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
      className="flex flex-col mr-5 ml-5 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly items-center"
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <br />

      <motion.img
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
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/57276138?v=4"
        className="-mb-20  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-95"
      />

      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">My Background</h4>
        <p className="font-thin">
          My name is Matheus Alexandre 😎, Im 23 years old and I was born in São
          Paulo. Currently, I live with my parents, but I seek my independence.
          To achieve this, learn as much as possible so that I can become an
          excellent developer, an area I fell in love with ❣️.
          <span className="font-thin">
            My dream is to one day have the opportunity to win an MVP 🏆 from
            microsoft and I run every day to achieve it, I know it s easier said
            than done, but if I don t dream 💭 then my life won t have a purpose
            . To achieve my goal, I intend to set up a youtube channel with tips
            for junior programmers and encourage new people to this career.
          </span>
        </p>
      </div>
    </motion.div>
  );
}
