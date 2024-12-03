"use client";

import { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Lenis from "lenis"; // Import Lenis
import Hero from "@/components/sections/hero";
import NavbarDemo from "@/components/sections/Navbar";
import HeroParallaxDemo from "@/components/sections/hero_parallax";
import Footer from "@/components/sections/footer";
import Script from "next/script";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below the screen
    visible: { opacity: 1, y: 0 }, // Fade in and slide to position
  };

  const transition = { duration: 0.5, ease: "easeInOut" }; // Shared transition config

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Control animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true, // Enable smooth scrolling
    });

    // Animation frame for Lenis
    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} // Page-level fade-in
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.2 }} // Delay for navbar
      >
        <NavbarDemo />
      </motion.div>

      <motion.div
        id="hero"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.4 }} // Slight delay for hero
      >
        <Hero />
      </motion.div>

      <motion.div
        id="parallax"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.6 }} // Slight delay for parallax
      >
        <HeroParallaxDemo />
      </motion.div>

      <motion.div
        id="footer"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.8 }} // Slight delay for footer
      >
        <Footer />
      </motion.div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5865247638883812"
     crossOrigin="anonymous"></script>
    </motion.div>
  );
}
