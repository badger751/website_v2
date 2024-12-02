"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-customYellow"
      style={{ fontFamily: "Open Sans, Light, 300" }}
    >
      <h1 className="text-9xl text-center mb-4">Coming Soon</h1>
      <p
        className="text-xl cursor-pointer"
        onClick={handleGoBack}
      >
        Press here to go back
      </p>
    </div>
  );
}
