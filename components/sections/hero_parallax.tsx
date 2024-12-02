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
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Cursor",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Rogue",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },

  {
    title: "Editorially",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Editrix AI",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Pixel Perfect",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },

  {
    title: "Algochurn",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Aceternity UI",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Tailwind Master Kit",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "SmartBridge",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Renderwork Studio",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },

  {
    title: "Creme Digital",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Golden Bells Academy",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "Invoker Labs",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
  {
    title: "E Free Invoice",
    link: "/soon",
    thumbnail:
      "https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z",
  },
];
