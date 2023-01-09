import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Cursor } from "react-simple-typewriter";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:m.alexandre016@gmail.com?subject=${formData.subject}&body=Hi My name is ${formData.name}. ${formData.message}(${formData.email})`;
  };

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
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-3xl font-semibold text-center ">
          I Have a got just what you need.
          <br />
          <span className="text-2xl  font-light text-center  decoration-[#9f1b03]/50 underline  ">
            Lests talk.
            <Cursor cursorColor="#9f1b03" />
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#9f1b03] h-7 w-7 animate-pulse" />
            <p className="text-2xl">(11) 968737265</p>
          </div>
          {/*   endereço  */}
          {/*     <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">11 968737265</p>
          </div> */}
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#9f1b03] h-7 w-7 animate-pulse" />
            <p className="text-2xl">m.alexandre016@gmail.com</p>
          </div>

          {/*   <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea placeholder="Message" className="contactInput" />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submmit
            </button>
          </form>
         */}
        </div>
      </div>
    </motion.div>
  );
}
