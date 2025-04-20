import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  const getExperience = () => {
    const startDate = new Date("2022-08-18"); // Set your actual start date

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();

    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;

      months += 12;
    }

    if (months === 0) {
      return `${years} year${years !== 1 ? "s" : ""}`;
    }

    return `${years} year${years !== 1 ? "s" : ""} ${months} month${
      months !== 1 ? "s" : ""
    }`;
  };

  return (
    <div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      suppressHydrationWarning={true}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            // src={assets.user_image}
            src={assets.developers}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <div className="flex-1">
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 max-w-2xl font-Ovo text-start text-sm"
          >
            Hi, I'm Udaya Pujari, a passionate and versatile Frontend Developer
            with <strong className="text-orange-500">{getExperience()}</strong>{" "}
            of professional experience in building responsive, user-friendly web
            applications. I specialize in React.js, Tailwind CSS, and modern
            JavaScript (ES6+), with hands-on experience working in Agile
            environments and cross-functional teams. My expertise lies in
            crafting intuitive UI components, integrating APIs, and optimizing
            performance for production-ready apps. I’ve contributed to financial
            and tax processing platforms used by global clients. I enjoy
            refining UI/UX workflows, implementing secure data practices, and
            automating repetitive tasks to boost team productivity.
          </motion.p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80 text-center">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-full cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
