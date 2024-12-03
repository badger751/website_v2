import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import NavbarDemo from '@/components/sections/Navbar';
import Hero from '@/components/sections/hero';
import HeroParallaxDemo from '@/components/sections/hero_parallax';
import Footer from '@/components/sections/footer';
import Script from 'next/script';

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5, ease: 'easeInOut' };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white"
    >
      {/* Top Bar */}
      <div className="top-bar fixed top-0 left-0 w-full bg-gray-800 text-white px-4 py-2">
        <span className="marquee">This is a dummy text that is moving!</span>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.2 }}
      >
        <NavbarDemo />
      </motion.div>

      <motion.div
        id="hero"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.4 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        id="parallax"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.6 }}
      >
        <HeroParallaxDemo />
      </motion.div>

      <motion.div
        id="footer"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ ...transition, delay: 0.8 }}
      >
        <Footer />
      </motion.div>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5865247638883812"
        crossOrigin="anonymous"></Script>
    </motion.div>
  );
}