"use client"
import images from 'next/image'
import Hero from "@/components/sections/hero";
import { HeroParallaxDemo } from "@/components/sections/hero_parallax";
import { MenuItem } from '@/components/ui/navbar';
import { NavbarDemo } from '@/components/sections/Navbar';
export default function Home(){
  return(
<div>
  <NavbarDemo/>
  <Hero/>
  <HeroParallaxDemo/>
  
</div>
  )
}



