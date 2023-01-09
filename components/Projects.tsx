import React from "react";

import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
        Projects
      </h3>

      <div className="w-full  relative flex  overflow-x-scroll  snap-x snap-mandatory  z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#4a0f0fac]/80">
        {/* 
      <div className=" p-50 relative w-full  flex overflow-x-scroll overflow-x-hidden snap-x snap-mandatory z-20  "> */}
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex  flex-col space-y-5 items-center justify-center p-20 "
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="w-[200px] h-[200px] mt-20"
              src="https://avatars.githubusercontent.com/u/57276138?v=4"
              alt=""
            />
            <div className="space-y-10 px-0 ">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#9f1b03] hover:animate-pulse">
                  Case Study {i + 1} of {projects.length}
                </span>
              </h4>

              <p className="text-lg text-center font-extralight ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                consequuntur neque, sunt ratione quis odio perferendis aut.
                Facere, explicabo dolorem? Incidunt eveniet neque ut, deleniti
                optio cupiditate at dignissimos doloremque!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#9f1b03]/30 h-[600px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
