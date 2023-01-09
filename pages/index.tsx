import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experiences from "../components/Experiences";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen  snap-y snap-mandatory  overflow-x-hidden overflow-y-scroll z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#530000]
    "
    >
      <Header />

      {/*      <div className="snap-center"> */}
      <section id="Hero" className="">
        <Hero />
      </section>
      <section id="About" className="">
        <About />
      </section>
      <section id="Experience" className="">
        <Experiences />
      </section>
      <section id="Skill" className="mt-52 mb-10">
        <Skills />
      </section>
      <section id="Projects" className="mt-52 mb-10">
        <Projects />
      </section>
      <section id="ContactMe" className="mt-52 mb-10">
        <ContactMe />
      </section>
    </div>
    /* contact me */
  );
};

export default Home;
