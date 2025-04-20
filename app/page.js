"use client";

import Services from "../components/Services";
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
// import AnimatedCursor from "react-animated-cursor"
import dynamic from "next/dynamic";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // 🔥 New state to avoid hydration error

  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  useEffect(() => {
    // Wait until component is mounted (client only)
    setMounted(true);

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  if (!mounted) return null;

  return (
    <>
      <div>
        <AnimatedCursor
          innerSize={8}
          outerSize={25}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "orange",
          }}
          outerStyle={{
            border: "2px solid green",
          }}
        />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Services isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}
