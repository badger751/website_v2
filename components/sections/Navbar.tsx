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
      <HoveredLinks href="/">Home</HoveredLinks>
      <HoveredLinks href="/soon">Videos</HoveredLinks>
      <HoveredLinks href="/soon">News</HoveredLinks>
      <HoveredLinks href="/soon">Live</HoveredLinks>
      </Menu>
    </div>
  );
}
