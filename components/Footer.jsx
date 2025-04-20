import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20" suppressHydrationWarning={true}>
      <div className="text-center">
        {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/> */}
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-36 mx-auto mb-2 text-2xl cursor-pointer  text-black dark:text-white"
        >
          {/* Udaya Pujari. */}
          <strong className="text-orange-500">U</strong>daya {"       "}
          <strong className="text-orange-500">P</strong>ujari.
        </motion.span>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-max flex items-center gap-2 mx-auto"
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          udaysp194@gmail.com
        </motion.div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> © {new Date().getFullYear()} Udaya Pujari. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Udaya-Pujari-194">
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Udaya-Pujari">
              <FaGitAlt size={25} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/udaya-pujari-839a1a1a2/"
            >
              {/* LinkedIn */}
              <FaLinkedin size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
