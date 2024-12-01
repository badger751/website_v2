"use client"
import images from 'next/image'
import Hero from "@/components/sections/hero";
import { MenuItem } from '@/components/ui/navbar';
import NavbarDemo from '@/components/sections/Navbar';
import HeroParallaxDemo from '@/components/sections/hero_parallax';
import Footer from '@/components/sections/footer';

export default function Home(){
  return(
<div className='bg-white'>
  <NavbarDemo/>
  <Hero/>
  <HeroParallaxDemo/>
  <Footer/>
</div>
  )
}



