"use client";
import Image from "next/image";
import { TypewriterEffect, TypewriterEffectSmooth } from "../ui/typewriter";
import { FlipWords } from "../ui/flip-words";
import { Roboto } from "next/font/google";

const robotoThin = Roboto({ weight: "100", subsets: ["latin"] });
const robotoRegular = Roboto({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  const words = [
    {
      text: "SR",
      className: `text-red-700 dark:text-blue-500 ${robotoThin.className}`,
    },
    {
      text: "Samachar",
      className: `text-white-700 dark:text-blue-500 ${robotoThin.className}`,
    },
  ];
  const tag = ["Satya", "Saral", "Nispaksh"];

  return (
    <div className="relative min-h-screen bg-customYellow flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold flex flex-col items-center">
          <TypewriterEffect words={words} />
          <span
            className={`block text-2xl text-gray-500 mt-6 ${robotoRegular.className}`}
          >
            <FlipWords words={tag} />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
