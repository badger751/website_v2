"use client";
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/betnto-grid";
import fetchData from "@/lib/fetchdata";
import { useRouter } from "next/navigation";
import Footer from "@/components/sections/footer";
import NavbarDemo from "@/components/sections/Navbar";

interface Item {
  id: string; // Added `id` field to match the post structure
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
  href: string;
}

export default function BentoGridDemo() {
  const [items, setItems] = useState<Item[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchDataFromSupabase = async () => {
      const data = await fetchData();
      setItems(data as Item[]); // Explicitly type the data
    };

    fetchDataFromSupabase();
  }, []);

  const handleItemClick = (id: string) => {
    router.push(`/blog/${id}`); // Navigate to the blog page with the post ID
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-customYellow overflow-x-hidden">
      {/* Navbar */}
      <div className="mb-8">
        <NavbarDemo />
      </div>

      {/* Heading Title */}
      <h1 className="text-4xl font-light text-center mb-8" style={{ fontFamily: 'Open Sans', fontWeight: 300 }}>
      </h1>

      {/* BentoGrid */}
      <div className="flex-grow mb-8">
        <BentoGrid className="max-w-9xl mx-auto h-full">
          {items.map((item, i) => (
            <BentoGridItem
              key={item.id} // Use item.id as the key
              title={item.title}
              header={item.header}
              icon={item.icon}
              href={item.href}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              onClick={() => handleItemClick(item.id)} // Add click handler
            />
          ))}
        </BentoGrid>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
