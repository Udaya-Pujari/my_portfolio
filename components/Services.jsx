import { assets, serviceData, skillsData, skillsDatas } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      suppressHydrationWarning={true}
    >
      {/* <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4> */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        My Skills
      </motion.h2>
      {/* <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        jgsgf sjfjsfjsgf hfjsgfjsgfs fsjfgsfgjshf jfhsfjshfs shfjshfjshfj
        shfjshfjhsjf shfjshfjshjfs jsjsfjhfj shfjshjfh sfjshfjshf fjsfjshf
        sfjshfjsh shfjshfjsh hsfjshjfhs
      </p> */}

      {/* <div className="grid grid-cols-auto gap-6 my-10">
        {skillsDatas.map(({ icon, title }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
          </div>
        ))}
      </div> */}

      {/* <Marquee speed={50} gradient={false} className="my-10">
        <ul className="flex items-center gap-6">
          {skillsDatas.map(({ icon, title }, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center w-24 h-24 border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-transform duration-500"
            >
              <Image src={icon} alt={title} className="w-8 mb-2" />
              <span className="text-sm text-center text-gray-700">{title}</span>
            </li>
          ))}
        </ul>
      </Marquee> */}

      <Marquee speed={50} gradient={false} className="my-10">
        <ul className="flex items-center gap-6 px-6">
          {skillsDatas.map(({ icon, title }, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center w-24 h-24 border border-orange-600 rounded-full cursor-pointer 
              hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
              transition-transform duration-500"
            >
              {/*  hover:bg-lightHover hover:-translate-y-1  */}
              <Image src={icon} alt={title} className="w-8 mb-2" />
              <span className="text-sm text-center text-gray-700 dark:text-white">
                {title}
              </span>
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};

export default Services;
