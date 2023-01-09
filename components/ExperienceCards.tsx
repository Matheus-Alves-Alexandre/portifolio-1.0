import React from "react";

import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCards({}: Props) {
  return (
    <article className="flex  mt-[250px]  flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[900px] snap-center  bg-[#292929] p-10 hover:bg-[#4a0f0fac] hover:transition-all">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        src="https://avatars.githubusercontent.com/u/57276138?v=4"
        className=" w-32 h-32 rounded-full xl:w[200px] xl:h[200px] object-cover object-center "
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Cargo</h4>
        <p className="text-2xl font-bold mt-1">Empresa</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/57276138?v=4"
            alt=""
          />{" "}
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/57276138?v=4"
            alt=""
          />{" "}
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/57276138?v=4"
            alt=""
          />{" "}
          <img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/57276138?v=4"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-500">
          started work ... ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg font-extralight">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            enim ut cupiditate fuga quasi qui fugiat praesentium incidunt
            beatae. Temporibus accusamus laborum dignissimos modi culpa sed
            aperiam voluptate animi necessitatibus.
          </li>
          <li>sumary points</li>
          <li>sumary points</li>
          <li>sumary points</li>
          <li>sumary points</li>
        </ul>
      </div>
    </article>
  );
}
