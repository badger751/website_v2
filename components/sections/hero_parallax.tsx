"use client";
import React from "react";
import images from 'next/image';
import { HeroParallax } from "@/components/ui/hero-parallel";
import '@/public/images/image_1.jpg';
import '@/public/images/image_2.jpg';
import '@/public/images/image_3.jpg';
import '@/public/images/image_4.jpg';
import '@/public/images/image_5.jpg';
import '@/public/images/image_6.jpg';
export default function HeroParallaxDemo() {
  
  return(
    <div className="bg-customYellow" >
    <HeroParallax products={products} />
    </div>
  ) ;
}
export const products = [
  {
    title: "Moonbeam",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Cursor",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Rogue",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },

  {
    title: "Editorially",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Editrix AI",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Pixel Perfect",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },

  {
    title: "Algochurn",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Aceternity UI",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Tailwind Master Kit",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "SmartBridge",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Renderwork Studio",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },

  {
    title: "Creme Digital",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Golden Bells Academy",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "Invoker Labs",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
  {
    title: "E Free Invoice",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/SR%20samachar%20Logo%202.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU1Igc2FtYWNoYXIgTG9nbyAyLmpwZyIsImlhdCI6MTczMzI0MzcyMSwiZXhwIjoxNzY0Nzc5NzIxfQ.PzQwcFmF22Iq8TAI5D9TJMWsWd6Bdhv959SZZimg9Ls&t=2024-12-03T16%3A35%3A21.358Z",
  },
];
