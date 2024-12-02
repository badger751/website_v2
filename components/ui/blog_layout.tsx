"use client";

import React, { useEffect } from "react";
import Lenis from "lenis"; // Import Lenis
import NavbarDemo from "@/components/sections/Navbar";
import Footer from "../sections/footer";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  header: string;
  icon: string;
  href: string;
}

const BlogLayout = ({ post }: { post: BlogPost }) => {
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
    <div className="bg-customYellow min-h-screen">
      <NavbarDemo />
      <div className="container mx-auto px-4 pt-24">
        <div className="lg:flex lg:justify-start lg:space-x-8">
          <div className="lg:w-1/2 w-full">
            <h2
              className="text-5xl font-light text-black mb-8"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {post.title}
            </h2>
            {/* Updated Image Box */}
            <div className="mb-8 flex justify-start">
              <img
                src={post.icon}
                alt="Icon"
                className="w-full max-w-lg h-auto rounded-lg"
              />
            </div>
            {/* Updated Description */}
            <div
              className="text-left text-2xl text-black lg:pr-8 leading-relaxed mb-8"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <p>{post.description}</p>
            </div>
            <a
              href={post.href}
              className="text-blue-500 hover:underline mt-8 block text-left"
            >
              Read More
            </a>
          </div>
          {/* Placeholder for right-side content on large screens */}
          <div className="hidden lg:block lg:w-1/2">
            {/* Future content can go here */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BlogLayout;
