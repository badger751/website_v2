"use client"
import Image from 'next/image';
import { TypewriterEffect, TypewriterEffectSmooth } from "../ui/typewriter";

const Hero = () => {
  const words = [
    {
      text : "SR",
      classname : "text-red-700",
    },

    {
      text: "Samachar",
      className: "text-red-700 dark:text-blue-500",
    }
  ];
  const tag = [


  ];

  return (
    <div>
      <div className="relative min-h-screen bg-base-200">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero_back.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay bg-opacity-80 bg-black absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content absolute inset-0 flex items-center justify-center">
        <div className="max-w-xl">
  <h1 className="mb-5 text-5xl md:text-6xl lg:text-9xl font-bold flex flex-col md:flex-row items-center justify-center">
     <TypewriterEffect words={words} />
    <span className="block text-lg text-gray-500 mt-2">great</span>
  </h1>
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;