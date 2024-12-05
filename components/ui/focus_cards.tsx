"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Card = {
  title: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onCardClick,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onCardClick: (src: string) => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onCardClick(card.src)}
      className={cn(
        "relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-all duration-300 ease-out cursor-pointer", // Removed rounded-lg here
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* 9:16 Aspect Ratio Container */}
      <div className="relative w-full h-0 pb-[177.78%] overflow-hidden rounded-lg"> {/* Apply overflow-hidden and rounded here */}
        <video
          src={card.src}
          muted
          autoPlay
          loop
          className="object-cover absolute inset-0 w-full h-full rounded-lg" // Apply rounded-lg directly to the video
        ></video>
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 rounded-lg", // Apply rounded-lg here as well
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({
  cards,
  onCardClick,
}: {
  cards: Card[];
  onCardClick: (src: string) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}
