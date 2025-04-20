import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";

const Header = () => {
  const getExperience = () => {
    const startDate = new Date("2022-08-18");
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years}+ `;
  };

  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
      suppressHydrationWarning={true}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile} alt="" className="rounded-full w-32" />
        {/* <Image src={assets.coder} alt="" className="rounded-full w-32" /> */}
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'am Udaya Pujari
        {/* <Image src={assets.hand_icon} alt="" className='rounded-full w-32'/> */}
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[-66px] font-Ovo text-indigo-500"
      >
        {/* Frontend Web Developer */}
        <ReactTyped
          strings={[
            "Software Developer.",
            "Web Developer.",
            "MERN Stack Developer.",
          ]}
          typeSpeed={80}
          backSpeed={80}
          loop
        />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        A passionate Frontend Developer with{" "}
        <strong className="text-orange-500"> {getExperience()} years </strong>of
        experience in building responsive, modern web applications. I love
        creating clean, user-focused interfaces that bring ideas to life.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        {/* <motion.a
          href="/sample-resume.pdf"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a> */}
      </div>
    </div>
  );
};

export default Header;
