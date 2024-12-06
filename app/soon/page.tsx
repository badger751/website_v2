"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-customYellow overflow-x-hidden">
      <h1 className="text-6xl md:text-4xl lg:text-6xl text-center">Coming Soon</h1>
      <p
        className="text-lg md:text-base lg:text-lg text-center cursor-pointer"
        onClick={handleGoBack}
      >
        Press here to go back
      </p>
    </div>
  );
}