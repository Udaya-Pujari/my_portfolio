import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      suppressHydrationWarning={true}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        My Projects
      </motion.h2>
      {/* <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        jgsgf sjfjsfjsgf hfjsgfjsgfs fsjfgsfgjshf jfhsfjshfs shfjshfjshfj
        shfjshfjhsjf shfjshfjshjfs jsjsfjhfj shfjshjfh sfjshfjshf fjsfjshf
        sfjshfjsh shfjshfjsh hsfjshjfhs
      </p> */}
      <div className="grid grid-cols-auto my-10 gap-5  dark:text-black">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative  group border-2 border-blue-600"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white border-2 border-orange-600 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div className="">
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-sky-400 transition">
                {/* <Image src={assets.send_icon} alt="send icon" className="w-5" /> */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
