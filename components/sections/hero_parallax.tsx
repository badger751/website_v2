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
    link: "/up",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/images/image_2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/images/image_3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/images/image_4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/images/image_5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/images/image_1.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/images/image_6.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/images/image_1.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/images/image_3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/images/image_4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "/images/image_5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "/images/image_6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/images/image_2.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/images/image_6.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/images/image_1.png",
  },
];
