// app/Grid.tsx
import React from "react";

const cards = [
  { id: 1, title: "Card 1", description: "This is the first card." },
  { id: 2, title: "Card 2", description: "This is the second card." },
  { id: 3, title: "Card 3", description: "This is the third card." },
  { id: 4, title: "Card 4", description: "This is the fourth card." },
];

const Grid: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col justify-between"
            role="region"
            aria-label={`Card ${card.id}`}
          >
            <div className="text-4xl font-bold text-white mb-4 text-center">
              {card.title}
            </div>
            <div className="text-gray-300 text-sm text-center">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
