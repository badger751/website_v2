"use client"
import images from 'next/image'
import Hero from "@/components/sections/hero";
import { MenuItem } from '@/components/ui/navbar';
import NavbarDemo from '@/components/sections/Navbar';
import HeroParallaxDemo from '@/components/sections/hero_parallax';

export default function Home(){
  return(
<div>
  <NavbarDemo/>
  <Hero/>
  <HeroParallaxDemo/>
  
</div>
  )
}



