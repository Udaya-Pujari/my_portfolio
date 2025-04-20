"use client";

import Services from "../components/Services";
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // 🔥 New state to avoid hydration error
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
