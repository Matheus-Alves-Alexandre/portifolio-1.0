import Link from "next/link";
import React from "react";

import { Cursor, useTypewriter, Typewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<MatheusAlexandre />",
      "Programmer",
      "Looking to win my MVP",
      "npm install duck",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center text-center justify-center overflow-hidden">
      <BackGroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto justify-center"
        src="https://avatars.githubusercontent.com/u/57276138?v=4"
        alt=""
      />
      <div className="z-20">
        <h1>
          <div className="">
            <h2 className=" text-sm uppercase text-gray-500 tracking-[10px] hover:text-[#9f1b03]  animate-pulse transition-all ">
              Developer fullStack
            </h2>
            <div className="mt-4">
              <span className="text-xl ">{text}</span>
              <Cursor cursorColor="#9f1b03" />
            </div>
          </div>
        </h1>

        <div className="pt-5">
          <Link href="#About">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#Experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#Skill">
            <button className="heroButton">Skill</button>
          </Link>
          <Link href="#Projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#ContactMe">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
