"use client";
import React, { useState } from "react";
import { HoveredLink, HoveredLinks, Menu, MenuItem, ProductItem } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

export default function NavbarDemo() {
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
      <HoveredLinks href="/hobby">Home</HoveredLinks>
      <HoveredLinks href="/hobby">Live</HoveredLinks>
        <MenuItem setActive={setActive} active={active} item="States">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Uttar Pradesh</HoveredLink>
            <HoveredLink href="/individual">Delhi</HoveredLink>
            <HoveredLink href="/team">Bihar</HoveredLink>
            <HoveredLink href="/enterprise">Madhya pradesh</HoveredLink>
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
