import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Fade-in effect for the grid
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: string | React.ReactNode; // Accept both string (image URL) and React.ReactNode
  href?: string;
  onClick?: () => void;
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-customYellow border border-transparent flex flex-col cursor-pointer",
        className
      )}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image/Icon Section */}
      <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4">
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={typeof title === "string" ? title : "Icon"}
            className="w-full h-full object-cover"
          />
        ) : (
          icon
        )}
      </div>

      {/* Header Section */}
      {header && <div className="mb-2">{header}</div>}

      {/* Title and Description */}
      <div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </motion.div>
  );
};