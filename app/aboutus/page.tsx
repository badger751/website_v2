"use client";

import Footer from "@/components/sections/footer";
import NavbarDemo from "@/components/sections/Navbar";
import { AnimatedTestimonials } from "@/components/ui/testes";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d_card";

export default function AboutUs() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
    },
  ];
  return (
    <div className="bg-customYellow min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full">
        <NavbarDemo />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-start w-full max-w-5xl px-6 py-16">
        {/* "About Us" Header */}
        <h1 className="text-9xl font-light text-openSansLight mb-8 text-center text-black">
          About Us
        </h1>

        {/* Lorem Ipsum Paragraph */}
        <p className="prose text-openSansRegular text-center max-w-3xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          venenatis euismod tortor, eget tincidunt arcu suscipit sit amet.
          Suspendisse nec suscipit ligula. Integer imperdiet, lectus sit amet
          luctus sodales, ipsum sapien venenatis erat, vel accumsan libero nulla
          vel mauris. Nullam eget orci ligula. Vivamus ac ligula vel leo
          fermentum facilisis a vitae neque.
        </p>

        {/* Image Card Grid */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
        <CardContainer className="inter-var">
  <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
    <CardItem
      translateZ="100"
      rotateX={20}
      rotateZ={-10}
      className="w-full mt-4"
    >
      <Image
        src="https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z"
        height="1000"
        width="1000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <CardItem
      translateZ="50"
      className="text-xl font-bold text-neutral-600 dark:text-white"
    >
      Make things float in air
    </CardItem>
    <CardItem
      as="p"
      translateZ="60"
      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
    >
      Hover over this card to unleash the power of CSS perspective
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      {/* Phone Icon */}
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.1 19.39 19.39 0 01-6-6 19.86 19.86 0 01-3.11-8.63A2 2 0 014.08 2h3a2 2 0 012 1.72 12.74 12.74 0 00.7 2.81 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.74 12.74 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        Phone
      </CardItem>
      {/* WhatsApp Icon */}
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16.72 12.75A8.1 8.1 0 0112.75 16l-.93.14-1.53-.91a.9.9 0 00-1.28.28l-.93 1.53a.91.91 0 01-1.27.26c-1.86-1.13-3.21-2.48-4.34-4.34a.9.9 0 01.27-1.27l1.53-.93a.9.9 0 00.27-1.28l-.92-1.54.13-.92a8.09 8.09 0 013.24-3.24l.92-.13 1.54.92a.9.9 0 001.27-.27l.93-1.53a.9.9 0 011.27-.26c1.86 1.13 3.21 2.48 4.34 4.34a.9.9 0 01-.27 1.27l-1.53.93a.9.9 0 00-.27 1.28z" />
        </svg>
        WhatsApp
      </CardItem>
      {/* Gmail Icon */}
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
        Gmail
      </CardItem>
    </div>
  </CardBody>
</CardContainer>


<CardContainer className="inter-var">
  <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
    <CardItem
      translateZ="100"
      rotateX={20}
      rotateZ={-10}
      className="w-full mt-4"
    >
      <Image
        src="https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z"
        height="1000"
        width="1000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <CardItem
      translateZ="50"
      className="text-xl font-bold text-neutral-600 dark:text-white"
    >
      Make things float in air
    </CardItem>
    <CardItem
      as="p"
      translateZ="60"
      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
    >
      Hover over this card to unleash the power of CSS perspective
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      {/* Phone Icon */}
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.1 19.39 19.39 0 01-6-6 19.86 19.86 0 01-3.11-8.63A2 2 0 014.08 2h3a2 2 0 012 1.72 12.74 12.74 0 00.7 2.81 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.74 12.74 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        Phone
      </CardItem>
      {/* WhatsApp Icon */}
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16.72 12.75A8.1 8.1 0 0112.75 16l-.93.14-1.53-.91a.9.9 0 00-1.28.28l-.93 1.53a.91.91 0 01-1.27.26c-1.86-1.13-3.21-2.48-4.34-4.34a.9.9 0 01.27-1.27l1.53-.93a.9.9 0 00.27-1.28l-.92-1.54.13-.92a8.09 8.09 0 013.24-3.24l.92-.13 1.54.92a.9.9 0 001.27-.27l.93-1.53a.9.9 0 011.27-.26c1.86 1.13 3.21 2.48 4.34 4.34a.9.9 0 01-.27 1.27l-1.53.93a.9.9 0 00-.27 1.28z" />
        </svg>
        WhatsApp
      </CardItem>
      {/* Gmail Icon */}
      <CardItem
        translateZ={20}
        as="button"
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
        Gmail
      </CardItem>
    </div>
  </CardBody>
</CardContainer>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
      {/* Footer */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
