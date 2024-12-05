"use client";

import { FocusCards } from "@/components/ui/focus_cards";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import NavbarDemo from "@/components/sections/Navbar";
import Footer from "@/components/sections/footer";

export default function FocusCardsDemo() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const cards = [
    { title: "Forest Adventure", src: "/videos/video_7.mp4" },
    { title: "Valley of Life", src: "/videos/video_2.mp4" },
    { title: "Sala Behta Hi Jayega", src: "/videos/video_3.mp4" },
    { title: "Camping Is for Pros", src: "/videos/video_4.mp4" },
    { title: "The Road Not Taken", src: "/videos/video_5.mp4" },
    { title: "The First Rule", src: "/videos/video_7.mp4" },
  ];

  const closeVideoModal = () => setSelectedVideo(null);

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

    return () => lenis.destroy();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col relative"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/logo2.jpg')", // Update path if needed
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-28">
          <NavbarDemo />
        </div>
        <FocusCards cards={cards} onCardClick={(src) => setSelectedVideo(src)} />
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeVideoModal}
          >
            <div
              className="relative w-full max-w-3xl bg-black overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full max-h-[80vh] aspect-video rounded-lg"
              ></video>
              <button
                onClick={closeVideoModal}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}
