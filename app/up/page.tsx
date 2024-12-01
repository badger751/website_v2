"use client";
import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/betnto-grid";
import fetchData from "@/lib/fetchdata";
import { useRouter } from "next/navigation";

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
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={item.id} // Use item.id as the key
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          href={item.href}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          onClick={() => handleItemClick(item.id)} // Add click handler
        />
      ))}
    </BentoGrid>
  );
}
