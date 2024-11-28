"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Live">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="States">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://qjzomytkedaxixmlxiku.supabase.co/storage/v1/object/sign/News_post/Screenshot%20from%202024-11-22%2001-27-55.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZXdzX3Bvc3QvU2NyZWVuc2hvdCBmcm9tIDIwMjQtMTEtMjIgMDEtMjctNTUucG5nIiwiaWF0IjoxNzMyNzkzOTI2LCJleHAiOjE3NjQzMjk5MjZ9.iCY9KNRM5XugJPG-8RknO2jwGOzzNH8VgrMKBl_4Qjg&t=2024-11-28T11%3A38%3A46.213Z"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Categories">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Health</HoveredLink>
            <HoveredLink href="/individual">Lifestyle</HoveredLink>
            <HoveredLink href="/team">Dharm</HoveredLink>
            <HoveredLink href="/enterprise">Bollywood</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
